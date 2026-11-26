---
title: What if your tools finally worked for you?
remoteAssets: true
aspectRatio: 16/9
routerMode: hash
transition: slide-left
duration: 20min
timer: countdown
feedbackUrl: https://openfeedback.io/sunnytech2026/2026-07-02/cmm4pkmk4006k01nsnwb3n0qw
conferenceName: LFT
src: ./pages/curtain-warmer.md
---

---
layout: center
---

<div class="lh-30 text-center text-8xl word-spacing-6 font-light">What if your <br/> tools finally <br/> worked for you?</div>

---
layout: section
---

# You fight your tools

---
layout: image
image: /office2.jpg
---
<!-- You're at the office and you hear: -->

<span v-click class="text-4xl text-black font-bold bg-white p-8 rounded-xl absolute right-20 border-black border-3">I lost my copy-paste</span>
<img v-after class="h-full absolute -bottom-4" src="/travolta.png"/>

---
layout: image
image: /scott-running.jpg
---

<div class="text-4xl text-black font-bold bg-white p-8 rounded-xl absolute right-10 border-black border-3">2:00: meeting starts<br/>2:01: some colleague</div>

---
layout: image-right
image: /ncis-keyboard.gif
---

<div class="text-4xl text-black font-bold bg-white p-8 -ml-10 my-40 rounded-xl border-black border-3">Just a second,<br/>I'll share my screen</div>

---
layout: image
image: /david-goodenough.jpg
backgroundSize: 60%
---

<h1 class="text-black dark:text-white text-4xl">...and it might be fine</h1>

---
layout: section
---

# We can do better

---
layout: statement
---

# Why?
## you might ask

---
layout: section
transition: slide-up
---

# 1. Cognitive load 🧠

---
layout: section
transition: slide-up
---

<br/>
<h1 v-motion :initial="{ scale: 0.5, opacity: 1 }" :enter="{ scale: 1, textDecoration: 'none'  }" :click-1="{ scale: 0.5, opacity: .4, textDecoration: 'line-through' }">2. Speed 🚀</h1>
<h1 v-click v-motion :initial="{ scale: 0.5, opacity: 0 }" :enter="{ scale: 1, opacity: 1, y: -50 }">2. Flow 🏄️</h1>

<!--
todo: add a lace that goes from left to right
-->

---
layout: section
---

# 3. For the sake of learning 🤓

---
layout: statement
---

# How?
## Or what to change first? – you might ask

---
layout: center
transition: slide-up
clicks: 3
---

<Notify :at="3" author="Arthur Gaudard" app-name="Slack" msg="👋 Have a minute? kinda urgetn" />

<div class="flex gap-8 justify-center">
  <div 
    class="border-solid border-5 border-blue-500 rounded-xl px-8 py-6 shadow-lg flex flex-col items-center space-between gap-4 min-w-[180px] max-w-[250px]"
    v-click 
    v-motion 
    :initial="{ translateX: -1000, translateY: -1000, opacity: 0 }"
    :enter="{ translateX: 0, translateY: 0, opacity: 1 }"
  >
    <span class="text-6xl mb-2">📋</span>
    <span class="font-bold text-2xl">Clipboard</span>
  </div>
  <div 
    class="border-solid border-5 border-blue-500 rounded-xl px-8 py-6 shadow-lg flex flex-col gap-3 items-center min-w-[180px] max-w-[250px]"
    v-click 
    v-motion 
    :initial="{ scale: 0.2, opacity: 0, rotate: 180 }"
    :enter="{ scale: 1, opacity: 1, rotate: 0 }"
  >
    <span class="text-6xl mb-2">📸</span>
    <span class="font-bold text-2xl text-center">Screenshot</span>
  </div>
</div>

---
layout: none 
class: w-full h-full grid grid-cols-2
---

<section class="mx-20 my-10">
  <div class="flex items-center gap-4">
    <span class="text-6xl mb-2">📋</span>
    <span class="font-bold text-2xl">Clipboard</span>
  </div>

  <div class="bg-yellow-200 border-10 border-black w-full aspect-square p-10 pt-5">
    <h2 class="text-2xl font-bold">Notes:</h2>
    <textarea value="" class="h-full w-full bg-transparent outline-none resize-none"/>
  </div>
</section>

<div class="h-full w-full">
  <div class="w-full relative">
    <input type="text" class="w-full bg-white border-3 border-blue-800 text-black p-1" value="https://ralphammer.com/is-it-worth-the-trouble/"/>
    <button class="absolute right-0 top-0 p-0.5 h-full hover:bg-blue-200 active:bg-blue-300 bg-blue-800" onclick="(()=>{
      navigator.clipboard.writeText('https://ralphammer.com/is-it-worth-the-trouble/')
    })()">🔗</button>
  </div>
  <iframe class="h-full w-full" src="article.html"/>
</div>

---
layout: image-right
image: /btop.png
class: "flex flex-col justify-center h-full"
---

<section class="flex items-center gap-4">
  <span class="text-6xl mb-2">📸</span>
  <span class="font-bold text-2xl">Screenshot</span>
</section>

<v-switch transition="true">
  <template #1>
    <div class="text-4xl text-black font-bold bg-white p-8 rounded-xl border-black border-3">Isn't <em class="text-blue-800">quickshell</em> taking too much ram?</div>
  </template>
</v-switch>

---
layout: image-left
image: /btop2.png
backgroundSize: auto 100% 
class: "flex flex-col justify-center h-full"
clicks: 3
---

<v-switch transition="true">
  <template #1-2>
    <div class="z-10 text-4xl text-black font-bold bg-white p-8 rounded-xl border-black border-3">Yes,<em class="text-red-800">Quickshell</em> is taking too much ram</div>
  </template>
  <template #2-4>
    <img src="/ram-altman.jpg" class="w-full rounded-xl"/>
  </template>
</v-switch>

<Notify :at="3" author="Arthur Gaudard" msg="You there?" />

---
layout: none
---

<SlackDm
  class="!absolute inset-0"
  contact="Arthur Gaudard"
  me="Jules Poissonnet"
  me-avatar="/jules-avatar.png"
  contact-avatar="/linkedin-avatar.jpg"
  :messages="[
    { from: 'contact', text: '👋 Have a minute? kinda urgetn', ago: 4 },
    { from: 'contact', text: 'You there?', ago: 1 },
  ]"
/>

---
layout: statement
---

# Get to know yourself
## (If) my recommendations suck

---
layout: center
---

<v-switch transition="true">
  <template #1-4><span class="text-4xl text-blue-800">identical repetitive tasks</span></template>
  <template #2-4>
    <div class="text-2xl">snippets to the rescue</div>
    <div class="flex flex-col mx-auto my-1 h-70 w-100 border-gray-500 border-2 bg-black rounded-xl p-4 shadow-xl">
      <div class="text-white text-2xl text-left my-2 mx-3">Request up to 100 reviewers</div>
      <div class="flex bg-gray-900 rounded-lg p-2 border-gray-500 border-2">
        <span class="px-1">🔍</span>
        <input placeholder="Type or choose a user" class="bg-transparent h-full w-full outline-none text-white" type="text"/>
      </div>
      <div class="border-gray-500 border-y-2 text-gray-500 text-lg bg-gray-900 -mx-4 text-left my-2 px-2">Suggestions</div>
      <div class="text-white text-2xl text-left my-2 mx-3">...</div>
      <div class="text-white text-2xl text-left my-2 mx-3">...</div>
    </div>
  </template>
  <template #3>
    <div class="text-4xl text-black font-bold bg-white p-4 rounded-xl border-black border-3 text-2xl text-center">m6web/bedrock_squad_web</div>
  </template>
  <template #4-7><span class="text-4xl text-red-800">distractions and interruptions</span></template>
  <template #5-7>
    <img src="/menu-bar-long.png" class="w-full my-8" />
  </template>
  <template #6><img src="/menu-bar-short.png" class="w-full" /></template>
  <template #7-10><span class="text-4xl text-green-800">on-display information</span></template>
  <template #8-10><img src="/notion-calendar.png" class="my-10 w-full" /></template>
  <template #9><img src="/quickshell.png" class="w-full" /></template>
</v-switch>

---
layout: none
clicks: 4
---

<ToolZones
  class="!absolute inset-0"
  :order="['hands-on', 'keyboard-driven', 'point-and-click', 'hands-off']"
  :zones="{
    'hands-on': { tool: 'docker', image: '/docker-cli.png' },
    'point-and-click': { tool: 'orbstack', image: '/orbstack.png' },
    'keyboard-driven': { tool: 'lazydocker', image: '/lazydocker.webp' },
    'hands-off': { tool: 'skills', image: '/docker-skill.png' },
  }"
/>

---
layout: two-cols
clicks: 4
---

<div class="h-full flex flex-col justify-center text-center">
  <div class="text-7xl font-800 text-blue-700 dark:text-blue-400">Turnkey</div>
  <div v-click="1" class="text-5xl mt-10">🧳 All-inclusive trip</div>
  <div v-click="3" class="text-5xl mt-6 flex items-center justify-center gap-3"><img src="/jetbrains.svg" class="h-[1.1em]" alt="" /> JetBrains IDE</div>
</div>

::right::

<div class="h-full flex flex-col justify-center text-center">
  <div class="text-7xl font-800 text-orange-700 dark:text-orange-400">Tailor-made</div>
  <div v-click="2" class="text-5xl mt-10">🗺️ Road-trip</div>
  <div v-click="4" class="text-5xl mt-6 flex items-center justify-center gap-3"><img src="/neovim.svg" class="h-[1.1em]" alt="" />Neovim</div>
</div>

---
layout: center
---

<div class="text-7xl font-800 text-center absolute top-10 inset-x-0">🔄 Step by step</div>

<img src="/enough.gif" alt="" class="h-1/2 object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
<p class="text-2xl text-gray-500 absolute bottom-12 left-14">Ralph Ammer – Is it good enough? is the wrong question</p>
<img src="/ralph-ammer-qr.svg" alt="QR code to the article" class="absolute bottom-4 right-4 w-32 bg-white" />

<!--
https://ralphammer.com/is-it-good-enough-is-the-wrong-question/
-->

---
layout: center
clicks: 1
---

<SearchPrompt :prompts="[
  { prefix: 'what\'s an alternative to', tools: ['figma', 'macos', 'vscode', 'gmail', 'chrome', 'notion', 'alt-tab', 'copy-paste'] },
  { prefix: 'what\'s the ancestor of', tools: ['git', 'vim', 'herdr', 'vscode', 'tmux', 'markdown', 'slack', 'docker'] },
]" />

<!--
Keep watching for alternatives, and look at where your tools come from.
-->

---
layout: image
image: /office-coffee.jpg
---

<!--
Share your thoughts: drink coffee with your colleagues about this, they have similar constraints and might have already found the solution.
-->

---
layout: center
---

<div class="lh-30 text-center text-8xl word-spacing-6 font-light">What if your <br/> tools finally <br/> worked for you?</div>

---
layout: two-cols-header
---

<AutoFitText :max="40" modelValue="What if your tools finally worked for you?"/>
<AutoFitText :max="30" modelValue="- Jules Poissonnet"/>

::left::

<div class="flex flex-col items-center h-full justify-center">
  <qr-code modulesize="8" :data="slidesUrl"></qr-code>
  <div class="flex items-center gap-2">
    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" class="h-12" />
    <span class="text-4xl text-gray-500 mt-2">Slides</span>
  </div>
</div>

::right::

<div class="flex flex-col items-center h-full justify-center">
  <h1 class="text-sm text-gray-500 mt-2">🙏 Feedback</h1>
  <qr-code modulesize="8" :data="feedbackUrl"></qr-code>
</div>

<script setup>
import "webcomponent-qr-code";
const slidesUrl = "https://github.com/jules-poissonnet/talk-ergo";
const feedbackUrl = $slidev.configs.feedbackUrl;
</script>

<!-- Merci ! Les slides et les sources sont derrière le QR. La citation Marc-Aurèle sur le clavier vient de Claude, pas du texte original. -->

---
layout: fact
---

<AutoFitText :max="40" class="italic" modelValue="What's Raycast?"/>
<p v-click class="text-2xl text-gray-500">A MacOs app that does, clipboard, window manager, app launcher, emoji picker</p>
<div v-after class="flex justify-around items-center w-full h-80">
  <div class="flex flex-col items-center h-full">
    <p class="text-xl">🌐 Raycast.com</p>
    <qr-code modulesize="7" :data="raycastDocs" />
  </div>
</div>

<script setup>
import "webcomponent-qr-code";
const raycastDocs = "https://raycast.com"
</script>

---
layout: fact
---

<AutoFitText :max="40" class="italic" modelValue="I've only worked with MacOs am I doomed?"/>
<p v-click class="text-2xl text-gray-500">No, you're fine, but you should try something else (yes, I'm talking about Linux)</p>

