<!--
  MacOsFrame — full macOS desktop mockup: wallpaper + menu bar + dock.
  Place this as the root element of a `layout: none` slide to get a complete
  screen-in-slide effect.

  Props:
    appName      String   Active application shown in the menu bar   (default: 'Safari')
    time         String   Clock string in the menu bar               (default: '10:34')
    showDock     Boolean  Show the bottom dock                       (default: true)
    blinkingApp  String   Label of the dock icon to highlight        (default: '')
                          Pass a dock label (e.g. 'Arc' or 'Slack') to draw a red
                          rectangle border around that icon. Clear it ('') to stop.

  Slots:
    default — desktop content (windows, notifications, etc.)

  Example:
    <MacOsFrame app-name="Safari" time="10:34" :blinking-app="blinkingApp">
      <BrowserWindow ...><DashboardContent /></BrowserWindow>
    </MacOsFrame>
-->

<script setup>
const props = defineProps({
  appName:     { type: String,  default: 'Safari' },
  time:        { type: String,  default: '10:34'  },
  showDock:    { type: Boolean, default: true      },
  blinkingApp: { type: String,  default: ''        },
})

// Dock icon definitions — real macOS icons (extracted to /public/dock/).
// `img` points at the bundled PNG; `label` must match `blinkingApp` to bounce.
const dockIcons = [
  { img: '/dock/calendar.png', label: 'Calendar' },
  { img: '/dock/arc.png',      label: 'Arc'      },   // ← browser used in the scene
  { img: '/dock/spark.png',    label: 'Spark'    },
  { img: '/dock/spotify.png',  label: 'Spotify'  },
  { img: '/dock/slack.png',    label: 'Slack'    },
]
</script>

<template>
  <div
    class="relative w-full h-full overflow-hidden flex flex-col select-none"
    style="
      background: linear-gradient(210deg, rgb(142, 199, 251), rgb(28, 85, 170));
    "
  >
    <!-- ── Wallpaper texture overlay ─────────────────────────────── -->
    <div
      class="absolute inset-0 pointer-events-none"
      style="
        background-image: url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/><feColorMatrix type=%22saturate%22 values=%220%22/></filter><rect width=%22200%22 height=%22200%22 filter=%22url(%23n)%22 opacity=%220.04%22/></svg>');
        opacity: 0.5;
        mix-blend-mode: overlay;
      "
    />

    <!-- ── Menu bar ──────────────────────────────────────────────── -->
    <div
      class="relative z-10 flex items-center flex-shrink-0 px-3"
      style="
        height: 22px;
        background: rgba(240,240,240,0.82);
        backdrop-filter: blur(20px) saturate(180%);
        -webkit-backdrop-filter: blur(20px) saturate(180%);
        border-bottom: 0.5px solid rgba(0,0,0,0.12);
      "
    >
      <!-- Left: Apple logo + app menu -->
      <div class="flex items-center gap-3">
        <svg width="13" height="16" viewBox="0 0 170 210" style="flex-shrink:0;">
          <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.197-2.12-9.973-3.17-14.34-3.17-4.58 0-9.492 1.05-14.746 3.17-5.262 2.13-9.501 3.24-12.742 3.35-4.929 0.21-9.842-1.96-14.746-6.52-3.13-2.73-7.045-7.41-11.735-14.04-5.032-7.08-9.169-15.29-12.41-24.65-3.471-10.11-5.211-19.9-5.211-29.378 0-10.857 2.346-20.221 7.045-28.068 3.693-6.303 8.606-11.275 14.755-14.925s12.793-5.51 19.948-5.629c3.915 0 9.049 1.211 15.429 3.591 6.362 2.388 10.447 3.599 12.238 3.599 1.339 0 5.877-1.416 13.57-4.239 7.275-2.618 13.415-3.702 18.445-3.275 13.63 1.1 23.87 6.473 30.68 16.153-12.19 7.386-18.22 17.731-18.1 31.002 0.11 10.337 3.86 18.939 11.23 25.769 3.34 3.17 7.07 5.62 11.22 7.36-0.9 2.61-1.85 5.11-2.86 7.51zM119.11 7.24c0 8.102-2.96 15.667-8.86 22.669-7.12 8.324-15.732 13.134-25.071 12.375-0.119-0.972-0.188-1.995-0.188-3.07 0-7.778 3.386-16.102 9.399-22.908 3.002-3.446 6.82-6.311 11.45-8.597 4.62-2.252 8.99-3.497 13.1-3.71 0.12 1.083 0.17 2.166 0.17 3.241z" fill="#1d1d1f"/>
        </svg>
        <span class="text-[11px] font-semibold" style="color:#111;">{{ appName }}</span>
        <div class="flex items-center gap-3">
          <span v-for="item in ['File','Edit','View','Bookmarks','Window','Help']" :key="item" class="text-[11px]" style="color:#333;">{{ item }}</span>
        </div>
      </div>

      <div class="flex-1" />

      <!-- Right: status icons + clock -->
      <div class="flex items-center gap-2.5">
        <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
          <path d="M7 9.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" fill="#333"/>
          <path d="M4.2 7.1A3.9 3.9 0 0 1 7 5.9a3.9 3.9 0 0 1 2.8 1.2" stroke="#333" stroke-width="1.1" fill="none" stroke-linecap="round"/>
          <path d="M1.8 4.9A6.5 6.5 0 0 1 7 2.9a6.5 6.5 0 0 1 5.2 2" stroke="#333" stroke-width="1.1" fill="none" stroke-linecap="round"/>
          <path d="M0 2.7A9.3 9.3 0 0 1 7 0a9.3 9.3 0 0 1 7 2.7" stroke="#333" stroke-width="1.1" fill="none" stroke-linecap="round"/>
        </svg>
        <div class="flex items-center">
          <div class="rounded-sm flex items-center" style="width:22px;height:11px;border:1.2px solid #333;padding:1.5px;position:relative;">
            <div style="width:73%;height:100%;background:#333;border-radius:1px;" />
            <div style="position:absolute;right:-4px;top:50%;transform:translateY(-50%);width:2.5px;height:5px;background:#333;border-radius:0 1px 1px 0;" />
          </div>
        </div>
        <span class="text-[11px] font-medium" style="color:#111;">{{ time }}</span>
      </div>
    </div>

    <!-- ── Desktop area ──────────────────────────────────────────── -->
    <div class="relative flex-1 overflow-hidden">
      <slot />
    </div>

    <!-- ── Dock ─────────────────────────────────────────────────── -->
    <div
      v-if="showDock"
      class="relative z-10 flex items-end justify-center flex-shrink-0 pb-1"
      style="height:68px;"
    >
      <div
        class="flex items-end gap-1.5 px-3 py-1.5 rounded-2xl"
        style="
          background: rgba(255,255,255,0.22);
          backdrop-filter: blur(24px) saturate(160%);
          -webkit-backdrop-filter: blur(24px) saturate(160%);
          border: 0.5px solid rgba(255,255,255,0.35);
          box-shadow: 0 4px 24px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.3);
        "
      >
        <!-- Each dock icon wrapper — gets a red border when blinkingApp matches -->
        <div
          v-for="icon in dockIcons"
          :key="icon.label"
          class="flex flex-col items-center cursor-default"
          :title="icon.label"
        >
          <!-- Real macOS app icon (red highlight border when active) -->
          <div
            class="flex items-center justify-center rounded-xl"
            :style="blinkingApp === icon.label
              ? 'width:42px;height:42px;border:2.5px solid #ff3b30;box-shadow:0 0 0 1px rgba(255,59,48,0.4),0 0 8px rgba(255,59,48,0.5);'
              : 'width:42px;height:42px;border:2.5px solid transparent;'"
          >
            <img
              :src="icon.img"
              :alt="icon.label"
              class="rounded-xl"
              style="
                width:38px; height:38px;
                object-fit: contain;
                filter: drop-shadow(0 2px 4px rgba(0,0,0,0.28));
              "
            />
          </div>

          <!-- Running dot -->
          <span class="w-1 h-1 rounded-full mt-0.5 block" style="background:rgba(255,255,255,0.7);" />
        </div>
      </div>
    </div>
  </div>
</template>


