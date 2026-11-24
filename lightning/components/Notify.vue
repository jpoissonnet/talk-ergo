<!--
  Notify — shows the fake desktop notification (drawn by ../global-top.vue) when the slide
  reaches click `at`. It only fires when stepping forward onto that click, in the audience view
  and in the presenter view's current-slide pane (never in the next-slide preview or overview).

  Usage:
    <Notify :at="3" author="Arthur Gaudard" app-name="Slack" msg="Have a minute?" />
-->

<script setup lang="ts">
import { onSlideLeave, useSlideContext } from '@slidev/client'
import { watch } from 'vue'
import { notify } from '../utils/notification'

const props = withDefaults(defineProps<{
  at: number
  author?: string
  appName?: string
  channel?: string
  msg?: string
  icon?: string
  duration?: number
}>(), {
  author: 'Arthur Gaudard',
  appName: 'Slack',
  channel: 'Direct message',
  msg: 'I need you!!!',
  icon: '/slack.png',
  duration: 6000,
})

const { $clicks, $renderContext } = useSlideContext()

let fired = false
onSlideLeave(() => { fired = false })

watch($clicks, (now, prev) => {
  if (now !== props.at || prev !== props.at - 1 || fired || !['slide', 'presenter'].includes($renderContext.value)) return
  fired = true
  notify({ author: props.author, appName: props.appName, channel: props.channel, msg: props.msg, icon: props.icon }, props.duration)
})
</script>

<template>
</template>
