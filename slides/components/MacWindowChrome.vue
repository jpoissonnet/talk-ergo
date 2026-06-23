<!--
  MacWindowChrome — reusable macOS window title-bar + traffic-light dots.
  Compose this inside any window-style component.

  Props:
    title   String   Text shown centered in the title bar   (default: 'Window')

  Slots:
    default — everything below the title bar

  Example:
    <MacWindowChrome title="Finder">
      <div class="p-4 bg-white">Hello</div>
    </MacWindowChrome>
-->

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Window',
  },
})
</script>

<template>
  <div class="flex flex-col overflow-hidden rounded-xl shadow-2xl" style="border: 0.5px solid rgba(0,0,0,0.18);">
    <!-- ── Title bar ─────────────────────────────────────────────── -->
    <div
      class="flex items-center gap-2 px-3 flex-shrink-0 select-none"
      style="
        height: 28px;
        background: linear-gradient(180deg, #f4f4f4 0%, #e8e8e8 100%);
        border-bottom: 1px solid #c8c8c8;
      "
    >
      <!-- Traffic lights -->
      <div class="flex items-center gap-[5px]">
        <span
          class="w-3 h-3 rounded-full block flex-shrink-0"
          style="background: #ff5f57; border: 0.5px solid rgba(0,0,0,0.12);"
        />
        <span
          class="w-3 h-3 rounded-full block flex-shrink-0"
          style="background: #ffbd2e; border: 0.5px solid rgba(0,0,0,0.12);"
        />
        <span
          class="w-3 h-3 rounded-full block flex-shrink-0"
          style="background: #28c840; border: 0.5px solid rgba(0,0,0,0.12);"
        />
      </div>

      <!-- Centered title -->
      <span class="flex-1 text-center text-[11px] font-medium" style="color: #5a5a5a;">
        {{ title }}
      </span>

      <!-- Mirror spacer so title stays centered -->
      <div style="width: 42px;" />
    </div>

    <!-- ── Body slot ─────────────────────────────────────────────── -->
    <slot />
  </div>
</template>
