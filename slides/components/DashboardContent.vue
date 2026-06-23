<!--
  DashboardContent — fake internal analytics dashboard.
  Designed to sit inside BrowserWindow as the "page body".

  Props:
    orgName      String   Brand name in the sidebar header    (default: 'Bedrock Streaming')
    dashTitle    String   Main page heading                   (default: 'Metrics — Today')
    kpis         Array    Array of { label, value, delta, up } overriding defaults

  No slots (fully self-contained visual mock).

  Example (zero-config):
    <DashboardContent />

  Example (custom KPIs):
    <DashboardContent
      org-name="Globex"
      :kpis="[{ label:'Users', value:'8 421', delta:'+5.1%', up:true }]"
    />
-->

<script setup>
import { computed } from 'vue'

const props = defineProps({
  orgName: { type: String, default: 'Bedrock Streaming' },
  dashTitle: { type: String, default: 'Metrics — Today' },
  kpis: {
    type: Array,
    default: () => [
      { label: 'Sessions',      value: '12 437', delta: '+8.2%',  up: true  },
      { label: 'Conversion',    value: '3.41 %', delta: '+0.3 pt', up: true  },
      { label: 'Revenue',       value: '€ 48 291', delta: '+12.4%', up: true  },
      { label: 'Error rate',    value: '0.31 %',  delta: '+0.1 pt', up: false },
    ],
  },
})

// Bar-chart: hourly sessions from 06 h to 17 h
const chartBars = [
  { label: '6h',  v: 48  },
  { label: '7h',  v: 92  },
  { label: '8h',  v: 185 },
  { label: '9h',  v: 312 },
  { label: '10h', v: 445 },
  { label: '11h', v: 489 },
  { label: '12h', v: 367 },
  { label: '13h', v: 302 },
  { label: '14h', v: 378 },
  { label: '15h', v: 412 },
  { label: '16h', v: 356 },
  { label: '17h', v: 238 },
]

const maxV = Math.max(...chartBars.map(b => b.v))

const bars = computed(() =>
  chartBars.map((b, i) => ({
    ...b,
    pct: Math.round((b.v / maxV) * 100),
    // highlight the ~current period (10h = index 4, close to the peak)
    active: i === 4,
  }))
)

// Mini line-spark for "Today vs. yesterday"
// Points as percentage of width/height for a 120×40 viewport
const sparkPoints = [
  [0, 70], [10, 62], [20, 48], [30, 30], [40, 18], [50, 22],
  [60, 35], [70, 28], [80, 20], [90, 15], [100, 20],
].map(([x, y]) => `${x * 1.2},${y * 0.4}`).join(' ')

// Table rows: top pages
const topPages = [
  { path: '/metrics/today',     views: '4 812', change: '+14%' },
  { path: '/reports/weekly',    views: '2 349', change: '+3%'  },
  { path: '/users/active',      views: '1 876', change: '-2%'  },
  { path: '/alerts/critical',   views:   '932', change: '+41%' },
]
</script>

<template>
  <div class="flex h-full" style="background:#f0f2f6; font-family: system-ui, sans-serif;">

    <!-- ── Sidebar ──────────────────────────────────────────────── -->
    <nav
      class="flex flex-col flex-shrink-0"
      style="width:130px; background:#1e2740; padding: 12px 0;"
    >
      <!-- Brand -->
      <div class="px-3 pb-3" style="border-bottom:1px solid rgba(255,255,255,0.08);">
        <div class="flex items-center gap-2">
          <span
            class="flex items-center justify-center rounded w-6 h-6 text-white text-[10px] font-bold flex-shrink-0"
            style="background:#4f80e1;"
          >B</span>
          <span class="text-white text-[11px] font-semibold truncate">{{ orgName }}</span>
        </div>
      </div>

      <!-- Nav items -->
      <ul class="mt-3 flex flex-col gap-0.5 px-2">
        <li
          v-for="(item, i) in [
            { icon: '▦',  label: 'Overview', active: true  },
            { icon: '📈', label: 'Traffic',  active: false },
            { icon: '💰', label: 'Revenue',  active: false },
            { icon: '⚠️', label: 'Alerts',   active: false },
            { icon: '⚙️', label: 'Settings', active: false },
          ]"
          :key="i"
          class="flex items-center gap-2 rounded px-2 py-1.5 cursor-default"
          :style="item.active
            ? 'background: rgba(79,128,225,0.25); color: #93b4f5;'
            : 'color: rgba(255,255,255,0.55);'"
          style="font-size:10px;"
        >
          <span style="font-size:11px; line-height:1;">{{ item.icon }}</span>
          <span class="text-[10px] font-medium">{{ item.label }}</span>
        </li>
      </ul>
    </nav>

    <!-- ── Main ─────────────────────────────────────────────────── -->
    <main class="flex-1 flex flex-col overflow-hidden p-3 gap-2">

      <!-- Page header -->
      <div class="flex items-center justify-between flex-shrink-0">
        <h1 class="text-[13px] font-bold" style="color:#1e2740;">{{ dashTitle }}</h1>
        <div class="flex items-center gap-2">
          <span
            class="text-[9px] rounded-full px-2 py-0.5 font-medium"
            style="background:#dcfce7; color:#15803d;"
          >● Live</span>
          <span class="text-[9px]" style="color:#6b7280;">Last refresh: 2 min ago</span>
        </div>
      </div>

      <!-- KPI cards row -->
      <div class="grid grid-cols-4 gap-2 flex-shrink-0">
        <div
          v-for="(kpi, i) in kpis"
          :key="i"
          class="rounded-lg px-3 py-2 flex flex-col gap-0.5"
          style="background:white; border:1px solid #e5e7eb; box-shadow:0 1px 3px rgba(0,0,0,0.06);"
        >
          <span class="text-[9px] font-medium uppercase tracking-wide" style="color:#9ca3af;">
            {{ kpi.label }}
          </span>
          <span class="text-[15px] font-bold" style="color:#111827; line-height:1.2;">
            {{ kpi.value }}
          </span>
          <span
            class="text-[9px] font-semibold"
            :style="kpi.up ? 'color:#16a34a;' : 'color:#dc2626;'"
          >
            {{ kpi.up ? '▲' : '▼' }} {{ kpi.delta }}
          </span>
        </div>
      </div>

      <!-- Chart + mini panel row -->
      <div class="flex gap-2 flex-1 min-h-0">

        <!-- Bar chart -->
        <div
          class="flex-1 rounded-lg p-3 flex flex-col"
          style="background:white; border:1px solid #e5e7eb; box-shadow:0 1px 3px rgba(0,0,0,0.06);"
        >
          <div class="flex items-center justify-between mb-2 flex-shrink-0">
            <span class="text-[10px] font-semibold" style="color:#374151;">Sessions / heure</span>
            <div class="flex gap-2">
              <span
                v-for="t in ['Aujourd\'hui','Hier']"
                :key="t"
                class="text-[8px] px-1.5 py-0.5 rounded"
                :style="t === 'Aujourd\'hui'
                  ? 'background:#eff6ff; color:#2563eb;'
                  : 'background:#f3f4f6; color:#9ca3af;'"
              >{{ t }}</span>
            </div>
          </div>

          <!-- Bars -->
          <div class="flex items-end gap-1 flex-1 min-h-0">
            <div
              v-for="bar in bars"
              :key="bar.label"
              class="flex-1 flex flex-col items-center gap-0.5"
            >
              <div
                class="w-full rounded-t-sm transition-all"
                :style="{
                  flexGrow: 1,
                  maxHeight: '100%',
                  height: bar.pct + '%',
                  background: bar.active
                    ? '#2563eb'
                    : 'linear-gradient(180deg, #93c5fd 0%, #bfdbfe 100%)',
                  minHeight: '3px',
                }"
              />
              <span class="text-[7px] font-medium" style="color:#9ca3af; line-height:1;">
                {{ bar.label }}
              </span>
            </div>
          </div>
        </div>

        <!-- Right mini-panel: top pages -->
        <div
          class="rounded-lg p-3 flex flex-col flex-shrink-0"
          style="width:155px; background:white; border:1px solid #e5e7eb; box-shadow:0 1px 3px rgba(0,0,0,0.06);"
        >
          <span class="text-[10px] font-semibold mb-2 block flex-shrink-0" style="color:#374151;">
            Top pages
          </span>
          <ul class="flex flex-col gap-2">
            <li
              v-for="(row, i) in topPages"
              :key="i"
              class="flex items-center justify-between"
            >
              <span class="text-[8px] truncate max-w-[90px]" style="color:#4b5563; font-family:monospace;">
                {{ row.path }}
              </span>
              <div class="flex items-center gap-1 flex-shrink-0">
                <span class="text-[8px]" style="color:#6b7280;">{{ row.views }}</span>
                <span
                  class="text-[7px] font-semibold"
                  :style="row.change.startsWith('+') ? 'color:#16a34a;' : 'color:#dc2626;'"
                >{{ row.change }}</span>
              </div>
            </li>
          </ul>

          <!-- Mini sparkline -->
          <div class="mt-auto pt-2">
            <span class="text-[8px] block mb-1" style="color:#9ca3af;">vs hier</span>
            <svg width="100%" height="28" viewBox="0 0 132 28" preserveAspectRatio="none">
              <polyline
                :points="sparkPoints"
                fill="none"
                stroke="#4f80e1"
                stroke-width="1.5"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>

      </div>
    </main>
  </div>
</template>
