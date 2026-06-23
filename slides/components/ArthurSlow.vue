<!--
  ArthurSlow — click-driven animated scene of the "friction story".
  Uses Slidev's useSlideContext to read $clicks and drive each step.

  Usage (on a `layout: none` slide):
    <ArthurSlow />

  Click sequence consumed (10 clicks total):
    0  — Initial state: Slack notification visible, desktop otherwise empty.
    1  — Arc (browser) dock icon gets red border (attention hint).
    2  — Browser window fades in with the metrics dashboard.
    3  — The address-bar URL becomes selected (blue highlight).
    4  — A macOS right-click context menu appears with "Copier" highlighted.
    5  — Slack dock icon gets red border; context menu clears.
    6  — Slack window fades in; notification, URL selection clear.
    7  — Slack navigates to Arthur Gaudard: sidebar highlights, conversation slides in.
    8  — A context menu appears over the Slack input bar with "Coller" highlighted.
    9  — Context menu disappears; the dashboard URL fills the input bar.
    10 — URL is sent as a reply bubble; input bar clears.

  No speaker notes — the slide markdown owns presenter notes.
-->

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $clicks } = useSlideContext()
const c = computed(() => $clicks.value)

// Keep `now` in sync with the real clock — updates every 30s so timestamps
// stay accurate whenever the slide is shown.
const now = ref(Date.now())
let timer
onMounted(() => { timer = setInterval(() => { now.value = Date.now() }, 30_000) })
onUnmounted(() => clearInterval(timer))

// Which dock icon should be bouncing right now
const blinkingApp = computed(() => {
  if (c.value === 1) return 'Arc'
  if (c.value === 5) return 'Slack'
  return ''
})

// Visibility gates
const showBrowser   = computed(() => c.value >= 2)
const showSlack     = computed(() => c.value >= 6)

// Slack notification dismisses once the Slack app opens (click 6)
const showSlackNotif = computed(() => c.value < 6)

// URL is "selected" (blue highlight) from click 3, cleared once Slack opens
const urlSelected = computed(() => c.value >= 3 && c.value < 6)

// macOS context menu shows on click 4 only, clears before Slack border (click 5)
const showContextMenu = computed(() => c.value >= 4 && c.value < 5)

// Slack internal state
const slackActiveDm   = computed(() => c.value >= 7 ? 'Arthur Gaudard' : '')
const slackPasteMenu  = computed(() => c.value === 8)           // context menu over input
const slackLinkTyped  = computed(() => c.value >= 9 && c.value < 10) // URL in input bar
const slackMsgSent    = computed(() => c.value >= 10)           // sent as bubble

const avatarSrc =
  'https://media.licdn.com/dms/image/v2/C4D03AQFhBI1feJOYeQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1637317452394?e=1783555200&v=beta&t=k7Deh4Swr4pqEgSxx3z-lZwW8C6Xy8AblmIdrPin-Eo'
</script>

<template>
  <div class="absolute inset-0">
    <MacOsFrame
      app-name="Safari"
      time="10:34"
      :blinking-app="blinkingApp"
    >
      <!-- ── Slack notification (visible until Slack opens at click 5) ──── -->
      <Transition name="toast">
        <SlackNotification
          v-if="showSlackNotif"
          class="absolute right-3 top-6 z-30"
          :avatar-src="avatarSrc"
          :time="new Date(now).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })"
          compact
        />
      </Transition>

      <!-- ── Browser window (click 2 → animates in) ────────────── -->
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

          <!-- macOS context menu (click 4 → drops from the address bar) -->
          <Transition name="menu">
            <MacContextMenu
              v-if="showContextMenu"
              class="absolute z-30"
              style="top: 60px; left: 40px;"
              highlight="Copier"
            />
          </Transition>
        </div>
      </Transition>

      <!-- ── Slack window (click 5 → animates in) ──────────────── -->
      <Transition name="win">
        <div
          v-if="showSlack"
          class="absolute z-20"
          style="top:7%; left:36%; width:60%; height:80%;"
        >
          <SlackWindow
            workspace-name="Bedrock Streaming"
            :active-dm="slackActiveDm"
            :show-paste-menu="slackPasteMenu"
            :link-typed="slackLinkTyped"
            :message-sent="slackMsgSent"
            :arthur-avatar-src="avatarSrc"
            :now="now"
            width="100%"
            height="100%"
          />
        </div>
      </Transition>

    </MacOsFrame>
  </div>
</template>

<style scoped>
/* ── Window appear (browser + Slack) — fade only, no scale ───── */
.win-enter-active {
  transition: opacity 0.38s ease-out;
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

/* ── macOS context menu (quick drop-in from the top) ──────────── */
.menu-enter-active {
  transition: opacity 0.14s ease-out, transform 0.14s ease-out;
  transform-origin: top left;
}
.menu-enter-from {
  opacity: 0;
  transform: scale(0.92) translateY(-4px);
}
.menu-leave-active {
  transition: opacity 0.1s ease-in;
}
.menu-leave-to {
  opacity: 0;
}
</style>
