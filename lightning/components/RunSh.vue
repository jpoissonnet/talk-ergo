<script setup>
import { useSlideContext } from '@slidev/client'
import { watch } from 'vue'

const { $clicks } = useSlideContext()

watch(() => $clicks.value == 3, async () => {
  const output = await fetch('http://localhost:3000/rpc', {
    method: "POST",
    body: "cacahuètes"
  })
  console.info(output)
})

</script>

<template>
  <h1>Pouetpouet</h1>
  <h1 v-if="$clicks > 4">cacahuètes</h1>
</template>

<style scoped></style>
