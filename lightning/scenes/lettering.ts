/*
  Text as paths a lace can follow.

  A word is either written by ONE lace, which joins the strokes of its letters in the font's own order with short hops
  where the pen would lift (a lace cannot lift), or CUT into letters, one lace each: nothing joins the letters then,
  which is what keeps a hard word readable (a long hop even cuts a letter in two, like the crossbar of a t).
  Corners are rounded, then every line is resampled at an even spacing.
*/
import { Vector3 } from 'three'
import { FUTURAL } from './hershey-futural'

const SPACE_WIDTH = 14 // between words, in font units
const LINE_HEIGHT = 38
const CAP_HEIGHT = 22
const CHARACTERS_PER_LINE = 15 // roughly: no line is longer than this many characters
const CUT_HOP = 12 // in a cut word, a pen lift longer than this (font units) cuts the letter in two: e.g. the crossbar of a t
const CHAIKIN_ROUNDS = 1 // corner rounding: little, so small details like the dot of an i survive
const SPACING = 0.045 // world units between the points of a path

type Point = [number, number]

const distance = (a: Point, b: Point) => Math.hypot(a[0] - b[0], a[1] - b[1])
const advance = (character: string) => (FUTURAL[character]?.o ?? 0) * 2
const wordWidth = (word: string) => [...word].reduce((width, character) => width + advance(character), 0)

const strokesOf = (character: string): Point[][] =>
  (FUTURAL[character]?.d ?? '')
    .split('M')
    .filter(Boolean)
    .map((stroke) => [...stroke.matchAll(/(-?\d+),(-?\d+)/g)].map((m): Point => [Number(m[1]), Number(m[2])]))
    .filter((stroke) => stroke.length > 1)

/** Split the words into lines of similar width. */
function wrap(words: string[]): string[][] {
  const total = words.reduce((width, word, i) => width + wordWidth(word) + (i ? SPACE_WIDTH : 0), 0)
  const lineCount = Math.max(1, Math.ceil(total / (CHARACTERS_PER_LINE * 22)))
  const target = total / lineCount
  const lines: string[][] = [[]]
  let width = 0
  for (const word of words) {
    const w = wordWidth(word)
    // Start a new line once the middle of this word would pass the target width.
    if (lines[lines.length - 1].length && lines.length < lineCount && width + SPACE_WIDTH + w / 2 > target) {
      lines.push([])
      width = 0
    }
    lines[lines.length - 1].push(word)
    width += (width ? SPACE_WIDTH : 0) + w
  }
  return lines
}

/**
 * Join strokes, in order, into lines in font units. Each stroke starts from the end nearest to the pen; a hop longer
 * than `cutHop` starts a new line instead of drawing a stray stroke across the letters.
 */
function join(strokes: Point[][], cutHop: number): Point[][] {
  const pieces: Point[][] = []
  let path: Point[] = []
  for (let stroke of strokes) {
    const pen: Point | undefined = path[path.length - 1]
    if (pen && distance(pen, stroke[stroke.length - 1]) < distance(pen, stroke[0])) stroke = [...stroke].reverse()
    if (pen && distance(pen, stroke[0]) > cutHop) {
      pieces.push(path)
      path = []
    }
    for (const point of stroke) {
      const last = path[path.length - 1]
      if (!last || last[0] !== point[0] || last[1] !== point[1]) path.push(point)
    }
  }
  pieces.push(path)
  return pieces
}

/** Words are matched without case or punctuation. */
export const normalise = (word: string) => word.toLowerCase().replace(/[^\p{L}\p{N}]/gu, '')

/** Corner cutting that keeps both ends where they are. */
function round(points: Point[], rounds: number): Point[] {
  let current = points
  for (let r = 0; r < rounds; r++) {
    const next: Point[] = [current[0]]
    for (let i = 0; i < current.length - 1; i++) {
      const [ax, ay] = current[i]
      const [bx, by] = current[i + 1]
      next.push([ax * 0.75 + bx * 0.25, ay * 0.75 + by * 0.25], [ax * 0.25 + bx * 0.75, ay * 0.25 + by * 0.75])
    }
    next.push(current[current.length - 1])
    current = next
  }
  return current
}

/** Evenly spaced points along a polyline. */
function resample(points: Vector3[], spacing: number): Vector3[] {
  const lengths = [0]
  for (let i = 1; i < points.length; i++) lengths.push(lengths[i - 1] + points[i].distanceTo(points[i - 1]))
  const total = lengths[lengths.length - 1]
  const count = Math.max(2, Math.ceil(total / spacing))
  const out: Vector3[] = []
  let segment = 0
  for (let k = 0; k <= count; k++) {
    const s = (total * k) / count
    while (segment < points.length - 2 && lengths[segment + 1] < s) segment++
    const span = lengths[segment + 1] - lengths[segment]
    const t = span > 1e-9 ? (s - lengths[segment]) / span : 0
    out.push(new Vector3().lerpVectors(points[segment], points[segment + 1], t))
  }
  return out
}

/**
 * The paths to write, in world units: the block of text is `width` wide, centred on the origin, in the plane z = 0.
 * One path per word, except for the words in `cut` ('all' for every word), which get one per letter.
 */
export function letteringPieces(text: string, width: number, cut: ReadonlySet<string> | 'all' = 'all'): Vector3[][] {
  const words = text.split(/\s+/).filter(Boolean)
  if (!words.length) return []
  const lines = wrap(words)
  const lineWidth = (line: string[]) => line.reduce((w, word, i) => w + wordWidth(word) + (i ? SPACE_WIDTH : 0), 0)
  const widest = Math.max(...lines.map(lineWidth))
  const scale = width / widest
  const centreY = ((lines.length - 1) * LINE_HEIGHT + CAP_HEIGHT) / 2

  const out: Vector3[][] = []
  const emit = (path: Point[]) => {
    if (path.length < 2) return
    const world = round(path, CHAIKIN_ROUNDS).map(([px, py]) => new Vector3((px - widest / 2) * scale, -(py - centreY) * scale, 0))
    out.push(resample(world, SPACING))
  }
  lines.forEach((line, row) => {
    let x = (widest - lineWidth(line)) / 2
    for (const word of line) {
      const letters: Point[][][] = []
      for (const character of word) {
        letters.push(strokesOf(character).map((stroke) => stroke.map(([px, py]): Point => [px + x, py + row * LINE_HEIGHT])))
        x += advance(character)
      }
      if (cut === 'all' || cut.has(normalise(word))) for (const strokes of letters) join(strokes, CUT_HOP).forEach(emit)
      else join(letters.flat(), Infinity).forEach(emit)
      x += SPACE_WIDTH
    }
  })
  return out
}
