<script setup>
import { ref } from 'vue'

defineProps({
  name: { type: String, required: true },
  desc: { type: String, default: '' },
  img: { type: String, default: '' },
  icon: { type: String, default: '🛠️' },
})

const imgError = ref(false)
</script>

<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3 w-max max-w-xs border border-gray-100 dark:border-gray-700"
  >
    <img
      v-if="img && !imgError"
      :src="img"
      :alt="name"
      class="w-10 h-10 object-contain shrink-0"
      @error="imgError = true"
    />
    <span v-else class="text-3xl shrink-0 leading-none">{{ icon }}</span>
    <div class="flex flex-col leading-tight">
      <span class="font-mono font-bold text-lg">{{ name }}</span>
      <span v-if="desc" class="text-sm text-gray-500 dark:text-gray-400">{{ desc }}</span>
    </div>
  </div>
</template>
