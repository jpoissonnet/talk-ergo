<!--
  ToolZones — a rectangle cut into four quadrants, with a draggable card.
  The card (a 16:9 image with a tool-name pill) is drawn once per zone and each copy is clipped to its quadrant,
  so on a border it shows both tools split along the line. Opposite categories sit on the diagonals.
  The first slide click shows the card in the first zone of `order`, each next click moves it to the next zone;
  it shrinks while it travels or is dragged, and grows back when it lands.
  Give the slide `clicks: <order length>` in its frontmatter.

  Usage:
    <ToolZones :order="['hands-on', 'keyboard-driven', ...]" :zones="{ 'hands-on': { tool: 'docker', image: '/docker-cli.png' }, ... }" />
  Each zone is optional and takes `tool` (the pill text) and `image` (the card picture).
-->

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { resolveAssetUrl, useSlideContext } from '@slidev/client'

type ZoneId = 'hands-on' | 'keyboard-driven' | 'point-and-click' | 'hands-off'
type ZoneContent = { tool?: string, image?: string }

const props = defineProps<{
  zones?: Partial<Record<ZoneId, ZoneContent>>
  order?: ZoneId[]
}>()

type Zone = { title: string, color: string, polygon: string, label: [number, number], home: [number, number] }

const ZONES: Record<ZoneId, Zone> = {
  'hands-on': { title: 'Hands-on', color: '#2563eb', polygon: '0% 0%, 50% 0%, 50% 50%, 0% 50%', label: [25, 7], home: [25, 23] },
  'keyboard-driven': { title: 'Keyboard-driven', color: '#15803d', polygon: '50% 0%, 100% 0%, 100% 50%, 50% 50%', label: [75, 7], home: [75, 23] },
  'point-and-click': { title: 'Point & click', color: '#9333ea', polygon: '0% 50%, 50% 50%, 50% 100%, 0% 100%', label: [25, 57], home: [25, 73] },
  'hands-off': { title: 'Hands-off', color: '#c2410c', polygon: '50% 50%, 100% 50%, 100% 100%, 50% 100%', label: [75, 57], home: [75, 73] },
}

const zoneIds = Object.keys(ZONES) as ZoneId[]

const order = computed(() => props.order ?? zoneIds)
const { $clicks } = useSlideContext()

function homeAt(click: number) {
  const [x, y] = ZONES[order.value[Math.min(Math.max(click - 1, 0), order.value.length - 1)]].home
  return { x, y }
}

const shown = computed(() => $clicks.value >= 1)

const pos = ref(homeAt($clicks.value))

const board = ref<HTMLElement>()
const dragging = ref(false)
const moving = ref(false)
let grab = { x: 0, y: 0 }
let frame = 0

const TRAVEL_MS = 150
const ease = (t: number) => (t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2)

function stopTravel() {
  cancelAnimationFrame(frame)
  moving.value = false
}

function travelTo(to: { x: number, y: number }) {
  stopTravel()
  const from = { ...pos.value }
  const t0 = performance.now()
  moving.value = true
  const step = (now: number) => {
    const k = Math.min(1, (now - t0) / TRAVEL_MS)
    const e = ease(k)
    pos.value = { x: from.x + (to.x - from.x) * e, y: from.y + (to.y - from.y) * e }
    if (k < 1) frame = requestAnimationFrame(step)
    else moving.value = false
  }
  frame = requestAnimationFrame(step)
}

watch($clicks, (click, previous) => {
  if (previous >= 1 && click >= 1) travelTo(homeAt(click))
  else pos.value = homeAt(click)
})

function toPercent(e: PointerEvent) {
  const r = board.value!.getBoundingClientRect()
  return { x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 }
}

function onDown(e: PointerEvent) {
  stopTravel()
  const p = toPercent(e)
  grab = { x: p.x - pos.value.x, y: p.y - pos.value.y }
  dragging.value = true
    ; (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
}

function onMove(e: PointerEvent) {
  if (!dragging.value) return
  const p = toPercent(e)
  pos.value = {
    x: Math.min(100, Math.max(0, p.x - grab.x)),
    y: Math.min(100, Math.max(0, p.y - grab.y)),
  }
}

const puckStyle = computed(() => ({ left: `${pos.value.x}%`, top: `${pos.value.y}%` }))
</script>

<template>
  <div ref="board" class="tool-zones" :class="{ dragging, shrunk: dragging || moving, 'no-card': !shown }">
    <div v-for="id in zoneIds" :key="id" class="zone"
      :style="{ clipPath: `polygon(${ZONES[id].polygon})`, '--c': ZONES[id].color }">
      <span class="label" :style="{ left: `${ZONES[id].label[0]}%`, top: `${ZONES[id].label[1]}%` }">{{ ZONES[id].title
        }}</span>
      <div class="puck" :style="puckStyle">
        <div class="frame">
          <img v-if="props.zones?.[id]?.image" :src="resolveAssetUrl(props.zones[id]!.image!)" alt="">
        </div>
        <span class="pill">{{ props.zones?.[id]?.tool ?? id }}</span>
      </div>
    </div>

    <div class="handle" :style="puckStyle" @pointerdown.stop.prevent="onDown" @pointermove="onMove"
      @pointerup="dragging = false" @pointercancel="dragging = false" />
  </div>
</template>

<style scoped>
.tool-zones {
  position: relative;
  width: 100%;
  height: 100%;
  user-select: none;
  touch-action: none;
}

.zone {
  position: absolute;
  inset: 0;
}

.label {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  white-space: nowrap;
  line-height: 1;
  font-weight: 800;
  color: var(--c);
  pointer-events: none;
}

.puck,
.handle {
  position: absolute;
  width: 25rem;
  aspect-ratio: 16 / 9;
  transform: translate(-50%, -50%);
}

.puck {
  transition: transform 0.2s ease-out, opacity 0.2s ease-out;
}

.no-card .puck {
  transform: translate(-50%, -50%) scale(0.55);
  opacity: 0;
}

.no-card .handle {
  pointer-events: none;
}

.shrunk .puck {
  transform: translate(-50%, -50%) scale(0.55);
}

.frame {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 0.6rem;
  background: #1e1e1e;
  box-shadow: 0 0.5rem 1.5rem rgb(0 0 0 / 0.25);
}

.frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top left;
}

.pill {
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  padding: 0.1rem 1.2rem;
  border-radius: 999px;
  background: var(--c);
  color: white;
  font-size: 1.8rem;
  font-weight: 700;
  white-space: nowrap;
  box-shadow: 0 0.2rem 0.5rem rgb(0 0 0 / 0.25);
}

.handle {
  cursor: grab;
}

.dragging .handle {
  cursor: grabbing;
}
</style>

<style>
.dark .tool-zones .label {
  color: color-mix(in srgb, var(--c) 55%, white);
}
</style>
