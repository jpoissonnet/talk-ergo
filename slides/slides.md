---
theme: default
title: Et si vos outils faisaient un peu plus pour vous ?
aspectRatio: 16/9
transition: slide-left
duration: 50
layout: intro
---

<h1 class="text-4xl font-bold">Et si vos outils faisaient un peu plus pour vous ?</h1>

<p class="text-2xl">CAS N°001 · CONSULTATION DE {{$slidev.configs.duration}} MIN</p>
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

<img src="https://static.wikia.nocookie.net/house/images/2/29/5x7theitch.jpg/revision/latest/scale-to-width-down/1000?cb=20090620124629" alt="cameron nurse" class="w-1/2 mx-auto my-8 rounded-xl object-cover" />
<blockquote><h2>Dans le bloc, la poubelle est parfois à l'autre bout, on traverse avec des compresses dans les mains</h2>
<br/>
<h3 class="text-lg">— Infirmier de la famille Goodenough</h3>
</blockquote>

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

<h1>Pourquoi on voudrait traiter ?</h1>
<h2 v-click>...on arrive à travailler en l'état</h2>

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
image: /cortex.jpeg 
backgroundSize: 80%
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
layout: image
image: https://m.media-amazon.com/images/M/MV5BNmU4ODM0NGUtYjk0ZC00ODQwLTk3NjItYThiZWRiNDk2MjFlXkEyXkFqcGc@._V1_.jpg
---

---
layout: section
---

<h1>Vous êtes le patient</h1>
<h1 v-click>Et le médecin</h1>

<!--
Eh oui, c'est vous qui connaissez le mieux vos habitudes, vos gouts et vos frictions, c'est donc de vous que doit venir le remède
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
layout: center
---

<h1 class="text-2xl font-black text-center mb-8">La méthode générale</h1>

<div class="flex justify-center gap-16 items-center my-12">

  <div class="flex flex-col items-center" v-click>
    <span class="text-6xl mb-4">😣</span>
    <span class="text-xl font-bold mb-2 text-red-500">1. Symptôme</span>
    <span class="text-gray-600 text-center">Identifier une friction<br/><i>(Qu'est-ce qui ralentit&nbsp;?)</i></span>
  </div>
  
  <div class="flex flex-col items-center" v-click>
    <span class="text-6xl mb-4">🔎</span>
    <span class="text-xl font-bold mb-2 text-purple-500">2. Diagnostic</span>
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
layout: section
---

<h1>On commence par les actions les plus courantes</h1>

<!--
Y consacrer du temps c'est bien, mais on commence par quoi? Mini disclaimer: Je vais donner des exemples à partir de maintenant qui sont basées sur ce que j'ai vécu et vu. Il s'agit de ma façon de répondre aux problèmes que j'ai rencontré. Vous n'aurez surement pas les mêmes besoins, ni les mêmes façons d'y répondre.
-->

---
layout: article
link: https://xkcd.com/1205
imgSrc: https://imgs.xkcd.com/comics/is_it_worth_the_time.png
---

<!--
Avant de foncer : est-ce que ça vaut le coup ? Randall Munroe a fait le calcul pour nous : selon la fréquence d'une tâche et le temps gagné à chaque fois, voilà combien de temps on peut investir à l'optimiser avant d'y perdre. La leçon : on commence par ce qui est fréquent, où on gagne un peu mais souvent. C'est exactement le profil des gains immédiats qui suivent — copier-coller, captures, fenêtres — qu'on fait des dizaines de fois par jour.
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
    class="bg-blue-100 rounded-xl px-8 py-6 shadow-lg flex flex-col items-center space-between gap-4 min-w-[180px] max-w-[250px]"
    v-click 
    v-motion 
    :initial="{ translateX: -100, translateY: -100, opacity: 0 }"
    :enter="{ translateX: 0, translateY: 0, opacity: 1 }"
  >
    <span class="text-6xl mb-2">📋</span>
    <span class="font-bold text-2xl">Copier-coller</span>
  </div>
  <div 
    class="bg-blue-100 rounded-xl px-8 py-6 shadow-lg flex flex-col items-center min-w-[180px] max-w-[250px]"
    v-click 
    v-motion 
    :initial="{ scale: 0.2, opacity: 0, rotate: 180 }"
    :enter="{ scale: 1, opacity: 1, rotate: 0 }"
  >
    <span class="text-6xl mb-2">📸</span>
    <span class="font-bold text-2xl text-center">Faire un screenshot</span>
  </div>
  <div 
    class="bg-blue-100 rounded-xl px-8 py-6 shadow-lg flex flex-col items-center min-w-[180px] max-w-[250px]"
    v-click 
    v-motion 
    :initial="{ scale: 0.5, opacity: 0 }"
    :enter="{ scale: 1, opacity: 1 }"
  >
    <span class="text-6xl mb-2">🖥️</span>
    <span class="font-bold text-2xl text-center">Changer de fenêtre</span>
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

<AutoFitText class="w-full">📋 Faire un copier-coller → utiliser le ✨presse-papier✨</AutoFitText>

<div class="w-full relative h-5/6 my-8 rounded-xl bg-[linear-gradient(140deg,_rgb(165,142,251),_rgb(233,191,248))]"
>
  <img src="/clipboard.png" alt="copier-coller" class="absolute top-0 left-0 w-full h-full object-contain rounded-xl" />
</div>

<!--
Premier geste : le presse-papier. Par défaut on n'a qu'un seul emplacement. Un gestionnaire garde un historique, permet de coller en texte brut, et d'épingler ce qu'on recolle souvent.
- un historique, pas un seul emplacement
- re-coller ce qu'on avait copié il y a 3 copies
- coller en séquence
ex. Raycast, Maccy, Klipper...
-->

---
layout: full
---

<AutoFitText class="w-full">📸 Faire un screenshot → ✨illustrer✨ une information</AutoFitText>

<div class="w-full relative h-5/6 my-8 rounded-xl bg-[linear-gradient(140deg,_rgb(238,213,182),_rgb(175,136,86))]"
>
  <img src="/screenshot.png" alt="screenshot" class="absolute top-0 left-0 p-8 w-full h-full object-contain rounded-xl" />
</div>

<!--
Deuxième geste : la capture. On veut une capture de zone, qui atterrit dans le presse-papier, prête à coller. Et quand un lien suffit, autant l'envoyer plutôt qu'une image.
- on choisit où atterit la capture (presse-papier, bureau)
- on peut annoter la capture
- on peut lire des qr codes
- on peut faire de l'OCR
le tout avec des raccourcis clavier
ex. Shottr, Snipaste, Kap...
-->

---
layout: full
---

<AutoFitText class="w-full">🖥️ Changer de fenêtre → naviguer sans les voir</AutoFitText>

<div class="w-full relative h-5/6 my-8 rounded-xl" style="background-image: linear-gradient(
    50deg,
    hsl(159deg 65% 73%) 0%,
    hsl(162deg 64% 70%) 8%,
    hsl(165deg 62% 66%) 15%,
    hsl(167deg 60% 63%) 22%,
    hsl(170deg 58% 59%) 28%,
    hsl(173deg 57% 56%) 35%,
    hsl(176deg 55% 53%) 42%,
    hsl(178deg 54% 49%) 49%,
    hsl(181deg 52% 46%) 56%,
    hsl(183deg 51% 42%) 64%,
    hsl(187deg 49% 39%) 73%,
    hsl(189deg 48% 35%) 83%,
    hsl(192deg 46% 32%) 100%
  );;"
>
  <img src="/cmd-tab.gif" alt="cmd-tab" class="absolute top-1/2 -translate-y-1/2 w-95% left-5 object-contain rounded-xl shadow-xl" />
</div>

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

<blockquote><h1>Et toi, Jules ! Comment tu fais dans ton quotidien ?</h1></blockquote>

<h2 class="mt-8">— Vous, {{ new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) }}</h2>

<!-- Jusqu'ici c'était universel, ça vaut pour tout le monde. À partir de maintenant je passe à mes optimisations perso de dev : prenez ce qui vous parle. -->

---
layout: full
---

<AutoFitText max="40" class="font-bold text-center">Mes 3 axes</AutoFitText>

<div class="flex items-center h-3/4 justify-around">
  <div
    class="bg-blue-100 rounded-xl px-8 py-6 shadow-lg flex flex-col items-center min-w-[180px] max-w-[250px]"
    v-click
    v-motion
    :initial="{ translateY: 40, opacity: 0 }"
    :enter="{ translateY: 0, opacity: 1 }"
  >
    <span class="text-6xl mb-2">📡</span>
    <span class="font-bold text-4xl">Radar</span>
  </div>
  <div
    class="bg-blue-100 rounded-xl px-8 py-6 shadow-lg flex flex-col items-center min-w-[180px] max-w-[250px]"
    v-click
    v-motion
    :initial="{ translateY: 40, opacity: 0 }"
    :enter="{ translateY: 0, opacity: 1 }"
  >
    <span class="text-6xl mb-2">🤫</span>
    <span class="font-bold text-4xl">Silence</span>
  </div>
  <div
    class="bg-blue-100 rounded-xl px-8 py-6 shadow-lg flex flex-col items-center min-w-[180px] max-w-[250px]"
    v-click
    v-motion
    :initial="{ translateY: 40, opacity: 0 }"
    :enter="{ translateY: 0, opacity: 1 }"
  >
    <span class="text-6xl mb-2">✋</span>
    <span class="font-bold text-4xl">Parcimonie</span>
  </div>
</div>

<!-- Mes optimisations perso se rangent en 3 axes : Radar (avoir la bonne info en vue), Silence (couper le bruit), Parcimonie (taper moins, se tromper moins). -->

---
layout: full
---

<AutoFitText max="40" class="font-bold text-center">📡 Radar — la bonne info, sans la chercher</AutoFitText>

<div class="w-full h-full relative">
  <img v-click="[1, 2]" src="https://starship.rs/presets/img/nerd-font-symbols.png" alt="Starship symbols" class="h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
  <img v-click="[2, 3]" src="/notion-calendar.png" alt="Notion Calendar" class="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
  <img v-click="3" src="/weather.png" alt="Weather" class="w-1/2 absolute right-0 top-1/4 border-gray border border-1 rounded-[35px] shadow-2xl" v-motion :initial="{ x:100, opacity: 0 }" :enter="{ x: 0, opacity: 1, type: 'spring' }"/>
</div>

<!--
Le besoin d'abord : avoir sous les yeux l'info qui compte sans aller la chercher. Ce besoin est le même pour tout le monde, seule la réponse change. Mon prompt p10k me donne le contexte dev (env, Node, git) ; Notion Calendar m'affiche ma prochaine réu et le widget météo m'évite d'ouvrir une app — ces deux-là parlent à tout le monde. Même besoin « le bon contexte en vue », outils différents. Et git-delta rend juste l'info plus lisible d'un coup d'œil.
-->

---
layout: full
---

<AutoFitText max="40" class="font-bold text-center">🤫 Silence — réduire les parasites</AutoFitText>

<img v-click v-motion :initial="{ scale: 0.5, opacity: 1 }" :enter="{ scale: 1, opacity: 1 }" src="https://i.redd.it/e13ts578tb881.jpg" alt="Jurassic Park logo" class="h-2/3 mx-auto mt-20" />

<!-- Silence : réduire les distractions au minimum. Savoir que mon wifi est actif ne m'aide pas ; en cachant l'icône je laisse de la place à ce qui compte vraiment (mon VPN est-il actif ?). Pareil pour les fenêtres : tout en plein écran, pas de panneaux inutiles qui grignotent l'écran. -->

---
layout: full
---

<AutoFitText max="40" class="font-bold text-center">🤫 Silence — réduire les parasites</AutoFitText>

<div class="w-full h-full relative">
  <div class="absolute flex flex-col items-center justify-center gap-16 pb-12 h-full w-full h-full">
    <img v-click="[1, 3]" src="/menu-bar-long.png" alt="Menu Bar Long" class="w-full" />
    <img v-click="[2, 3]" src="/menu-bar-short.png" alt="Menu Bar Long" class="w-full" />
  </div>
  <div class="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 w-full h-full">
    <img v-click="[3, 4]" src="/cursor-full.png" alt="Cursor Full" class="h-full" />
  </div>
  <div class="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 w-full h-full">
    <img v-click="[4, 5]" src="/cursor-light.png" alt="Cursor Light" class="h-full" />
  </div>
  <div class="absolute top-0 py-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 w-full h-full">
    <img v-click="5" src="/aerospace.png" alt="Aerospace" class="h-full object-contain" />
  </div>
</div>

<!--
Le besoin d'abord : tout ce qui clignote ou dépasse vole un bout d'attention, donc on coupe le bruit. Pour tout le monde, sans terminal : passer en « Ne pas déranger » et couper les badges, tout mettre en plein écran. Mes réponses de dev au même besoin : Ice range et cache ma barre de menu, aerospace dispose mes fenêtres au clavier, je coupe les side-bars de l'IDE qui grignotent l'écran, et gh me sort GitHub sans ouvrir le navigateur. Même besoin « moins de bruit », réponses dev ou pas.
-->

---
layout: image-left
image: https://des-livres-pour-changer-de-vie.com/wp-content/uploads/2021/04/pensees-pour-moi-meme-marc-aurele.jpg
backgroundSize: contain
---

<div class="text-center text-4xl">
<p style="line-height: 1.2;">Va toujours par le chemin le plus court, et le plus court est <span v-mark="{ at: 1, type: 'strike-through', 'strokeWidth': 8, color: 'red' }"><span v-click.hide="2">le</span> chemin tracé par la <span v-mark="{ at: 1, type: 'strike-through', 'strokeWidth': 8, color: 'red' }">nature</span></span><span v-click="2" v-motion :initial="{ opacity: 0, x: -10 }" :enter="{ opacity: 1, x: 0 }" style="line-height: 1.2;"> l'utilisation&nbsp;du&nbsp;clavier</span></p>
</div>

<AutoFitText v-click="3" min="20" class="mt-8">*discours non contractuel</AutoFitText>
<div v-click="4" class="flex items-center gap-2 w-full">
  <AutoFitText max="20">*source Claude</AutoFitText>
  <img src="https://cdn.worldvectorlogo.com/logos/anthropic-1.svg" alt="anthropic logo" class="h-12 object-contain inline-block" style="vertical-align: middle;" />
</div>

<!--
Selon Claude, Marc-aurele disait dans son bouquin que notre meilleur ami c'était le clavier.
Et c'est facile à voir en fait la souris est beaucoup plus fatigante à utiliser, parcequ'on doit viser, puis cliquer et attendre d'avoir un feedback visuel pour savoir si on est sur le bon bouton. Du côté du clavier, avec un peu de travail, on peut taper sans regarder et atteindre assez vite une vitesse de frappe qui permet de penser et de taper en même temps. Le truc important aussi c'est qu'on va pouvoir intégrer des raccourcis claviers, qui vont débloquer des actions entières, qui seront stockées dans notre mémoire procédurale et donc on pourra faire des actions sans y penser
-->

---
layout: full
---

# ✋ Parcimonie — moins de souris, plus de clavier

<div class="absolute inset-0">

todo: spark
todo: notion calendar
tosay: navigable au clavier

</div>

<!--
Le besoin d'abord : frapper moins, se tromper moins. Le plus transverse ici, c'est le texte qui s'écrit tout seul — mes snippets (et l'expansion de texte façon raccourcis clavier, que tout le monde peut utiliser), et les bangs DuckDuckGo qui m'envoient direct au bon endroit. Mes réponses de dev au même besoin : les alias pour raccourcir mes commandes, fd et ripgrep à la place de find et grep, lazygit pour tout git au clavier. En bonus, les gens me croient rapide alors que je tape juste moins.
-->
---
layout: full
---

# ✋ Parcimonie — faire moins, faire mieux

<div class="w-full h-full relative">
    <img v-click="[1, 2]" src="/zsh-history.png" alt="Zsh History" class="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl" />
    <img v-click="[2, 3]" src="/alias-expand.png" alt="Alias Expand" class="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl" />
    <img v-click="[3, 4]" src="/snippets.png" alt="Snippets" class="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl" />
    <img v-click="4" src="https://duckduckgo.com/_next/static/media/screenshot-md-lg-dark.259cbd7a.png" alt="Snippets" class="w-full h-full object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
</div>

<!--
Le besoin d'abord : ne pas refaire ni retaper ce que j'ai déjà fait, laisser la machine se souvenir à ma place. Tout le monde connaît ça — l'autocomplétion du navigateur, les réponses enregistrées d'une boîte mail : même besoin. Mes réponses de dev : atuin retrouve une commande passée, zoxide me téléporte dans mes dossiers, fzf me fait choisir au lieu de me souvenir, autosuggestions propose la suite, zsh-expand déplie mes alias.
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
layout: full
---

# Comment on trouve l'outil ?

<div class="flex items-center justify-center gap-6 mt-20">
  <div v-click v-motion :initial="{ y: 30, opacity: 0 }" :enter="{ y: 0, opacity: 1 }" class="bg-blue-50 dark:bg-blue-950 rounded-2xl px-6 py-5 shadow-lg w-64 min-h-48 flex flex-col items-center text-center">
    <span class="text-5xl mb-4">😣</span>
    <span class="font-bold text-xl">Nommer la friction</span>
    <span class="text-gray-600 dark:text-gray-300 mt-3">« ça me gonfle de refaire ça »</span>
  </div>

  <div v-click class="text-5xl text-gray-400">→</div>

  <div v-click v-motion :initial="{ y: 30, opacity: 0 }" :enter="{ y: 0, opacity: 1 }" class="bg-blue-50 dark:bg-blue-950 rounded-2xl px-6 py-5 shadow-lg w-64 min-h-48 flex flex-col items-center text-center">
    <span class="text-5xl mb-4">💡</span>
    <span class="font-bold text-xl">Faire le pari</span>
    <span class="text-gray-600 dark:text-gray-300 mt-3">il existe sûrement un réglage ou un outil pour ça</span>
  </div>

  <div v-click class="text-5xl text-gray-400">→</div>

  <div v-click v-motion :initial="{ y: 30, opacity: 0 }" :enter="{ y: 0, opacity: 1 }" class="bg-blue-50 dark:bg-blue-950 rounded-2xl px-6 py-5 shadow-lg w-64 min-h-48 flex flex-col items-center text-center">
    <span class="text-5xl mb-4">🔎</span>
    <span class="font-bold text-xl">Chercher activement</span>
    <span class="text-gray-600 dark:text-gray-300 mt-3">« un outil pour [mon problème] »</span>
  </div>
</div>

<!--
La partie la plus dure du diagnostic, ce n'est pas de connaître l'outil : c'est de remarquer la friction et de se dire qu'elle n'est pas une fatalité. Le réflexe : nommer ce qui m'agace, parier qu'il existe un réglage ou un outil pour ça, et chercher activement.
-->

---
layout: section
---

<h1>La vaccination thérapeutique</h1>
<h2 v-click class="italic text-gray-500">Les outils d'une équipe qui se soigne</h2>

<!--
Recap : j'ai soigné MA frictionite — et maintenant ? Le réflexe serait d'évangéliser. Mauvaise idée. La bonne image, c'est la vaccination thérapeutique. Un vaccin thérapeutique ne PRÉVIENT pas une maladie : il aide à SOIGNER une maladie déjà installée. Et la frictionite, on l'a dit, elle est chronique et déjà partout. Donc on n'infecte personne, on immunise toute l'équipe — soi compris. Et un vaccin, ça s'administre à petite dose, jamais de force.
-->

---
layout: center
---

<AutoFitText max="40" class="text-center">💉 On n'impose pas, on questionne</AutoFitText>

<div class="flex gap-10 justify-center items-stretch mt-12">
  <div v-click v-motion :initial="{ x: -60, opacity: 0, rotate: -3 }" :enter="{ x: 0, opacity: 1, rotate: -2 }" class="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-2xl px-8 py-6 shadow-lg w-72 flex flex-col items-center text-center">
    <span class="text-5xl mb-3">🗣️</span>
    <span class="font-bold text-xl text-red-600">Injection forcée</span>
    <span class="text-gray-600 dark:text-gray-300 mt-2">"tu <b>dois</b> utiliser X"<br/>→ on se braque</span>
  </div>
  <div v-click v-motion :initial="{ x: 60, opacity: 0, rotate: 3 }" :enter="{ x: 0, opacity: 1, rotate: 2 }" class="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-2xl px-8 py-6 shadow-lg w-72 flex flex-col items-center text-center">
    <span class="text-5xl mb-3">🧲</span>
    <span class="font-bold text-xl text-green-600">Questionnement</span>
    <span class="text-gray-600 dark:text-gray-300 mt-2">"t'as déjà utilisé ça ?" → la leçon reste un dialogue</span>
    </div>
</div>

<SlackNotification
  class="mt-8"
  v-click
  v-motion
  :initial="{ x: 100, opacity: 0}"
  :enter="{ x: 0, opacity: 1 }"
  name="Un.e curieux.se"
  initials="🙋"
  message="au fait... c'est quel outil que t'as utilisé pour faire tes captures d'écran ?"
/>

<!--
La dose, c'est le mode d'administration. Prêcher, c'est l'injection forcée : « tu DOIS installer ces 15 outils » — rejet immédiat, on se braque. Montrer, c'est exposer une petite dose : on te voit faire UN geste au passage, et la curiosité — le système immunitaire — fait le reste. Où s'expose cette dose ? Là où les autres te voient faire : pour tout le monde, le partage d'écran en réu, une démo ou un Loom de 30 secondes ; côté dev, le pair programming ou une PR avec un alias bien senti. Le signe que la dose a pris, c'est ce message : « comment tu fais ça aussi vite ?! ». Ce sont eux qui viennent — on n'a rien poussé.
-->

---
layout: center
---

<AutoFitText max="40" class="text-center">🔭 On fait découvrir</AutoFitText>

<p class="text-2xl text-gray-500 mt-2">on ne cherche pas un outil pour un problème qu'on ne se sait pas avoir</p>

---
layout: full
---

<div class="flex items-center gap-4 h-full w-full">
<div v-click class="h-1/2 w-1/2">
  <img src="https://github.com/sindresorhus/awesome/raw/main/media/logo.svg" alt="Awesome" class="w-full max-h-4/5" />
  <p class="text-center text-2xl text-gray-500">"Des listes de tout,<br/>des CLI aux livres de fantasy"</p>
</div>
  <div v-click class="h-1/2 w-1/2">
    <img src="https://www.raycast.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcover.e4e5c3a7.png&w=1920&q=70" alt="Raycast" class="max-h-4/5 w-full object-contain" />
    <p class="text-center text-2xl text-gray-500">Raycast</p>
  </div>
</div>

<!-- Alors on regarde du coté des listes `awesome` ou des outils extensibles, on installe raycast pour son emoji picker et on le garde pour son clipboard manager -->

---
layout: full
---

<AutoFitText max="40" class="text-center">📣 On partage ses trouvailles</AutoFitText>

<div class="flex gap-10 justify-center items-center my-14 w-full">

  <div
    class="flex flex-col items-center bg-white/80 dark:bg-gray-900/80 shadow-2xl rounded-3xl px-10 py-8 min-w-[320px] max-w-xs"
    v-click
  >
    <div class="text-4xl mb-4">📰</div>
    <div class="text-2xl font-bold mb-2 text-blue-700 dark:text-blue-400 text-center">On partage ses trouvailles</div>
    <div class="text-gray-600 text-center mt-1 text-xl">outils, nouveautés, articles...</div>
  </div>

  <div
    class="flex flex-col items-center bg-white/80 dark:bg-gray-900/80 shadow-2xl rounded-3xl px-10 py-8 min-w-[320px] max-w-xs"
    v-click
  >
    <div class="text-4xl mb-4">💡</div>
    <div class="text-2xl font-bold mb-2 text-green-700 dark:text-green-400 text-center">On partage ses canaux de veilles</div>
    <div class="text-gray-600 text-center mt-1 text-xl">newsletters, chaine youtube, blog</div>
  </div>

</div>


---
layout: image
image: https://m.media-amazon.com/images/M/MV5BNmU4ODM0NGUtYjk0ZC00ODQwLTk3NjItYThiZWRiNDk2MjFlXkEyXkFqcGc@._V1_.jpg
---

<!--
ou alors on en profite pendant le café... bon d'accord je bois trop de café, j'arrête
-->

---
layout: center
---

<AutoFitText max="40" class="text-center">🩹 On minimise le coût d'adoption</AutoFitText>

<p v-click class="text-center text-2xl text-gray-500">🗣️ "ça fait 10 ans que je fais comme ça"</p>
<p v-click class="text-center text-2xl italic text-gray-500">👂 changer me coûterait plus cher que ce que ça me rapporte</p>

<div v-click class="flex gap-10 justify-center items-center my-3 w-full">
  <div class="flex flex-col items-center bg-white/80 dark:bg-gray-900/80 shadow-xl rounded-3xl px-8 py-6 min-w-[320px] max-w-xs">
    <div class="text-4xl mb-4">💡</div>
    <div class="text-2xl font-bold mb-2 text-green-700 dark:text-green-400 text-center">Fournir du <i class="whitespace-nowrap">clé en main</i></div>
    <div class="text-gray-600 text-center mt-1 text-xl">settings exportés, templates, configuration prête à l'emploi</div>
  </div>
</div>

---
layout: full
---

<AutoFitText max="40" class="text-center my-4">🗂️ On documente sa config</AutoFitText>


<div class="flex justify-around items-center mt-10 w-full">
  <div class="flex flex-col items-center bg-white/80 dark:bg-gray-900/80 shadow-xl rounded-3xl px-8 py-6 min-w-[320px] max-w-xs" v-click v-motion :initial="{ scale: 0.8, opacity: 0}" :enter="{ scale: 1, opacity: 1, type: 'spring' }">
    <div class="text-3xl font-bold mb-2 text-green-700 dark:text-green-400 text-center">Markdown</div>
    <div class="text-gray-600 text-center mt-1 text-2xl">simple, lisible et partageable</div>
  </div>

  <div 
  class="flex flex-col items-center bg-white/80 dark:bg-gray-900/80 shadow-xl rounded-3xl px-8 py-6 min-w-[320px] max-w-xs" v-click v-motion 
  :initial="{ scale: 0.8, opacity: 0}" :enter="{ scale: 1, opacity: 1, type: 'spring' }">
  <img src="https://www.chezmoi.io/logo.svg" class="bg-[#4051b5] rounded-full p-2 w-1/2" alt="Chezmoi" />
    <div class="text-3xl font-bold my-2 text-[#4051b5] dark:text-green-400 text-center">Chezmoi</div>
    <div class="text-gray-600 text-center text-2xl">dotfiles versionnés et synchronisés</div>
  </div>
</div>
<!--
Si tu veux vraiment gagner du temps et arrêter de réinstaller tes outils un par un à chaque nouvelle machine, installe chezmoi. C’est l’outil pour versionner et synchroniser tous tes fichiers de config (dotfiles): shell, éditeur, alias, prompt... Sur un nouvel ordi, un simple « chezmoi init » et tu retrouves tout ton environnement en quelques minutes, sans te demander “j’avais tweaké quoi déjà ?”. C’est simple à installer et tu peux même garder certains secrets chiffrés. En résumé : dès que tu passes du temps à personnaliser ton outil, versionne !
-->



---
layout: full
---

<AutoFitText max="40" class="text-center">🔄 On y va petit à petit</AutoFitText>

<img src="https://home.ralphammer.com/wp-content/uploads/2019/12/enough_6.gif" alt="Enough" class="h-1/2 object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
<p class="text-2xl text-gray-500 absolute bottom-12">Ralph Ammer - Is it good enough? Is the wrong question</p>

<div class="absolute bottom-0 right-0">
  <qr-code modulesize="6" :data="articleUrl"></qr-code>
</div>
<script setup>
import "webcomponent-qr-code";
const articleUrl = "https://ralphammer.com/is-it-good-enough-is-the-wrong-question/";
</script>

---
layout: section
---

# Prescription
## La semaine prochaine 🗓️

<!-- Concrètement, de quoi commencer dès lundi. Pas besoin de tout faire : une friction à la fois. -->

---
layout: center
---

<p class="text-2xl text-gray-500">En attendant que mon ordi démarre, je demande:</p>
<AutoFitText :max="40" modelValue="T'utilises un presse-papier ?"/>

<!-- Je demande aux collègues s'ils savent ce qu'est un presse-papier. -->

---
layout: center
---

<p class="text-2xl text-gray-500">À la machine à café, je parle:</p>
<AutoFitText :max="40" modelValue="Friction et charge cognitive"/>

<!-- Je parle "frictionite" à la machine à café. -->

---
layout: fact
---

<p class="text-2xl text-gray-500">En choisissant parmi radar, silence et parcimonie,</p>
<AutoFitText :max="40" modelValue="Je prévois la prochaine friction que j'enlève"/>

<!-- Je prévois la prochaine friction que j'enlève en suivant radar / silence / parcimonie. -->

---
layout: fact
---

<AutoFitText :max="40" modelValue="Et surtout je demande autour de moi…"/>

<!-- Et surtout, je demande autour de moi... -->

---
layout: center
---

<AutoFitText :max="40" modelValue="Et si vos outils faisaient un peu plus pour vous ?"/>

---
layout: two-cols
---

<div class="flex flex-col items-center">
  <qr-code modulesize="8" :data="slidesUrl"></qr-code>
  <span class="inline-flex">
    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" class="h-12" />
    <h1 class="text-sm text-gray-500 mt-2">Slides</h1>
  </span>
</div>

::right::

<div class="flex flex-col items-center">
  <h1 class="text-sm text-gray-500 mt-2">🙏 Feedback</h1>
  <qr-code modulesize="8" :data="feedbackUrl"></qr-code>
</div>

<script setup>
import "webcomponent-qr-code";
const slidesUrl = "https://github.com/jules-poissonnet/talk-ergo";
const feedbackUrl = "https://openfeedback.io/sunnytech2026/2026-07-02/cmm4pkmk4006k01nsnwb3n0qw";
</script>

<!-- Merci ! Les slides et les sources sont derrière le QR. La citation Marc-Aurèle sur le clavier vient de Claude, pas du texte original. -->
