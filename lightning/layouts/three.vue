<!--
  three — full-bleed Three.js scene behind the slide content.

  Usage:
    ---
    layout: three
    scene: shoelaces   # loads scenes/shoelaces.ts (default export: SceneFactory)
    ---

  The layout owns the renderer, camera, resizing and the animation loop.
  It only animates while the slide is the current one, in slide or presenter view;
  elsewhere (overview, print/export) it draws a single still frame.

  In dev (`slidev`, not build/export), a scene that implements `tweak(gui)` gets a
  lil-gui panel in the top-right corner while its slide is showing.
-->

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useIsSlideActive, useSlideContext } from '@slidev/client'
import { PerspectiveCamera, Scene, Timer, WebGLRenderer } from 'three'
import type GUI from 'lil-gui'
import type { SceneFactory, SceneHandle } from '../scenes/types'

const props = defineProps<{ scene: string }>()

const scenes = import.meta.glob<SceneFactory>('../scenes/*.ts', { import: 'default' })

const container = ref<HTMLDivElement>()
const canvas = ref<HTMLCanvasElement>()
const isActive = useIsSlideActive()
const { $renderContext } = useSlideContext()

let renderer: WebGLRenderer | undefined
let handle: SceneHandle | undefined
let resizeObserver: ResizeObserver | undefined
let gui: GUI | undefined
let frame = 0
let disposed = false
const scene = new Scene()
const camera = new PerspectiveCamera(40, 16 / 9, 0.1, 100)
const timer = new Timer()

const shouldAnimate = () =>
  isActive.value && ['slide', 'presenter'].includes($renderContext.value)

function resize() {
  const el = container.value
  if (!renderer || !el) return
  const { clientWidth: w, clientHeight: h } = el
  if (!w || !h) return
  // Slidev scales the slide with a CSS transform: render at the on-screen size.
  const cssScale = el.getBoundingClientRect().width / w || 1
  renderer.setPixelRatio(Math.min(window.devicePixelRatio * cssScale, 3))
  renderer.setSize(w, h, false)
  camera.aspect = w / h
  camera.updateProjectionMatrix()
  renderer.render(scene, camera)
}

function loop(time: number) {
  timer.update(time)
  handle?.update(Math.min(timer.getDelta(), 0.1))
  renderer?.render(scene, camera)
  frame = requestAnimationFrame(loop)
}

function start() {
  if (frame || !handle) return
  timer.reset()
  frame = requestAnimationFrame(loop)
}

function stop() {
  cancelAnimationFrame(frame)
  frame = 0
}

onMounted(async () => {
  const load = scenes[`../scenes/${props.scene}.ts`]
  if (!load) {
    console.error(`[three layout] unknown scene "${props.scene}"`)
    return
  }
  const factory = await load()
  if (disposed || !canvas.value) return

  renderer = new WebGLRenderer({ canvas: canvas.value, antialias: true })
  handle = factory({ scene, camera, renderer })
  resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(container.value!)
  resize()
  if (shouldAnimate()) start()
  await mountTweakPanel()
})

async function mountTweakPanel() {
  if (!import.meta.env.DEV || !handle?.tweak || $renderContext.value !== 'slide') return
  const { default: LilGui } = await import('lil-gui')
  if (disposed) return
  gui = new LilGui({ title: props.scene })
  gui.domElement.style.zIndex = '1000'
  handle.tweak(gui)
  gui.show(isActive.value)
}

watch([isActive, $renderContext], () => {
  shouldAnimate() ? start() : stop()
  gui?.show(isActive.value)
})

onUnmounted(() => {
  disposed = true
  stop()
  resizeObserver?.disconnect()
  gui?.destroy()
  handle?.dispose()
  renderer?.dispose()
})
</script>

<template>
  <div ref="container" class="slidev-layout three">
    <canvas ref="canvas" class="three-canvas" />
    <div class="three-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.three {
  position: relative;
  padding: 0;
  overflow: hidden;
}
.three-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
}
.three-content {
  position: relative;
  height: 100%;
  pointer-events: none;
}
</style>
