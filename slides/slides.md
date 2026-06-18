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

<!-- le phénomène qu'on va étudier se produit sûrement chez vous, il se manifeste de plein de façons différentes, on va en voir qq unes avant de lui donner un nom -->

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
On a des petites frictions du quotidien qui sont assez pénible pour nous ralentir mais pas assez pour qu'on prenne le temps de les enlever
-->

---
layout: section
---

<h1 v-click v-motion :initial="{ scale: 0.5, opacity: 1 }" :enter="{ scale: 1, textDecoration: 'line-through'  }" :click-2="{ scale: 0.5, opacity: .4 }">La DX-ite chronique</h1>

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

<h1>Pourquoi traiter maintenant ?</h1>

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

<Arrow x1="10%" y1="10%" x2="35%" y2="50%" color="red" width="8" />
<Arrow x1="75%" y1="80%" x2="47%" y2="46%" color="red" width="8" />

<!--
Ça c'est un cerveau. Votre mémoire de travail et ce qui permet de raisonner se situe dans le cortex préfrontal. On sait que mettre trop d'information à cet endroit déclenche une surcharge cognitive.
La bonne nouvelle, c'est qu'on a une zone voisine, au niveau du cortex prémoteur dont on peut se servir pour alléger la charge. C'est dans cette zone que se situe la mémoire procédurale, l'ensemble des tâches qu'on sait faire sans y penser: faire ses lacets, ouvrir une bouteille etc.
L'idée c'est qu'en choisissant bien nos outils, et nos habitudes, on peut déménager le plus possible de charge dans cette zone, en effaçant les frictions pour les remplacer par des automatismes
-->

---
layout: full
---

# Prescription: Mémoire procédurale

<v-clicks>
<ul class="list-none flex flex-col items-center gap-8 mt-12">

<li>Identifier</li>
<li>Analyser</li>
<li>Corriger</li>
<li>Répéter</li>
<li class="text-gray-500 text-xs">Répéter...</li>
<li class="text-gray-500 text-xs">Répéter...</li>
<li class="text-gray-500 text-xs">Répéter...</li>

</ul>
</v-clicks>

<!--
Du coup la prescription pour votre frictionite, c'est simple, on identifie une friction, on analyse la cause, on corrige et on répète
Et la mémoire procédurale fonctionne exactement pareil, c'est la répétition d'un mouvement, en l'ayant décomposer et corriger, qui va l'inscrire comme une nouvelle compétence
-->

---
layout: section
---

<h1 v-click v-motion :initial="{ scale: 0.5, opacity: 1 }" :enter="{ scale: 1, textDecoration: 'line-through'  }" :click-2="{ scale: 0.5, opacity: .4 }">3. La vitesse</h1>
<h1 v-click v-motion :initial="{ scale: 0.5, opacity: 0 }" :enter="{ scale: 1.2, opacity: 1, y: -50 }">3. La fluidité</h1>


<!--
L'effet le plus important est le plus visible, après qq temps, astuces et investissements, vous allez vous apercevoir que vous êtes juste plus rapide...
À mon avis, c'est pas qqchose qu'il faut chercher activement au début, c'est juste une conséquence de l'effort que vous avez mis et de votre recablage cérébral.
Le vrai objectif que vous devriez visez c'est la fluidité, la vitesse viendra avec, comme pour le langage
-->

---
layout: image
image: https://interreg.eu/media/2chgz5sb/nicola_2.jpg?width=1500&height=844&v=1dca4b4ee2d0a70?format=webp
---

<!--
Vous allez sans doute réduire le nombre de tâche que vous repousse parce que ce qui vous interrompait dans vos pensées et vous prenait 5 min, aujourd'hui vous en prend 2 et vous le faite sans y penser.
-->

---
layout: section
---

<h1>Par où on commence ?</h1>

<!--
Bon alors c'est très sympa de nous dire qu'on peut accélérer, mais comment on fait ?
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

<h1>Vous êtes le médecin et le patient</h1>

<!--
Eh oui, c'est vous qui connaissez le mieux vos habitudes, vos gouts et vos frictions, c'est donc de vous que doit venir le remède
-->

---
layout: full
---

<img src="https://www.chambre-syndicale-sophrologie.fr/wp-content/uploads/2022/11/doctolib.jpg" class="h-1/2 absolute top-1/4 -translate-y-1/2 left-1/4" v-click.hide-after v-motion :initial="{ scale: 0.5, opacity: 1 }"  :enter="{ scale: 1, opacity: 1 }" />
<img src="https://everhour.com/blog/wp-content/uploads/2024/05/google-calendar-color-coding.jpg" class="h-full absolute top-0 right-0" v-click v-motion :initial="{ scale: 0.5, opacity: 1 }" :enter="{ scale: 1, opacity: 1 }" />

<!-- Malheureusement il y a pas de Doctolib pour prendre des rdvs pour soigner sa DX. Donc il va falloir trouver du temps dans votre semaine pour le faire. -->

---
layout: image
image: https://thumbs.dreamstime.com/z/temps-de-compression-41255817.jpg
---

<!-- J'ai une collègue qui m'a donné son astuce de chef pour gagner du temps sur la veille technique, c'est d'aller voir les gens qui sont en train de tester des outils et de leur en parler. Ce qu'ils ont passé 2h à déchiffrer et qui est frais dans leur têtes, ils vont peut-être mettre 3min à vous le résumer et vous aller pouvoir savoir si l'outil mérite de l'investissement ou non.-->

---
layout: image
image: https://m.media-amazon.com/images/M/MV5BNmU4ODM0NGUtYjk0ZC00ODQwLTk3NjItYThiZWRiNDk2MjFlXkEyXkFqcGc@._V1_.jpg
---

<!-- Un bon endroit pour ça c'est la machine à café, ça vous permet de rendre vos pauses productives, et en fonction vos bureaux ça peut même vous faire croiser des équipes avec qui vous travaillez pas et qui ont donc d'autres expériences enrichissantes -->

---
layout: section
---

<v-clicks>
<h1 class="font-bold" v-motion :initial="{ scale: 0.5, opacity: 1 }" :enter="{ scale: 1, opacity: 1 }">On s'y met ?</h1>
<h2 class="font-bold" v-motion :initial="{ scale: 0.5, opacity: 1 }" :enter="{ scale: 1, opacity: 1 }">On commence par quoi ?</h2>
<h3 class="italic" v-motion :initial="{ scale: 0.5, opacity: 1, translateX: -100 }" :enter="{ scale: 1, opacity: 1, translateX: 0 }">mini disclaimer 📣</h3>
</v-clicks>

<!-- Y consacrer du temps c'est bien, mais on commence par quoi? Mini disclaimer: Je vais donner des exemples à partir de maintenant qui sont basées sur ce que j'ai vécu et vu. Il s'agit de ma façon de répondre aux problèmes que j'ai rencontré. Vous n'aurez surement pas les mêmes besoins, ni les mêmes façons d'y répondre. -->

---
layout: none
---

<img class="absolute" src="https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/19194063/darkmodeslackdesktop.jpg?quality=90&strip=all&crop=0,0,100,100" />
<img v-click class="absolute" src="https://f.hellowork.com/bdmtools/2021/05/outil-miro-1.jpg"/>

<!-- Si ces images représentent une partie de votre quotidien et que vous ne devez retenir qu'un truc de ce talk c'est la slide suivante: -->


---
layout: center
---

<div 
  class="absolute right-4 top-4 flex items-start gap-4 rounded-lg shadow-lg px-6 py-4 max-w-xl mx-auto mb-8 border border-gray-300 backdrop-blur-md"
  style="
    background: linear-gradient(135deg, rgba(137, 137, 153, 0.6) 0%, rgba(150,150,155,0.35) 100%);
    border: 1px solid rgba(160,160,170,0.25);
    box-shadow: 20px 8px 32px 0 rgba(31,38,135,0.10);
    backdrop-filter: blur(16px) saturate(150%);
    -webkit-backdrop-filter: blur(16px) saturate(150%);
  "
  v-click="4" v-motion :initial="{ translateX: 100, filter: 'blur(10px)' }" :enter="{ translateX: 0, filter: 'blur(0px)' }"
>
  <img 
    src="https://media.licdn.com/dms/image/v2/C4D03AQFhBI1feJOYeQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1637317452394?e=1783555200&v=beta&t=k7Deh4Swr4pqEgSxx3z-lZwW8C6Xy8AblmIdrPin-Eo" 
    alt="Arthur Gaudard" 
    class="rounded-full w-10 h-10 object-cover mt-1"
    style="background: rgba(244,244,244,0.3);"
  />
  <div>
    <div class="flex items-baseline justify-between gap-2">
      <div class="flex gap-2">
        <span class="font-semibold text-black">Arthur Gaudard</span>
        <span class="flex items-center gap-1 text-sm text-gray-800">
          <img src="https://a.slack-edge.com/80588/marketing/img/meta/slack_hash_256.png" alt="Slack logo" class="rounded w-4 h-4 inline-block" style="vertical-align: middle;" />
          via Slack
        </span>
        </div>
      <span class="ml-2 text-sm text-gray-500" v-html="new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })"></span>
    </div>
    <div class="mt-1 text-gray-900">
      🚨 <span class="font-semibold">Urgent :</span> il me faut le lien du dashboard de ce matin
    </div>
  </div>
  <!-- notification dot -->
  <span class="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
</div>


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
layout: full
---

# Changer de fenêtre 
todo: screen macos
click: fléche slack
animation: cursor vers le logo
click: affichage de la fenetre

<!-- La raison pour laquelle le changement de fenetre est aussi dur c'est que tout se fait au visuel, il faut se souvenir de l'icône, aller dans la barre trouver l'icone, cliquer dessus, il faut que ça ouvre sur le bon écran, et enfin on est au bon endroit -->

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

<!-- Et c'est facile à voir en fait la souris est beaucoup plus fatigante à utiliser, parcequ'on doit viser, puis cliquer et attendre d'avoir un feedback visuel pour savoir si on est sur le bon bouton. Du côté du clavier, avec un peu de travail, on peut taper sans regarder et atteindre assez vite une vitesse de frappe qui permet de penser et de taper en même temps. Le truc important aussi c'est qu'on va pouvoir intégrer des raccourcis claviers, qui vont débloquer des actions entières, qui seront stockées dans notre mémoire procédurale et donc on pourra faire des actions sans y penser -->

---
layout: full
---

# Ménager son champ de vision

<img v-click v-motion :initial="{ scale: 0.5, opacity: 1 }" :enter="{ scale: 1, opacity: 1 }" src="https://i.redd.it/e13ts578tb881.jpg" alt="Jurassic Park logo" class="h-2/3 mx-auto mt-20" />

<!-- La vue c'est un sens un peu traître parceque autant on peut oublier les choses qui ne bougent pas, et ne pas voir que c'est l'heure d'aller en réu, et autant la moindre notification en haut de l'écran nous fait tourner les yeux -->

---
layout: two-cols
---

## Diminuer les distractions

- Enlever les icones qui servent pas
- Abuser du plein-écran

::right::

## Rendre accessible l'important

- Réunion dans la menu bar
- Météo dans le volet widget

<!-- Pour en prendre soin, il y a 2 choses à faire: diminuer les distractions, et mettre l'accent sur l'important
En pratique, savoir que mon wifi est actif ne m'aide pas tant que ça dans ma journée, a priori si j'ai internet je suis au courant, en cachant l'icone on remet de l'importance sur qqchose d'autre comme est-ce que le VPN de ma boîte est actif...
D'autre part, dans les informations que j'ai envie d'avoir, c'est pas tellement l'heure, c'est plutot dans cb de temps est ma prochaine réu.
 -->

---
layout: full
---

# En tant que dev

todo: image IDE full
todo: image prompt p10k avec une commande en vert

<!-- En tant que dev, je l'applique en essayant le plus de possible de mettre l'espace sur ce qui est important, donc je code en plein écran, j'ai pas besoin de savoir que slack est ouvert au moment où j'écris du code. Dans l'utilisation du terminal, je me facilite la vie et je mets l'environnement en affichage permanent comme ça je vois avant de faire la betise que la commande va pas marcher, ou que je vais faire n'importe quoi sur la prod -->

---
layout: full 
---

# Ne taper que le nécessaire

- alias
  - `p` -> pnpm
  - `cd ~/projects/m6web/app-bedrock-android` -> cd android 

- snippet
  - `cct` -> ☁️ thought: 
  - `!note` -> > [!NOTE] >
  - `ntm` -> arrose tes plantes

- auto-complétion
  - fzf
  - man

<!-- Pour les actions que fais le plus, un investissement sous-côté, c'est les alias et les snippets. Je suis dev sur une stack JS, et tout passe par pnpm, donc quand j'ouvre mon terminal, ce que je fais une majorité du temps c'est d'ouvrir un projet et de lancer l'app, bon bah grâce à un alias et à un changement intelligent de dossier j'économise beaucoup de temps et d'énergie. En bonus les gens pensent que je suis super rapide, alors que je tape juste moins  -->


---
layout: full
---

- section: convaincre ses collegues
  - slide: montrer la config: -> chezmoi
    - dire: vous allez oubliez des trucs en proposant qu'un outil à la fois
  - slide: proposer des bundles -> awesome
    - dire: c'est cool pour découvrir des trucs dont vous ne connaissiez pas l'existence
- slide: Concrètement, ce que vous pouvez installer la semaine prochaine
- dire: Votre efficacité rayonne sur vos collègues
