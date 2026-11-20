<!--
  SearchPrompt — a parody "Degoogle" search page whose placeholder cycles through tools.

  Usage:
    <SearchPrompt :prompts="[
      { prefix: 'what\'s an alternative to', tools: ['figma', 'gmail'] },
      { prefix: 'what\'s the ancestor of', tools: ['git', 'vim'] },
    ]" />
  Slide click n shows prompt n (the last one stays); give the slide `clicks: <prompts length - 1>`.
-->

<script setup lang="ts">
import { computed, onUnmounted, ref, watch } from 'vue'
import { useIsSlideActive, useSlideContext } from '@slidev/client'

type Prompt = { prefix: string, tools: string[] }

const props = withDefaults(defineProps<{ prompts: Prompt[], every?: number }>(), { every: 1400 })

const LOGO = [
  { char: 'D', color: '#5f6368' },
  { char: 'e', color: '#5f6368' },
  { char: 'g', color: '#4285f4' },
  { char: 'o', color: '#ea4335' },
  { char: 'o', color: '#fbbc05' },
  { char: 'g', color: '#4285f4' },
  { char: 'l', color: '#34a853' },
  { char: 'e', color: '#ea4335' },
]

const { $clicks } = useSlideContext()
const active = useIsSlideActive()

const prompt = computed(() => props.prompts[Math.min($clicks.value, props.prompts.length - 1)])
const index = ref(0)
const tool = computed(() => prompt.value.tools[index.value % prompt.value.tools.length])

let timer: ReturnType<typeof setInterval> | undefined
watch(active, (on) => {
  clearInterval(timer)
  if (on) timer = setInterval(() => index.value++, props.every)
}, { immediate: true })
watch(prompt, () => { index.value = 0 })
onUnmounted(() => clearInterval(timer))
</script>

<template>
  <div class="search-prompt">
    <div class="logo">
      <span v-for="(l, i) in LOGO" :key="i" :style="{ color: l.color }">{{ l.char }}</span>
    </div>

    <div class="bar">
      <span class="i-carbon-search icon" />
      <Transition name="fade" mode="out-in">
        <span :key="prompt.prefix" class="placeholder">
          {{ prompt.prefix }}
          <Transition name="tool" mode="out-in">
            <strong :key="tool" class="tool">{{ tool }}</strong>
          </Transition>
        </span>
      </Transition>
    </div>

    <div class="buttons">
      <span>Search elsewhere</span>
      <span>I'm Feeling Curious</span>
    </div>
  </div>
</template>

<style scoped>
.search-prompt {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
}

.logo {
  font-size: 7rem;
  font-weight: 500;
  letter-spacing: -0.04em;
  line-height: 1;
}

.bar {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 48rem;
  padding: 1rem 1.8rem;
  border: 1px solid #dfe1e5;
  border-radius: 999px;
  background: white;
  box-shadow: 0 1px 6px rgb(32 33 36 / 0.28);
  font-size: 2.2rem;
  white-space: nowrap;
  overflow: hidden;
}

.icon {
  flex-shrink: 0;
  color: #9aa0a6;
}

.placeholder {
  color: #70757a;
}

.tool {
  display: inline-block;
  color: #1a73e8;
  font-weight: 700;
}

.buttons {
  display: flex;
  gap: 1rem;
}

.buttons span {
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  background: #f8f9fa;
  border: 1px solid #f8f9fa;
  color: #3c4043;
  font-size: 1.1rem;
}

.tool-enter-active,
.tool-leave-active {
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.tool-enter-from {
  transform: translateY(0.6em);
  opacity: 0;
}

.tool-leave-to {
  transform: translateY(-0.6em);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
