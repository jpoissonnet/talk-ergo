<!--
  Fake Slack desktop notification. It lives in a global layer so it stays on screen across
  slide changes, like a real overlay would. <Notify> shows it.

  Sizes are pixels on a 2560 px wide screen, as a share of the slide width, times
  --scale (1.43 makes the card about a fifth of the slide height).
-->

<script setup lang="ts">
import { current, dismiss } from './utils/notification'

const OUT_BACK_OVERSHOOT = 0.8
const outBack = Array.from({ length: 31 }, (_, i) => {
  const t = i / 30 - 1
  return (t * t * ((OUT_BACK_OVERSHOOT + 1) * t + OUT_BACK_OVERSHOOT) + 1).toFixed(4)
}).join(', ')
</script>

<template>
  <div class="layer" :style="{ '--out-back': `linear(${outBack})` }">
    <Transition name="toast">
      <div v-if="current" :key="current.id" class="toast" @click.stop="dismiss">
        <img :src="current.icon" alt="" class="icon">
        <div class="text">
          <div class="app">{{ current.appName }} · {{ current.channel }} · now</div>
          <div class="author">{{ current.author }}</div>
          <div class="msg">{{ current.msg }}</div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.layer {
  --scale: 1.43;
  --u: calc(100cqw / 2560 * var(--scale));
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  container-type: inline-size;
  font-family: 'Adwaita Sans', Inter, system-ui, sans-serif;
}

.toast {
  position: absolute;
  top: calc(96 * var(--u));
  right: calc(44 * var(--u));
  box-sizing: border-box;
  display: flex;
  gap: calc(28 * var(--u));
  width: calc(720 * var(--u));
  padding: calc(30 * var(--u));
  border: calc(2 * var(--u)) solid #35373b;
  border-radius: calc(28 * var(--u));
  background: #1a1d21;
  pointer-events: auto;
}

.icon {
  flex-shrink: 0;
  width: calc(112 * var(--u));
  height: calc(112 * var(--u));
  object-fit: contain;
}

.text {
  display: flex;
  flex-direction: column;
  gap: calc(8 * var(--u));
  flex: 1;
  min-width: 0;
}

.app {
  color: #ababad;
  font-size: calc(24 * var(--u));
  line-height: calc(30 * var(--u));
}

.author {
  overflow: hidden;
  color: #fff;
  font-size: calc(40 * var(--u));
  line-height: calc(49 * var(--u));
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.msg {
  color: #d1d2d3;
  font-size: calc(34 * var(--u));
  line-height: calc(42 * var(--u));
  overflow-wrap: break-word;
}

.toast-enter-active {
  transition: transform 450ms var(--out-back), opacity 250ms linear;
}

.toast-leave-active {
  transition: transform 350ms cubic-bezier(0.55, 0.055, 0.675, 0.19), opacity 350ms linear;
}

.toast-enter-from,
.toast-leave-to {
  transform: translateX(calc(760 * var(--u)));
  opacity: 0;
}
</style>
