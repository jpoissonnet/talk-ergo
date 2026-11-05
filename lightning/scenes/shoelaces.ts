/*
  Shoelaces — flying laces, like dragons in the "3D Pipes" screensaver's sky.

  Each lace's head flies freely: its heading drifts with a smooth, per-lace
  wander (sums of slow sines), so it draws long S-curves and loops. Two soft
  forces bend that path: one keeps the head inside the stage box, the other
  steers it away from the bodies of other laces (and from its own older body),
  so laces cross in front of / behind each other but rarely touch.
  The body is the head's trail, swept as a tube; the braid texture and the
  tube's twist are stored on the trail, so they travel with the lace.
*/
import {
  BufferAttribute,
  BufferGeometry,
  CanvasTexture,
  DirectionalLight,
  Fog,
  Group,
  HemisphereLight,
  Mesh,
  MeshStandardMaterial,
  RepeatWrapping,
  SRGBColorSpace,
  Vector3,
} from 'three'
import type { SceneFactory } from './types'

/** Tweakable settings; the dev panel edits a copy of these live. */
export const DEFAULTS = {
  count: 16,
  length: 16, // world units
  speed: 2.4, // world units per second
  radius: 0.14,
  wander: 2.7, // rad/s, strength of the meandering turns
  wanderPace: 1, // how fast the meander changes its mind
  maxTurn: 3.15, // rad/s, the tightest a head can turn
  turnEase: 3, // how fast the turn follows its target, 1/s (lower = rounder)
  stageX: 3.6, // half-extents of the box the heads fly in
  stageY: 2.5,
  stageZ: 0.5,
  stagePull: 10.5, // turn strength back into the stage, per unit outside
  stageLookahead: 1.4, // react this far before reaching the edge
  avoidRadius: 1.65, // other bodies closer than this push the head away
  avoidStrength: 9,
  selfGap: 4, // ignore the own body this close behind the head
  textureRepeat: 3, // per world unit
  sway: 0.7, // camera-ish rocking of the whole scene
  background: '#f4f2ee',
  colors: ['#2f7d5b', '#8a5a1c', '#40469c', '#a87a2c', '#7e3a15', '#6b4a1e'],
}
type Params = typeof DEFAULTS

const MAX_COUNT = 30
const MAX_LENGTH = 40
const AVOID_LOOKAHEAD = [0.5, 1.4, 2.4] // probe for bodies at these distances ahead
const TRAIL_SPACING = 0.15
const RING_SPACING = 0.08
const RADIAL_SEGMENTS = 12
const AGLET_LENGTH = 0.38
const AGLET_SWELL = 1.12 // aglet radius, relative to the lace
const AGLET_CRIMP = 0.06 // length over which the aglet narrows back to the lace
const AGLET_DOME_STEPS = 6
const AGLET_CRIMP_STEPS = 4
const AGLET_RINGS = 1 + AGLET_DOME_STEPS + Math.ceil(AGLET_LENGTH / RING_SPACING) + AGLET_CRIMP_STEPS
const MAX_RINGS = Math.ceil(MAX_LENGTH / RING_SPACING) + 1 + 2 * AGLET_RINGS
const random = (min: number, max: number) => min + Math.random() * (max - min)

/** Grayscale herringbone braid; the lace colour comes from the material. */
function braidTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 64
  canvas.height = 64
  const g = canvas.getContext('2d')!
  g.fillStyle = '#c8c8c8'
  g.fillRect(0, 0, 64, 64)
  g.lineCap = 'round'
  for (let y = -16; y < 80; y += 8) {
    for (let x = 0; x < 64; x += 16) {
      g.strokeStyle = '#ffffff'
      g.lineWidth = 3
      g.beginPath()
      g.moveTo(x + 2, y)
      g.lineTo(x + 7, y + 5)
      g.moveTo(x + 9, y + 5)
      g.lineTo(x + 14, y)
      g.stroke()
      g.strokeStyle = '#6a6a6a'
      g.lineWidth = 1
      g.beginPath()
      g.moveTo(x + 2, y + 3)
      g.lineTo(x + 7, y + 8)
      g.moveTo(x + 9, y + 8)
      g.lineTo(x + 14, y + 3)
      g.stroke()
    }
  }
  const texture = new CanvasTexture(canvas)
  texture.wrapS = texture.wrapT = RepeatWrapping
  texture.colorSpace = SRGBColorSpace
  texture.anisotropy = 4
  return texture
}

/** Tube buffers for the longest lace; the draw range trims it to the current length. */
function tubeGeometry() {
  const geometry = new BufferGeometry()
  const count = MAX_RINGS * (RADIAL_SEGMENTS + 1)
  geometry.setAttribute('position', new BufferAttribute(new Float32Array(count * 3), 3))
  geometry.setAttribute('normal', new BufferAttribute(new Float32Array(count * 3), 3))
  geometry.setAttribute('uv', new BufferAttribute(new Float32Array(count * 2), 2))
  const index: number[] = []
  for (let i = 0; i < MAX_RINGS - 1; i++) {
    for (let j = 0; j < RADIAL_SEGMENTS; j++) {
      const a = i * (RADIAL_SEGMENTS + 1) + j
      const b = a + RADIAL_SEGMENTS + 1
      index.push(a, b, a + 1, b, b + 1, a + 1)
    }
  }
  geometry.setIndex(index)
  return geometry
}

/**
 * Rings of one aglet, from its tip inwards: [distance from the tip, radius].
 * A rounded tip, a slightly swollen sleeve, then a crimp back down to the lace
 * radius: the aglet is part of the tube, so it bends with the lace and has no
 * back face to show.
 */
function agletProfile(length: number, radius: number) {
  const rings: [number, number][] = []
  const swell = radius * AGLET_SWELL
  const dome = Math.min(radius * 0.6, length * 0.3)
  const crimp = Math.min(AGLET_CRIMP, length * 0.2)
  for (let k = 0; k <= AGLET_DOME_STEPS; k++) {
    const angle = (k / AGLET_DOME_STEPS) * (Math.PI / 2)
    rings.push([dome * (1 - Math.cos(angle)), swell * Math.sin(angle)])
  }
  const sleeve = length - crimp - dome
  const steps = Math.max(1, Math.ceil(sleeve / RING_SPACING))
  for (let k = 1; k <= steps; k++) rings.push([dome + (sleeve * k) / steps, swell])
  for (let k = 1; k <= AGLET_CRIMP_STEPS; k++) {
    const u = k / AGLET_CRIMP_STEPS
    rings.push([length - crimp + crimp * u, swell + (radius - swell) * u * u * (3 - 2 * u)])
  }
  return rings
}

/** A point the head flew through: where, at which distance, and its frame. */
interface TrailPoint {
  position: Vector3
  distance: number // along the lace, from its very first point
  tangent: Vector3
  normal: Vector3 // parallel-transported, so the tube never twists in place
}

/** A lace's trail as seen by the others, for avoidance. */
type Body = { points: TrailPoint[]; headDistance: number }

class Lace {
  readonly group = new Group()
  readonly trail: TrailPoint[] = [] // oldest first
  private readonly position = new Vector3()
  private readonly heading = new Vector3()
  private readonly normal = new Vector3()
  private readonly turn = new Vector3() // current angular steer, eased
  private distance = 0
  private length = 0
  private time = random(0, 100)
  private readonly frequencies = [random(0.13, 0.33), random(0.13, 0.33), random(0.13, 0.33)]
  private readonly phases = [random(0, 6.3), random(0, 6.3), random(0, 6.3)]

  private readonly geometry = tubeGeometry()
  // Ring layout of the current frame: distance along the lace, radius.
  private readonly ringDistance = new Float32Array(MAX_RINGS)
  private readonly ringRadius = new Float32Array(MAX_RINGS)

  constructor(
    private readonly params: Params,
    material: MeshStandardMaterial,
    agletMaterial: MeshStandardMaterial,
  ) {
    // Material 0: the lace, material 1: the aglets (see the groups in `draw`).
    this.group.add(new Mesh(this.geometry, [material, agletMaterial]))

    this.position.set(random(-1, 1) * params.stageX, random(-1, 1) * params.stageY, random(-1, 1) * params.stageZ)
    this.heading.randomDirection()
    this.normal.randomDirection().cross(this.heading).normalize()
    this.record()
  }

  get headDistance() {
    return this.distance
  }

  step(dt: number, bodies: Body[]) {
    const p = this.params
    this.time += dt * p.wanderPace
    const turn = new Vector3()

    // Meander: a slowly drifting turn, different for every lace.
    const [f1, f2, f3] = this.frequencies
    const [p1, p2, p3] = this.phases
    const wander = new Vector3(
      Math.sin(f1 * this.time + p1),
      Math.sin(f2 * this.time + p2),
      Math.sin(f3 * this.time + p3),
    ).multiplyScalar(p.wander)
    turn.crossVectors(wander, this.heading)

    // Keep clear of bodies just ahead; the closer, the more it overrides the meander.
    const away = new Vector3()
    const side = new Vector3()
    const avoid = new Vector3()
    for (const lookahead of AVOID_LOOKAHEAD) {
      const probe = this.position.clone().addScaledVector(this.heading, lookahead)
      for (const body of bodies) {
        const isSelf = body.points === this.trail
        for (const point of body.points) {
          if (isSelf && body.headDistance - point.distance < p.selfGap) break
          away.subVectors(probe, point.position)
          const d = away.length()
          if (d >= p.avoidRadius || d < 1e-6) continue
          // Dodge sideways; head-on, pass over or under the other lace instead.
          side.copy(away).addScaledVector(this.heading, -away.dot(this.heading))
          if (side.length() < 0.3 * d) {
            side.crossVectors(this.heading, point.tangent)
            if (side.lengthSq() < 1e-6) side.copy(this.normal)
            if (side.dot(away) < 0) side.negate()
          }
          avoid.addScaledVector(side.normalize(), (1 - d / p.avoidRadius) ** 2 * p.avoidStrength)
        }
      }
    }
    // Stay on stage: when the head is about to leave the box, turn back in.
    const ahead = this.position.clone().addScaledVector(this.heading, p.stageLookahead)
    const outside = new Vector3(
      Math.sign(ahead.x) * Math.max(0, Math.abs(ahead.x) - p.stageX),
      Math.sign(ahead.y) * Math.max(0, Math.abs(ahead.y) - p.stageY),
      Math.sign(ahead.z) * Math.max(0, Math.abs(ahead.z) - p.stageZ),
    )
    turn.addScaledVector(outside, -p.stagePull)

    // Not touching beats meandering and beats staying on stage.
    const urgency = Math.min(avoid.length() / p.maxTurn, 1)
    turn.multiplyScalar(1 - urgency).add(avoid)

    // Only the sideways part turns the head; cap how sharp it can bend.
    turn.addScaledVector(this.heading, -turn.dot(this.heading))
    if (turn.length() > p.maxTurn) turn.setLength(p.maxTurn)
    this.turn.lerp(turn, 1 - Math.exp(-p.turnEase * dt))
    this.turn.addScaledVector(this.heading, -this.turn.dot(this.heading))
    this.heading.addScaledVector(this.turn, dt).normalize()

    const travelled = p.speed * dt
    this.position.addScaledVector(this.heading, travelled)
    this.distance += travelled
    this.length = Math.min(this.length + travelled, p.length)

    const last = this.trail[this.trail.length - 1]
    if (this.distance - last.distance >= TRAIL_SPACING) this.record()
    // Drop trail points the tail has passed (keep one behind it to interpolate).
    while (this.trail.length > 2 && this.trail[1].distance <= this.distance - this.length) this.trail.shift()
  }

  dispose() {
    this.geometry.dispose()
  }

  /** Sweep the tube from the tail to the current head, aglets included. */
  draw() {
    if (this.length < 0.02) {
      this.group.visible = false
      return
    }
    this.group.visible = true
    const position = this.geometry.getAttribute('position') as BufferAttribute
    const normalAttribute = this.geometry.getAttribute('normal') as BufferAttribute
    const uv = this.geometry.getAttribute('uv') as BufferAttribute
    const head: TrailPoint = {
      position: this.position,
      distance: this.distance,
      tangent: this.heading,
      normal: this.transported(this.trail[this.trail.length - 1].normal),
    }
    const points = [...this.trail, head]
    const { radius, textureRepeat } = this.params
    const start = this.distance - this.length
    const end = this.distance
    const rings = this.layoutRings(start, end, radius)
    const tailAglet = rings.tailAglet
    const headAglet = rings.headAglet
    const count = rings.count

    const p = new Vector3()
    const t = new Vector3()
    const n = new Vector3()
    const b = new Vector3()
    const radial = new Vector3()
    const outward = new Vector3()
    let segment = 0

    for (let i = 0; i < count; i++) {
      const s = this.ringDistance[i]
      const r = this.ringRadius[i]
      while (segment < points.length - 2 && points[segment + 1].distance < s) segment++
      const a = points[segment]
      const c = points[segment + 1]
      const span = c.distance - a.distance
      const k = span > 0 ? Math.min(Math.max((s - a.distance) / span, 0), 1) : 0
      p.lerpVectors(a.position, c.position, k)
      t.lerpVectors(a.tangent, c.tangent, k).normalize()
      n.lerpVectors(a.normal, c.normal, k)
      n.addScaledVector(t, -n.dot(t)).normalize()
      b.crossVectors(t, n)

      // Where the radius changes (tips, crimps), tilt the normals along the lace.
      const before = Math.max(i - 1, 0)
      const after = Math.min(i + 1, count - 1)
      const ds = this.ringDistance[after] - this.ringDistance[before]
      const slope = ds > 1e-6 ? (this.ringRadius[after] - this.ringRadius[before]) / ds : 0

      for (let j = 0; j <= RADIAL_SEGMENTS; j++) {
        const angle = (j / RADIAL_SEGMENTS) * Math.PI * 2
        radial.copy(n).multiplyScalar(Math.cos(angle)).addScaledVector(b, Math.sin(angle))
        outward.copy(radial).addScaledVector(t, -slope).normalize()
        const v = i * (RADIAL_SEGMENTS + 1) + j
        position.setXYZ(v, p.x + radial.x * r, p.y + radial.y * r, p.z + radial.z * r)
        normalAttribute.setXYZ(v, outward.x, outward.y, outward.z)
        uv.setXY(v, s * textureRepeat, j / RADIAL_SEGMENTS)
      }
    }
    position.needsUpdate = normalAttribute.needsUpdate = uv.needsUpdate = true

    // One strip of triangles between consecutive rings, RADIAL_SEGMENTS * 6 indices each.
    const strip = RADIAL_SEGMENTS * 6
    this.geometry.clearGroups()
    this.geometry.addGroup(0, tailAglet * strip, 1)
    this.geometry.addGroup(tailAglet * strip, (headAglet - tailAglet) * strip, 0)
    this.geometry.addGroup(headAglet * strip, (count - 1 - headAglet) * strip, 1)
    this.geometry.setDrawRange(0, (count - 1) * strip)
    this.geometry.computeBoundingSphere()
  }

  /**
   * Fill the ring layout: tail aglet, lace body, head aglet. Returns the ring
   * count and the rings where each aglet meets the lace.
   */
  private layoutRings(start: number, end: number, radius: number) {
    const agletLength = Math.min(AGLET_LENGTH, this.length * 0.45)
    const profile = agletProfile(agletLength, radius)
    let count = 0
    const push = (s: number, r: number) => {
      this.ringDistance[count] = s
      this.ringRadius[count] = r
      count++
    }

    for (const [e, r] of profile) push(start + e, r)
    const tailAglet = count - 1

    const bodyStart = start + agletLength
    const bodyEnd = end - agletLength
    const steps = Math.max(1, Math.ceil((bodyEnd - bodyStart) / RING_SPACING))
    for (let k = 1; k < steps; k++) push(bodyStart + ((bodyEnd - bodyStart) * k) / steps, radius)

    const headAglet = count
    for (let k = profile.length - 1; k >= 0; k--) push(end - profile[k][0], profile[k][1])
    return { count, tailAglet, headAglet }
  }

  private record() {
    const previous = this.trail[this.trail.length - 1]
    const normal = previous ? this.transported(previous.normal) : this.normal.clone()
    this.trail.push({
      position: this.position.clone(),
      distance: this.distance,
      tangent: this.heading.clone(),
      normal,
    })
  }

  /** `normal` carried onto the current heading without twisting. */
  private transported(normal: Vector3) {
    const n = normal.clone().addScaledVector(this.heading, -normal.dot(this.heading))
    return n.lengthSq() > 1e-8 ? n.normalize() : this.normal.clone()
  }
}

const createShoelaces: SceneFactory = ({ scene, camera, renderer }) => {
  const params: Params = { ...DEFAULTS, colors: [...DEFAULTS.colors] }
  const fog = new Fog(params.background, 9, 24)
  scene.fog = fog
  const applyBackground = () => {
    renderer.setClearColor(params.background)
    fog.color.set(params.background)
  }
  applyBackground()
  camera.position.set(0, 0, 14)
  camera.lookAt(0, 0, 0)

  const hemisphere = new HemisphereLight('#ffffff', '#b8ae96', 1.6)
  const sun = new DirectionalLight('#ffffff', 2.2)
  sun.position.set(5, 8, 10)
  scene.add(hemisphere, sun)

  const texture = braidTexture()
  const materials = params.colors.map(
    (color) =>
      new MeshStandardMaterial({ color, map: texture, bumpMap: texture, bumpScale: 1.5, roughness: 0.85 }),
  )
  const agletMaterial = new MeshStandardMaterial({ color: '#e9e4d8', roughness: 0.25, metalness: 0 })

  const world = new Group()
  scene.add(world)
  const laces: Lace[] = []
  const syncCount = () => {
    while (laces.length < params.count) {
      const lace = new Lace(params, materials[laces.length % materials.length], agletMaterial)
      laces.push(lace)
      world.add(lace.group)
    }
    while (laces.length > params.count) {
      const lace = laces.pop()!
      world.remove(lace.group)
      lace.dispose()
    }
  }
  syncCount()

  const step = (dt: number) => {
    const bodies = laces.map((lace) => ({ points: lace.trail, headDistance: lace.headDistance }))
    laces.forEach((lace) => lace.step(dt, bodies))
  }

  // Start mid-flight rather than with empty space.
  for (let t = 0; t < 20; t += 1 / 30) step(1 / 30)
  laces.forEach((lace) => lace.draw())

  let elapsed = 0
  return {
    update(dt) {
      elapsed += dt
      world.rotation.y = Math.sin(elapsed * 0.05) * 0.35 * params.sway
      world.rotation.x = Math.sin(elapsed * 0.031) * 0.12 * params.sway
      step(dt)
      laces.forEach((lace) => lace.draw())
    },
    tweak(gui) {
      const laceFolder = gui.addFolder('Laces')
      laceFolder.add(params, 'count', 1, MAX_COUNT, 1).onChange(syncCount)
      laceFolder.add(params, 'length', 2, MAX_LENGTH, 0.5)
      laceFolder.add(params, 'speed', 0, 4, 0.05)
      laceFolder.add(params, 'radius', 0.02, 0.4, 0.01)
      laceFolder.add(params, 'textureRepeat', 0.5, 10, 0.1)

      const flight = gui.addFolder('Flight')
      flight.add(params, 'wander', 0, 3, 0.05)
      flight.add(params, 'wanderPace', 0, 4, 0.05)
      flight.add(params, 'maxTurn', 0.2, 5, 0.05)
      flight.add(params, 'turnEase', 0.2, 12, 0.1)

      const avoidance = gui.addFolder('Avoidance')
      avoidance.add(params, 'avoidRadius', 0, 4, 0.05)
      avoidance.add(params, 'avoidStrength', 0, 40, 0.5)
      avoidance.add(params, 'selfGap', 0, 10, 0.1)

      const stage = gui.addFolder('Stage')
      stage.add(params, 'stageX', 1, 14, 0.1)
      stage.add(params, 'stageY', 1, 9, 0.1)
      stage.add(params, 'stageZ', 0.5, 8, 0.1)
      stage.add(params, 'stagePull', 0, 15, 0.1)
      stage.add(params, 'stageLookahead', 0, 6, 0.1)
      stage.add(params, 'sway', 0, 3, 0.05)

      const look = gui.addFolder('Colours').close()
      look.addColor(params, 'background').onChange(applyBackground)
      params.colors.forEach((_, i) =>
        look.addColor(params.colors, i).name(`lace ${i + 1}`).onChange((c: string) => materials[i].color.set(c)),
      )

      gui.add(
        {
          copy: () => {
            const code = `export const DEFAULTS = ${JSON.stringify(params, null, 2)}`
            navigator.clipboard?.writeText(code)
            console.info(code)
          },
        },
        'copy',
      ).name('Copy as DEFAULTS')
      gui.add({ reset: () => gui.reset() }, 'reset').name('Reset')
    },
    dispose() {
      laces.forEach((lace) => lace.dispose())
      materials.forEach((m) => m.dispose())
      texture.dispose()
      agletMaterial.dispose()
      scene.clear()
    },
  }
}

export default createShoelaces
