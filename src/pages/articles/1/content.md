---
path: "/articles/la_naissance_de_mon_premier_site"
date: "2019-11-05"
title: "La naissance de mon premier site"
description: "Le voici enfin, mon premier projet un minimum finis. Après des dizaines de projets abandonnés, j'arrive enfin à finir quelque chose et ce quelque chose c'est mon site! Quoi de mieux comme premier article que de parler de ce site qui m'a occupé un peu de mon temps libre."
featuredImage: "feature.jpg"
---

***On se sent fière quant on termine un objectif que l'on s'était fixé, en tout cas c'est mon cas actuellement. Ce site est une petite victoire sur ma tendance à ne jamais être satisfait de part mon côté perfectionniste.***

Bon la vérité, c'est que c'est pas mon premier site internet, le premier c'est [celui ci](http://astuce-invizimals.e-monsite.com/). Je pars du principe que le ridicule ne tue pas, j'avais 10 ans donc l'ortographe c'étais pas trop ça (ça ne l'ai toujours pas du coup mais bon on remarque quand même une différence) mais c'était déjà ça. Ce qui est assez marrant, c'est que c'est le projet qui a le plus fonctionné de toute ma vie, à l'heure ou j'écris ces lignes je suis le 129283ème visiteurs! Je repars donc de plus bel avec un peu plus d'experience tout de même et avec un peu plus de maturité mais pas trop non plus.

#Pourquoi j'ai décidé de faire ce site

<aside-element>
    <img src="advice.png" alt="Advice">
    <thumb-caption>Un petit conseil à tout ceux qui sont encore étudiant, il faut vraiment essayer de ce créer un portfolio parceque rien de mieux que des preuves pour faire part de votre savoir faire.</thumb-caption>
</aside-element>

La réponse courte: parceque j'en avais envie tout simplement, en soit il n'y a pas vraiment de réponse longue. J'avais envie d'avoir un espace dans lequel je pourrais partager mes projets et autres. Quelque chose qui me représente vraiment et mon propre site était parfait pour cela. Cela me sert aussi de portfolio et renforce ma crédibilité, comme je les dis ci-dessus, un problème que j'ai, c'est mon incapacité à finir tout ce que j'entreprends, rien n'est jamais assez finis selon moi et j'en suis même venu à mettre des centaines d'heures de travails à la poubelle sur un coup de tête. Je touche vraiment à beaucoup de domaine de la programmation mais comment en témoigné si je n'ais rien pour le prouver, c'est pour ça que ce site est née et que des articles vont suivre, je me considère comme un bricoleur numérique qui fait ses trucs dans son garage et surtout dans son coin. Il est temps pour moi de sortir un peu de ce garage!

J'en parlerais plus dans la prochaine partie mais c'etait vraiment important pour moi d'avoir un site fait par mes soins. Je ne dénigre pas les personnes utilisant wordpress, wix ou autre mais ce n'était vraiment pas quelquechose qui me convenait. Avoir un site n'est pas une fierté en soit, mais le construire soit même de A à Z en est une pour moi. D'où cette article car ce n'etait pas tâche si facile pour moi nottament par l'abondant choix de technologies qui s'offre à nous. On finis très vite par s'y perdre alors si en plus je peux aider certaine personnes, c'est partis. 

Je voulais vraiment garder le contrôle et avec ce site je fais ce que je veux, ici maintenant si veux mettre un composant assez fancy et totalement personnalisé et bah cest partis parceque je le peux.

<aside-element>
    C'est tout simplement un jeux dans lequel la balle ne doit pas tomber en bas de l'écran, la balle accelère petit à petit.
</aside-element>

<fancy-demonstration></fancy-demonstration>

Bon c'est super simpliste comme example mais ça m'a quand même pris deux petites heures, au moins j'ai bien vérifier que je n'avais vraiment aucune limite et ça c'est vraiment trop bien!

#Le choix des technologies

Ici on passe aux choses serieuse parceque l'univers du web est beaucoup trop large, c'est complétement fou! Vous voulez un serveur alors vous allez hésité entre PHP, NodeJS, Python, Java. Un client un minimum haut niveau, alors vous allez forcément passé par le choix du starter que ce soit View.js, Reactjs ou angular. Une database pour stocker des données, j'en parle même pas tellement le choix est extrèmement large. L'hebergeur aussi, OVH n'est pas forcément ce qu'il y a de mieux par rapport à votre problématiques et des choix de technologies comme ceux là il y en a des centaines.

Alors parmis tout ça, il a fallut faire des choix et ça n'a pas du tout été définit au début du projet. Je suis d'abord sans aucun framework en utilisant juste webpack 4 pour bundler mes fichiers javascript et utilisé les imports comme j'ai déjà pu le faire dans [ce projet](https://github.com/dylandoamaral/genetic-art). Mais voila on va pas se mentir, c'était assez contraignant d'avoir "que ça" alors j'ai commencé à rajouté SASS afin que me CSS soit plus plaisant à écrire et plus modulable. Puis ensuite je voulais pas réécrire le header à chaque fois alors j'ai utilisé un loader html pour pouvoire inclure des morceaux de codes dans une page HTML. Après avoir faire ça on se demande pourquoi pas tout simplement utilisant la notion de composant que j'avais déjà vue avec React Native et de file en aiguille, toujours dans le but de facilité la production j'en suis arrivé à Gatsby et pour le coup c'est vraiment super cool.

<img src="gatsby.jpg" alt="Gatsby">
<thumb-caption>Gatsby, essayer c'est vraiment l'adopter pour le coup !</thumb-caption>

Alors je vais pas vous mentir que je ne sais même plus pourquoi je ne suis pas resté sur du react "basique". Je voulais tout de suite passé un cap parceque je savais pertinnement que cela allé être à faire tôt ou tard. J'avais jamais vraiment codé en react (seulement en react native) et du coup j'ai un peu suivit la doc et deux solutions ont émérgé, gatsby et next.js. Bon là encore j'hésite comme la vingtiaime fois depuis le début et je tombe sur cette article: https://dev.to/jameesy/gatsby-vs-next-js-what-why-and-when-4al5. Il y avait une partie "when to use (gatsby|next.js)" j'ai juste opté pour celui qui me convenait le plus et adviendra qui pourra. Le fait est qu'il ne faut dès fois pas trop se prendre la tête. C'est ce que j'ai fait, je voulais absolument commencer à developper mon site. Gatsby s'accompagne de GraphQL c'est en gros ce qui va remplacer la database qu'on est censé avoir. Il ne faut pas oublié son system de plugin. A l'heure actuel, j'ai juste à écrire un markdown et automatiquement l'article est généré et ceci est super cool.

Et le serveur dans tout ça? Il y en a juste pas en faite, j'en ai pas besoin en soit. Un site static me suffit largement et dans le pire des cas je partirais certainement sur du node.js/mongodb ou alors peut être essayer symphonie même si je ne suis pas forcément ami avec le PHP... 

#Et maintenant ?

Et maintenant je vais faire des articles, je vais améliorer ce site, c'est un de mes nouveaux bébés alors je vais en prendre soin. Je tiens vraiment à dire que je ne compte pas faire d'artciles user friendly ici. Je parle de ce que je vis et comment je le ressens, ce n'est en rien des artciles à vocation éducatif mais plus un skyblog remplis de devlog parceque après tout il faut savoir s'amuser et c'est exactement ce que je suis entrain de faire en developpement ce site alors pourquoi s'arreter en si bon chemin.

