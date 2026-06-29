<!--
  ArthurFast — click-driven animated scene of the "keyboard-shortcut" story.
  Same scenario as ArthurSlow but using keyboard shortcuts — no dock hunting, no mouse.

  Click sequence (12 clicks total):
    0  — Initial: Slack notification visible, desktop otherwise empty.
    1  — Browser opens instantly (⌥B)
    2  — URL address bar copied highlight (⌘⇧C)
    3  — Shottr window/overlay appears (⌘⇧4)
    4  — Arrow annotation drawn on graph (a)
    5  — Shottr closes, browser still visible (⌘C)
    6  — Slack opens instantly (⌥S)
    7  — Slack search modal opens — empty field (⌘T)
    8  — "Gaud" typed → Arthur Gaudard result highlighted (no shortcut)
    9  — Search closes, Arthur's DM opens (⏎)
    10 — Screenshot thumbnail pasted in input bar (⌘⇧^V)
    11 — URL also pasted in input bar (⌘⇧^V)
    12 — Message sent as bubble (⏎)
-->

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $clicks } = useSlideContext()
const c = computed(() => $clicks.value)

const now = ref(Date.now())
let timer
onMounted(() => { timer = setInterval(() => { now.value = Date.now() }, 30_000) })
onUnmounted(() => clearInterval(timer))

// No dock blinking — keyboard = instant
const blinkingApp = computed(() => '')

// Visibility gates
const showBrowser = computed(() => c.value >= 1)
const showSlack   = computed(() => c.value >= 6)

const showSlackNotif = computed(() => c.value < 6)

// URL address bar: copied highlight at click 2, clears when Slack opens
const urlSelected = computed(() => c.value >= 2 && c.value < 6)

// Shottr overlay: appears click 3, visible through click 4, gone at click 5
const showShottr      = computed(() => c.value >= 3 && c.value < 5)
const showShottrArrow = computed(() => c.value >= 4 && c.value < 5)

// Slack internal state
const slackActiveDm    = computed(() => c.value >= 9 ? 'Arthur Gaudard' : '')
const slackShowSearch  = computed(() => c.value === 7 || c.value === 8)
const slackSearchTyped = computed(() => c.value === 8)

// click 10: screenshot only; click 11+: screenshot + url
const slackPastedItems = computed(() => {
  if (c.value >= 11 && c.value < 12) {
    return [
      { type: 'screenshot', value: 'dashboard-screenshot' },
      { type: 'url', value: 'https://dashboard.internal.bedrock.tech/metrics/today' },
    ]
  }
  if (c.value === 10) {
    return [{ type: 'screenshot', value: 'dashboard-screenshot' }]
  }
  return []
})

const slackSentItems = computed(() =>
  c.value >= 12
    ? [
        { type: 'screenshot', value: 'dashboard-screenshot' },
        { type: 'url', value: 'https://dashboard.internal.bedrock.tech/metrics/today' },
      ]
    : []
)
const slackMsgSent = computed(() => c.value >= 12)

// Bottom-left shortcut display
const currentShortcut = computed(() => {
  switch (c.value) {
    case 1:  return '⌥B'
    case 2:  return '⌘⇧C'
    case 3:  return '⌘⇧4'
    case 4:  return 'a'
    case 5:  return '⌘C'
    case 6:  return '⌥S'
    case 7:  return '⌘T'
    case 8:  return ''
    case 9:  return '⏎'
    case 10: return '⌘⇧^V'
    case 11: return '⌘⇧^V'
    case 12: return '⏎'
    default: return ''
  }
})

const avatarSrc = '/linkedin-avatar.jpg'
</script>

<template>
  <div class="absolute inset-0">
    <MacOsFrame
      app-name="Safari"
      time="10:34"
      :blinking-app="blinkingApp"
    >
      <!-- ── Slack notification ──────────────────────────────────── -->
      <Transition name="toast">
        <SlackNotification
          v-if="showSlackNotif"
          class="absolute right-3 top-6 z-30"
          :avatar-src="avatarSrc"
          :time="new Date(now).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })"
          compact
        />
      </Transition>

      <!-- ── Browser window (click 1 → fades in instantly) ─────── -->
      <Transition name="win">
        <div
          v-if="showBrowser"
          class="absolute z-10"
          style="top:5%; left:3%; width:70%; height:83%;"
        >
          <BrowserWindow
            url="https://dashboard.internal.bedrock.tech/metrics/today"
            page-title="Metrics — Today · dashboard.internal.bedrock.tech"
            :url-selected="urlSelected"
            width="100%"
            height="100%"
          >
            <DashboardContent />
          </BrowserWindow>

          <!-- ── Shottr overlay ─────────────────────────────────── -->
          <Transition name="shottr">
            <div
              v-if="showShottr"
              class="absolute inset-0 z-20 shottr-backdrop"
            >
              <!-- Dimmed areas around the selection -->
              <div class="shottr-dim shottr-dim-top" />
              <div class="shottr-dim shottr-dim-bottom" />
              <div class="shottr-dim shottr-dim-left" />
              <div class="shottr-dim shottr-dim-right" />

              <!-- Selected region (dashed border box over dashboard area) -->
              <div class="shottr-selection">
                <!-- Toolbar at the top of the selection -->
                <div class="shottr-toolbar">
                  <span class="shottr-btn">✕</span>
                  <span class="shottr-btn" :class="showShottrArrow ? 'shottr-btn-active' : ''">
                    a<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left:2px;flex-shrink:0;"><line x1="1" y1="7" x2="7" y2="1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><polyline points="3,1 7,1 7,5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
                  </span>
                  <span class="shottr-btn">⌘C</span>
                </div>

                <!-- Arrow annotation (click 4) -->
                <Transition name="arrow-appear">
                  <svg
                    v-if="showShottrArrow"
                    class="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 200 150"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <marker id="arrowhead-fast" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                        <polygon points="0 0, 8 3, 0 6" fill="#ff3b30" />
                      </marker>
                    </defs>
                    <line
                      x1="160" y1="30"
                      x2="60" y2="110"
                      stroke="#ff3b30"
                      stroke-width="2.5"
                      marker-end="url(#arrowhead-fast)"
                    />
                  </svg>
                </Transition>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>

      <!-- ── Slack window (click 6 → fades in instantly) ───────── -->
      <Transition name="win">
        <div
          v-if="showSlack"
          class="absolute z-20"
          style="top:7%; left:36%; width:60%; height:80%;"
        >
          <SlackWindow
            workspace-name="Bedrock Streaming"
            :active-dm="slackActiveDm"
            :show-search-overlay="slackShowSearch"
            :search-typed="slackSearchTyped"
            :pasted-items="slackPastedItems"
            :sent-items="slackSentItems"
            :message-sent="slackMsgSent"
            :arthur-avatar-src="avatarSrc"
            :now="now"
            width="100%"
            height="100%"
          />
        </div>
      </Transition>

      <!-- ── Bottom-left shortcut display ──────────────────────── -->
      <div class="shortcut-display-wrap">
        <Transition name="shortcut-fade" mode="out-in">
          <span
            v-if="currentShortcut"
            :key="currentShortcut"
            class="shortcut-keycap"
          >{{ currentShortcut }}</span>
        </Transition>
      </div>

    </MacOsFrame>
  </div>
</template>

<style scoped>
/* ── Window appear — fade only, no scale ─────────────────────── */
.win-enter-active {
  transition: opacity 0.28s ease-out;
}
.win-enter-from {
  opacity: 0;
}

/* ── Slack notification toast ─────────────────────────────────── */
.toast-enter-active {
  transition: opacity 0.22s ease-out, transform 0.22s ease-out;
}
.toast-enter-from {
  opacity: 0;
  transform: translateY(-6px) scale(0.95);
}
.toast-leave-active {
  transition: opacity 0.15s ease-in;
}
.toast-leave-to {
  opacity: 0;
}

/* ── Shottr overlay ───────────────────────────────────────────── */
.shottr-enter-active,
.shottr-leave-active {
  transition: opacity 0.20s ease;
}
.shottr-enter-from,
.shottr-leave-to {
  opacity: 0;
}

.shottr-backdrop {
  pointer-events: none;
}

.shottr-dim {
  position: absolute;
  background: rgba(0, 0, 0, 0.50);
}
.shottr-dim-top    { top: 0; left: 0; right: 0; height: 15%; }
.shottr-dim-bottom { bottom: 0; left: 0; right: 0; height: 20%; }
.shottr-dim-left   { top: 15%; left: 0; width: 8%; bottom: 20%; }
.shottr-dim-right  { top: 15%; right: 0; width: 8%; bottom: 20%; }

.shottr-selection {
  position: absolute;
  top: 15%; left: 8%; right: 8%; bottom: 20%;
  border: 1.5px dashed rgba(255,255,255,0.80);
  border-radius: 2px;
  overflow: hidden;
}

.shottr-toolbar {
  position: absolute;
  top: 0; left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 2px;
  background: #1c1c1e;
  border-radius: 0 0 6px 6px;
  padding: 3px 6px;
  z-index: 1;
}
.shottr-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 22px;
  height: 18px;
  border-radius: 4px;
  background: rgba(255,255,255,0.10);
  color: rgba(255,255,255,0.75);
  font-size: 9px;
  font-weight: 600;
  padding: 0 4px;
  cursor: default;
}
.shottr-btn-active {
  background: rgba(0,122,255,0.55);
  color: white;
}

.arrow-appear-enter-active {
  transition: opacity 0.16s ease-out;
}
.arrow-appear-enter-from {
  opacity: 0;
}

/* ── Bottom-left shortcut keycap display ─────────────────────── */
.shortcut-display-wrap {
  position: absolute;
  bottom: 32px;
  left: 32px;
  z-index: 50;
  min-width: 96px;
  min-height: 88px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.shortcut-keycap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 32px;
  background: #1c1c1e;
  color: rgba(255,255,255,0.92);
  border-radius: 20px;
  font-size: 56px;
  font-weight: 700;
  font-family: ui-monospace, 'SF Mono', monospace;
  box-shadow: 0 8px 32px rgba(0,0,0,0.55), inset 0 2px 0 rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.12);
  white-space: nowrap;
  letter-spacing: 0.02em;
}

.shortcut-fade-enter-active {
  transition: opacity 0.18s ease-out;
}
.shortcut-fade-enter-from {
  opacity: 0;
}
.shortcut-fade-leave-active {
  transition: opacity 0.12s ease-in;
}
.shortcut-fade-leave-to {
  opacity: 0;
}
</style>
