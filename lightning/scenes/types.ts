import type { PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import type { Pane } from 'tweakpane'

export interface SceneContext {
  scene: Scene
  camera: PerspectiveCamera
  renderer: WebGLRenderer
}

export interface SceneHandle {
  /** Advance the scene by `dt` seconds. The layout renders right after. */
  update(dt: number): void
  /** Optional: follow the deck's light / dark mode. Called once at start, then on every switch. */
  setDark?(isDark: boolean): void
  /** Optional: add live controls to the dev-only tweak panel (Tweakpane). */
  tweak?(pane: Pane): void
  dispose(): void
}

export type SceneFactory = (ctx: SceneContext) => SceneHandle
