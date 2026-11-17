<script setup>
import { onSlideLeave, useSlideContext } from '@slidev/client'
import { watch } from 'vue'

const props = defineProps({
  at: { type: Number, required: true },
  method: { type: String, default: 'notify' },
  data: { type: Object, default: () => ({}) },
})

const { $clicks, $renderContext } = useSlideContext()

let fired = false
onSlideLeave(() => { fired = false })

watch($clicks, async (now, prev) => {
  if (now !== props.at || prev !== props.at - 1 || fired || $renderContext.value !== 'slide') return
  fired = true
  const output = await fetch('http://localhost:3000/rpc', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ method: props.method, data: props.data })
  })
  console.info(output)
})
</script>

<template>
</template>
