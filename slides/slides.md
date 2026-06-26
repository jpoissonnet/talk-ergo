---
theme: default
title: Et si vos outils faisaient un peu plus pour vous ?
aspectRatio: 16/9
transition: slide-left
duration: 50min
layout: intro
---

<h1 class="text-4xl font-bold">Et si vos outils faisaient un peu plus pour vous ?</h1>

<p class="text-2xl">CAS N°001 · DURÉE 50 MIN</p>
<p class="text-2xl">PATIENT : VOUS</p>
<p class="text-2xl">DOCTEUR : VOUS</p>

<!--
Installez-vous confortablement, aujourd'hui on va parler de vous, et surtout on va parler de votre relation à vos outils.
-->

---
layout: image
image: https://media.vanityfair.fr/photos/673ae9083b28d3f24bf64e2c/1:1/w_2910,h_2910,c_limit/dr%20house%2020%20anni%20dopo-cast.jpg
---


<!-- À la manière d'un épisode de DR House, ou d'un amphi de médecine, on va regarder un dignostic, et une maladie de notre ère -->

---
layout: image
image: https://files.mastodon.social/media_attachments/files/112/505/726/754/005/422/original/605d65dec7235350.jpg
---

<!--
le phénomène qu'on va étudier se produit sûrement chez vous, il se manifeste de plein de façons différentes, on va lister qq symptomes et voir si vous pouvez l'identifier
-->

---

<v-clicks>

<ul class="flex flex-col items-center gap-12">
<li v-motion :initial="{ rotate: 2 }" :enter="{ rotate: -2 }" class="list-none text-xl italic ">J'ai perdu mon copier-coller 🧭</li>
<li v-motion :initial="{ rotate: -3 }" :enter="{ rotate: 2 }" class="list-none text-xl font-bold translate-x-80"> Ah mince j'ai pas mis le lien dans le message</li>
<li v-motion :initial="{ rotate: -2 }" :enter="{ rotate: 2 }" class="list-none text-xl font-semibold text-blue-500 translate-y-20"> Oups, j'avais pas vu que j'avais une réu</li>
<li v-motion :initial="{ rotate: 4 }" :enter="{ rotate: -4 }" class="list-none text-xl translate-x-100 text-purple-500 translate-y-30"> Elle où la fenetre que je dois partager ?</li>
<li v-motion :initial="{ rotate: 5 }" :enter="{ rotate: -3 }" class="list-none text-xl font-bold translate-y-40 text-green-500"> Attends je vais me l'envoyer par message pour le retenir</li>
</ul>

</v-clicks>

<!--
Les symptômes peuvent être multiples, vous avez peut-être déjà dit ou entendu les choses suivantes...
- J'ai perdu mon copier-coller
- Ah mince j'ai pas mis le lien dans le msg
- Oups, j'avais pas vu que j'avais une réu
- Elle où la fenetre que je dois partager?
- attends je vais me l'envoyer par message pour le retenir
ça c'est les premiers signes
-->

---
layout: center
---

<v-clicks>

<li class="list-none text-xl font-bold -rotate-2 my-8"> Oui c'est 20sec mais je suis en plein dans autre chose</li>
<li class="list-none text-xl font-bold rotate-3 my-30"> Je prends mes notes dans mes brouillons de mails parce que c'est pratique</li>
<li class="list-none text-xl font-bold -rotate-2 my-8"> Ça fait 10 ans que je fais ça et j'ai accepté que c'était relou</li>

</v-clicks>
<!-- c'est moins fréquent mais on a aussi celles si:
- Oui c'est 20sec mais je suis en plein dans autre chose
- Je prends mes notes dans mes brouillons de mails parce que c'est pratique
- Ça fait 10 ans que je fais ça et j'ai accepté que c'était relou
-->

---
layout: image
image: https://static.wikia.nocookie.net/joueur-du-grenier/images/4/43/David_Good.jpg/revision/latest/scale-to-width-down/1200?cb=20200629174229&path-prefix=fr
---

<!--
En soit c'est rien de grave, c'est juste que ça pourrait être beaucoup mieux.
On a des petites frictions du quotidien qui sont assez pénible pour nous ralentir mais pas assez pour qu'on prenne le temps de les enlever, mais en vrai c'est la réflexion qui souvent amène à cette maladie
-->

---
layout: section
---

<h1 v-click v-motion :initial="{ scale: 0.5, opacity: 1 }" :enter="{ scale: 1, textDecoration: 'none'  }" :click-2="{ scale: 0.5, opacity: .4, textDecoration: 'line-through' }">La DX-ite chronique</h1>

<h1 v-click v-motion :initial="{ scale: 0.5, opacity: 0 }" :enter="{ scale: 1.2, opacity: 1, y: -50 }">La frictionite chronique</h1>

<!--
Au début je voulais l'appeler la DX-ite en référence à l'expérience de developpeur (DX)
mais en fait je me suis rendu compte que ça concernait une population bien plus large

En fait tout les gens qui travaillent sur un ordinateur sont concernés. C'est une maladie chronique parce qu'on peut la traiter, mais c'est malheureusement un combat que l'on devra continuer de mener à jamais.
-->

---
layout: quote
---

<blockquote><h2>La poubelle est à l'autre bout du bloc, on traverse la salle avec des compresses sales dans les mains</h2></blockquote>

<h3 class="text-lg mt-8">— Infirmier de la famille Goodenough</h3>

<!--
En fait quand je dis que ça ne concerne pas les devs, c'est parceque j'ai entendu de la part d'une infirmière que tout le personnel n'a pas la même façon de préparer un bloc, opératoire, et certaines façons n'ont aucun sens.
-->

---
layout: image
image: https://i2-prod.themirror.com/article136839.ece/ALTERNATES/s1200e/0_Gordon.jpg
---

<!--
Dans la cuisine de mes colocs, j'ai pu l'observer, ils se dispersent partout et traversent toute la cuisine avec les ingrédients dans les mains au risque de tout faire tomber.
-->
---
layout: section
---

<h1>Qu'est-ce qu'on gagne à traiter ?</h1>

<h3 v-click class="italic text-gray-500">« Ça fait 10 ans que je fais comme ça, et ça marche… »</h3>
<h3 v-click>Parce que c'est le 2ème meilleur moment pour s'en occuper...</h3>
<h4 class="mt-3" v-click>le 1er c'était hier 🙃</h4>

<!--
Bon alors en bon david goodenough, vous allez dire, oui mais si c'est pas si grave, ça sert à quoi de s'en occuper maintenant
Et à ça je répondrais 3 choses...
-->

---
layout: section 
---

<h1>1. Le fun</h1>

<!--
Tout d'abord: le fun, je pense qu'en venant en parler en conf je m'adresse à des gens qui aiment apprendre et qui sont curieux.
Alors je vous le dis: apprendre à se servir de ses outils, c'est rigolo, ça peut devenir assez technique pour ceux qui aiment, et c'est super gratifiant parcequ'on se voit progresser
-->

---
layout: image
image: https://preview.redd.it/started-at-10-wpm-in-march-built-a-tool-to-track-full-v0-ux016wvjej7f1.png?width=1865&format=png&auto=webp&s=fd70dc5c86293ad035ba91ad2a31ccc7186241eb
backgroundSize: contain
---

<!--
Un exemple tout bête, c'est d'apprendre à taper sur un clavier. c'est votre interface primaire avec votre ordinateur. Quelque soit votre métier, il est fort probable que vous gagneriez beaucoup à taper plus vite. L'avantage c'est que la vitesse de frappe c'est une métrique facile à mesurer et du coup on pas voir une jolie courbe
-->

---

<div class="relative">  
<img class="absolute" v-click src="https://dfjx2uxqg3cgi.cloudfront.net/img/photo/270603/270603_00_2x.jpg?20230207234316"/>
<img class="absolute left-1/2 -translate-x-1/2" v-click src="https://thumbs.dreamstime.com/b/woman-writing-blog-content-notebook-table-closeup-162627112.jpg"/>
<img class="absolute left-1/2 -translate-x-1/2" v-click src="https://sunny-tech.io/gallery/01.jpg"/>
</div>


<!--
C'est un super vecteur de conversation et de partage aussi que ce soit pour en discuter autour d'un café, en faire un article de blog, ou faire des conf à ce propos
-->
---
layout: section
---
<h1>2. La charge cognitive</h1>

<!--
eh oui, remettez vos blouse, on va parler cerveau
La charge cognitive, c'est la quantité d'information que vous avez dans votre mémoire court terme.
-->

---
layout: article
link: https://github.com/zakirullin/cognitive-load
imgSrc: https://github.com/zakirullin/cognitive-load/raw/main/img/cognitiveloadv6.png
---

<!--
En gros, quand vous devez faire une tâche en plusieurs fois, il faut stocker les étapes dans votre mémoire de travail, à court-terme
et ça entraine beaucoup de fatigue et des risques d'erreurs à chaque étape

ps: il y a un super article qui parle de la charge cognitive dans le dev, et les pratique de code qui l'impact dont je mets le lien ici, pour ceux qui n'ont pas le temps de scanner je donnerais mes sources à la fin
-->

---
layout: image
image: https://www.frcneurodon.org/app/uploads/2015/11/Mouvement-2.jpg
backgroundSize: 60%
---

<Arrow v-click v-motion :initial="{ translateX: -200}" :enter="{ translateX: 0}" x1="10%" y1="10%" x2="35%" y2="50%" color="black" width="6" />
<Arrow v-click v-motion :initial="{ translateX: 200}" :enter="{ translateX: 0}" x1="75%" y1="80%" x2="47%" y2="46%" color="black" width="6" />
<!--
Ça c'est un cerveau. Votre mémoire de travail et ce qui permet de raisonner se situe dans le cortex préfrontal. On sait que mettre trop d'information à cet endroit déclenche une surcharge cognitive.
La bonne nouvelle, c'est qu'on a une zone voisine, au niveau du cortex prémoteur dont on peut se servir pour alléger la charge. C'est dans cette zone que se situe la mémoire procédurale, l'ensemble des tâches qu'on sait faire sans y penser: faire ses lacets, ouvrir une bouteille etc.
L'idée c'est qu'en choisissant bien nos outils, et nos habitudes, on peut déménager le plus possible de charge dans cette zone, en effaçant les frictions pour les remplacer par des automatismes
-->

---
layout: section
---

<h1 v-click v-motion :initial="{ scale: 0.5, opacity: 1 }" :enter="{ scale: 1, textDecoration: 'none'  }" :click-2="{ scale: 0.5, opacity: .4, textDecoration: 'line-through' }">3. La vitesse</h1>
<h1 v-click v-motion :initial="{ scale: 0.5, opacity: 0 }" :enter="{ scale: 1.2, opacity: 1, y: -50 }">3. La fluidité</h1>

<!--
L'effet le plus important est le plus visible, après qq temps, astuces et investissements, vous allez vous apercevoir que vous êtes juste plus rapide...
À mon avis, c'est pas qqchose qu'il faut chercher activement au début, c'est juste une conséquence de l'effort que vous avez mis et de votre recablage cérébral.
Le vrai objectif que vous devriez visez c'est la fluidité, la vitesse viendra avec, comme pour le langage
-->

---
layout: full
---

<h1 class="text-center">Prescription: Mémoire procédurale</h1>

<img src="/boxing.gif" alt="boxeur frappant un sac" class="mx-auto mt-8 h-80 rounded-xl object-cover" />

<!--
Du coup la prescription pour votre frictionite, c'est simple, on identifie une friction, on analyse la cause, on corrige et on répète
Et la mémoire procédurale fonctionne exactement pareil, c'est la répétition d'un mouvement, en l'ayant décomposer et corriger, qui va l'inscrire comme une nouvelle compétence
-->

---
layout: section
---

<h1>Comment on fait ?</h1>

<!--
Bon alors c'est très sympa de nous dire qu'on peut accélérer, mais comment on fait ?
-->

---
layout: full
---

<img 
  src="https://www.chambre-syndicale-sophrologie.fr/wp-content/uploads/2022/11/doctolib.jpg"
  class="h-1/2 absolute top-1/2 left-1/2"
  v-click
  v-motion
  :initial="{ scale: 0.5, opacity: 1, translateX: '-50%', translateY: '-50%' }"
  :enter="{ scale: 1, opacity: 1 }"
/>

<img
  src="https://everhour.com/blog/wp-content/uploads/2024/05/google-calendar-color-coding.jpg"
  class="h-full absolute top-1/2 left-1/2"
  v-click
  v-motion
  :initial="{ scale: 0.5, opacity: 1, translateX: '-50%', translateY: '-50%' }"
  :enter="{ scale: 1, opacity: 1 }"
/>

<!--
Malheureusement il y a pas de Doctolib pour prendre des rdvs pour soigner sa DX. Donc il va falloir trouver du temps dans votre semaine pour le faire.
-->

---
layout: image
image: https://thumbs.dreamstime.com/z/temps-de-compression-41255817.jpg
---


---
layout: center
---

<h1 class="text-5xl font-black text-center mb-8">La méthode en 3 étapes</h1>

<div class="flex justify-center gap-16 items-center my-12">

  <div class="flex flex-col items-center" v-click>
    <span class="text-6xl mb-4">😣</span>
    <span class="text-xl font-bold mb-2 text-red-500">1. Symptôme</span>
    <span class="text-gray-600 text-center">Identifier une friction<br/><i>(Qu'est-ce qui ralentit&nbsp;?)</i></span>
  </div>
  
  <div class="flex flex-col items-center" v-click>
    <span class="text-6xl mb-4">🔎</span>
    <span class="text-xl font-bold mb-2 text-yellow-500">2. Diagnostic</span>
    <span class="text-gray-600 text-center">Trouver l’outil ou le réglage<br/><i>(Comment le résoudre&nbsp;?)</i></span>
  </div>

  <div class="flex flex-col items-center" v-click>
    <span class="text-6xl mb-4">💊</span>
    <span class="text-xl font-bold mb-2 text-green-600">3. Prescription</span>
    <span class="text-gray-600 text-center">Prendre la nouvelle habitude<br/><i>(S’entraîner, répéter)</i></span>
  </div>

</div>

<!--
C'est la méthode générale : on commence par repérer le symptôme — la friction, on diagnostique le point d'amélioration possible (souvent une config ou un outil), puis on l'intègre comme une nouvelle habitude. Ce cycle est à répéter pour apaiser la "frictionite" petit à petit.
-->

---
layout: image
image: https://lagranderecre-lagranderecre-fr-storage.omn.proximis.com/Imagestorage/images/0/0/607efd4c57507_B2176_HAND_GMS_WMT_OPERATION_177.jpg
backgroundSize: contain
---

<!--
Et là je vais vous decevoir parceque je n'ai pas de solution miracle pour rebrancher votre cerveau et vous obtenir une expérience sans friction.
Par contre je connais qqun qui peut...
-->

---
layout: section
---

<h1>Vous êtes le patient et le médecin</h1>

<!--
Eh oui, c'est vous qui connaissez le mieux vos habitudes, vos gouts et vos frictions, c'est donc de vous que doit venir le remède
-->

---
layout: section
---

<h1>On commence par quoi ?</h1>
<h3 v-click class="text-gray-500">Les gains immédiats, pour tout le monde</h3>

<!--
Y consacrer du temps c'est bien, mais on commence par quoi? Mini disclaimer: Je vais donner des exemples à partir de maintenant qui sont basées sur ce que j'ai vécu et vu. Il s'agit de ma façon de répondre aux problèmes que j'ai rencontré. Vous n'aurez surement pas les mêmes besoins, ni les mêmes façons d'y répondre.
-->

---
layout: center
---

<SlackNotification
  class="absolute right-4 top-4"
  avatar-src="https://media.licdn.com/dms/image/v2/C4D03AQFhBI1feJOYeQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1637317452394?e=1783555200&v=beta&t=k7Deh4Swr4pqEgSxx3z-lZwW8C6Xy8AblmIdrPin-Eo"
  v-click="4"
  v-motion
  :initial="{ translateX: 100, filter: 'blur(10px)' }"
  :enter="{ translateX: 0, filter: 'blur(0px)' }"
/>


<div class="flex gap-8 justify-center">
  <div 
    class="bg-blue-100 rounded-xl px-8 py-6 shadow-lg flex flex-col items-center min-w-[180px] max-w-[250px]"
    v-click 
    v-motion 
    :initial="{ translateX: -100, translateY: -100, opacity: 0 }"
    :enter="{ translateX: 0, translateY: 0, opacity: 1 }"
  >
    <span class="text-4xl mb-2">📋</span>
    <span class="font-bold text-lg">Copier-coller</span>
  </div>
  <div 
    class="bg-blue-100 rounded-xl px-8 py-6 shadow-lg flex flex-col items-center min-w-[180px] max-w-[250px]"
    v-click 
    v-motion 
    :initial="{ scale: 0.2, opacity: 0, rotate: 180 }"
    :enter="{ scale: 1, opacity: 1, rotate: 0 }"
  >
    <span class="text-4xl mb-2">📸</span>
    <span class="font-bold text-lg">Faire un screenshot</span>
  </div>
  <div 
    class="bg-blue-100 rounded-xl px-8 py-6 shadow-lg flex flex-col items-center min-w-[180px] max-w-[250px]"
    v-click 
    v-motion 
    :initial="{ scale: 0.5, opacity: 0 }"
    :enter="{ scale: 1, opacity: 1 }"
  >
    <span class="text-4xl mb-2">🖥️</span>
    <span class="font-bold text-lg">Changer de fenêtre</span>
  </div>
</div>

<!-- la raison est que c'est dans les actions les plus courtes et les plus fréquentes qu'on voit vraiment la différence.
...
Interruption: ah pardon, c'est mon chef qui a besoin encore une fois du lien du dashboard...
En vrai je peux lui répondre maintenant parceque le faire maintenant ça va le sortir de ma tête
- navigation sur faux dashboard
- prise de screen + copier le lien
- aller sur slack
- coller les infos
- fermer et revenir au talk
-->

---
layout: none
clicks: 10
---

<ArthurSlow />

<!--
Reprenons le scénario du chef. Voilà comment ça se passe quand rien n'est optimisé : chaque étape coûte quelques secondes, et au bout on a perdu son fil.
-->

---
layout: full
---

# 📋 Copier-coller → utiliser le ✨presse-papier✨

<ul class="-ml-8 text-xl">
<li class="list-none"><span class="font-bold">un historique</span>, pas un seul emplacement</li>
<li class="list-none"><span class="font-bold">re-coller</span> ce qu'on avait copié il y a 3 copies</li>
<li class="list-none">coller <span class="font-bold">en séquence</span></li>
</ul>
<p class="text-gray-500 mt-6">ex. Maccy, Raycast, Klipper… — universel, tous OS</p>


<!--
Premier geste : le presse-papier. Par défaut on n'a qu'un seul emplacement. Un gestionnaire garde un historique, permet de coller en texte brut, et d'épingler ce qu'on recolle souvent.
-->

---
layout: full
---

# 📸 Screenshot → illustrer une information 

<v-clicks>

- envoyer direct dans le **presse-papier** ou sur le bureau
- annoter / flécher avant d'envoyer
- bonus: ocr + qr code

</v-clicks>

<!--
Deuxième geste : la capture. On veut une capture de zone, qui atterrit dans le presse-papier, prête à coller. Et quand un lien suffit, autant l'envoyer plutôt qu'une image.
-->

---
layout: full
---

# 🖥️ Gérer ses fenêtres → au clavier

<v-clicks>

- ⚠️ ⌘ + Tab n'est pas idem-potent
- un switcher (Raycast / AltTab / rcmd) pour viser une app précise
- des **raccourcis dédiés** : ⌥⌘S = Slack, ⌥⌘B = navigateur
- la fenêtre s'ouvre toujours au bon endroit, sans viser

</v-clicks>

<!--
La raison pour laquelle le changement de fenetre est aussi dur c'est que tout se fait au visuel : il faut se souvenir de l'icône, la trouver dans la barre, cliquer, espérer le bon écran. Au clavier, on vise une app par un raccourci et elle s'ouvre toujours au même endroit.
-->

---
layout: none
clicks: 12
---

<ArthurFast />

<!--
réviser le scénario
-->


---
layout: image
image: /i-am-speed.jpg
backgroundSize: contain
---

<!--
Vous allez sans doute réduire le nombre de tâche que vous repousse parce que ce qui vous interrompait dans vos pensées et vous prenait 5 min, aujourd'hui vous en prend 2 et vous le faite sans y penser.
-->

---
layout: section
---

# Les maths des gains potentiels

<!-- accrochez vous on va faire des maths -->

---
layout: center
---

<h1 class="text-4xl font-bold text-center">Une journée type</h1>


<div class="flex flex-col items-center gap-4">
<v-clicks>
  <p class="text-3xl text-blue-500">50 copier-collers</p>
  <p class="text-3xl text-green-500">5 captures d'écran</p>
  <p class="text-3xl text-purple-500">100 commandes éxécutées</p>
</v-clicks>
</div>


<!-- accrochez vous on va faire des maths -->

---
layout: center
---

<p class="text-6xl font-black text-gray-500 text-center" v-click>copier-collers</p>
<p class="text-8xl font-bold py-16 text-center">50 × 5s</p>
<p class="text-6xl font-black text-blue-500" v-click>= 2h47 par an</p>

---
layout: fact
---

<p class="text-6xl font-black text-gray-500 text-center" v-click>screenshots</p>
<p class="text-8xl font-bold py-16 text-center">5 × 10s</p>
<p class="text-6xl font-black text-green-500" v-click>= 1h23 par an</p>
---
layout: fact
---

<p class="text-6xl font-black text-gray-500 text-center" v-click>commandes éxécutées</p>
<p class="text-8xl font-bold py-16 text-center">100 × 3s</p>
<p class="text-6xl font-black text-purple-500" v-click>= 4h10 par an</p>

---
layout: fact
---

<p class="text-6xl font-black text-gray-500 text-center" v-click>Au max 🚀</p>
<p class="text-8xl font-bold py-16 text-center">Fluidité</p>

---
layout: fact
---

<p class="text-6xl font-black text-gray-500 text-center" v-click>Allégée 💪</p>
<p class="text-8xl font-bold py-16 text-center">Charge cognitive</p>

---
layout: fact
---

<p class="text-6xl font-black text-center">Total:</p>
<v-clicks>
<AutoFitText :max="50" modelValue="Une semaine de travail de gain" class="font-bold text-center"/>
  <p class="text-5xl"><i class="text-gray-500 text-center">*en ressenti</i></p>
  <p class="text-5xl"><i class="text-gray-500 text-center">*sans compter les heures de config</i></p>
  <p class="text-5xl"><i class="text-gray-500 text-center">*discours non contractuel</i></p>
</v-clicks>

<!-- on va dire que c'est beaucoup -->

---
layout: intro
---

<img
  src="/jules.png"
  alt="Jules Poissonnet"
  class="absolute right-12 top-1/2 -translate-y-1/2 w-64 h-64 object-cover rounded-2xl shadow-xl"
/>

# Jules Poissonnet

<p class="text-2xl flex items-center gap-2">Software Developer @ Bedrock Streaming</p>

<img src="/bedrock.png" alt="Bedrock Streaming" class="w-1/2 dark:invert" />

<!--
Petite pause pour me présenter : moi c'est Jules, dev chez Bedrock Streaming. Tout ce que j'ai dit jusqu'ici est universel. À partir de maintenant, je vous parle de MES optimisations, celles que j'ai bricolées pour mes propres frictions. Prenez ce qui vous parle.
-->

---
layout: quote
---

<blockquote><h2>Et toi comment tu fais dans ton quotidien ?</h2></blockquote>

<h3 class="text-lg mt-8">— Vous, {{ new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) }}</h3>

<!-- Jusqu'ici c'était universel, ça vaut pour tout le monde. À partir de maintenant je passe à mes optimisations perso de dev : prenez ce qui vous parle. -->

---
layout: center
---

# Mes 3 axes

<div class="flex gap-8 justify-center mt-12">
  <div
    class="bg-blue-100 rounded-xl px-8 py-6 shadow-lg flex flex-col items-center min-w-[180px] max-w-[250px]"
    v-click
    v-motion
    :initial="{ translateY: 40, opacity: 0 }"
    :enter="{ translateY: 0, opacity: 1 }"
  >
    <span class="text-4xl mb-2">📡</span>
    <span class="font-bold text-lg">Radar</span>
    <span class="text-xs text-gray-500 mt-1">la bonne info en vue</span>
  </div>
  <div
    class="bg-blue-100 rounded-xl px-8 py-6 shadow-lg flex flex-col items-center min-w-[180px] max-w-[250px]"
    v-click
    v-motion
    :initial="{ translateY: 40, opacity: 0 }"
    :enter="{ translateY: 0, opacity: 1 }"
  >
    <span class="text-4xl mb-2">🤫</span>
    <span class="font-bold text-lg">Silence</span>
    <span class="text-xs text-gray-500 mt-1">couper le bruit</span>
  </div>
  <div
    class="bg-blue-100 rounded-xl px-8 py-6 shadow-lg flex flex-col items-center min-w-[180px] max-w-[250px]"
    v-click
    v-motion
    :initial="{ translateY: 40, opacity: 0 }"
    :enter="{ translateY: 0, opacity: 1 }"
  >
    <span class="text-4xl mb-2">✋</span>
    <span class="font-bold text-lg">Parcimonie</span>
    <span class="text-xs text-gray-500 mt-1">taper moins</span>
  </div>
</div>

<!-- Mes optimisations perso se rangent en 3 axes : Radar (avoir la bonne info en vue), Silence (couper le bruit), Parcimonie (taper moins, se tromper moins). -->

---
layout: full
---

# 📡 Radar

<img v-click v-motion :initial="{ scale: 0.5, opacity: 1 }" :enter="{ scale: 1, opacity: 1 }" src="https://i.redd.it/e13ts578tb881.jpg" alt="Jurassic Park logo" class="h-2/3 mx-auto mt-20" />

<!-- La vue c'est un sens un peu traître parceque autant on peut oublier les choses qui ne bougent pas, et ne pas voir que c'est l'heure d'aller en réu, et autant la moindre notification en haut de l'écran nous fait tourner les yeux -->

---
layout: full
---

# 📡 Radar — la bonne info, sans la chercher

<div class="absolute inset-0">
  <ToolCard v-click v-motion :initial="{ y: 40, opacity: 0, scale: 0.6 }" :enter="{ y: 0, opacity: 1, scale: 1 }" class="absolute left-[14%] top-[30%] -rotate-3" name="p10k" icon="⚡" img="/logos/powerlevel10k.png" desc="prompt : env · node · git" />
  <ToolCard v-click v-motion :initial="{ y: 40, opacity: 0, scale: 0.6 }" :enter="{ y: 0, opacity: 1, scale: 1 }" class="absolute left-[55%] top-[24%] rotate-2" name="Notion Calendar" icon="📅" img="https://cdn.simpleicons.org/notion" desc="prochaine réu en vue" />
  <ToolCard v-click v-motion :initial="{ y: 40, opacity: 0, scale: 0.6 }" :enter="{ y: 0, opacity: 1, scale: 1 }" class="absolute left-[58%] top-[65%] rotate-1" name="météo" icon="🌤️" desc="le temps, en widget" />
  <ToolCard v-click v-motion :initial="{ y: 40, opacity: 0, scale: 0.6 }" :enter="{ y: 0, opacity: 1, scale: 1 }" class="absolute left-[18%] top-[60%] rotate-3" name="git-delta" icon="🔺" img="/logos/delta.png" desc="diffs lisibles" />
</div>

<!--
Radar : avoir en permanence sous les yeux les infos qui comptent, sans aller les chercher. Mon prompt me donne le contexte (env, version de Node, état git), Notion Calendar m'affiche ma prochaine réu, le widget météo m'évite d'ouvrir une app. Et côté terminal, eza, delta et btop rendent l'info lisible d'un coup d'œil.
-->

---
layout: center
---

# 🤫 Silence

<p class="text-xl text-gray-500 mt-4">Tout ce qui clignote, vibre ou dépasse vole un bout d'attention.</p>

<!-- Silence : réduire les distractions au minimum. Savoir que mon wifi est actif ne m'aide pas ; en cachant l'icône je laisse de la place à ce qui compte vraiment (mon VPN est-il actif ?). Pareil pour les fenêtres : tout en plein écran, pas de panneaux inutiles qui grignotent l'écran. -->

---
layout: full
---

# 🤫 Silence — couper le bruit

<div class="absolute inset-0">
  <ToolCard v-click v-motion :initial="{ y: 40, opacity: 0, scale: 0.6 }" :enter="{ y: 0, opacity: 1, scale: 1 }" class="absolute left-[16%] top-[30%] -rotate-2" name="Ice" icon="🧊" img="/logos/ice.png" desc="menu bar épurée" />
  <ToolCard v-click v-motion :initial="{ y: 40, opacity: 0, scale: 0.6 }" :enter="{ y: 0, opacity: 1, scale: 1 }" class="absolute left-[56%] top-[26%] rotate-2" name="aerospace" icon="🪟" img="/logos/aerospace.png" desc="tiling au clavier" />
  <ToolCard v-click v-motion :initial="{ y: 40, opacity: 0, scale: 0.6 }" :enter="{ y: 0, opacity: 1, scale: 1 }" class="absolute left-[33%] top-[47%] rotate-1" name="plein écran" icon="⛶" desc="toutes les fenêtres maximisées" />
  <ToolCard v-click v-motion :initial="{ y: 40, opacity: 0, scale: 0.6 }" :enter="{ y: 0, opacity: 1, scale: 1 }" class="absolute left-[60%] top-[65%] -rotate-2" name="side-bars off" icon="📐" desc="moins de panneaux dans l'IDE" />
  <ToolCard v-click v-motion :initial="{ y: 40, opacity: 0, scale: 0.6 }" :enter="{ y: 0, opacity: 1, scale: 1 }" class="absolute left-[22%] top-[70%] -rotate-1" name="gh" icon="🐙" img="https://cdn.simpleicons.org/github" desc="GitHub sans quitter le terminal" />
</div>

<!--
Silence : moins de bruit, plus de focus. Ice range et cache ce qui pollue ma barre de menu, aerospace dispose mes fenêtres au clavier et tout reste en plein écran, je coupe les side-bars de l'IDE qui grignotent l'écran, ghostty est un terminal qui s'efface, et gh me permet de gérer mes PR sans même ouvrir le navigateur.
-->

---
layout: image
image: https://des-livres-pour-changer-de-vie.com/wp-content/uploads/2021/04/pensees-pour-moi-meme-marc-aurele.jpg
backgroundSize: contain
---

<v-clicks>
  <p class="text-lg text-black">*discours non contractuel</p>
  <div class="flex items-center gap-2"><p class="text-lg text-black">*source Claude</p><img src="https://cdn.worldvectorlogo.com/logos/anthropic-1.svg" alt="anthropic logo" class="w-4 h-4 inline-block" style="vertical-align: middle;" /></div>
</v-clicks>

<!-- Selon Claude, Marc-aurele disait dans son bouquin que notre meilleur ami c'était le clavier.-->

---
layout: two-cols
---

# Souris

<v-clicks>

- un million de pixel possible
- un clic à la fois au max
- erreur facile
- engage la vue et le toucher

</v-clicks>

::right::

# Clavier

<v-clicks>

- ~50 touches
- ~8 doigts en parallèle
- n'engage que le toûcher
- débloque les raccourcis claviers
- stockable en mémoire procédurale

</v-clicks>

<!--
Et c'est facile à voir en fait la souris est beaucoup plus fatigante à utiliser, parcequ'on doit viser, puis cliquer et attendre d'avoir un feedback visuel pour savoir si on est sur le bon bouton. Du côté du clavier, avec un peu de travail, on peut taper sans regarder et atteindre assez vite une vitesse de frappe qui permet de penser et de taper en même temps. Le truc important aussi c'est qu'on va pouvoir intégrer des raccourcis claviers, qui vont débloquer des actions entières, qui seront stockées dans notre mémoire procédurale et donc on pourra faire des actions sans y penser
-->

---
layout: full
---

# ✋ Parcimonie — le shell qui devine

<div class="absolute inset-0">
  <ToolCard v-click v-motion :initial="{ y: 40, opacity: 0, scale: 0.6 }" :enter="{ y: 0, opacity: 1, scale: 1 }" class="absolute left-[15%] top-[30%] -rotate-3" name="atuin" icon="🔍" img="/logos/atuin.png" desc="historique cherchable (⌃R)" />
  <ToolCard v-click v-motion :initial="{ y: 40, opacity: 0, scale: 0.6 }" :enter="{ y: 0, opacity: 1, scale: 1 }" class="absolute left-[56%] top-[26%] rotate-2" name="zoxide" icon="📂" img="/logos/zoxide.png" desc="le cd qui apprend" />
  <ToolCard v-click v-motion :initial="{ y: 40, opacity: 0, scale: 0.6 }" :enter="{ y: 0, opacity: 1, scale: 1 }" class="absolute left-[34%] top-[46%] rotate-1" name="fzf" icon="🎯" img="/logos/fzf.png" desc="complétion floue & interactive" />
  <ToolCard v-click v-motion :initial="{ y: 40, opacity: 0, scale: 0.6 }" :enter="{ y: 0, opacity: 1, scale: 1 }" class="absolute left-[58%] top-[54%] -rotate-2" name="zsh-autosuggestions" icon="✨" desc="la suite, proposée en gris" />
  <ToolCard v-click v-motion :initial="{ y: 40, opacity: 0, scale: 0.6 }" :enter="{ y: 0, opacity: 1, scale: 1 }" class="absolute left-[20%] top-[64%] rotate-2" name="zsh-expand" icon="🔬" desc="les alias se déplient" />
</div>

<!--
Parcimonie, premier volet : plutôt que de retaper, je laisse le shell deviner. atuin pour retrouver une commande, zoxide pour sauter dans mes dossiers, fzf pour choisir au lieu de me souvenir, autosuggestions qui propose la suite, et zsh-expand qui déplie mes alias pour qu'ils restent lisibles par les autres.
-->

---
layout: full
---

# ✋ Parcimonie — frapper moins, se tromper moins

<div class="absolute inset-0">
  <ToolCard v-click v-motion :initial="{ y: 40, opacity: 0, scale: 0.6 }" :enter="{ y: 0, opacity: 1, scale: 1 }" class="absolute left-[15%] top-[30%] -rotate-2" name="alias" icon="✂️" desc="p → pnpm · gst · gco" />
  <ToolCard v-click v-motion :initial="{ y: 40, opacity: 0, scale: 0.6 }" :enter="{ y: 0, opacity: 1, scale: 1 }" class="absolute left-[55%] top-[25%] rotate-2" name="snippets" icon="📝" desc="!note · cct" />
  <ToolCard v-click v-motion :initial="{ y: 40, opacity: 0, scale: 0.6 }" :enter="{ y: 0, opacity: 1, scale: 1 }" class="absolute left-[34%] top-[44%] rotate-1" name="fd" icon="📁" img="/logos/fd.png" desc="find, lisible" />
  <ToolCard v-click v-motion :initial="{ y: 40, opacity: 0, scale: 0.6 }" :enter="{ y: 0, opacity: 1, scale: 1 }" class="absolute left-[60%] top-[50%] -rotate-2" name="ripgrep" icon="⚡" img="/logos/ripgrep.png" desc="grep ultra-rapide" />
  <ToolCard v-click v-motion :initial="{ y: 40, opacity: 0, scale: 0.6 }" :enter="{ y: 0, opacity: 1, scale: 1 }" class="absolute left-[17%] top-[61%] rotate-3" name="lazygit" icon="🌿" img="/logos/lazygit.png" desc="git, tout au clavier" />
  <ToolCard v-click v-motion :initial="{ y: 40, opacity: 0, scale: 0.6 }" :enter="{ y: 0, opacity: 1, scale: 1 }" class="absolute left-[53%] top-[69%] -rotate-1" name="unduck" icon="🦆" img="https://cdn.simpleicons.org/duckduckgo" desc="les bangs DuckDuckGo" />
</div>

<!--
Deuxième volet : frapper moins et se tromper moins. Les alias et snippets transforment mes commandes longues en deux-trois lettres, fd et ripgrep remplacent find et grep en plus rapide, lazygit me donne tout git au clavier, et unduck m'envoie direct au bon endroit grâce aux bangs DuckDuckGo. En bonus, les gens pensent que je suis super rapide alors que je tape juste moins.
-->

---
layout: center
class: text-center
---

# L'iceberg des possibilités

<div class="relative w-full max-w-3xl mx-auto mt-8 rounded-xl overflow-hidden shadow-lg">
  <div class="bg-sky-100 px-6 py-5">
    <p class="text-xs uppercase tracking-widest text-sky-600 mb-2">Ma sélection perso — ce que je connais</p>
    <p class="text-lg">📡 Radar · 🤫 Silence · ✋ Parcimonie</p>
  </div>
  <div class="h-1.5 bg-blue-400"></div>
  <div class="bg-gradient-to-b from-blue-500 to-blue-900 text-white px-6 pt-6 pb-12" v-click>
    <p class="text-xs uppercase tracking-widest text-blue-200 mb-3">Tout ce que je ne connais même pas (encore)</p>
    <p class="text-lg leading-relaxed">des milliers d'outils · pour des frictions<br/>que je n'ai même pas conscience d'avoir</p>
  </div>
</div>

<!--
Et tout ce que je viens de montrer, c'est juste MA petite pointe émergée : les outils que je connais et qui collent à mes frictions à moi.
En dessous, il y a un océan d'outils que je ne connais même pas, qui résolvent des frictions dont je n'ai même pas conscience. Personne ne peut tout connaître, et c'est exactement pour ça que ça vaut le coup de partager.
-->

---
layout: section
---

<h1>Votre efficacité est contagieuse</h1>
<h3 v-click class="italic text-gray-500">comment contaminer votre équipe ?</h3>

<!-- Une fois qu'on a soigné sa propre frictionite, on a envie de partager. Mais attention à la façon de s'y prendre. -->


---
layout: center
---

<h1 class="text-center">Montrer, pas prêcher</h1>

<div class="flex gap-10 justify-center items-stretch mt-8">
  <div v-click v-motion :initial="{ x: -60, opacity: 0, rotate: -3 }" :enter="{ x: 0, opacity: 1, rotate: -2 }" class="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-2xl px-8 py-6 shadow-lg w-64 flex flex-col items-center text-center">
    <span class="text-5xl mb-3">🗣️</span>
    <span class="font-bold text-xl text-red-600">Prêcher</span>
    <span class="text-gray-600 dark:text-gray-300 mt-2">« tu <b>dois</b> utiliser X »<br/>→ on se braque</span>
  </div>
  <div v-click v-motion :initial="{ x: 60, opacity: 0, rotate: 3 }" :enter="{ x: 0, opacity: 1, rotate: 2 }" class="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-2xl px-8 py-6 shadow-lg w-64 flex flex-col items-center text-center">
    <span class="text-5xl mb-3">🧲</span>
    <span class="font-bold text-xl text-green-600">Montrer</span>
    <span class="text-gray-600 dark:text-gray-300 mt-2">on vous voit faire<br/>→ les questions viennent d'elles mêmes</span>
  </div>
</div>

<SlackNotification
  class="mt-12"
  v-click
  v-motion
  :initial="{ x: 100, opacity: 0}"
  :enter="{ x: 0, opacity: 1 }"
  name="Un.e curieux.se"
  initials="🙋"
  message="au fait... comment tu fais ça aussi vite tout à l'heure&nbsp;?!"
/>

<!--
On ne convainc personne en évangélisant « tu DOIS utiliser X » : les gens se braquent. Ce qui marche, c'est l'inverse : on vous voit aller vite, et ce sont eux qui viennent demander « mais comment tu fais ça ?! ». C'est ça la vraie porte d'entrée — on tire (pull), on ne pousse pas (push).
-->

---
layout: center
---

# Le partage informel

<p class="text-xl text-gray-500 mt-3">ça circule dans les deux sens 🔄</p>

<!--
Le premier canal de diffusion, c'est l'informel — et ça marche dans les deux sens : on apprend des autres autant qu'on leur transmet.
-->

---
layout: image
image: https://m.media-amazon.com/images/M/MV5BNmU4ODM0NGUtYjk0ZC00ODQwLTk3NjItYThiZWRiNDk2MjFlXkEyXkFqcGc@._V1_.jpg
---


<!-- Un bon endroit pour ça c'est la machine à café, ça vous permet de rendre vos pauses productives, et en fonction vos bureaux ça peut même vous faire croiser des équipes avec qui vous travaillez pas et qui ont donc d'autres expériences enrichissantes -->

---
layout: full
---

# Partager sa config → `chezmoi`

<v-clicks>

- versionne tes dotfiles et les réplique sur n'importe quelle machine
- ton setup devient reproductible et lisible par les autres
- ⚠️ propose **un outil à la fois** — sinon l'équipe oublie tout

</v-clicks>

<!-- chezmoi gère ses dotfiles proprement. Le piège quand on partage, c'est de tout balancer d'un coup : personne ne retient. Un outil à la fois. -->

---
layout: center
---

# Ancrer une dynamique d'équipe

<div class="grid grid-cols-2 gap-x-12 gap-y-8 mt-18">
  <div v-click v-motion :initial="{ y: 30, opacity: 0, scale: 0.9 }" :enter="{ y: 0, opacity: 1, scale: 1 }" class="bg-blue-50 dark:bg-blue-950 rounded-2xl px-6 py-5 shadow-lg flex items-center gap-4">
    <span class="text-4xl shrink-0">👥</span>
    <div><div class="font-bold text-2xl">travaillez ensemble</div><div class="text-xl text-gray-500">les astuces partagées</div></div>
  </div>
  <div v-click v-motion :initial="{ y: 30, opacity: 0, scale: 0.9 }" :enter="{ y: 0, opacity: 1, scale: 1 }" class="bg-blue-50 dark:bg-blue-950 rounded-2xl px-6 py-5 shadow-lg flex items-center gap-4">
    <span class="text-4xl shrink-0">#️⃣</span>
    <div><div class="font-bold text-2xl">un canal #astuces</div><div class="text-xl text-gray-500">une trouvaille = un message</div></div>
  </div>
  <div v-click v-motion :initial="{ y: 30, opacity: 0, scale: 0.9 }" :enter="{ y: 0, opacity: 1, scale: 1 }" class="bg-blue-50 dark:bg-blue-950 rounded-2xl px-6 py-5 shadow-lg flex items-center gap-4">
    <span class="text-4xl shrink-0">🧬</span>
    <div><div class="font-bold text-2xl">montrez vos dotfiles</div><div class="text-xl text-gray-500">les astuces partagées</div></div>
  </div>
  <div v-click v-motion :initial="{ y: 30, opacity: 0, scale: 0.9 }" :enter="{ y: 0, opacity: 1, scale: 1 }" class="bg-blue-50 dark:bg-blue-950 rounded-2xl px-6 py-5 shadow-lg flex items-center gap-4">
    <span class="text-4xl shrink-0">🎁</span>
    <div><div class="font-bold text-2xl">onboarding</div><div class="text-xl text-gray-500">les bons outils dès le jour 1</div></div>
  </div>
</div>

<!--
Pour que le gain devienne collectif et durable, on l'ancre dans un rituel : un canal #astuces où chacun poste ses trouvailles, un « tip of the week » de deux minutes en daily, les bons outils glissés dès l'onboarding des nouveaux, et des dotfiles d'équipe pour partager les bons défauts. C'est ça qui transforme une habitude perso en culture d'équipe.
-->

---
layout: full
---

# Faire découvrir → les listes `awesome`

<v-clicks>

- des collections curées par écosystème (`awesome-macos`, `awesome-cli`, …)
- parfait pour tomber sur des outils dont on ignorait l'existence
- chacun pioche ce qui colle à **ses** frictions

</v-clicks>

<!-- Les listes awesome sont d'excellents points de départ pour découvrir, et ça laisse chacun choisir ce qui lui parle. -->

---
layout: full
---

# La semaine prochaine 🗓️

<v-clicks>

- installer un **gestionnaire de presse-papier**
- régler un raccourci de **capture de zone**
- mettre **2-3 alias** sur vos commandes du quotidien
- cacher **une** distraction inutile de la barre
- choisir **une** friction par semaine, pas dix

</v-clicks>

<!-- Concrètement, de quoi commencer dès lundi. Pas besoin de tout faire : une friction à la fois. -->

---
layout: center
---

# La frictionite, ça se soigne 🩺

<h3 v-click>Une friction. Un geste. Répéter.</h3>

<!-- Pour conclure : c'est chronique, mais ça se soigne, un geste à la fois. Vous êtes le médecin et le patient. -->

---
layout: center
---

<div class="font-mono text-center border-2 border-dashed border-gray-400 rounded-xl p-12 max-w-xl mx-auto">
  <p class="text-gray-400 text-sm mb-4">Rx — Ordonnance</p>
  <p class="text-2xl font-bold">1 friction · 1 geste · répéter</p>
  <p class="text-gray-400 text-xs mt-4">durée : à vie</p>
</div>

<h2 v-click class="mt-12 text-xl italic text-center">
  À votre avis, il ressemblera à quoi votre quotidien<br>
  quand vos outils feront un peu plus pour vous ?
</h2>

<!--
On s'est quitté sur l'ordonnance : une friction, un geste, on répète, à vie. Et plutôt que de répondre à la question du début à votre place, je vous la retourne : à votre avis, il ressemblera à quoi votre quotidien quand vos outils feront un peu plus pour vous ? ... Laissez infuser, et merci.
-->

---
layout: center
---

# Merci 🙏

<div class="grid grid-cols-2 gap-12 items-center mt-6">
<div>

### Sources
- *Cognitive Load* — zakirullin
- *Pensées pour moi-même* — Marc-Aurèle (*source Claude*)

</div>
<div class="flex flex-col items-center">
<qr-code modulesize="6" :data="slidesUrl"></qr-code>
<p class="text-sm text-gray-500 mt-2">les slides</p>
</div>
</div>

<script setup>
import "webcomponent-qr-code";
const slidesUrl = "https://github.com/jules-poissonnet/talk-ergo";
</script>

<!-- Merci ! Les slides et les sources sont derrière le QR. -->
