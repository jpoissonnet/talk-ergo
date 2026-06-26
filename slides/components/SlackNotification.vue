<!--
  SlackNotification — a macOS-style Slack notification toast.
  Reused on the "interruption" slide and inside ArthurSlow.

  Props:
    name        String   Sender name                       (default: 'Arthur Gaudard')
    message     String   Notification body (HTML allowed)   (default: urgent dashboard ask)
    avatarSrc   String   Avatar image URL. Falls back to initials when empty/broken.
    initials    String   Initials shown when no avatar      (default: 'AG')
    time        String   Timestamp text. When empty, shows the current local time.
    compact     Boolean  Smaller padding/text (used in the dense ArthurSlow layout)

  Positioning & animation are left to the caller via class / v-motion on the host tag:
    <SlackNotification class="absolute right-4 top-4" v-click="4" v-motion ... />
-->

<template>
  <div
    class="flex items-start rounded-lg shadow-lg border border-gray-300"
    :class="compact ? 'gap-3 px-4 py-3 max-w-xs' : 'gap-4 px-6 py-4 max-w-xl'"
    :style="cardStyle"
  >
    <!-- Avatar (image with initials fallback) -->
    <img
      v-if="avatarSrc && !imgFailed"
      :src="avatarSrc"
      :alt="name"
      class="rounded-full object-cover mt-1 flex-shrink-0"
      :class="compact ? 'w-8 h-8' : 'w-10 h-10'"
      style="background: rgba(244,244,244,0.3);"
      @error="imgFailed = true"
    />
    <div
      v-else
      class="rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mt-1"
      :class="compact ? 'w-8 h-8 text-xs' : 'w-10 h-10 text-sm'"
      style="background: linear-gradient(135deg,#4a90d9,#2c6fb0);"
    >
      {{ initials }}
    </div>

    <div>
      <div class="flex items-baseline justify-between gap-2">
        <div class="flex items-center gap-2">
          <span class="font-semibold text-black" :class="compact ? 'text-sm' : 'text-lg'">{{ name }}</span>
          <span class="flex items-center gap-1 text-gray-800" :class="compact ? 'text-xs' : 'text-base'">
            <img
              src="https://a.slack-edge.com/80588/marketing/img/meta/slack_hash_256.png"
              alt="Slack logo"
              class="rounded inline-block"
              :class="compact ? 'w-3 h-3' : 'w-4 h-4'"
              style="vertical-align: middle;"
            />
            via Slack
          </span>
        </div>
        <span class="ml-2 text-gray-500" :class="compact ? 'text-xs' : 'text-base'">{{ displayTime }}</span>
      </div>
      <div class="text-gray-900" :class="compact ? 'mt-0.5 text-sm' : 'mt-1.5 text-lg leading-snug'" v-html="message"></div>
    </div>

    <!-- notification dot -->
    <span
      class="absolute bg-red-500 rounded-full border-2 border-white"
      :class="compact ? 'top-1.5 right-1.5 w-2.5 h-2.5' : 'top-2 right-2 w-3 h-3'"
    ></span>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  name: { type: String, default: 'Arthur Gaudard' },
  message: {
    type: String,
    default: '🚨 <span class="font-semibold">Urgent :</span> il me faut le lien du dashboard de ce matin',
  },
  avatarSrc: { type: String, default: '' },
  initials: { type: String, default: 'AG' },
  time: { type: String, default: '' },
  compact: { type: Boolean, default: false },
})

const imgFailed = ref(false)

const displayTime = computed(
  () =>
    props.time ||
    new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
)

const cardStyle = `
  background: linear-gradient(135deg, rgba(228,228,233,0.8) 0%, rgba(214,214,222,0.7) 100%);
  border: 1px solid rgba(255,255,255,0.4);
  box-shadow: 20px 8px 32px 0 rgba(31,38,135,0.18), inset 0 1px 0 rgba(255,255,255,0.5);
  backdrop-filter: blur(24px) saturate(160%);
  -webkit-backdrop-filter: blur(24px) saturate(160%);
`
</script>
