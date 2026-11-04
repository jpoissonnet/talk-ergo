import type GUI from 'lil-gui'
import type { PerspectiveCamera, Scene, WebGLRenderer } from 'three'

export interface SceneContext {
  scene: Scene
  camera: PerspectiveCamera
  renderer: WebGLRenderer
}

export interface SceneHandle {
  /** Advance the scene by `dt` seconds. The layout renders right after. */
  update(dt: number): void
  /** Optional: add live controls to the dev-only tweak panel. */
  tweak?(gui: GUI): void
  dispose(): void
}

export type SceneFactory = (ctx: SceneContext) => SceneHandle
