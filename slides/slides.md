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

<li class="list-none text-xl italic rotate-2">J'ai perdu mon copier-coller 🧭</li>
<li class="list-none text-xl font-bold -rotate-3 translate-x-80"> Ah mince j'ai pas mis le lien dans le message</li>
<li class="list-none text-xl font-semibold text-blue-500 -rotate-2 translate-y-20"> Oups, j'avais pas vu que j'avais une réu</li>
<li class="list-none text-xl rotate-4 translate-x-100 text-purple-500 translate-y-30"> Elle où la fenetre que je dois partager ?</li>
<li class="list-none text-xl font-bold rotate-5 translate-y-40 text-green-500"> Attends je vais me l'envoyer par message pour le retenir</li>

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
---

todo: onclick fléche cortex préfrontal
todo: onclick fléche cortex moteur

<!--
Ça c'est un cerveau. Votre mémoire de travail et ce qui permet de raisonner se situe dans le cortex préfrontal. On sait que mettre trop d'information à cet endroit déclenche une surcharge cognitive.
La bonne nouvelle, c'est qu'on a une zone voisine, au niveau du cortex prémoteur dont on peut se servir pour alléger la charge. C'est dans cette zone que se situe la mémoire procédurale, l'ensemble des tâches qu'on sait faire sans y penser: faire ses lacets, ouvrir une bouteille etc.
L'idée c'est qu'en choisissant bien nos outils, et nos habitudes, on peut déménager le plus possible de charge dans cette zone, en effaçant les frictions pour les remplacer par des automatismes
-->

---
layout: content
---

# Prescription: Mémoire procédurale

- Identifier
- Analyser
- Corriger
- Répéter

<!--
Du coup la prescription pour votre frictionite, c'est simple, on identifie une friction, on analyse la cause, on corrige et on répète
Et la mémoire procédurale fonctionne exactement pareil, c'est la répétition d'un mouvement, en l'ayant décomposer et corriger, qui va l'inscrire comme une nouvelle compétence
-->

---
layout: sub-title
---

~3. La vitesse~
3. La fluidité


<!--
L'effet le plus important est le plus visible, après qq temps, astuces et investissements, vous allez vous apercevoir que vous êtes juste plus rapide...
À mon avis, c'est pas qqchose qu'il faut chercher activement au début, c'est juste une conséquence de l'effort que vous avez mis et de votre recablage cérébral.
Le vrai objectif que vous devriez visez c'est la fluidité, la vitesse viendra avec, comme pour le langage
-->

---
layout: single-image
---

todo: trouver une image de ménage, kanban... housekeeping

<!--
Vous allez sans doute réduire le nombre de tâche que vous repousse parce que ce qui vous interrompait dans vos pensées et vous prenait 5 min, aujourd'hui vous en prend 2 et vous le faite sans y penser.
-->

---
layout: title
---
Par où on commence ?

<!--
Bon alors c'est très sympa de nous dire qu'on peut accélérer, mais comment on fait ?
-->

---
layout: sub-title
---

todo: image docteur maboul

<!--
Et là je vais vous decevoir parceque je n'ai pas de solution miracle pour rebrancher votre cerveau et vous obtenir une expérience sans friction.
Par contre je connais qqun qui peut...
-->


---
layout: sub-title
---

Vous êtes le médecin et le patient

<!--
Eh oui, c'est vous qui connaissez le mieux vos habitudes, vos gouts et vos frictions, c'est donc de vous que doit venir le remède
-->

---
layout: single-image
---
todo: image logo doctolib
todo: image calendrier google agenda plein à craquer v-click

<!-- Malheureusement il y a pas de Doctolib pour prendre des rdvs pour soigner sa DX. Donc il va falloir trouver du temps dans votre semaine pour le faire. -->

---
layout: single-image
---

todo: image de sensei ou image de veille techinque ?

<!-- J'ai une collègue qui m'a donné son astuce de chef pour gagner du temps sur la veille technique, c'est d'aller voir les gens qui sont en train de tester des outils et de leur en parler. Ce qu'ils ont passé 2h à déchiffrer et qui est frais dans leur têtes, ils vont peut-être mettre 3min à vous le résumer et vous aller pouvoir savoir si l'outil mérite de l'investissement ou non.-->

---
layout: single-image
---

todo: image de salle de pause machine à café

<!-- Un bon endroit pour ça c'est la machine à café, ça vous permet de rendre vos pauses productives, et en fonction vos bureaux ça peut même vous faire croiser des équipes avec qui vous travaillez pas et qui ont donc d'autres expériences enrichissantes -->

---
layout: title
---

# On s'y met ?

## On commence par quoi ?

### mini disclaimer

<!-- Y consacrer du temps c'est bien, mais on commence par quoi? Mini disclaimer: Je vais donner des exemples à partir de maintenant qui sont basées sur ce que j'ai vécu et vu. Il s'agit de ma façon de répondre aux problèmes que j'ai rencontré. Vous n'aurez surement pas les mêmes besoins, ni les mêmes façons d'y répondre. -->

---
layout: image-mess-list
---
todo: image clavier ordinateur, image menu bar remplie de logiciel de travail, image slack

<!-- Si ces images représentent une partie de votre quotidien et que vous ne devez retenir qu'un truc de ce talk c'est la slide suivante: -->


---
layout: content
---

- copier-coller
- faire un screenshot
- changer de fenêtre

<!-- la raison est que c'est dans les actions les plus courtes et les plus fréquentes qu'on voit vraiment la différence.
Interruption: message slack ah pardon, c'est mon chef qui a besoin encore une fois du lien du dashboard...
todo: faire l'interruption par message slack
En vrai je peux lui répondre maintenant parceque le faire maintenant ça va le sortir de ma tête
- navigation sur une autre app
- prise de screen + copier un truc
- aller sur slack
- coller les infos
- fermer et revenir au talk
-->

---
layout: content
---

# Changer de fenêtre 
todo: screen macos
click: fléche slack
animation: cursor vers le logo
click: affichage de la fenetre

<!-- La raison pour laquelle le changement de fenetre est aussi dur c'est que tout se fait au visuel, il faut se souvenir de l'icône, aller dans la barre trouver l'icone, cliquer dessus, il faut que ça ouvre sur le bon écran, et enfin on est au bon endroit -->

---
layout: single-image
---

todo: image pensées pour moi-même de marc-aurèle

<!-- Selon Claude, Marc-aurele disait dans son bouquin que notre meilleur ami c'était le clavier.-->

---
layout: two-cols
---

# Souris vs Clavier

- un million de pixel possible
- un clic à la fois au max
- erreur facile
- engage la vue et le toucher

:right:

- ~50 touches
- ~8 doigts en //
- n'engage que le toûcher
- débloque les raccourcis claviers
- stockable en mémoire procédurale

<!-- Et c'est facile à voir en fait la souris est beaucoup plus fatigante à utiliser, parcequ'on doit viser, puis cliquer et attendre d'avoir un feedback visuel pour savoir si on est sur le bon bouton. Du côté du clavier, avec un peu de travail, on peut taper sans regarder et atteindre assez vite une vitesse de frappe qui permet de penser et de taper en même temps. Le truc important aussi c'est qu'on va pouvoir intégrer des raccourcis claviers, qui vont débloquer des actions entières, qui seront stockées dans notre mémoire procédurale et donc on pourra faire des actions sans y penser -->

---
layout: title
---

# Ménager son champ de vision

todo: jurassic park

<!-- La vue c'est un sens un peu traître parceque autant on peut oublier les choses qui ne bougent pas, et ne pas voir que c'est l'heure d'aller en réu, et autant la moindre notification en haut de l'écran nous fait tourner les yeux -->

---
layout: two-cols
---

## Diminuer les distractions

- Enlever les icones qui servent pas
- Abuser du plein-écran

## Rendre accessible l'important

- Réunion dans la menu bar
- Météo dans le volet widget

<!-- Pour en prendre soin, il y a 2 choses à faire: diminuer les distractions, et mettre l'accent sur l'important
En pratique, savoir que mon wifi est actif ne m'aide pas tant que ça dans ma journée, a priori si j'ai internet je suis au courant, en cachant l'icone on remet de l'importance sur qqchose d'autre comme est-ce que le VPN de ma boîte est actif...
D'autre part, dans les informations que j'ai envie d'avoir, c'est pas tellement l'heure, c'est plutot dans cb de temps est ma prochaine réu.
 -->

---
layout: image-mess-list
---

# En tant que dev

todo: image IDE full
todo: image prompt p10k avec une commande en vert

<!-- En tant que dev, je l'applique en essayant le plus de possible de mettre l'espace sur ce qui est important, donc je code en plein écran, j'ai pas besoin de savoir que slack est ouvert au moment où j'écris du code. Dans l'utilisation du terminal, je me facilite la vie et je mets l'environnement en affichage permanent comme ça je vois avant de faire la betise que la commande va pas marcher, ou que je vais faire n'importe quoi sur la prod -->

---
layout: content 
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
layout: todo
---

- section: convaincre ses collegues
  - slide: montrer la config: -> chezmoi
    - dire: vous allez oubliez des trucs en proposant qu'un outil à la fois
  - slide: proposer des bundles -> awesome
    - dire: c'est cool pour découvrir des trucs dont vous ne connaissiez pas l'existence
- slide: Concrètement, ce que vous pouvez installer la semaine prochaine
- dire: Votre efficacité rayonne sur vos collègues
