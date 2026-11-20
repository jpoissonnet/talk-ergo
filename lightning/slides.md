---
title: Et si vos outils faisaient un peu plus pour vous ?
remoteAssets: true
aspectRatio: 16/9
transition: slide-left
duration: 20
feedbackUrl: https://openfeedback.io/sunnytech2026/2026-07-02/cmm4pkmk4006k01nsnwb3n0qw
conferenceName: LFT
src: ./pages/curtain-warmer.md
---

<!--
- multiple ways to do it
- well-anchored habits
- localized folklore, metaphors ways to be taught
-->

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

<RunSh
  :at="3"
  method="notify"
  :data="{ author: 'Arthur Gaudard', appName: 'Slack', msg: '👋 Have a minute? kinda urgetn' }"
/>

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
  <iframe class="h-full w-full" src="http://localhost:3000/article"/>
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

<div class="text-4xl text-black font-bold bg-white p-8 rounded-xl border-black border-3">Isn't <em class="text-blue-800">quickshell</em> taking too much ram?</div>

---
layout: image-left
image: /btop2.png
backgroundSize: auto 100% 
class: "flex flex-col justify-center h-full"
---

<div class="z-10 text-4xl text-black font-bold bg-white p-8 rounded-xl border-black border-3">Yes,<em class="text-red-800">Quickshell</em> is taking too much ram</div>
<img v-click src="/ram-altman.jpg" class="w-full rounded-xl" v-motion :initial="{ opacity: 0, translateY: -20, rotateZ: -10 }" :enter="{ opacity:1, rotateZ: 0, translateY: 0 }"/>

---
layout: statement
---

# Get to know yourself
## (If) my recommendations suck

---
layout: statement
---

# What you need (to get rid of)

<v-switch transition="true">
  <template #1-3><span class="text-4xl text-blue-800">identical repetitive tasks</span></template>
  <template #2>
    <div class="text-2xl">snippets to the rescue</div>
    <div class="flex flex-col mx-auto my-1 h-70 w-100 border-gray-500 border-2 bg-black rounded-xl p-4">
      <div class="text-white text-2xl text-left my-2 mx-3">Request up to 100 reviewers</div>
      <div class="flex bg-gray-900 rounded-lg p-2 border-gray-500 border-2">
        <span class="px-1">🔍</span>
        <input placeholder="Type or choose a user" class="bg-transparent h-full w-full outline-none text-white" type="text"/>
      </div>
      <div class="border-gray-500 border-y-2 text-gray-500 text-lg bg-gray-900 -mx-4 text-left my-2 px-2">Suggestions</div>
      <div class="text-white text-2xl text-left my-2 mx-3">...</div>
      <div class="text-white text-2xl text-left my-2 mx-3">...</div>
    </div>
    <div class="text-2xl">m6web/bedrock_squad_web</div>
  </template>
  <template #3-6><span class="text-4xl text-red-800">distractions and interruptions</span></template>
  <template #4-6>
    <img src="/menu-bar-long.png" class="w-full my-8" />
  </template>
  <template #5><img src="/menu-bar-short.png" class="w-full" /></template>
  <template #6-9><span class="text-4xl text-green-800">on-display information</span></template>
  <template #7-9><img src="/notion-calendar.png" class="my-10 w-full" /></template>
  <template #8><img src="/quickshell.png" class="w-full" /></template>
</v-switch>

---

## What you already know
- what am I used to: keyboard / mouse / multiple screens

## What I like
- what do I like: Nice UI / Efficient TUI
- what do I want: Bundle / DIY 

---

# For the curious: Get to know the tools
- History, ancestors of our tools
- Search "what's an alternative to \<tool>"
- RSS feeds and co.

---

## How to change?

:go step by step

1. Add a new tool
2. Configure existing tools
3. Replace iteratively by using the alternative alongside the rest
4. Use the new flow on a whole work unit
5. Do a cutover

---

## When to change?

- the best time was yesterday, the second best is now
- if you don't have time, make some by using distillation

---

## Share your thoughts

- keep a trace of what you change and why
- Drink coffee with your colleagues about this, they have similar constraints and might have already found the solution

---

💡Ask them "what if your tools finally worked for you"
