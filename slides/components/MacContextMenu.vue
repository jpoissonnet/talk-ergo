<!--
  MacContextMenu — a macOS-style right-click context menu (Safari link menu).
  Pure CSS, no external images. The item matching `highlight` gets the blue
  selection background (as if hovered/about to be clicked).

  Props:
    highlight   String   Label of the item to highlight blue   (default: 'Copy')

  Positioning is left to the caller via class / style on the host tag:
    <MacContextMenu class="absolute" style="top:120px; left:200px;" highlight="Copy" />
-->

<script setup>
defineProps({
  highlight: { type: String, default: 'Copier' },
})

// null entries render as separators
const items = [
  { label: 'Ouvrir le lien', icon: '' },
  { label: 'Ouvrir avec', icon: '', submenu: true },
  null,
  { label: 'Rechercher avec Google', icon: '🔍' },
  null,
  { label: 'Couper', icon: '✂️' },
  { label: 'Copier', icon: '⌘' },
  { label: 'Coller', icon: '' },
  { label: 'Partager…', icon: '􀈂', submenu: true },
  null,
  { label: 'Orthographe et grammaire', icon: 'Abc', submenu: true },
  { label: 'Substitutions', icon: '', submenu: true },
  { label: 'Transformations', icon: 'Abc', submenu: true },
  { label: 'Parole', icon: '', submenu: true },
  null,
  { label: 'Remplissage auto', icon: '' },
  { label: 'Services', icon: '', submenu: true },
]
</script>

<template>
  <div
    class="rounded-lg py-1 select-none"
    style="
      width: 220px;
      background: rgba(246, 246, 246, 0.86);
      backdrop-filter: blur(24px) saturate(180%);
      -webkit-backdrop-filter: blur(24px) saturate(180%);
      border: 0.5px solid rgba(0, 0, 0, 0.18);
      box-shadow: 0 10px 32px rgba(0, 0, 0, 0.28), 0 0 0 0.5px rgba(0,0,0,0.05);
      font-size: 12px;
    "
  >
    <template v-for="(item, i) in items" :key="i">
      <!-- separator -->
      <div
        v-if="item === null"
        class="my-1"
        style="height: 0.5px; background: rgba(0,0,0,0.12); margin-left: 8px; margin-right: 8px;"
      />
      <!-- menu row -->
      <div
        v-else
        class="flex items-center gap-2 mx-1 px-2 rounded"
        :style="item.label === highlight
          ? 'background:#3477f5; color:#fff; height:22px;'
          : 'color:#1d1d1f; height:22px;'"
      >
        <span
          class="inline-block text-center flex-shrink-0"
          style="width: 16px; font-size: 11px; opacity: 0.85;"
        >{{ item.icon }}</span>
        <span class="flex-1 truncate">{{ item.label }}</span>
        <span
          v-if="item.submenu"
          class="flex-shrink-0"
          :style="item.label === highlight ? 'color:#fff;' : 'color:#8a8a8e;'"
          style="font-size: 10px;"
        >›</span>
      </div>
    </template>
  </div>
</template>
