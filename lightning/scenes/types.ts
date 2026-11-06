import type { PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import type { Pane } from 'tweakpane'

export interface SceneContext {
  scene: Scene
  camera: PerspectiveCamera
  renderer: WebGLRenderer
  /** Extra settings from the slide's frontmatter, e.g. `lettering` for text the scene should write. */
  options: Record<string, unknown>
}

export interface SceneHandle {
  /** Advance the scene by `dt` seconds. The layout renders right after. */
  update(dt: number): void
  /** Optional: the slide's current click (0 when it appears); the scene may change its state with it. */
  setClicks?(clicks: number): void
  /** Optional: follow the deck's light / dark mode. Called once at start, then on every switch. */
  setDark?(isDark: boolean): void
  /** Optional: add live controls to the dev-only tweak panel (Tweakpane). */
  tweak?(pane: Pane): void
  dispose(): void
}

export type SceneFactory = (ctx: SceneContext) => SceneHandle
