---
theme: default
title: Et si vos outils faisaient un peu plus pour vous ?
drawings:
  persist: false
transition: slide-left
comark: true
duration: 50min
themeConfig:
  primary: '#1e6091'
layout: cover
class: text-center
background: none
---

<div class="cover-deco">
  <svg viewBox="0 0 100 100" class="cross">
    <rect x="40" y="10" width="20" height="80" rx="3"/>
    <rect x="10" y="40" width="80" height="20" rx="3"/>
  </svg>
</div>

# Et si vos outils faisaient un peu plus pour vous ?

<div class="cover-subtitle">
  <span>🩺</span> Une consultation chez le <strong>Docteur D.X.</strong>
</div>

<style>
.slidev-layout {
  background: linear-gradient(135deg, #a2540 0%, #1e6091 50%, #2d8fbe 100%);
  color: white;
  text-align: center;
}
.slidev-layout.cover h1 {
  color: white !important;
  text-shadow: 0 2px 10px rgba(20,0,0,0.3);
  font-size: clamp(1.6rem, 4.2vw, 2.6rem);
  line-height: 1.2;
  max-width: 52rem;
  margin-left: auto;
  margin-right: auto;
  padding: 0 0.5rem;
}
.cover-deco {
  position: absolute;
  top: 8%;
  right: 8%;
  opacity: 0.12;
  width: min(220px, 28vw);
}
.cover-deco .cross { fill: white; }
.cover-subtitle {
  max-width: 36rem;
  margin: 1.5em auto 0;
  font-size: 1.3em;
  opacity: 0.95;
}
.cover-subtitle span { font-size: 1.4em; }
</style>

---
layout: center
---

# 🩺 Introduction

Bienvenue dans le cabinet du **Docteur D.X.**

<div class="appointment-card mt-8">
  <div class="card-header">CONSULTATION N°001</div>
  <div class="card-body">
    <div>Patient·e : <em>vous</em></div>
    <div>Motif : relation conflictuelle avec vos outils</div>
    <div>Durée : 50 min</div>
  </div>
</div>

<style>
.appointment-card {
  max-width: min(420px, 90%);
  margin: 0 auto;
  border: 2px solid #1e6091;
  border-radius: 8px;
  background: white;
  box-shadow: 0 4px 16px rgba(10,37,64,0.1);
  font-family: 'Courier New', monospace;
  text-align: left;
}
.card-header {
  background: #1e6091;
  color: white;
  padding: 0.5em 1em;
  font-weight: bold;
  letter-spacing: 2px;
}
.card-body {
  padding: 1.2em;
  line-height: 1.8;
  color: #0a2540;
  word-break: break-word;
}
.card-body em { color: #c81e1e; font-style: normal; font-weight: bold; }
</style>

<!-- Installez-vous confortablement, aujourd'hui on va parler de vous, et surtout on va parler de votre relation a vos outils -->

---
layout: section
---

## 🦠 Un fléau des temps modernes

<div class="section-sub">accentué par le progrès technologique</div>

<style>
.section-sub { color: #b8d9ec; margin-top: 1em; font-style: italic; }
</style>

<!--
Aujourd'hui on va étudier un fléau des temps modernes, il est pas nouveau, mais il s'accentue au fur et à mesure que la civilisation progresse dans
ces technologies
-->

---

## 🩹 Liste des symptômes

<v-clicks>

- 😩 « J'ai perdu mon copier-coller »
- 🔗 « Tu peux rajouter le lien ? »
- 📅 « Ah mince j'avais pas vu j'ai une réunion »
- 🪟 « Elle est où la fenêtre que je veux partager ? »
- 💬 « Je me l'envoie en DM pour pas l'oublier »

</v-clicks>

<!--
Les symptomes peuvent être multiples, vous avez peut-être déjà dit où entendu les choses suivantes:...
-->

---

## 👥 ...mais aussi des collègues qui

<v-clicks>

- ⏳ remettent un tout p'tit truc à plus tard
- 🪄 ont une réputation de magicien / galérien (déforment tous les outils pour leur usage)
- 🦕 sont réfractaires aux changements (« ça fait 20 ans que j'écris les commandes en toutes lettres... »)

</v-clicks>

---
layout: two-cols
---

## 💬 Mon préféré

La discussion Slack inefficace

<v-clicks>

- 7 messages pour dire 1 chose
- pas de lien vers le ticket
- screenshot non annoté
- réponse 3 jours après dans un thread

</v-clicks>

::right::

<div class="slack-mock">
  <div class="slack-msg">
    <div class="avatar" style="background:#e74c3c">A</div>
    <div><strong>Alex</strong> <span class="time">14:02</span><br/>hey</div>
  </div>
  <div class="slack-msg">
    <div class="avatar" style="background:#e74c3c">A</div>
    <div><strong>Alex</strong> <span class="time">14:02</span><br/>t'as 2 min ?</div>
  </div>
  <div class="slack-msg">
    <div class="avatar" style="background:#e74c3c">A</div>
    <div><strong>Alex</strong> <span class="time">14:03</span><br/>c'est pour le truc</div>
  </div>
  <div class="slack-msg">
    <div class="avatar" style="background:#e74c3c">A</div>
    <div><strong>Alex</strong> <span class="time">14:03</span><br/>tu sais ?</div>
  </div>
  <div class="slack-msg">
    <div class="avatar" style="background:#e74c3c">A</div>
    <div><strong>Alex</strong> <span class="time">14:04</span><br/>celui d'hier</div>
  </div>
  <div class="slack-msg">
    <div class="avatar" style="background:#e74c3c">A</div>
    <div><strong>Alex</strong> <span class="time">14:04</span><br/>en fait laisse tomber</div>
  </div>
</div>

<style>
.slack-mock {
  background: #1a1d21;
  border-radius: 8px;
  padding: 1em;
  font-family: 'Lato', sans-serif;
  font-size: 0.8em;
  color: #d1d2d3;
  max-width: 100%;
  overflow: hidden;
}
.slack-msg {
  display: flex;
  gap: 0.6em;
  padding: 0.3em 0;
}
.avatar {
  width: 30px; height: 30px;
  border-radius: 6px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}
.time { color: #898989; font-size: 0.85em; margin-left: 0.4em; }
</style>

---

## 🧫 Origines, contamination

<v-clicks>

- ⏰ Manque de temps pour investir dans la recherche et la config
- 📡 Pas de veille
- 🔁 Habitudes ancrées et pas questionnées

</v-clicks>

<!--
Avant de donner la méthode générale et des exemples concrets, on peut parler 2 minutes de l'environement que favorise ce fléau
On va retrouver: un manque de temps à investir dans la configuration, un manque de veille, un manque d'envie de questionner ses habitudes
-->

---
layout: section
---

## 🧑‍⚕️ La DX-ite aiguë chronique

<div class="section-sub">aka : c'est moi qui ai donné le nom, donc je fais ce que je veux</div>

<!--
Alors pourquoi DX-ite, en fait c'est moi qui donne le nom donc je fais ce que je veux.
Perso je suis développeur dans une équipe dont une partie du scope c'est la developer experience
C'est nommé pour les devs mais ça concerne en fait tous les gens qui travaillent avec un ordinateur
-->

---
layout: two-cols-header
---

## 🌍 La DX-ite dans tous les domaines

::left::

### 🏥 Dans le médical

> « La poubelle est à l'autre bout du bloc — on traverse la salle avec des compresses sales dans les mains. »

<div class="caption">— un proche soignant</div>

::right::

### 🍳 Dans la cuisine

> « Les couteaux dans un tiroir, la planche à découper dans le placard du haut, et la poubelle derrière la porte. »

<div class="caption">— mes ex-colocs (collectivement)</div>

<style>
.caption { color: #888; font-size: 0.85em; margin-top: 0.5em; }
</style>

<!--
En préparant ce talk, j'ai discuté autour de moi et j'ai été étonné: le problème est partout.
-->

---
layout: statement
---

## 💡 Pourquoi c'est important ?

<div class="big-equation">
  Meilleure DX <span class="eq">=</span> Meilleure santé
</div>

<style>
.big-equation {
  font-size: 2em;
  margin-top: 1em;
  color: #1e6091;
  font-weight: 600;
}
.eq {
  color: #c81e1e;
  margin: 0 0.3em;
}
</style>

<!--
Tout le monde peut profiter d'une meilleure hygiène de DX, comme tout le monde pourrait profiter d'être en meilleure santé meilleure
-->

---
layout: center
---

## 🧠 Pourquoi c'est important ?

### Moins de charge cognitive

<div class="brain-diagram">
  <svg viewBox="0 0 800 300">
    <!-- before -->
    <g transform="translate(20,20)">
      <text x="80" y="0" text-anchor="middle" font-size="14" fill="#666">AVANT</text>
      <rect x="0" y="10" width="160" height="160" rx="12" fill="#fde8e8" stroke="#c81e1e" stroke-width="2"/>
      <text x="80" y="40" text-anchor="middle" font-size="12" fill="#0a2540">conscient</text>
      <rect x="10" y="50" width="60" height="20" fill="#c81e1e" opacity="0.8"/>
      <rect x="80" y="50" width="70" height="20" fill="#c81e1e" opacity="0.8"/>
      <rect x="10" y="75" width="80" height="20" fill="#c81e1e" opacity="0.8"/>
      <rect x="100" y="75" width="50" height="20" fill="#c81e1e" opacity="0.8"/>
      <rect x="10" y="100" width="140" height="20" fill="#c81e1e" opacity="0.8"/>
      <rect x="10" y="125" width="90" height="20" fill="#c81e1e" opacity="0.8"/>
      <text x="80" y="160" text-anchor="middle" font-size="10" fill="#c81e1e">saturé</text>
    </g>
    <!-- arrow -->
    <text x="200" y="110" text-anchor="middle" font-size="24" fill="#1e6091">→</text>
    <!-- after -->
    <g transform="translate(220,20)">
      <text x="80" y="0" text-anchor="middle" font-size="14" fill="#666">APRÈS</text>
      <rect x="0" y="10" width="160" height="160" rx="12" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
      <text x="80" y="40" text-anchor="middle" font-size="12" fill="#0a2540">conscient</text>
      <rect x="10" y="50" width="40" height="20" fill="#2e7d32" opacity="0.8"/>
      <rect x="10" y="75" width="60" height="20" fill="#2e7d32" opacity="0.8"/>
      <text x="80" y="160" text-anchor="middle" font-size="10" fill="#2e7d32">de la place !</text>
    </g>
  </svg>
</div>

<!--
... on ménage sa charge cognitive. Et alors, vu qu'on se prend pour des docteurs on va regarder pourquoi
-->

---
layout: center
---

### 🧠 La charge cognitive

Votre meilleure alliée : **la mémoire procédurale**

<div class="examples-grid">
  <div>👟 faire ses lacets</div>
  <div>🔢 taper son code de tél</div>
  <div>🛹 une figure de skate</div>
  <div>⌨️ taper sur un clavier</div>
</div>

<style>
.examples-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
  margin-top: 2em;
  font-size: 1.1em;
}
.examples-grid > div {
  background: #f0f7fc;
  border-left: 3px solid #1e6091;
  padding: 0.6em 1em;
  border-radius: 4px;
}
</style>

<!--
La mémoire procédurale c'est le terme qui décrit l'ensemble de ce que vous savez faire sans même y penser
-->

---
layout: statement
---

### 🧠 La charge cognitive

<div class="big-equation">
  Plus d'automatismes <span class="eq">=</span> moins de charge cognitive
</div>

<style>
.big-equation {
  font-size: 1.8em;
  margin-top: 1em;
  color: #1e6091;
  font-weight: 600;
}
.eq { color: #c81e1e; margin: 0 0.3em; }
</style>

<!--
L'idée est que si on arrive à déménager tout ce qui se répète dans notre quotidien dans notre mémoire procédurale:
-->

---

### 🧠 La charge cognitive

#### Comment ça marche ?

<v-clicks>

- 🔍 décomposer
- 🧪 essayer
- 🔧 corriger
- 🔁 répéter
- 🔁 répéter
- 🔁 répéter
- <span class="fade-1">🔁 répéter</span>
- <span class="fade-2">...</span>

</v-clicks>

<style>
.fade-1 { opacity: 0.6; }
.fade-2 { opacity: 0.35; }
</style>

<!--
Super simple il faut: décomposer, essayer, corriger, et répéter
-->

---
layout: center
---

### 🎉 Le fun

# **Apprendre**

<div class="fun-sub">on est en informatique : on aime ça, non ?</div>

<style>
.fun-sub { color: #1e6091; font-style: italic; margin-top: 1em; }
</style>

<!--
Ça c'est subjectif mais, si vous aimez apprendre des trucs, et en informatique il est fort probable que vous aimiez apprendre des trucs,
-->

---
layout: center
---

### 🎉 Le fun

# **Progresser**

<div class="fun-sub">un jour vous taperez votre première phrase sans regarder le clavier</div>

<style>
.fun-sub { color: #1e6091; font-style: italic; margin-top: 1em; }
</style>

<!--
En plus, chaque optimisation que vous allez faire va d'abord vous prendre du temps, puis vous allez l'intégrer et passer à celle d'après
-->

---
layout: center
---

### 🎉 Le fun

# **Partager**

<div class="fun-sub">débattre, comparer, observer ses collègues</div>

<!--
Un truc rigolo aussi, c'est que vous allez pouvoir en discuter autour de vous
-->

---
layout: center
---

### ⚡ La vitesse

# déguisée en *fluidité*

<!--
En plus de tout le reste, la résultante de tout le travail que vous mettez en place c'est que vous êtes plus rapide et efficace dans ce que vous faites.
-->

---
layout: fact
---

# Le résultat

<div class="not-the-goal">pas le but</div>

<style>
.not-the-goal {
  font-size: 0.5em;
  color: #c81e1e;
  margin-top: 0.5em;
  font-style: italic;
}
</style>

<!--
Je conseille de chercher la fluidité dans un premier temps, plutôt que la vitesse
-->

---

## 📅 On démarre avec un rendez-vous

### Fabriquer le temps

<v-clicks>

- 📚 **veille** — 30 min/semaine si possible
- 👯 **pair-prog** — observez vos collègues travailler
- ☕ **pause café** — quelqu'un a déjà résolu votre problème

</v-clicks>

<v-click>

<div class="prescription mt-6">
  <div class="rx">℞</div>
  <div>
    <strong>Distillation de connaissance</strong> : se faire expliquer en 1 min ce qui prendrait 1 h tout·e seul·e
    <div class="dose">posologie : <strong>overdose recommandée</strong></div>
  </div>
</div>

</v-click>

<style>
.prescription {
  display: flex;
  gap: 1em;
  align-items: center;
  background: #fff8e1;
  border: 1px dashed #c81e1e;
  border-radius: 8px;
  padding: 1em 1.4em;
  max-width: 600px;
}
.rx {
  font-size: 3em;
  color: #c81e1e;
  font-family: serif;
  line-height: 1;
}
.dose { color: #c81e1e; font-size: 0.9em; margin-top: 0.4em; }
</style>

<!--
Pour la DX-ite, malheureusement il n'y a pas moyen d'utiliser Doctolib pour prendre rendez-vous
-->

---

## 💊 Protocole thérapeutique — Méthode générale

<div class="protocol">

<v-clicks>

<div class="step"><span class="num">1</span><div><strong>Identifier</strong> une friction</div></div>
<div class="step"><span class="num">2</span><div><strong>Analyser</strong> : origine, fréquence, pertinence</div></div>
<div class="step"><span class="num">3</span><div><strong>Corriger</strong> avec un outil existant ou ajouté</div></div>

</v-clicks>

</div>

<style>
.protocol { margin-top: 2em; }
.step {
  display: flex;
  align-items: center;
  gap: 1em;
  margin-bottom: 1em;
  background: #f0f7fc;
  padding: 1em 1.4em;
  border-radius: 8px;
  border-left: 4px solid #1e6091;
}
.num {
  background: #1e6091;
  color: white;
  width: 40px; height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2em;
  flex-shrink: 0;
}
</style>

<!--
La méthode générale...
-->

---
layout: two-cols
---

## ⌨️ Le clavier est votre meilleur ami

Ce que vous utilisez le plus → **un clavier**

Ce à quoi vous voulez le moins penser → **un clavier**

<v-clicks>

1. avec **tous** les doigts
2. **sans** regarder

</v-clicks>

::right::

<div class="donut">
  <svg viewBox="0 0 200 200">
    <circle cx="100" cy="100" r="80" fill="none" stroke="#e0eef7" stroke-width="30"/>
    <circle cx="100" cy="100" r="80" fill="none" stroke="#1e6091" stroke-width="30"
            stroke-dasharray="362 503" stroke-dashoffset="0"
            transform="rotate(-90 100 100)"/>
    <text x="100" y="95" text-anchor="middle" font-size="32" font-weight="bold" fill="#0a2540">72%</text>
    <text x="100" y="120" text-anchor="middle" font-size="11" fill="#666">clavier</text>
  </svg>
  <div class="legend">
    <div><span class="dot" style="background:#1e6091"></span> clavier</div>
    <div><span class="dot" style="background:#e0eef7"></span> aussi clavier <em>(en rouge)</em></div>
  </div>
</div>

<style>
.donut { text-align: center; max-width: 100%; }
.donut svg { width: min(240px, 100%); height: auto; }
.legend { margin-top: 0.5em; font-size: 0.9em; }
.legend > div { display: flex; align-items: center; justify-content: center; gap: 0.5em; }
.dot { width: 12px; height: 12px; border-radius: 50%; display: inline-block; }
.legend em { color: #c81e1e; }
</style>

<!--
On va commencer très doucement en parlant de votre interface primaire avec votre ordi: le clavier
-->

---

### 🤔 Pourquoi clavier > souris ?

| outil   | possibilité                         | interaction      | sens    |
|---------|-------------------------------------|------------------|---------|
| ⌨️ clavier | ~50 touches                    | 10 doigts | toucher |
| 🖱️ souris  | 4M de pixels                  | 1 curseur        | vue     |

<div class="conclusion mt-6">
  <span class="big-arrow">→</span>
  <span>on automatise par <strong>mouvements de doigts</strong>, pas par mouvements de curseur</span>
</div>

<style>
.conclusion {
  display: flex;
  align-items: center;
  gap: 1em;
  background: #f0f7fc;
  padding: 1em 1.4em;
  border-radius: 8px;
  border-left: 4px solid #2d8fbe;
}
.big-arrow { font-size: 2em; color: #1e6091; }
</style>

<!--
Rapidement, avec des maths et un peu de mauvaise foi voici un tableau avec des chiffres
-->

---

### 🔍 Redécouvrez votre quotidien du bout de votre clavier

Prenez vos **trois logiciels les plus ouverts**, apprenez les raccourcis clavier.

<v-clicks>

- 🎹 **vim motion dans l'IDE** — réutilisable dans plein de TUI
- 🔌 **extensions** qui révèlent quel raccourci vous auriez pu utiliser (ex : `Shortcut Hunter`, `Key Promoter X`)
- 📝 tenir une **liste des frictions** de la semaine

</v-clicks>

<!--
Pour commencer, prenez vos logiciels les plus utilisés et apprenez à faire au clavier vos tâches les plus répétées
-->

---
layout: section
---

## 🩻 Optimisons notre quotidien

<div class="section-sub">au-delà des applis : ce qui les entoure</div>

<style>
.section-sub { color: #b8d9ec; margin-top: 1em; font-style: italic; }
</style>

<!--
Une fois que vous êtes à l'aise dans vos applications, un autre domaine qui est aussi, voire je dirais plus important c'est ce qui entourent vos applications.
-->

---

## 🎯 Où mettre le focus

<v-clicks depth="2">

1. **L'espace entre les tâches**
   - window, clipboard, screenshot
   - « peu importe votre métier, vous aurez la même friction »
2. **L'information en 1 coup d'œil**
   - couleurs, distractions filtrées, résumés
3. **La complétion**
   - auto-completion, aliases, snippets

</v-clicks>

---
layout: two-cols
---

## 🧪 DEMO

### Message Slack efficace

Avant : 7 messages, pas de contexte, pas de lien

Après : 1 message, screen annoté, lien direct

::right::

<div class="demo-after">
  <div class="slack-msg-good">
    <div class="avatar" style="background:#1e6091">J</div>
    <div>
      <strong>Jules</strong> <span class="time">14:02</span><br/>
      🐛 <strong>Bug login mobile</strong> — repro 3/5<br/>
      → <a>#PROJ-1234</a><br/>
      <div class="screen-mock">📸 screenshot annoté</div>
      Besoin : confirmer si lié au PR #87 ?
    </div>
  </div>
</div>

<style>
.demo-after {
  background: #1a1d21;
  border-radius: 8px;
  padding: 1em;
  font-family: 'Lato', sans-serif;
  font-size: 0.85em;
  color: #d1d2d3;
}
.slack-msg-good { display: flex; gap: 0.6em; }
.slack-msg-good a { color: #1d9bd1; text-decoration: underline; }
.screen-mock {
  background: #2c2f33;
  border: 1px dashed #555;
  padding: 1.5em;
  text-align: center;
  margin: 0.5em 0;
  border-radius: 4px;
  color: #888;
}
.avatar {
  width: 30px; height: 30px;
  border-radius: 6px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}
.time { color: #898989; font-size: 0.85em; margin-left: 0.4em; }
</style>

---

## 🛡️ Prévention & immunité collective

<v-clicks depth="2">

- 📖 **Revoir ses bases et approfondir**
  - config de l'OS, git, vim
- 🤝 **Discuter / conférences / partager / blog**

</v-clicks>

<v-click>

### 💰 Effet de composition

<div class="compound-chart">
  <svg viewBox="0 0 400 150">
    <line x1="20" y1="130" x2="380" y2="130" stroke="#999" stroke-width="1"/>
    <line x1="20" y1="20" x2="20" y2="130" stroke="#999" stroke-width="1"/>
    <path d="M 20,128 Q 200,125 280,90 T 380,20" fill="none" stroke="#1e6091" stroke-width="3"/>
    <text x="380" y="15" text-anchor="end" font-size="11" fill="#1e6091">votre productivité</text>
    <text x="20" y="145" font-size="10" fill="#666">aujourd'hui</text>
    <text x="380" y="145" text-anchor="end" font-size="10" fill="#666">dans 6 mois</text>
  </svg>
</div>

</v-click>

<style>
.compound-chart { max-width: 500px; margin-top: 0.5em; }
</style>

---
layout: center
---

## 🩹 Conclusion

<div class="conclusion-grid">
  <div>🔍 Identifier</div>
  <div>🧪 Analyser</div>
  <div>🔧 Corriger</div>
  <div>🔁 Répéter</div>
</div>

<div class="closing-note mt-8">
  Une consultation à la fois.
</div>

<style>
.conclusion-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1em;
  margin-top: 2em;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}
.conclusion-grid > div {
  background: #1e6091;
  color: white;
  padding: 1em;
  border-radius: 8px;
  font-weight: bold;
}
.closing-note { color: #1e6091; font-style: italic; font-size: 1.2em; }
</style>

---
layout: quote
---

> Votre efficacité rayonne sur vos collègues.

---
layout: quote
---

> Rien n'est à craindre, tout est à comprendre.

<div class="quote-author">— Marie Curie</div>

<style>
.quote-author { text-align: right; margin-top: 1em; color: #1e6091; font-style: italic; }
</style>

---

## 📚 Ressources

<div class="resources">

- 🧠 **La mémoire procédurale libère la conscience** — [arc.net/l/quote/ihraituc](https://arc.net/l/quote/ihraituc)
- 🎬 **How to practice effectively...** — Annie Bosler & Don Greene — [YouTube](https://www.youtube.com/watch?v=f2O6mQkFiiw)
- 🔁 **Plan-Do-Check-Act** — [bitesizelearning.co.uk](https://www.bitesizelearning.co.uk/resources/pdca-plan-do-check-act)

</div>

<div class="thanks">
  Merci 🩺
</div>

<style>
.resources {
  max-width: 52rem;
  margin: 0 auto;
  text-align: left;
}
.resources li { margin-bottom: 0.8em; }
.thanks {
  text-align: center;
  margin-top: 3em;
  font-size: 2em;
  color: #1e6091;
  font-weight: bold;
}
</style>
