---
path: "/articles/la_naissance_de_mon_premier_site"
date: "2019-11-05"
title: "La naissance de mon premier site"
description: "Le voici enfin, mon premier projet un minimum finis. Après des dizaines de projets abandonnés, j'arrive enfin à finir quelque chose et ce quelque chose c'est mon site! Quoi de mieux comme premier article que de parler de ce site qui m'a occupé un peu de mon temps libre."
featuredImage: "feature.jpg"
tags:
  - gatsby
  - website
---

***On se sent fière quand on termine un objectif que l'on s'était fixé, en tout cas, c'est mon cas actuellement. Ce site est une petite victoire sur ma tendance à ne jamais être satisfait de par mon côté perfectionniste.***

Bon avant tout de chose, la vérité, c'est que ce n'est pas mon premier site internet, le premier c'est [celui-ci](http://astuce-invizimals.e-monsite.com/). Je pars du principe que le ridicule ne tue pas, j'avais 10 ans donc l'orthographe ce n'était pas trop ça (ça ne l'est toujours pas du coup, mais bon on remarque quand même une différence) mais c'était déjà ça. Ce qui est assez marrant, c'est que c'est le projet qui a le plus fonctionné de toute ma vie, à l'heure où j'écris ces lignes je suis le 129283ème visiteur! Je repars donc de plus bel avec un peu plus d'expérience tout de même et avec un peu plus de maturité, mais pas trop non plus.

#Pourquoi j'ai décidé de faire ce site

<aside-element>
    <callout-element type="advice">Un petit conseil à tous ceux qui sont encore étudiants, essayer vraiment de vous créer un portfolio, c'est la meilleure manière de prouver aux autres ce que vous savez faire.</callout-element>
</aside-element>

La réponse courte : parce que j'en avais envie tout simplement, en soi n'y a pas vraiment de réponse longue. J'avais envie d'avoir un espace dans lequel je pourrais partager mes projets et autres. Quelque chose qui me représente vraiment et mon propre site était parfait pour ça. Cela me sert aussi de portfolio et renforce ma crédibilité. Un problème que j'ai toujours eu, c'est mon incapacité à finir tout ce que j'entreprends, rien n'est jamais assez fini selon moi et j'en suis même venu à mettre des centaines d'heures de travails à la poubelle sur un coup de tête. Je touche vraiment à beaucoup de domaines de la programmation, mais comment en témoigner si je n'ai rien pour le prouver, c'est pour ça que ce site est né et que des articles vont suivre, je me considère comme un bricoleur numérique qui fait ses trucs dans son garage. Il est temps pour moi de sortir un peu de ce garage !

J'en parlerai plus dans la prochaine partie, mais c'était vraiment important pour moi d'avoir un site programmer par mes soins. Je ne dénigre pas les personnes utilisant Wordpress, Wix ou autres, mais ce n'était vraiment pas quelque chose qui me convenait et ceux pour deux raisons principales :
- En tant que programmeur, ma fierté n'est pas d'avoir un site, mais plus de le construire moi-même de A à Z. D'où cet article, car ce n'était pas tâche facile pour moi, notamment dût à l'abondant choix de technologies qui s'offrent à nous. On finit très vite par s'y perdre alors si en plus je peux aider certaines personnes en les aiguillant, c'est parti.
- Je voulais vraiment garder le contrôle et avec ce site, je fais ce que je veux. Ici et maintenant, si je veux mettre un composant assez fancy et totalement personnalisé et bah c'est parti parce que je le peux et je n'ai pas besoin d'acheter des extensions comme dans Wordpress où autre pour rajouter de la fraicheur.

<fancy-demonstration></fancy-demonstration>

Bon, c'est super simpliste comme exemple même si ça m'a quand même pris deux petites heures. Mais vous avez très certainement compris le principe et au moins j'ai bien vérifié que je n'avais vraiment aucune limite et ça, c'est vraiment trop bien!

#Le choix des technologies

Ici, on passe aux choses sérieuses parce que l'univers du web est beaucoup trop large, c'est complètement fou ! Vous voulez un serveur ? Alors vous allez hésiter entre PHP, NodeJs, Python, Java. Un client un minimum haut niveau ? Alors vous allez forcément passer par le choix du starter que ce soit View Js, Reactjs ou angular. Une database pour stocker des données ? Je n'en parle même pas tellement le choix est extrêmement large. L'hébergeur aussi, OVH n'est pas forcément ce qu'il y a de mieux par rapport à votre problématique et j'utilise personnellement [Netlify](https://www.netlify.com/) qui est un hebergeur de site static gratuit et génial ! Des choix de technologies comme ceux-là, il y en a des centaines.

Je suis passé par ces choix et le fait est que dans mon cas, tout a évolué au cours du temps, il suffit de regarder le design du site pour comprendre que tout n'est pas apparu comme ça du jour au lendemain. Le résultat est dû à un long processus qui visait à recommencer encore et encore les mêmes choses, mais en utilisant des moyens différents afin d'arriver à quelque chose qui me convienne.

<horizontal-element>
    <div>
        <img src="before.png" alt="Website avant">
        <thumb-caption>Mon site à ses débuts</thumb-caption>
    </div>
    <div>
        <img src="after.png" alt="Website après">
        <thumb-caption>Mon site actuellement</thumb-caption>
    </div>
</horizontal-element>

Alors pour moi, qu'elle a été mon parcours pour enfin arriver à un résultat que je trouve satisfaisant. Je suis d'abord parti sans aucun framework client en utilisant juste web pack 4 pour bundler mes fichiers Javascript et utilisé les imports comme j'ai déjà pu le faire dans [ce projet](https://github.com/dylandoamaral/genetic-art). Mais voilà, on ne va pas se mentir, c'était assez contraignant d'avoir "que ça" alors j'ai commencé à rajouter SASS afin que me CSS soit plus plaisant à écrire et plus modulable. Puis ensuite, je ne voulais pas réécrire l'header à chaque fois alors j'ai utilisé un loader HTML pour pouvoir inclure des morceaux de codes dans une page HTML. Après avoir fait ça, on se demande pourquoi pas tout simplement utilisé la notion de composant que j'avais déjà vue avec React Native et c'est comme ça, de file en aiguille que j'en suis arrivé à utiliser Gatsby.

#Gatsby le magnifique

Toujours dans le but de faciliter la production, j'en suis donc arrivé à Gatsby et pour le coup, c'est vraiment super-cool. À ceux-ci se rajoutent des librairies en tous genres tels que [React-pose](https://popmotion.io/pose/) pour l'animation de mon liséré par exemple ou encore [Styled Components](https:/www.styled-componentscom/) qui me permet de designer la quasi-totalité de mes composants en Javascript me permettant ainsi de d'utiler une variable stocker dans un JSON tels que mes couleurs afin de centraliser la data et ne pas avoir à la changer dans chaque CSS et chaque javascript où la couleur est utilisée.

<img src="gatsby.jpg" alt="Gatsby">
<thumb-caption>Gatsby, essayer c'est vraiment l'adopter pour le coup !</thumb-caption>

<aside-element>
    <img src="gatsby_logo.png" alt="Gatsby Logo">
    <thumb-caption>Je ne suis vraiment pas payé pour le coup, mais voilà pour ceux qui veulent faire un premier site web pas trop complexe qui ne nécessite pas de serveur, foncé. <a href="https://www.gatsbyjs.org/">https://www.gatsbyjs.org/</a></thumb-caption>
</aside-element>

Alors je ne vais pas vous mentir que je ne sais même plus pourquoi je ne suis pas resté sur du React "basique". Je voulais tout de suite passer un cap parce que je savais pertinemment que cela aller être à faire tôt ou tard. Je n'avais jamais vraiment codé en React (seulement en React Native) et du coup j'ai un peu suivi la doc et deux solutions ont émergé, [Gatsby](https://www.gatsbyjs.org/) et [Next.js](https://nextjs.org/). Bon là encore, j'hésite comme la vingtième fois depuis le début et je tombe sur cet article : [Gatsby vs Next.JS - What, Why and When?](https://dev.to/jameesy/gatsby-vs-next-js-what-why-and-when-4al5). Il y avait une partie "when To use (Gatsby|Next.js)" j'ai juste opté pour celui qui me convenait le plus et adviendra qui pourra. Le fait est qu'il ne faut, des fois, pas trop se prendre la tête. Trop souvent j'ai abandonné une idée avant même de l'avoir commencer juste parceque je mettais trop de temps à choisir mes technologies. Pour une fois, je voulais foncer tête baissée et immédiatement commencer à développer mon site. Mine de rien, maintenant que j'utilise Gatsby, je vois en lui trois forces majeures par rapport à du react classique.
- Gatsby s'accompagne de GraphQL et permet donc de faire des queries dans vos fichiers et d'y appliquer des opérations. Une des plus connues, c'est le fait de générer des images optimiser plutôt que d'avoir 10 fois la même image avec des résolutions différentes pour chaque format.
- Gatsby permet d'auto-générer des pages. La page que vous êtes en train de voir n'est qu'un Markdown, je n'ai écrit aucune page HTML ou plutôt si, j'ai écrit un template de page HTML et pour mes prochains articles, j'ai juste à rajouter un Markdown qui va prendre ce même template pour l'incorporer dans mon site que ce soit au niveau de la page elle-même mais aussi au niveau de l'onglet article, tout est automatique.
- Le déploiement a été extrêmement facile, j'en reviens toujours pas actuellement. En 5 minutes top chrono sans aucun tutoriel j'avais mon site sur internet. Et pour le modifier, rien de plus facile, je push mon code et directement c'est déployer et pour le coup c'est exceptionnel.

Et le serveur dans tout ça ? Il n'y en a juste pas en fait, je n'en ai pas besoin en soit. Un site static me suffit largement et dans le pire des cas, je partirais certainement sur du Node.js/MongoDB ou alors peut être essayé symphonie même si je ne suis pas forcément ami avec le PHP... Mais je ne pense pas que ce cas arrivera un jour, parceque même sans serveur on peut quand même utiliser des microservices qui permettent de le remplacer. Alors je n'ai pas du tout encore creuser mais je compte, par exemple, rajouter des commentaires sous ces articles et je suis pratiquement sûr qu'un service existe pour ça.

#Et maintenant ?

Et maintenant je vais faire des articles, je vais améliorer ce site, c'est un de mes nouveaux bébés alors je vais en prendre soin. Je tiens vraiment à dire que je ne compte pas faire d'articles user-friendly ici, si vous en voulez, j'en ai nottament écrits quelques uns [ici](https://blog.univalence.io/author/dylan/). Je parle de ce que je vis et comment je le ressens, ce n'est en rien des articles à vocation éducative, mais plus un Skyblog remplis de devlogs parce que'après tout, c'est mon petit jardin secret, il faut savoir s'amuser et c'est exactement ce que je suis en train de faire en développant ce site alors pourquoi s'arrêter en si bon chemin.

