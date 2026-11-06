/*
  Shoelaces — flying laces, like dragons in the "3D Pipes" screensaver's sky.

  Each lace's head flies freely: its heading drifts with a smooth, per-lace
  wander (sums of slow sines), so it draws long S-curves and loops. Two soft
  forces bend that path: one keeps the head inside the stage box, the other
  steers it away from the bodies of other laces (and from its own older body),
  so laces cross in front of / behind each other but rarely touch.
  The body is a rope laid down along the head's path: near the head it holds
  that path, further back it hangs and swings under gravity. Now and then a
  head traces a knot curve instead; those rope points are pinned, so the knot
  stays tied in the air until the lace has slid through it.
  The body is swept as a tube; the braid texture and the tube's twist are
  stored on the rope points, so they travel with the lace.
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
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  Quaternion,
  RepeatWrapping,
  SpotLight,
  SRGBColorSpace,
  Vector3,
} from 'three'
import type { Pane } from 'tweakpane'
import type { SceneFactory } from './types'


/**
 * Tweakable settings; the dev panel edits a copy of these live ("Copy as DEFAULTS" prints a replacement).
 * Light: `fill` scales the soft sky and sun lights (lower it so the spotlight stands out);
 * `spotIntensity` 0 switches the spotlight off; `spotAngle` is the cone's half-width in radians,
 * `spotPenumbra` its edge softness (0 hard, 1 soft); the spotlight hangs at spotX/Y/Z and aims at the middle.
 */
export const DEFAULTS = {
  "count": 20,
  "length": 18.5,
  "speed": 2.4,
  "radius": 0.07,
  "flatness": 0.88,
  "gravity": 0,
  "drag": 5.8,
  "memory": 0.6,
  "memoryLength": 0.65,
  "wander": 1.85,
  "wanderPace": 1,
  "maxTurn": 2.45,
  "turnEase": 7.3,
  "stageX": 3.7,
  "stageY": 2.3,
  "stageZ": 4.8,
  "stagePull": 10.5,
  "stageLookahead": 3.0999999999999996,
  "avoidRadius": 1.15,
  "avoidStrength": 12,
  "selfGap": 4.3999999999999995,
  "textureRepeat": 3,
  "tipWidth": 0.55,
  "tipOpacity": 0.5,
  "knotEvery": 2,
  "knotSize": 0.26,
  "sway": 1.25,
  "fill": 0.6,
  "spotIntensity": 4,
  "spotAngle": 0.61,
  "spotPenumbra": 0.42,
  "spotColor": "#fff0d6",
  "spotX": -8.4,
  "spotY": 9,
  "spotZ": 5,
  "background": "#fff",
  "backgroundDark": "#1c1b19",
  "colors": [
    "#2f7d5b",
    "#8a5a1c",
    "#40469c",
    "#a87a2c",
    "#7e3a15",
    "#6b4a1e"
  ]
}
type Params = typeof DEFAULTS

const MAX_COUNT = 30
const MAX_KNOTS = 3 // laces tying a knot at the same time
const KNOT_VIEW = { x: 8, y: 4.5 } // a knot must fit in roughly what the camera sees
const KNOT_CLEARANCE = 0.3 // free space around a knot before it starts
const MAX_LENGTH = 40
const AVOID_LOOKAHEAD = [0.5, 1.4, 2.4] // probe for bodies at these distances ahead
const TRAIL_SPACING = 0.15
const RING_SPACING = 0.08
const RADIAL_SEGMENTS = 12
const AGLET_LENGTH = 0.38
const AGLET_FILL = 0.68 // the lace end inside the tip, relative to the tip's outer radius: the rest is plastic wall
const AGLET_TAPER = 3.5 // the lace narrows into the tip over this many lace radii
const AGLET_DOME_STEPS = 6
const AGLET_SLEEVE_STEPS = 5
const AGLET_TAPER_STEPS = 5
const TIP_RINGS = 1 + AGLET_DOME_STEPS + AGLET_SLEEVE_STEPS // from the very end to the tip's mouth
const END_RINGS = TIP_RINGS + AGLET_TAPER_STEPS // body rings used at each end: inside the tip, then the taper
const MAX_RINGS = Math.ceil(MAX_LENGTH / RING_SPACING) + 1 + 2 * END_RINGS
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

/** Tube buffers for `rings` rings; a draw range can trim them to what is in use. */
function tubeGeometry(rings: number) {
  const geometry = new BufferGeometry()
  const count = rings * (RADIAL_SEGMENTS + 1)
  geometry.setAttribute('position', new BufferAttribute(new Float32Array(count * 3), 3))
  geometry.setAttribute('normal', new BufferAttribute(new Float32Array(count * 3), 3))
  geometry.setAttribute('uv', new BufferAttribute(new Float32Array(count * 2), 2))
  const index: number[] = []
  for (let i = 0; i < rings - 1; i++) {
    for (let j = 0; j < RADIAL_SEGMENTS; j++) {
      const a = i * (RADIAL_SEGMENTS + 1) + j
      const b = a + RADIAL_SEGMENTS + 1
      // Counter-clockwise seen from outside, so the near wall of the tube is the one drawn and lit.
      index.push(a, a + 1, b, b, a + 1, b + 1)
    }
  }
  geometry.setIndex(index)
  return geometry
}

/**
 * The shape of a tip from the very end of the lace inwards: TIP_RINGS pairs of
 * [distance from the end, share of the full radius]. A rounded dome, then a
 * straight sleeve up to the tip's mouth at `length`.
 */
function tipProfile(length: number, fullRadius: number) {
  const rings: [number, number][] = []
  const dome = Math.min(fullRadius * 0.9, length * 0.3)
  for (let k = 0; k <= AGLET_DOME_STEPS; k++) {
    const angle = (k / AGLET_DOME_STEPS) * (Math.PI / 2)
    rings.push([dome * (1 - Math.cos(angle)), Math.sin(angle)])
  }
  for (let k = 1; k <= AGLET_SLEEVE_STEPS; k++) rings.push([dome + ((length - dome) * k) / AGLET_SLEEVE_STEPS, 1])
  return rings
}

const smooth = (u: number) => u * u * (3 - 2 * u)

const ZERO_FLAT = new Float32Array(MAX_RINGS)
const sweepN = new Vector3()
const sweepP = new Vector3()
const sweepT = new Vector3()
const sweepB = new Vector3()
const sweepRadial = new Vector3()
const sweepOutward = new Vector3()

/** The part of a lace a tube covers: points to interpolate, and ring layout (distance, radius, flatness). */
interface Layout {
  points: TrailPoint[]
  tangents: Vector3[]
  distance: ArrayLike<number>
  radius: ArrayLike<number>
  flat: ArrayLike<number>
  count: number
}

/**
 * Sweep a tube along the lace: one ring at each layout distance, with the
 * section carried along the current shape starting from `frame`. `frame` is
 * updated in place with the orientation at the FIRST ring, so the next frame
 * starts from it: the section then only changes as much as the shape does.
 */
function sweepTube(geometry: BufferGeometry, layout: Layout, flatness: number, textureRepeat: number, frame: Vector3) {
  const { points, tangents, distance, radius, flat, count } = layout
  const position = geometry.getAttribute('position') as BufferAttribute
  const normalAttribute = geometry.getAttribute('normal') as BufferAttribute
  const uv = geometry.getAttribute('uv') as BufferAttribute
  const n = sweepN.copy(frame) // not `frame` itself: it must keep the first ring's orientation
  let segment = 0

  for (let i = 0; i < count; i++) {
    const s = distance[i]
    const r = radius[i]
    // Flat lace: thinner along the transported normal, so the flat side twists slowly like a real one.
    const thin = r * (1 - flatness * flat[i])
    while (segment < points.length - 2 && points[segment + 1].distance < s) segment++
    const a = points[segment]
    const c = points[segment + 1]
    const span = c.distance - a.distance
    const k = span > 0 ? Math.min(Math.max((s - a.distance) / span, 0), 1) : 0
    sweepP.lerpVectors(a.position, c.position, k)
    sweepT.lerpVectors(tangents[segment], tangents[segment + 1], k).normalize()
    // The rope moves after its points were laid down, so their stored normals
    // can end up along the lace and flip the section. Carry the normal along the
    // current shape instead, ring to ring.
    n.addScaledVector(sweepT, -n.dot(sweepT))
    if (n.lengthSq() < 1e-10) {
      // Any axis not along the lace will do.
      n.set(Math.abs(sweepT.x) < 0.9 ? 1 : 0, Math.abs(sweepT.x) < 0.9 ? 0 : 1, 0)
      n.addScaledVector(sweepT, -n.dot(sweepT))
    }
    n.normalize()
    sweepB.crossVectors(sweepT, n)

    // Where the radius changes (tips, tapers), tilt the normals along the lace.
    const before = Math.max(i - 1, 0)
    const after = Math.min(i + 1, count - 1)
    const ds = distance[after] - distance[before]
    const slope = ds > 1e-6 ? (radius[after] - radius[before]) / ds : 0

    for (let j = 0; j <= RADIAL_SEGMENTS; j++) {
      const angle = (j / RADIAL_SEGMENTS) * Math.PI * 2
      const cos = Math.cos(angle)
      const sin = Math.sin(angle)
      sweepRadial.copy(n).multiplyScalar(cos * thin).addScaledVector(sweepB, sin * r)
      // Ellipse normal, then tilted where the radius changes along the lace.
      sweepOutward.copy(n).multiplyScalar(cos * r).addScaledVector(sweepB, sin * thin).normalize()
      sweepOutward.addScaledVector(sweepT, -slope).normalize()
      const v = i * (RADIAL_SEGMENTS + 1) + j
      position.setXYZ(v, sweepP.x + sweepRadial.x, sweepP.y + sweepRadial.y, sweepP.z + sweepRadial.z)
      normalAttribute.setXYZ(v, sweepOutward.x, sweepOutward.y, sweepOutward.z)
      uv.setXY(v, s * textureRepeat, j / RADIAL_SEGMENTS)
    }
    if (i === 0) frame.copy(n)
  }
  position.needsUpdate = normalAttribute.needsUpdate = uv.needsUpdate = true
  geometry.computeBoundingSphere()
}

/**
 * Knot curves, in unit scale. Each is a closed knot cut open on an outer arc,
 * its two ends pulled apart along the knot's axis, so a single strand can trace
 * it: the head follows the curve and the trail left behind is the knot.
 */
const KNOT_CURVES = [
  { t0: Math.PI / 3, at: (t: number) => new Vector3(Math.sin(t) + 2 * Math.sin(2 * t), Math.cos(t) - 2 * Math.cos(2 * t), -Math.sin(3 * t)) }, // trefoil (overhand)
  { t0: 0, at: (t: number) => new Vector3((2 + Math.cos(2 * t)) * Math.cos(3 * t), (2 + Math.cos(2 * t)) * Math.sin(3 * t), Math.sin(4 * t)) }, // figure-eight
]
const KNOT_OPENING = 1.2 // how far apart the two ends are pulled, unit scale
const KNOT_SAMPLES = 720
const KNOT_TRAIL_SPACING = 0.04 // denser trail in knots: their curves are tight
const PHYSICS_STEP = 1 / 60 // rope substep, seconds
const ROPE_ITERATIONS = 6 // passes to restore segment lengths, per substep
const ROPE_FOLD = 0.996 // points two apart may not come closer than this share of their rest distance

interface KnotShape {
  points: Vector3[] // relative to the entry point
  tangents: Vector3[]
  lengths: number[] // cumulative arc length
  center: Vector3
  extent: number // radius around `center` that holds the whole knot
}

const KNOTS: KnotShape[] = KNOT_CURVES.map(({ t0, at }) => {
  const points: Vector3[] = []
  for (let i = 0; i <= KNOT_SAMPLES; i++) {
    const u = i / KNOT_SAMPLES
    points.push(at(t0 + u * Math.PI * 2).add(new Vector3(0, 0, KNOT_OPENING * (u - 0.5))))
  }
  const entry = points[0].clone()
  points.forEach((point) => point.sub(entry))
  const lengths = [0]
  const tangents = points.map((point, i) => {
    if (i > 0) lengths.push(lengths[i - 1] + point.distanceTo(points[i - 1]))
    const a = points[Math.max(i - 1, 0)]
    const b = points[Math.min(i + 1, points.length - 1)]
    return b.clone().sub(a).normalize()
  })
  const center = points.reduce((sum, point) => sum.add(point), new Vector3()).divideScalar(points.length)
  const extent = Math.max(...points.map((point) => point.distanceTo(center)))
  return { points, tangents, lengths, center, extent }
})

/** A lace part-way through tying a knot: the shape, placed in the world. */
interface Knotting {
  shape: KnotShape
  origin: Vector3
  rotation: Quaternion
  scale: number
  travelled: number // along the knot, world units
}

/**
 * A point of the lace's body, a rope particle. Laid down where the head flew
 * (its anchor), then free to swing, held back towards the anchor less and less
 * as it gets older.
 */
interface TrailPoint {
  position: Vector3
  previous: Vector3 // position one substep ago (Verlet integration)
  anchor: Vector3 // where the head laid it down
  distance: number // along the lace, from its very first point
  tangent: Vector3
  normal: Vector3 // parallel-transported, so the tube never twists in place
  pinned: boolean // part of a knot: stays on its anchor so the knot keeps its shape
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
  private knotting: Knotting | null = null

  private readonly geometry = tubeGeometry(MAX_RINGS)
  private readonly tailTip = tubeGeometry(TIP_RINGS)
  private readonly headTip = tubeGeometry(TIP_RINGS)
  // Ring layout of the current frame: distance along the lace, radius.
  private readonly ringDistance = new Float32Array(MAX_RINGS)
  private readonly ringRadius = new Float32Array(MAX_RINGS)
  private readonly ringFlat = new Float32Array(MAX_RINGS) // 1 on the lace, 0 inside the round tips
  private readonly tipDistance = [new Float32Array(TIP_RINGS), new Float32Array(TIP_RINGS)] // tail, head
  private readonly tipRadius = [new Float32Array(TIP_RINGS), new Float32Array(TIP_RINGS)]
  private readonly tipFrame = new Vector3()
  private readonly tangentCache: Vector3[] = []
  private readonly tailNormal = new Vector3() // the section's orientation at the tail, kept frame to frame

  constructor(
    private readonly params: Params,
    material: MeshStandardMaterial,
    tipMaterial: MeshPhysicalMaterial,
  ) {
    this.group.add(new Mesh(this.geometry, material))
    // Clear plastic sleeves over the ends of the lace, which shows through them.
    this.group.add(new Mesh(this.tailTip, tipMaterial), new Mesh(this.headTip, tipMaterial))

    this.position.set(random(-1, 1) * params.stageX, random(-1, 1) * params.stageY, random(-1, 1) * params.stageZ)
    this.heading.randomDirection()
    this.normal.randomDirection().cross(this.heading).normalize()
    this.tailNormal.copy(this.normal)
    this.record()
  }

  get headDistance() {
    return this.distance
  }

  get isKnotting() {
    return this.knotting !== null
  }

  get isGrown() {
    return this.length >= this.params.length * 0.95
  }

  /**
   * Start tying a knot from where the head is, if the knot would be on screen
   * and the space it needs is clear of other laces (they steer around it once
   * it is tied). Returns whether it started.
   */
  tryKnot(bodies: Body[]) {
    const p = this.params
    const shape = KNOTS[Math.floor(Math.random() * KNOTS.length)]
    const rotation = new Quaternion()
      .setFromAxisAngle(this.heading, random(0, Math.PI * 2))
      .multiply(new Quaternion().setFromUnitVectors(shape.tangents[0], this.heading))
    const center = shape.center.clone().multiplyScalar(p.knotSize).applyQuaternion(rotation).add(this.position)
    const reach = shape.extent * p.knotSize
    if (Math.abs(center.x) + reach > KNOT_VIEW.x || Math.abs(center.y) + reach > KNOT_VIEW.y) return false
    const clearance = reach + 2 * p.radius + KNOT_CLEARANCE
    for (const body of bodies) {
      if (body.points === this.trail) continue
      if (body.points.some((point) => point.position.distanceTo(center) < clearance)) return false
    }
    this.knotting = { shape, origin: this.position.clone(), rotation, scale: p.knotSize, travelled: 0 }
    return true
  }

  step(dt: number, bodies: Body[]) {
    if (this.knotting) this.stepKnot(dt)
    else this.fly(dt, bodies)
    this.simulate(dt)
  }

  /** Free flight: meander, keep clear of other laces, stay on stage. */
  private fly(dt: number, bodies: Body[]) {
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

    this.advanceTrail(false)
  }

  /** The head follows the knot curve exactly; its trail becomes the knot. */
  private stepKnot(dt: number) {
    const knot = this.knotting!
    const travelled = this.params.speed * dt
    knot.travelled += travelled
    const { lengths, points, tangents } = knot.shape
    const total = lengths[lengths.length - 1]
    const u = Math.min(knot.travelled / knot.scale, total)
    let i = 0
    let hi = lengths.length - 1
    while (hi - i > 1) {
      const mid = (i + hi) >> 1
      if (lengths[mid] <= u) i = mid
      else hi = mid
    }
    const k = (u - lengths[i]) / Math.max(lengths[hi] - lengths[i], 1e-9)
    this.position
      .lerpVectors(points[i], points[hi], k)
      .multiplyScalar(knot.scale)
      .applyQuaternion(knot.rotation)
      .add(knot.origin)
    this.heading.lerpVectors(tangents[i], tangents[hi], k).normalize().applyQuaternion(knot.rotation)
    this.distance += travelled
    this.length = Math.min(this.length + travelled, this.params.length)
    this.advanceTrail(true)
    if (u >= total) {
      this.knotting = null
      this.turn.set(0, 0, 0)
    }
  }

  /**
   * Rope physics on the body. Every free point gets gravity and drag, and is
   * pulled back towards its anchor: strongly near the head, fading to nothing
   * further back, so the front keeps the flight curves and the rest hangs and
   * swings. Then the segments get their length back. The head and knot points
   * are pinned.
   */
  private simulate(dt: number) {
    const { gravity, drag, memory, memoryLength, length } = this.params
    const trail = this.trail
    const substeps = Math.max(1, Math.ceil(dt / PHYSICS_STEP))
    const h = dt / substeps
    const damping = Math.exp(-drag * h)
    const velocity = new Vector3()
    const delta = new Vector3()

    for (let step = 0; step < substeps; step++) {
      for (const point of trail) {
        if (point.pinned) continue
        velocity.subVectors(point.position, point.previous).multiplyScalar(damping)
        point.previous.copy(point.position)
        point.position.add(velocity)
        point.position.y -= gravity * h * h
        const age = (this.distance - point.distance) / Math.max(length, 1e-6) // 0 at the head, 1 at the tail
        const held = Math.min(Math.max(1 - age / Math.max(memoryLength, 1e-3), 0), 1)
        const hold = memory * held * held * (3 - 2 * held)
        if (hold > 0) point.position.lerp(point.anchor, 1 - Math.pow(1 - hold, h * 60))
      }

      for (let iteration = 0; iteration < ROPE_ITERATIONS; iteration++) {
        for (let i = 1; i <= trail.length; i++) {
          const a = trail[i - 1]
          // The last link ties the body to the head, which is always pinned.
          const b = i < trail.length ? trail[i] : null
          const bPosition = b ? b.position : this.position
          const rest = (b ? b.distance : this.distance) - a.distance
          delta.subVectors(bPosition, a.position)
          const d = delta.length()
          if (d < 1e-9) continue
          const aFree = !a.pinned
          const bFree = b !== null && !b.pinned
          if (!aFree && !bFree) continue
          const correction = (d - rest) / d
          if (aFree && bFree) {
            a.position.addScaledVector(delta, correction / 2)
            b!.position.addScaledVector(delta, -correction / 2)
          } else if (aFree) a.position.addScaledVector(delta, correction)
          else b!.position.addScaledVector(delta, -correction)
        }
        // Bending: a squeezed rope would buckle into zigzags; forbid tight folds
        // by keeping points two apart from getting too close (only pushes, never pulls).
        for (let i = 2; i < trail.length; i++) {
          const a = trail[i - 2]
          const c = trail[i]
          if (a.pinned && c.pinned) continue
          const fold = (c.distance - a.distance) * ROPE_FOLD
          delta.subVectors(c.position, a.position)
          const d = delta.length()
          if (d >= fold || d < 1e-9) continue
          const correction = (d - fold) / d
          if (!a.pinned && !c.pinned) {
            a.position.addScaledVector(delta, correction / 2)
            c.position.addScaledVector(delta, -correction / 2)
          } else if (!a.pinned) a.position.addScaledVector(delta, correction)
          else c.position.addScaledVector(delta, -correction)
        }
      }
    }
  }

  private advanceTrail(pinned: boolean) {
    const last = this.trail[this.trail.length - 1]
    const spacing = pinned ? KNOT_TRAIL_SPACING : TRAIL_SPACING
    if (this.distance - last.distance >= spacing) this.record(pinned)
    // Drop trail points the tail has passed (keep one behind it to interpolate).
    while (this.trail.length > 2 && this.trail[1].distance <= this.distance - this.length) this.trail.shift()
  }

  dispose() {
    this.geometry.dispose()
    this.tailTip.dispose()
    this.headTip.dispose()
  }

  /** Sweep the lace's body and its two tips along the rope. */
  draw() {
    if (this.length < 0.02) {
      this.group.visible = false
      return
    }
    this.group.visible = true
    const head: TrailPoint = {
      position: this.position,
      previous: this.position,
      anchor: this.position,
      distance: this.distance,
      tangent: this.heading,
      normal: this.transported(this.trail[this.trail.length - 1].normal),
      pinned: true,
    }
    const points = [...this.trail, head]
    // The body sags after it was laid down: take tangents from where the points are now.
    const tangents = this.tangentCache
    while (tangents.length < points.length) tangents.push(new Vector3())
    for (let i = 0; i < points.length; i++) {
      const before = points[Math.max(i - 1, 0)].position
      const after = points[Math.min(i + 1, points.length - 1)].position
      tangents[i].subVectors(after, before)
      if (tangents[i].lengthSq() < 1e-12) tangents[i].copy(points[i].tangent)
      tangents[i].normalize()
    }
    tangents[points.length - 1].copy(this.heading)
    const { radius, textureRepeat, flatness, tipWidth } = this.params
    const start = this.distance - this.length
    const count = this.layoutRings(start, this.distance, radius, tipWidth)

    const body = { points, tangents, distance: this.ringDistance, radius: this.ringRadius, flat: this.ringFlat, count }
    sweepTube(this.geometry, body, flatness, textureRepeat, this.tailNormal)
    this.geometry.setDrawRange(0, (count - 1) * RADIAL_SEGMENTS * 6)

    // The tips are round, so their orientation does not matter: start from the lace's.
    const tips = [this.tailTip, this.headTip]
    tips.forEach((geometry, k) => {
      const tip = { points, tangents, distance: this.tipDistance[k], radius: this.tipRadius[k], flat: ZERO_FLAT, count: TIP_RINGS }
      sweepTube(geometry, tip, 0, 0, this.tipFrame.copy(this.tailNormal))
    })
  }

  /**
   * Fill the ring layout of the body: from each end, the lace squeezed inside a
   * tip, then tapering out to its full width. Also lays out the two tips' own
   * rings. Returns the number of body rings.
   */
  private layoutRings(start: number, end: number, radius: number, tipWidth: number) {
    const fullTaper = Math.min(radius * AGLET_TAPER, 0.4)
    // A newborn lace is shorter than its tips: shrink them with it.
    const fit = Math.min(1, (this.length * 0.45) / (AGLET_LENGTH + fullTaper))
    const tipLength = AGLET_LENGTH * fit
    const taper = fullTaper * fit
    const outer = radius * tipWidth // the plastic
    const inner = outer * AGLET_FILL // the lace end inside it
    const profile = tipProfile(tipLength, outer)

    // [distance from the end, radius, flatness], from the very end inwards.
    const ends: [number, number, number][] = profile.map(([e, share]) => [e, share * inner, 0])
    for (let m = 1; m <= AGLET_TAPER_STEPS; m++) {
      const u = m / AGLET_TAPER_STEPS
      ends.push([tipLength + u * taper, inner + (radius - inner) * smooth(u), smooth(u)])
    }

    let count = 0
    const push = (s: number, r: number, flat: number) => {
      this.ringDistance[count] = s
      this.ringRadius[count] = r
      this.ringFlat[count] = flat
      count++
    }
    for (const [e, r, flat] of ends) push(start + e, r, flat)
    const bodyStart = start + tipLength + taper
    const bodyEnd = end - tipLength - taper
    const steps = Math.max(1, Math.ceil((bodyEnd - bodyStart) / RING_SPACING))
    for (let k = 1; k < steps; k++) push(bodyStart + ((bodyEnd - bodyStart) * k) / steps, radius, 1)
    for (let k = ends.length - 1; k >= 0; k--) push(end - ends[k][0], ends[k][1], ends[k][2])

    // The plastic: tail rings run from the end inwards, head rings from the mouth to the end.
    profile.forEach(([e, share], k) => {
      this.tipDistance[0][k] = start + e
      this.tipRadius[0][k] = share * outer
      this.tipDistance[1][TIP_RINGS - 1 - k] = end - e
      this.tipRadius[1][TIP_RINGS - 1 - k] = share * outer
    })
    return count
  }

  private record(pinned = false) {
    const previous = this.trail[this.trail.length - 1]
    const normal = previous ? this.transported(previous.normal) : this.normal.clone()
    this.trail.push({
      position: this.position.clone(),
      previous: this.position.clone(),
      anchor: this.position.clone(),
      distance: this.distance,
      tangent: this.heading.clone(),
      normal,
      pinned,
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
  let dark = false
  const applyBackground = () => {
    const background = dark ? params.backgroundDark : params.background
    renderer.setClearColor(background)
    fog.color.set(background)
  }
  applyBackground()
  camera.position.set(0, 0, 14)
  camera.lookAt(0, 0, 0)

  const hemisphere = new HemisphereLight('#ffffff', '#b8ae96', 1.6)
  const sun = new DirectionalLight('#ffffff', 2.2)
  sun.position.set(5, 8, 10)
  // No distance falloff (decay 0): the intensity setting is what you see anywhere in the cone.
  const spot = new SpotLight(params.spotColor, params.spotIntensity, 0, params.spotAngle, params.spotPenumbra, 0)
  scene.add(hemisphere, sun, spot, spot.target)
  const applyLight = () => {
    hemisphere.intensity = 1.6 * params.fill
    sun.intensity = 2.2 * params.fill
    spot.color.set(params.spotColor)
    spot.intensity = params.spotIntensity
    spot.angle = params.spotAngle
    spot.penumbra = params.spotPenumbra
    spot.position.set(params.spotX, params.spotY, params.spotZ)
  }
  applyLight()

  const texture = braidTexture()
  const materials = params.colors.map(
    (color) =>
      new MeshStandardMaterial({ color, map: texture, bumpMap: texture, bumpScale: 1.5, roughness: 0.85 }),
  )
  const tipMaterial = new MeshPhysicalMaterial({
    color: '#c9d4d9', // cool grey: pure white would vanish against a light background; only the near wall is drawn, so the lace's colour stays vivid inside
    transparent: true,
    opacity: params.tipOpacity,
    roughness: 0.06,
    clearcoat: 1,
    clearcoatRoughness: 0.05,
    depthWrite: false,
  })

  const world = new Group()
  scene.add(world)
  const laces: Lace[] = []
  const syncCount = () => {
    while (laces.length < params.count) {
      const lace = new Lace(params, materials[laces.length % materials.length], tipMaterial)
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
    let knotting = laces.filter((lace) => lace.isKnotting).length
    for (const lace of laces) {
      const due = Math.random() < dt / params.knotEvery
      if (due && knotting < MAX_KNOTS && !lace.isKnotting && lace.isGrown && lace.tryKnot(bodies)) knotting++
    }
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
    setDark(isDark) {
      dark = isDark
      applyBackground()
    },
    tweak(pane) {
      const numeric = (
        folder: Pick<Pane, 'addBinding'>,
        key: { [K in keyof Params]: Params[K] extends number ? K : never }[keyof Params],
        min: number,
        max: number,
        step: number,
      ) => folder.addBinding(params, key, { min, max, step, label: key.replace(/([A-Z])/g, ' $1').toLowerCase() })

      const laceFolder = pane.addFolder({ title: 'Laces' })
      numeric(laceFolder, 'count', 1, MAX_COUNT, 1).on('change', syncCount)
      numeric(laceFolder, 'length', 2, MAX_LENGTH, 0.5)
      numeric(laceFolder, 'speed', 0, 4, 0.05)
      numeric(laceFolder, 'radius', 0.02, 0.4, 0.01)
      numeric(laceFolder, 'flatness', 0, 0.9, 0.01)
      numeric(laceFolder, 'textureRepeat', 0.5, 10, 0.1)
      numeric(laceFolder, 'tipWidth', 0.3, 1.1, 0.01)
      numeric(laceFolder, 'tipOpacity', 0.02, 1, 0.01).on('change', () => (tipMaterial.opacity = params.tipOpacity))

      const rope = pane.addFolder({ title: 'Rope', expanded: false })
      numeric(rope, 'gravity', 0, 10, 0.05)
      numeric(rope, 'drag', 0, 10, 0.05)
      numeric(rope, 'memory', 0, 1, 0.01)
      numeric(rope, 'memoryLength', 0, 1, 0.01)

      const flight = pane.addFolder({ title: 'Flight', expanded: false })
      numeric(flight, 'wander', 0, 3, 0.05)
      numeric(flight, 'wanderPace', 0, 4, 0.05)
      numeric(flight, 'maxTurn', 0.2, 5, 0.05)
      numeric(flight, 'turnEase', 0.2, 12, 0.1)

      const knots = pane.addFolder({ title: 'Knots', expanded: false })
      numeric(knots, 'knotEvery', 2, 60, 0.5)
      numeric(knots, 'knotSize', 0.15, 0.8, 0.01)

      const avoidance = pane.addFolder({ title: 'Avoidance', expanded: false })
      numeric(avoidance, 'avoidRadius', 0, 4, 0.05)
      numeric(avoidance, 'avoidStrength', 0, 40, 0.5)
      numeric(avoidance, 'selfGap', 0, 10, 0.1)

      const stage = pane.addFolder({ title: 'Stage', expanded: false })
      numeric(stage, 'stageX', 1, 14, 0.1)
      numeric(stage, 'stageY', 1, 9, 0.1)
      numeric(stage, 'stageZ', 0.5, 8, 0.1)
      numeric(stage, 'stagePull', 0, 15, 0.1)
      numeric(stage, 'stageLookahead', 0, 6, 0.1)
      numeric(stage, 'sway', 0, 3, 0.05)

      const light = pane.addFolder({ title: 'Light', expanded: false })
      numeric(light, 'fill', 0, 2, 0.05)
      numeric(light, 'spotIntensity', 0, 40, 0.5)
      numeric(light, 'spotAngle', 0.1, 1.2, 0.01)
      numeric(light, 'spotPenumbra', 0, 1, 0.01)
      light.addBinding(params, 'spotColor', { label: 'spot color' })
      numeric(light, 'spotX', -10, 10, 0.1)
      numeric(light, 'spotY', 2, 16, 0.1)
      numeric(light, 'spotZ', -4, 12, 0.1)
      light.on('change', applyLight)

      const look = pane.addFolder({ title: 'Colours', expanded: false })
      look.addBinding(params, 'background', { label: 'light bg' }).on('change', applyBackground)
      look.addBinding(params, 'backgroundDark', { label: 'dark bg' }).on('change', applyBackground)
      // Lace colours live in an array: expose each one as a property that writes through.
      const laceColors: Record<string, string> = {}
      params.colors.forEach((_, i) =>
        Object.defineProperty(laceColors, `lace${i + 1}`, {
          enumerable: true,
          get: () => params.colors[i],
          set: (color: string) => {
            params.colors[i] = color
            materials[i].color.set(color)
          },
        }),
      )
      for (const key of Object.keys(laceColors)) look.addBinding(laceColors, key, { label: key.replace('lace', 'lace ') })

      pane.addButton({ title: 'Copy as DEFAULTS' }).on('click', () => {
        const code = `export const DEFAULTS = ${JSON.stringify(params, null, 2)}`
        navigator.clipboard?.writeText(code)
        console.info(code)
      })
      pane.addButton({ title: 'Reset' }).on('click', () => {
        Object.assign(params, { ...DEFAULTS, colors: [...DEFAULTS.colors] })
        materials.forEach((material, i) => material.color.set(params.colors[i]))
        tipMaterial.opacity = params.tipOpacity
        applyLight()
        syncCount()
        applyBackground()
        pane.refresh()
      })
    },
    dispose() {
      laces.forEach((lace) => lace.dispose())
      materials.forEach((m) => m.dispose())
      texture.dispose()
      tipMaterial.dispose()
      scene.clear()
    },
  }
}

export default createShoelaces
