<!--
  three — full-bleed Three.js scene behind the slide content.

  Usage:
    ---
    layout: three
    scene: shoelaces   # loads scenes/shoelaces.ts (default export: SceneFactory)
    devPanel: true     # optional: tweak panel while running `slidev`
    lettering: Some text   # optional: text the scene writes with its laces
    cut: all               # optional: which words get one lace per letter: all (default), or a list like "tools finally"
    clicks: 1              # optional: the slide's clicks; the scene is told the current one
    ---

  The layout owns the renderer, camera, resizing and the animation loop.
  It only animates while the slide is the current one, in slide or presenter view;
  elsewhere (overview, print/export) it draws a single still frame.

  A scene that implements `setDark(isDark)` follows the deck's light / dark mode.

  Dev panel: `devPanel: true` in the slide's frontmatter shows a Tweakpane panel in
  the top-right corner, for scenes that implement `tweak(pane)`, while the slide is
  showing. It is opt-in per slide and never part of a build or export.
-->

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useDarkMode, useIsSlideActive, useSlideContext } from '@slidev/client'
import { PerspectiveCamera, Scene, Timer, WebGLRenderer } from 'three'
import type { Pane } from 'tweakpane'
import type { SceneFactory, SceneHandle } from '../scenes/types'

const props = defineProps<{ scene: string; devPanel?: boolean; lettering?: string; cut?: string }>()

const scenes = import.meta.glob<SceneFactory>('../scenes/*.ts', { import: 'default' })

const container = ref<HTMLDivElement>()
const canvas = ref<HTMLCanvasElement>()
const isActive = useIsSlideActive()
const { $renderContext, $clicks } = useSlideContext()
const { isDark } = useDarkMode()

let renderer: WebGLRenderer | undefined
let handle: SceneHandle | undefined
let resizeObserver: ResizeObserver | undefined
let pane: Pane | undefined
let panelLoad: Promise<void> | undefined
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
  handle = factory({ scene, camera, renderer, options: { lettering: props.lettering, cut: props.cut } })
  handle.setDark?.(isDark.value)
  handle.setClicks?.($clicks.value)
  resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(container.value!)
  resize()
  if (shouldAnimate()) start()
  await syncPanel()
})

const wantsPanel = () =>
  props.devPanel === true && !!handle?.tweak && $renderContext.value === 'slide'

async function syncPanel() {
  // Checked first, in this function, so the bundler drops Tweakpane from builds entirely.
  if (!import.meta.env.DEV) return
  if (!wantsPanel()) {
    pane?.dispose()
    pane = undefined
    return
  }
  if (!pane) {
    // Tweakpane is only fetched when a slide asks for it.
    panelLoad ??= import('tweakpane')
      .then(({ Pane }) => {
        if (disposed || pane || !handle?.tweak) return
        pane = new Pane({ title: props.scene })
        const wrapper = pane.element.parentElement
        // Fixed above the slide; scrolls when the folders are taller than the window.
        if (wrapper) {
          Object.assign(wrapper.style, {
            position: 'fixed',
            zIndex: '1000',
            maxHeight: 'calc(100vh - 16px)',
            overflowY: 'auto',
            borderRadius: '6px',
          })
        }
        handle.tweak(pane)
      })
      .finally(() => (panelLoad = undefined))
    await panelLoad
    // The flag or the slide may have changed while it loaded.
    if (!wantsPanel()) {
      pane?.dispose()
      pane = undefined
    }
  }
  if (pane) pane.hidden = !isActive.value
}

watch($clicks, (clicks) => handle?.setClicks?.(clicks))

watch(isDark, (dark) => {
  handle?.setDark?.(dark)
  // A still frame (overview, export) only renders on demand.
  if (!frame) renderer?.render(scene, camera)
})

watch([isActive, $renderContext], () => (shouldAnimate() ? start() : stop()))
watch([isActive, $renderContext, () => props.devPanel], syncPanel)

onUnmounted(() => {
  disposed = true
  stop()
  resizeObserver?.disconnect()
  pane?.dispose()
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
