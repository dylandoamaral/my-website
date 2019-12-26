---
path: "/articles/la_naissance_de_mon_premier_site_2"
date: "2019-12-26"
title: "La naissance de mon premier site"
subtitle: "Partie 2 : Le choix des technologies"
description: "On s'attaque au cœur du site ici. Je vais vous parler de toutes les technologies utilisées à ce jour et le pourquoi du comment du point de vue d'un néophyte en programmation web."
featuredImage: "feature.jpg"
tags:
    - website
    - gatsby
keywords: "website, site internet, nouveau projet, dylan do amaral, programmation, front end, Gatsby, site vitrine, blog, blogs, article, articles, faire un blog, écrire des articles, site statique"
source: "dylandoamaral"
---

**Les débuts ont été catastrophique.**

Alors pourquoi me direz-vous, parce que je me suis lancé la tête la première dans le développement sans même bien me préparer à la tâche. J'avais tout de même un design que je pensais aimer, mais j'en parlerais dans la prochaine partie, des technologies qui semblaient combler mes besoins, une roadmap pour ne pas me perdre dans mon développement, mais cela n'a clairement pas suffi.

Je suis quelqu'un de très perfectionniste et cela m'a amené à recommencer littéralement tout le projet une ou deux fois. Je ne pense pas que ce soit une mauvaise chose en soi mais si je devais le refaire aujourd'hui, ce qui m'a auparavant pris un mois durant mes temps libres me prendrait une semaine à peine.

- Je suis passé du CSS à SASS pour finir par du Styled Components.
- Je suis passé de pages HTML basique à la génération de ces dernières via webpack pour ensuite finir par utiliser Gatsby.
- Je voulais écrire des articles en markdown pour ensuite changer pour des pages HTML en dur pour ensuite retourner sur du markdown avec des blocs imbriqués grâce à un plugin de Gatsby.
- Je voulais faire un site avec un serveur nodeJS et une database quelconque pour ensuite générer un site statique qui me facilite énormément la tâche et me fait gagner de l'argent par la même occasion.

Bref, la route a été longue.

Oublions webpack pur, oublions SASS (même si j'adore plus que tout SASS lorsqu'on parle feuille de style), oublions nodeJS, oublions tout le passé et concentrons-nous sur mes choix présents. 

# Pourquoi ces choix et pas d'autres ?

Avant tout de chose, mes choix ne sont pas forcément les meilleurs, et même mes justifications ne sont pas forcément pertinentes alors si vous voulez me corriger ou alors préciser certaines choses envoyez-moi un mail ou contactez-moi sur Twitter ou LinkedIn. 

Il faut encore que j'implémente les commentaires moi...

## Gatsby le magnifique

<aside-element>
    <callout-element type="warning">Je viens d'apprendre que l'on peut fabriquer toute sa page sans Wordpress et l'utilisé juste pour le backend. C'est ma foi super interessant.</callout-element>
</aside-element>

Bon commençons par le plus important, [Gatsby](https://www.gatsbyjs.org/). Gatsby a littéralement été libérateur pour moi et correspondait exactement à mes besoins. Je voulais quelque chose de simple à utiliser sans pour autant influencer mes choix et me permettant de faire vraiment tout ce que je veux. C'est un peu ce que je reproche à des CMS comme Wordpress ou encore Wix. Tous les sites finissent par se ressembler et dès que l'on veut faire des choses un peu fancy, on ne peut pas le faire facilement.

### Alors Gatsby brièvement, c'est quoi ?

<img src="gatsby.jpg" alt="Gatsby">
<thumb-caption>Autre qu'un bon film bien évidemment !</thumb-caption>

C'est un framework basé sur React qui permet de créer des sites statiques. Un site statique n'a pas de backend. On génère le site, Gatsby se charge de créer toutes les pages du site et si on veut faire une update alors on change le code, on relance la procédure et hop on a notre nouveau site.

Notre base de données, c'est notre fichier de développement. Gatsby intègre ainsi graphQL qui permet de faire des queries sur nos fichiers, mais aussi des traitements avant de récupérer la data. Quels types de traitements me direz-vous ? Personnellement, je crop certaines images dans ma query, je change des champs et cela me suffit.

Dans mon cas, je ne veux pas et je ne compte pas avoir de système de "compte" ou autre, et une base de données serait vraiment de trop.

Le fait de ne pas avoir de serveur et donc pas de base de données ne veut pas pour autant dire que l'on ne peut pas stocker des informations utilisateurs. On peut toujours, mais cela sera assez différent et pour l'instant je ne peux pas vous en dire plus parce que je ne l'ai jamais fait encore. Je vais bien devoir m'y confronter lorsque je vais implémenter les commentaires vu qu'il va bien falloir les stocker quelque part. 

Il existe des micro-services qui font ça pour nous. Je suppose que lorsqu'un commentaire est écrit, on l'envoie vers notre micro-service qui le stocke et qui rebuild notre site avec le nouveau commentaire, mais ce n'est qu'une supposition ici.

PS: Je n'ai rien dit cela utilise des IFrame ce qui me semble tout de suite plus logique.

Gatsby, c'est aussi plein de plugins qui, on va pas se mentir nous facilite drôlement la vie. Alors voici une liste non-exhaustive de plugins que j'utilise et qui sont tous inévitables pour ceux voulant se lancer dans l'aventure Gatsby:

### Les primordiales

- [Gatsby-plugin-sitemap](https://www.Gatsby.org/packages/Gatsby-plugin-sitemap): c'est un plugin qui crée la sitemap de votre site pour vous, la sitemap est un fichier qui aide le navigateur à bien référencer votre site, donc c'est plutôt important.
- [Gatsby-plugin-google-analytics](https://www.Gatsby.org/packages/Gatsby-plugin-google-analytics): c'est un plugin qui facilite le linkage de votre google analytics avec votre site. En soi ce n'est pas forcément compliquer de l'intégrer de base, mais avec ce plugin c'est juste deux, trois lignes de configuration alors pourquoi s'en priver!
- [Gatsby-plugin-manifest](https://www.Gatsby.org/packages/Gatsby-plugin-manifest): ce plugin créé le [manifest](https://developers.google.com/web/fundamentals/web-app-manifest) de votre site pour vous, il vous suffit de renseigner quelques informations et le tour est joué.
- [Gatsby-plugin-React-helmet](https://www.Gatsby.org/packages/Gatsby-plugin-React-helmet): en gros, c'est la façon dont Gatsby peut interagir avec l'en-tête de votre page HTML. Elle fournit un composant React qui modifie cet en-tête. Donc si vous voulez ajouter un titre particulier à votre page ou quelques og meta alors vous aurez besoin de ce plugiciel pour sûr.

J'en utilise d'autres qui me servent notamment à permettre à graphQL de gérer des images, ou qui me permettent de faire des transitions agréables, mais ceux ci-dessus sont vraiment les inévitables.

### La génération des articles

À si, il y en a bien un dans mon cas qui est primordial, mais ce ne sera pas forcément le cas pour tout le monde. Ce dernier est [Gatsby-transformer-remark](https://www.Gatsby.org/packages/Gatsby-transformer-remark) et sans lui, je n'aurais tout simplement pas utilisé Gatsby. Ce qu'il fait est plutôt simple, il transforme mes markdowns en articles voila tout. Mais ce qui est super cool, c'est que je peux utiliser des composants React au sein de mon markdown ce qui peut, si seulement j'avais plus de créativité, m'amener à créer des articles plus uniques et intéressants. Ainsi si maintenant je veux rajouter un jeu dans mon article depuis mon markdown, je le fais.

<fancy-demonstration></fancy-demonstration>

Bon, c'est nul et il ne fonctionne même pas bien, mais c'était juste pour la démonstration!

En tout cas, je voulais ce sentiment de liberté, je voulais faire tout ce que je voulais sans aucune limitation et je suis incroyablement satisfait du résultat et je suis sûre que j'en ferais bon usage dans le futur.

## Styled Components

Bon, on a entamé le gros morceau donc il ne reste que des restes. Pour faire simple, ce projet est 100% en JS. Il y a les markdowns bien sur, mais 0 page HTML et 0 page CSS (je mens, il y en a une globale, mais on va faire semblant). 

Tout est généré par Gatsby. Alors certains vous diront que ce n'est pas super dans le sens où les différentes extensions permettaient de séparer la forme du fond, la structure, le style et la logique. Et à ces personnes, je leur répondrais qu'ils ont tout à fait raison, c'est super chiant et j'aime pas non plus.

Ce genre d'outils font donc couler beaucoup d'encres. Pour remplacer le CSS, j'utilise [Styled Components](https://www.styled-components.com/) qui en fait remplace les composants React par des composants stylisés. Ce dernier à donc plein d'avantages mais aussi son lot d'incovénients que j'essaye de vous lister ci-dessous :

<pros-and-cons 
pros="Cela me permet d'avoir des variables globales pour tout mes fichiers/On peut utiliser les props de nos composants dans notre style/Nos fichiers CSS sont optimisés puisqu'ils contiennent le strict minimum" 
cons ="On perd la différentiation entre structure et style/On se retrouve à imbriquer du CSS dans du JS/On perd en indépendance/On perd en lisibilité lorsqu'on veut inspecter un élément du DOM">

## L'hébergement

Bon avec les techniques ci-dessus, on a tout mon site. C'étais super long, je sais, mais je voulais vraiment ne rien oublier et encore, je n'ai pas mentionné tous les plugins.

Pour l'hébergement, je ne vais rien expliquer tellement, c'était beaucoup trop simple par rapport à ce que j'avais imaginé. Il faut savoir que je n'avais jamais hébergé de site web et c'était ma hantise. Je vais passer l'étape du nom de domaine qu'OVH a mis plus d'un mois à me donner et je vais directement passer à mon CMS qui me sert d'hébergeur.

[Netlify](https://www.netlify.com/)

Franchement, j'ai réservé une ligne entière pour l'écrire parce que c'est hallucinant. On link notre projet Github à Netlify et c'est fini. C'est tout. Il se charge de build le site et j'ai juste à push mon code sur Github pour l'update et ça pour la modique somme de 0 euro. Alors tout ça, c'est possible parce que c'est un site statique et donc beaucoup moins coûteux à gérer, mais wow, j'étais vraiment subjuguer et je le suis toujours.

# Le futur

Je ne pense pas évoluer tant que ça niveau technologies pour le moment, je n'en ressens vraiment pas le besoin. J'aimerais rajouter des animations et rendre le site plus vivant alors je creuserais de ce côté, je pense. Mais il va me falloir un peu de temps et encore une fois beaucoup de créativité parce que là j'ai tout épuisé à mettre ma chouette sur l'écran d'accueil je n'ai plus rien.
