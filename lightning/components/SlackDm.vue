<!--
  SlackDm — a full-slide fake Slack window open on a direct message, laid out after
  github.com/fvukojevic/Slack-Clone-Vue (purple header and sidebar, light chat pane).

  Usage:
    <SlackDm
      contact="Arthur Gaudard"
      me="Jules Poissonnet"
      me-avatar="/linkedin-avatar.jpg"
      :messages="[
        { from: 'contact', text: 'Have a minute?', ago: 12 },
        { from: 'me', text: 'Here it is', image: '/btop2.png', at: 1 },
      ]"
    />
  A message shows from slide click `at` (default 0); `ago` is its age in minutes, from when the slide opens.
  Give the slide `clicks: <highest at>` in its frontmatter.
  The input is a real text field: Enter sends what was typed as a message from `me`.
-->

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useSlideContext } from '@slidev/client'

type Message = { from: 'me' | 'contact', text?: string, image?: string, link?: string, ago?: number, at?: number, sentAt?: number }

const props = withDefaults(defineProps<{
  contact: string
  me: string
  meAvatar?: string
  contactAvatar?: string
  workspace?: string
  channels?: string[]
  messages: Message[]
}>(), {
  workspace: 'Bedrock Streaming',
  channels: () => ['general', 'random'],
})

const { $clicks } = useSlideContext()
const openedAt = Date.now()

const SHORTCUTS = [
  { icon: 'i-carbon-chat', title: 'Threads' },
  { icon: 'i-carbon-email', title: 'Mentions & reactions' },
  { icon: 'i-carbon-bookmark', title: 'Saved items' },
]

const people = computed(() => ({
  me: { name: props.me, avatar: props.meAvatar },
  contact: { name: props.contact, avatar: props.contactAvatar },
}))

const draft = ref('')
const sent = ref<Message[]>([])

const visible = computed(() => [...props.messages.filter(m => (m.at ?? 0) <= $clicks.value), ...sent.value])

function send() {
  const text = draft.value.trim()
  if (!text) return
  sent.value.push({ from: 'me', text, sentAt: Date.now() })
  draft.value = ''
}

function time(m: Message) {
  return new Date(m.sentAt ?? openedAt - (m.ago ?? 0) * 60_000).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
}
</script>

<template>
  <div class="slack">
    <header class="top">
      <div class="top-left">
        <span class="avatar round">{{ me[0] }}</span>
        <span class="i-carbon-time icon" />
      </div>
      <div class="search">
        <span class="i-carbon-search" />
        <span>Search Slack</span>
      </div>
      <div class="top-right"><span class="i-carbon-help icon" /></div>
    </header>

    <div class="body">
      <nav class="sidebar">
        <div class="workspace">
          <div>
            <h2>{{ workspace }}</h2>
            <h3><span class="dot" /> {{ me }}</h3>
          </div>
          <span class="compose"><span class="i-carbon-edit" /></span>
        </div>
        <div v-for="s in SHORTCUTS" :key="s.title" class="option"><span :class="s.icon" /> {{ s.title }}</div>
        <hr>
        <div class="option"><span class="i-carbon-chevron-down" /> Channels</div>
        <div v-for="c in channels" :key="c" class="option"># {{ c }}</div>
        <hr>
        <div class="option"><span class="i-carbon-chevron-down" /> Direct messages</div>
        <div class="option active"><span class="dot" /> {{ contact }}</div>
      </nav>

      <main class="chat">
        <div class="chat-header">
          <strong><span class="dot" /> {{ contact }} <span class="i-carbon-star" /></strong>
          <span class="details"><span class="i-carbon-information" /> Details</span>
        </div>

        <TransitionGroup tag="div" name="msg" class="messages">
          <div v-for="(m, i) in visible" :key="i" class="message">
            <img v-if="people[m.from].avatar" :src="people[m.from].avatar" alt="" class="avatar">
            <span v-else class="avatar">{{ people[m.from].name[0] }}</span>
            <div class="info">
              <h4>{{ people[m.from].name }} <span class="timestamp">{{ time(m) }}</span></h4>
              <p v-if="m.text">{{ m.text }}</p>
              <a v-if="m.link" :href="m.link" target="_blank">{{ m.link }}</a>
              <img v-if="m.image" :src="m.image" alt="" class="attachment">
            </div>
          </div>
        </TransitionGroup>

        <input
          v-model="draft"
          class="input"
          :placeholder="`Message ${contact}`"
          @keydown.stop
          @keydown.enter.prevent="send"
        >
      </main>
    </div>
  </div>
</template>

<style scoped>
.slack {
  --slack: #3f0f40;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: white;
  color: #1d1c1d;
  font-family: Lato, Avenir, Helvetica, Arial, sans-serif;
}

.top {
  display: flex;
  align-items: center;
  padding: 0.7rem 0;
  background: var(--slack);
  color: white;
}

.top-left {
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 1.4rem;
}

.top-left .icon {
  margin-left: auto;
  margin-right: 2.1rem;
}

.icon {
  font-size: 1.96rem;
}

.search {
  flex: 0.4;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  padding: 0.42rem;
  background: #421f44;
  border: 1px solid gray;
  border-radius: 6px;
  color: #bbb;
  font-size: 1.12rem;
}

.top-right {
  flex: 0.3;
  display: flex;
  justify-content: flex-end;
  margin-right: 1.4rem;
}

.body {
  display: flex;
  flex: 1;
  min-height: 0;
}

.sidebar {
  width: 18rem;
  flex-shrink: 0;
  overflow: hidden;
  background: var(--slack);
  border-top: 1px solid #49274b;
  color: white;
}

.workspace {
  display: flex;
  align-items: center;
  padding: 0.98rem;
  border-bottom: 1px solid #49274b;
}

.workspace > div {
  flex: 1;
}

.workspace h2 {
  font-size: 1.4rem;
  font-weight: 900;
  margin-bottom: 0.28rem;
}

.workspace h3 {
  display: flex;
  align-items: center;
  gap: 0.42rem;
  font-size: 1.19rem;
  font-weight: 400;
}

.compose {
  display: grid;
  place-items: center;
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 999px;
  background: white;
  color: var(--slack);
}

.option {
  display: flex;
  align-items: center;
  gap: 0.84rem;
  padding: 0.35rem 1.12rem;
  font-size: 1.26rem;
  font-weight: 500;
}

.option.active {
  background: #1164a3;
  font-weight: 700;
}

.sidebar hr {
  margin: 0.56rem 0;
  border: 0;
  border-top: 2px solid #49274b;
}

.dot {
  display: inline-block;
  width: 0.84rem;
  height: 0.84rem;
  border-radius: 999px;
  background: #2bac76;
}

.chat {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
}

.chat-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.84rem 1.68rem;
  border-bottom: 1px solid lightgray;
  font-size: 1.68rem;
}

.chat-header strong {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}

.details {
  display: flex;
  align-items: center;
  gap: 0.42rem;
  font-size: 1.26rem;
}

.messages {
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 0.3rem;
}

.message {
  display: flex;
  align-items: flex-start;
  padding: 0.56rem 1.68rem;
}

.avatar {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 3.92rem;
  height: 3.92rem;
  border-radius: 6px;
  object-fit: cover;
  background: #1a9ca4;
  color: white;
  font-size: 1.96rem;
}

.avatar.round {
  width: 3.08rem;
  height: 3.08rem;
  border-radius: 999px;
  font-size: 1.54rem;
}

.info {
  padding-left: 1.12rem;
  font-size: 1.89rem;
  line-height: 1.35;
}

.info h4 {
  font-size: 1.54rem;
  font-weight: 900;
}

.timestamp {
  color: grey;
  font-weight: 300;
  font-size: 1.19rem;
}

.info a {
  color: #1264a3;
  text-decoration: none;
}

.attachment {
  max-height: 15.4rem;
  margin-top: 0.56rem;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.input {
  margin: 0 2.1rem 1rem;
  padding: 1.26rem;
  border: 1px solid gray;
  border-radius: 4px;
  background: white;
  color: #1d1c1d;
  font-size: 1.68rem;
  outline: none;
}

.input:focus {
  border-color: #1264a3;
  box-shadow: 0 0 0 1px #1264a3;
}

.input::placeholder {
  color: #888;
}

.msg-enter-active {
  transition: all 0.3s ease-out;
}

.msg-enter-from {
  opacity: 0;
  transform: translateY(1.4rem);
}
</style>
