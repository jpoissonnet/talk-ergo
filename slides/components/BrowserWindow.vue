<!--
  BrowserWindow — macOS-style browser window mock (Safari / Chrome look).
  Self-contained chrome: traffic lights + address bar + body slot.

  Props:
    url          String   Full URL shown in the address bar
                          (default: 'https://dashboard.internal.acme.co/metrics/today')
    pageTitle    String   Text in the window title bar          (default: 'Metrics — Today')
    width        String   CSS width of the outer frame         (default: '100%')
    height       String   CSS height of the outer frame        (default: '100%')

  Slots:
    default — browser page content (rendered inside the viewport area)

  Example:
    <BrowserWindow url="https://dashboard.internal.acme.co/metrics/today">
      <DashboardContent />
    </BrowserWindow>
-->

<script setup>
defineProps({
  url: {
    type: String,
    default: 'https://dashboard.internal.acme.co/metrics/today',
  },
  pageTitle: {
    type: String,
    default: 'Metrics — Today',
  },
  urlSelected: {
    type: Boolean,
    default: false,
  },
  width: {
    type: String,
    default: '100%',
  },
  height: {
    type: String,
    default: '100%',
  },
})
</script>

<template>
  <div
    class="flex flex-col overflow-hidden rounded-xl shadow-2xl"
    :style="{ width, height, border: '0.5px solid rgba(0,0,0,0.20)' }"
  >
    <!-- ── Title bar ─────────────────────────────────────────────── -->
    <div
      class="flex items-center gap-2 px-3 select-none flex-shrink-0"
      style="
        height: 28px;
        background: linear-gradient(180deg, #f4f4f4 0%, #e8e8e8 100%);
        border-bottom: 1px solid #c4c4c4;
      "
    >
      <!-- Traffic lights -->
      <div class="flex items-center gap-[5px] flex-shrink-0">
        <span class="w-3 h-3 rounded-full block" style="background:#ff5f57; border:0.5px solid rgba(0,0,0,0.12);" />
        <span class="w-3 h-3 rounded-full block" style="background:#ffbd2e; border:0.5px solid rgba(0,0,0,0.12);" />
        <span class="w-3 h-3 rounded-full block" style="background:#28c840; border:0.5px solid rgba(0,0,0,0.12);" />
      </div>

      <!-- Page title (centered) -->
      <span class="flex-1 text-center text-[11px] font-medium truncate" style="color:#5a5a5a;">
        {{ pageTitle }}
      </span>

      <!-- Spacer mirror -->
      <div style="width:42px;" />
    </div>

    <!-- ── Toolbar / address bar ─────────────────────────────────── -->
    <div
      class="flex items-center gap-2 px-3 flex-shrink-0"
      style="
        height: 36px;
        background: #f0f0f0;
        border-bottom: 1px solid #d0d0d0;
      "
    >
      <!-- Back / Forward -->
      <div class="flex items-center gap-0.5 flex-shrink-0">
        <button
          class="flex items-center justify-center rounded w-5 h-5 text-gray-400 hover:bg-gray-200 text-sm leading-none"
          style="font-size:14px; line-height:1;"
        >‹</button>
        <button
          class="flex items-center justify-center rounded w-5 h-5 text-gray-300 text-sm leading-none"
          style="font-size:14px; line-height:1;"
        >›</button>
      </div>

      <!-- Address bar pill -->
      <div
        class="flex-1 flex items-center gap-1.5 rounded-md px-2"
        style="
          height: 24px;
          background: white;
          border: 1px solid #c8c8c8;
          box-shadow: inset 0 1px 2px rgba(0,0,0,0.06);
        "
      >
        <!-- Lock icon -->
        <svg width="10" height="11" viewBox="0 0 10 11" fill="none" style="flex-shrink:0;">
          <rect x="1.5" y="5" width="7" height="5.5" rx="1" fill="#6c757d"/>
          <path d="M2.5 5V3.5a2.5 2.5 0 0 1 5 0V5" stroke="#6c757d" stroke-width="1.2" fill="none"/>
        </svg>
        <span
          class="text-[10px] truncate"
          :style="urlSelected
            ? 'color:#fff; background:#3477f5; padding:1px 2px; margin: -1px -2px; letter-spacing:0.01em;'
            : 'color:#333; letter-spacing:0.01em;'"
        >
          {{ url }}
        </span>
      </div>

      <!-- Reload icon -->
      <button class="flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-400 hover:text-gray-600 text-sm">
        ↻
      </button>

      <!-- Tabs icon placeholder -->
      <div class="flex-shrink-0 flex gap-[3px]">
        <span class="w-1 h-1 rounded-full bg-gray-400 block" />
        <span class="w-1 h-1 rounded-full bg-gray-400 block" />
        <span class="w-1 h-1 rounded-full bg-gray-400 block" />
      </div>
    </div>

    <!-- ── Page viewport ─────────────────────────────────────────── -->
    <div class="flex-1 overflow-hidden">
      <slot />
    </div>
  </div>
</template>
