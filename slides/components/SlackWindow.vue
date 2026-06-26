<!--
  SlackWindow — macOS-style Slack app window mockup.
  Self-contained chrome (traffic lights + title bar) — does NOT wrap MacWindowChrome
  to avoid double-wrapper / height issues (same pattern as BrowserWindow).

  Props:
    workspaceName   String   Name shown at the top of the dark sidebar   (default: 'Bedrock Streaming')
    activeDm        String   Sidebar DM item to highlight AND show in the
                             conversation pane.  Pass '' for no selection.
                             (default: '')
    width           String   CSS width of the outer frame                (default: '100%')
    height          String   CSS height of the outer frame               (default: '100%')

  No slots — fully self-contained Slack mockup.

  Example (no selection):
    <SlackWindow />

  Example (Arthur's conversation open, animated sidebar highlight + conversation):
    <SlackWindow active-dm="Arthur Gaudard" />
-->

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  workspaceName:     { type: String,  default: 'Bedrock Streaming' },
  activeDm:          { type: String,  default: ''                  },
  showPasteMenu:     { type: Boolean, default: false               }, // click 8: context menu over input
  linkTyped:         { type: Boolean, default: false               }, // click 9: URL in input bar
  messageSent:       { type: Boolean, default: false               }, // click 10: sent as bubble
  arthurAvatarSrc:   { type: String,  default: ''                  },
  now:               { type: Number,  default: () => Date.now()    }, // refreshed by parent on slide enter
  width:             { type: String,  default: '100%'              },
  height:            { type: String,  default: '100%'              },
  // ArthurFast additions:
  showSearchOverlay: { type: Boolean, default: false               }, // click 7+8: Slack search modal
  searchTyped:       { type: Boolean, default: false               }, // click 8: "Gaud" typed + result highlighted
  pastedItems:       { type: Array,   default: () => []            }, // click 10+11: items in input bar
  sentItems:         { type: Array,   default: () => []            }, // click 12: items in sent bubble
})

const arthurAvatar    = computed(() => props.arthurAvatarSrc)
const arthurImgFailed = ref(false)

// Relative timestamps — recomputed whenever `now` changes (i.e. on slide enter)
function relativeTime(minutesAgo) {
  const d = new Date(props.now - minutesAgo * 60 * 1000)
  return d.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
}

const timeFirst  = computed(() => relativeTime(22))  // Arthur's first message
const timeSecond = computed(() => relativeTime(3))   // Arthur's urgent message
const timeReply  = computed(() => relativeTime(0))   // Jules's reply (now)

const channels = [
  { name: 'général',  unread: false },
  { name: 'random',   unread: false },
  { name: 'dev-ops',  unread: true  },
]

const dms = [
  { name: 'Arthur Gaudard', online: true,  unread: true  },
  { name: 'Marie Dupont',   online: true,  unread: false },
  { name: 'Tom Bernard',    online: false, unread: false },
]

const arthurMessages = computed(() => [
  {
    text: 'Salut ! Tu peux m\'envoyer le lien du dashboard de ce matin ?',
    time: timeFirst.value,
    bold: false,
  },
  {
    text: '🚨 Urgent : il me faut le lien du dashboard de ce matin',
    time: timeSecond.value,
    bold: true,
  },
])

const showArthur     = computed(() => props.activeDm === 'Arthur Gaudard')
const activeConvName = computed(() => props.activeDm || '#général')
const replyUrl       = 'https://dashboard.internal.bedrock.tech/metrics/today'
</script>

<template>
  <div
    class="flex flex-col overflow-hidden rounded-xl shadow-2xl"
    :style="{
      width,
      height,
      border: '0.5px solid rgba(0,0,0,0.22)',
    }"
  >
    <!-- ── Title bar (traffic lights + title) ────────────────────── -->
    <div
      class="flex items-center gap-2 px-3 select-none flex-shrink-0"
      style="
        height: 28px;
        background: linear-gradient(180deg, #f4f4f4 0%, #e8e8e8 100%);
        border-bottom: 1px solid #c4c4c4;
      "
    >
      <div class="flex items-center gap-[5px] flex-shrink-0">
        <span class="w-3 h-3 rounded-full block" style="background:#ff5f57;border:0.5px solid rgba(0,0,0,0.12);" />
        <span class="w-3 h-3 rounded-full block" style="background:#ffbd2e;border:0.5px solid rgba(0,0,0,0.12);" />
        <span class="w-3 h-3 rounded-full block" style="background:#28c840;border:0.5px solid rgba(0,0,0,0.12);" />
      </div>
      <span class="flex-1 text-center text-[11px] font-medium truncate" style="color:#5a5a5a;">
        {{ activeDm ? activeDm + ' — Slack' : 'Slack' }}
      </span>
      <div style="width:42px;" />
    </div>

    <!-- ── App body: sidebar + pane ──────────────────────────────── -->
    <div class="flex flex-1 overflow-hidden" style="min-height:0;">

      <!-- ── Left sidebar ──────────────────────────────────────── -->
      <nav
        class="flex flex-col flex-shrink-0 overflow-hidden"
        style="width:185px; background:#3f0e40;"
      >
        <!-- Workspace header -->
        <div
          class="flex items-center gap-2 px-3 flex-shrink-0"
          style="height:44px; border-bottom:1px solid rgba(255,255,255,0.10);"
        >
          <div
            class="flex items-center justify-center rounded-md text-white font-bold flex-shrink-0"
            style="width:24px;height:24px;background:#611f69;font-size:11px;"
          >{{ workspaceName[0] }}</div>
          <span class="text-white font-bold text-[12px] truncate">{{ workspaceName }}</span>
          <span class="ml-auto text-[11px]" style="color:rgba(255,255,255,0.45);">▾</span>
        </div>

        <div class="flex-1 overflow-hidden px-2 py-2 flex flex-col gap-0.5">

          <!-- Channels -->
          <div class="flex items-center gap-1 px-1 mb-1">
            <span class="text-[9px] font-semibold uppercase tracking-wider" style="color:rgba(255,255,255,0.45);">Channels</span>
            <span class="ml-auto text-[11px] font-bold" style="color:rgba(255,255,255,0.35);">+</span>
          </div>

          <div
            v-for="ch in channels"
            :key="ch.name"
            class="flex items-center gap-1.5 rounded px-2 cursor-default"
            style="height:24px;"
          >
            <span class="text-[10px]" style="color:rgba(255,255,255,0.45);">#</span>
            <span
              class="text-[11px] truncate"
              :style="ch.unread ? 'color:white;font-weight:600;' : 'color:rgba(255,255,255,0.65);'"
            >{{ ch.name }}</span>
            <span v-if="ch.unread" class="ml-auto w-1.5 h-1.5 rounded-full" style="background:#e01e5a;" />
          </div>

          <!-- Direct Messages -->
          <div class="flex items-center gap-1 px-1 mt-2 mb-1">
            <span class="text-[9px] font-semibold uppercase tracking-wider" style="color:rgba(255,255,255,0.45);">Messages directs</span>
          </div>

          <div
            v-for="dm in dms"
            :key="dm.name"
            class="flex items-center gap-1.5 rounded px-2 cursor-default"
            style="height:26px; transition: background 0.25s ease;"
            :style="{
              background: activeDm === dm.name ? 'rgba(255,255,255,0.16)' : 'transparent',
            }"
          >
            <!-- Online dot -->
            <span
              class="w-2 h-2 rounded-full flex-shrink-0"
              :style="dm.online
                ? 'background:#2bac76;'
                : 'border:1.5px solid rgba(255,255,255,0.35);'"
            />
            <span
              class="text-[11px] truncate flex-1"
              :style="activeDm === dm.name
                ? 'color:white;font-weight:600;'
                : dm.unread
                  ? 'color:white;font-weight:600;'
                  : 'color:rgba(255,255,255,0.65);'"
            >{{ dm.name }}</span>
            <span
              v-if="dm.unread && activeDm !== dm.name"
              class="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style="background:#e01e5a;"
            />
          </div>
        </div>
      </nav>

      <!-- ── Conversation pane ──────────────────────────────────── -->
      <div class="flex flex-col flex-1 overflow-hidden relative" style="background:#1a1d21; min-width:0;">

        <!-- Pane header -->
        <div
          class="flex items-center gap-2 px-4 flex-shrink-0"
          style="height:44px; border-bottom:1px solid rgba(255,255,255,0.08);"
        >
          <span class="font-bold text-[13px]" style="color:white;">{{ activeConvName }}</span>
          <span v-if="showArthur" class="text-[10px]" style="color:rgba(255,255,255,0.40);">Message direct</span>
        </div>

        <!-- Messages (transitions when activeDm changes) -->
        <div class="flex-1 overflow-hidden relative">
          <Transition name="conv-slide">
            <!-- Arthur's conversation -->
            <div
              v-if="showArthur"
              key="arthur"
              class="absolute inset-0 flex flex-col justify-end px-4 py-3 gap-3 overflow-hidden"
            >
              <div
                v-for="(msg, i) in arthurMessages"
                :key="i"
                class="flex items-start gap-2"
              >
                <!-- Arthur's avatar: real photo with initials fallback -->
                <div class="relative flex-shrink-0" style="margin-top:1px;">
                  <img
                    v-if="!arthurImgFailed"
                    :src="arthurAvatar"
                    class="rounded-md object-cover"
                    style="width:26px;height:26px;"
                    @error="arthurImgFailed = true"
                  />
                  <div
                    v-else
                    class="rounded-md flex items-center justify-center text-white text-[9px] font-bold"
                    style="width:26px;height:26px;background:linear-gradient(135deg,#4a90d9,#2c6fb0);"
                  >AG</div>
                </div>
                <div class="flex flex-col min-w-0">
                  <div class="flex items-baseline gap-2">
                    <span class="text-[11px] font-bold" style="color:white;">Arthur Gaudard</span>
                    <span class="text-[9px]" style="color:rgba(255,255,255,0.32);">{{ msg.time }}</span>
                  </div>
                  <p
                    class="text-[11px] mt-0.5 leading-relaxed"
                    :style="msg.bold ? 'color:white;font-weight:600;' : 'color:rgba(255,255,255,0.80);'"
                  >{{ msg.text }}</p>
                </div>
              </div>

              <!-- Sent reply (click 10) — appears and sends in one click -->
              <Transition name="reply-slide">
                <div v-if="messageSent" class="flex items-start gap-2">
                  <img
                    src="/jules.png"
                    class="rounded-md object-cover flex-shrink-0"
                    style="width:26px;height:26px;margin-top:1px;"
                  />
                  <div class="flex flex-col min-w-0">
                    <div class="flex items-baseline gap-2">
                      <span class="text-[11px] font-bold" style="color:white;">Jules Poissonnet</span>
                      <span class="text-[9px]" style="color:rgba(255,255,255,0.32);">{{ timeReply }}</span>
                    </div>
                    <!-- ArthurFast: sentItems shows thumbnail + URL -->
                    <div v-if="sentItems.length > 0" class="flex flex-col gap-1.5 mt-1">
                      <template v-for="(item, i) in sentItems" :key="i">
                        <span v-if="item.type === 'screenshot'" class="sent-thumb">📊</span>
                        <span v-else-if="item.type === 'url'" class="text-[11px]" style="color:#5ac8fa;">{{ item.value }}</span>
                      </template>
                    </div>
                    <!-- ArthurSlow: just the URL -->
                    <p v-else class="text-[11px] mt-0.5 leading-relaxed" style="color:#5ac8fa;">{{ replyUrl }}</p>
                  </div>
                </div>
              </Transition>
            </div>

            <!-- Empty / default state -->
            <div
              v-else
              key="empty"
              class="absolute inset-0 flex flex-col items-center justify-center gap-2"
            >
              <span class="text-4xl opacity-30">💬</span>
              <p class="text-[11px]" style="color:rgba(255,255,255,0.25);">Sélectionne une conversation</p>
            </div>
          </Transition>
        </div>

        <!-- ── Slack search overlay (ArthurFast click 7) ─────────── -->
        <Transition name="search-overlay">
          <div
            v-if="showSearchOverlay"
            class="absolute inset-0 z-50 flex items-center justify-center"
            style="background:rgba(0,0,0,0.40);"
          >
            <div class="slack-search-box">
              <!-- Search input -->
              <div class="slack-search-input-row">
                <span class="slack-search-icon">🔍</span>
                <span v-if="searchTyped" class="slack-search-text">Gaud</span>
                <span v-else class="slack-search-placeholder">Rechercher dans Bedrock Streaming</span>
                <span class="input-cursor">|</span>
              </div>
              <!-- Result row: only shown when typed -->
              <template v-if="searchTyped">
                <div style="height:1px;background:rgba(255,255,255,0.08);margin:0;" />
                <div class="slack-search-result slack-search-result-active">
                  <div class="slack-search-avatar">
                    <img
                      v-if="!arthurImgFailed"
                      :src="arthurAvatar"
                      class="slack-search-avatar-img"
                      @error="arthurImgFailed = true"
                    />
                    <span v-else>AG</span>
                  </div>
                  <div class="slack-search-result-info">
                    <span class="slack-search-result-name">Arthur Gaudard</span>
                    <span class="slack-search-result-sub">Message direct</span>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </Transition>

        <!-- Input area wrapper (relative so the context menu can anchor to it) -->
        <div class="flex-shrink-0 mx-3 mb-3 relative">

          <!-- Paste context menu (click 8) — floats above the input bar -->
          <Transition name="menu">
            <div
              v-if="showPasteMenu"
              class="absolute bottom-full mb-1 left-0 z-40"
            >
              <MacContextMenu highlight="Coller" />
            </div>
          </Transition>

          <!-- Input bar -->
          <div
            class="flex items-center gap-2 rounded-md px-3"
            :style="(linkTyped || pastedItems.length > 0)
              ? 'height:36px;background:rgba(255,255,255,0.10);border:1px solid rgba(255,255,255,0.22);'
              : 'height:32px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.11);'"
          >
            <!-- ArthurFast click 9: pasted items (screenshot thumbnail + URL) -->
            <template v-if="pastedItems.length > 0">
              <template v-for="(item, i) in pastedItems" :key="i">
                <span v-if="item.type === 'screenshot'" class="paste-thumb">📊</span>
                <span v-else-if="item.type === 'url'" class="text-[10px] truncate" style="color:#5ac8fa;max-width:160px;">{{ item.value }}</span>
              </template>
              <span class="input-cursor">|</span>
            </template>
            <!-- ArthurSlow click 9: URL pasted in input bar with blinking cursor -->
            <span v-else-if="linkTyped" class="text-[10px] flex-1 truncate" style="color:rgba(255,255,255,0.85);">
              {{ replyUrl }}<span class="input-cursor">|</span>
            </span>
            <!-- default / sent: placeholder -->
            <span v-else class="text-[10px] flex-1" style="color:rgba(255,255,255,0.28);">
              Message {{ showArthur ? '@Arthur Gaudard' : activeConvName }}
            </span>
            <span style="color:rgba(255,255,255,0.20); font-size:11px;">😊 📎</span>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
/* Conversation slides in from the right */
.conv-slide-enter-active {
  transition: opacity 0.30s ease, transform 0.30s cubic-bezier(0.16, 1, 0.3, 1);
}
.conv-slide-enter-from {
  opacity: 0;
  transform: translateX(18px);
}
.conv-slide-leave-active {
  transition: opacity 0.15s ease;
}
.conv-slide-leave-to {
  opacity: 0;
}

/* Sent reply fades + slides up */
.reply-slide-enter-active {
  transition: opacity 0.22s ease-out, transform 0.22s cubic-bezier(0.16, 1, 0.3, 1);
}
.reply-slide-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

/* Paste context menu drop-in */
.menu-enter-active {
  transition: opacity 0.14s ease-out, transform 0.14s ease-out;
  transform-origin: bottom left;
}
.menu-enter-from {
  opacity: 0;
  transform: scale(0.92) translateY(4px);
}
.menu-leave-active {
  transition: opacity 0.10s ease-in;
}
.menu-leave-to {
  opacity: 0;
}

/* Blinking cursor in the input bar */
@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}
.input-cursor {
  animation: blink 0.9s step-start infinite;
  font-weight: 100;
  margin-left: 1px;
  color: rgba(255,255,255,0.70);
  font-size: 11px;
}

/* Screenshot thumbnail in input bar and sent bubble */
.paste-thumb {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 28px;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 4px;
  font-size: 12px;
  flex-shrink: 0;
}
.sent-thumb {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 90px;
  background: rgba(255,255,255,0.10);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 6px;
  font-size: 28px;
  flex-shrink: 0;
}

/* ── Slack search overlay (ArthurFast) ───────────────────────── */
.search-overlay-enter-active {
  transition: opacity 0.18s ease, transform 0.18s cubic-bezier(0.16, 1, 0.3, 1);
}
.search-overlay-enter-from {
  opacity: 0;
  transform: scale(0.94);
}
.search-overlay-leave-active {
  transition: opacity 0.14s ease-in;
}
.search-overlay-leave-to {
  opacity: 0;
}

.slack-search-box {
  width: 80%;
  max-width: 320px;
  background: #1e1e2e;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.6);
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.10);
}
.slack-search-input-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
}
.slack-search-icon {
  font-size: 12px;
  opacity: 0.55;
  flex-shrink: 0;
}
.slack-search-text {
  font-size: 12px;
  color: rgba(255,255,255,0.85);
  flex: 1;
}
.slack-search-placeholder {
  font-size: 12px;
  color: rgba(255,255,255,0.30);
  flex: 1;
}
.slack-search-result {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 14px;
  cursor: default;
}
.slack-search-result-active {
  background: rgba(29, 155, 240, 0.25);
}
.slack-search-avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: linear-gradient(135deg,#4a90d9,#2c6fb0);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 9px;
  font-weight: 700;
  flex-shrink: 0;
  overflow: hidden;
}
.slack-search-avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.slack-search-result-info {
  display: flex;
  flex-direction: column;
  gap: 1px;
}
.slack-search-result-name {
  font-size: 11px;
  font-weight: 600;
  color: white;
}
.slack-search-result-sub {
  font-size: 9px;
  color: rgba(255,255,255,0.45);
}
</style>
