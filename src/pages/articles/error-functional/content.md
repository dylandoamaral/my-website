---
path: "/articles/il_faut_traiter_les_erreurs_fonctionnellement"
date: "2020-05-07"
title: "Il faut traiter les erreurs fonctionnellement"
subtitle: "Programmation fonctionnelle"
description: "Pour mon nouveau projet, j'ai eu à faire à de la gestion d'erreurs. D'abord en impératif, j'ai vite refactoré le tout fonctionnellement et je vais vous expliquer comment et pourquoi."
featuredImage: "feature.jpg"
tags:
    - typescript
    - fp-ts
    - github
keywords: "nouveau projet, dylan do amaral, programmation, qush, add, commit, push, qush, typescript, articles, nodejs, cli, tool, erreur, erreurs, exception, exceptions, gérer, fonctionnelle, programmation fonctionnelle, either, getvalidation"
source: "dylandoamaral"
hide: false
---

**Gérer les exceptions dans un programme est primordial, il faut impérativement le faire pour éviter tous crashs non désirés. Le faire est déjà très bien, mais le faire fonctionnellement est encore mieux et on va voir une façon concrète de le faire.**

# Qush et sa gestion des erreurs post v0.2.0

Pour vous remettre dans le contexte, j’écris cet article pendant le développement d’un petit CLI fait en typescript qui s'appelle [qush](https://www.npmjs.com/package/qush) pour "quick push" visant à add, commit et push en une seule ligne de code. Tournant à environ 10 commits par jour, j’en avais marre de devoir écrire les mêmes lignes encore et encore.

Un tel programme a bien évidemment, comme tout programme, besoin de gérer des exceptions.

-   On ne va pas push si le programme est déjà à jour.
-   On ne va pas non plus push si le projet requiert un pull.
-   On ne va pas non plus le faire si les arguments ne sont pas les bons.

Même avec un grand attrait pour le fonctionnel j’ai d’abord tout fait en impératif, y compris la gestion de ces erreurs car je voulais un prototype qui fonctionne et ce très rapidement. 

Alors à quoi ressemble-t-elle cette gestion des erreurs? 

Dans ce projet, au début, c’était assez simple. J'avais créé une fonction validation pour regarder si les arguments étaient bien renseignés et je levais des exceptions pour laisser les effets de bord faire le travail quand ça ne l'était pas. Puis j'ai entouré le tout de tonnes de if et d'un try catch pour gérer tous les cas d'erreurs (rappelez-vous, je voulais une première version très rapidement).

Ça fonctionne, et pour un prototype c’était pas mal. Maintenant certaines choses me chiffonnaient, et ce sont ces dernières qui m’ont poussées à passer à un code plus fonctionnel.

-   Si par exemple, il y avait plusieurs arguments faux alors seul le premier détecté envoyait une erreur car on ne peut pas accumuler des erreurs de la sorte.
-   On alourdissait le processus en l’englobant d’un try catch et en rajoutant plein de petit "if" pour traiter tous les cas.
-   On laisse place aux effets de bord et ces derniers peuvent être imprévisibles notamment dans le cas des tests dans ma CI.

Alors j’ai créé une branche et j’ai commencé à travailler sur une version fonctionnelle de mon programme. Pour ce faire j’ai utilisé la librairie [fp-ts](https://github.com/gcanti/fp-ts) qui permet de rajouter du fonctionnel au typescript. Plusieurs objectifs en tête à ce moment là, pouvoir renseigner plusieurs erreurs et non une seule à la fois, rendre la gestion des erreurs plus modulable, réduire les effets de bord.

Regardons le code (simplifié) impératif et comment je suis arrivé à le transformer en une version fonctionnelle beaucoup plus propre et pratique.

validator.ts :

```typescript
// throw an error if a sequence doesn't exist or exist more than once inside a sentence
const need = (sequence: string, sentence: string): void => // some computation

// throw an error if a sequence exist inside the sentence
const excess = (sequence: string, sentence: string): void => // some computation

// throw an error if a key doesn't exist inside a map
const exist = (key: string, map: Map<string, string>, map_name: string): void => // some computation

// throw errors if there is too much arguments or if arguments don't fit the template
const validate = (args: string[], preset: Preset): void => {
    switch (args.length) {
        case 1:
            need("<message>", preset.template);
            excess("<action>", preset.template);
            excess("<target>", preset.template);
            break;
        case 2:
            need("<message>", preset.template);
            need("<action>", preset.template);
            excess("<target>", preset.template);
            exist(args[0], preset.actions, "actions");
            break;
        case 3:
            need("<message>", preset.template);
            need("<action>", preset.template);
            need("<target>", preset.template);
            exist(args[0], preset.actions, "actions");
            exist(args[1], preset.targets, "targets");
            break;
        default:
            throw new Error("too much arguments or not enough");
    }
};
```

index.ts :

```typescript
try {
    if (args["H"] === true) {
        // show help
    } else {
        const update =
            execSync("git status --porcelain").toString() === "" ? true : false;

        execSync("git fetch");
        const base = get_commit_id("@ @{u}", "base");
        const local = get_commit_id("@", "local");

        if (update) {
            console.log("There is nothing to push");
        } else if (local === base) {
            console.log(
                "The current repository is not up to data, you have to pull before use this command."
            );
        } else {
            validate(args, preset);
            execute();
        }
    }
} catch (e) {
    console.error(e);
}
```

Donc en bref, je regardais d'abord les erreurs de type "git" avec la dose de if puis enfin les erreurs de type "validité" avec la fonction validate avant d'enfin exécuter la portion de code qui me permet d'add, commit et push en une seule ligne.

# Le chantier fonctionnel, de la théorie à la mise en pratique

La première étape était de changer cette fonction validate pour qu’elle ne lève pas les erreurs mais les décrive pour les traiter ultérieurement rendant ainsi la fonction pure. Lorsqu'il sagit de gérer les erreurs en programmation fonctionnelle, généralement, on prend un type ayant deux états, on renvoie l’un quand il y a une erreur et l’autre quand il n'y en a pas et on traite les deux cas par la suite. Je vous renvoie sur cet article de François Sarradin pour en savoir plus: https://blog.univalence.io/ne-faites-pas-cette-erreur/.

Des types on en a plein, on a le célèbre **Option** ou **Optional** qui se popularise beaucoup notamment depuis la version 8 de java. On a le **Try** présenté dans l’article ci-dessus qui est fait pour gérer les erreurs et on en a encore d’autres.

On va en parcourir certain et dire ce qui va ou ne va pas avec ces derniers dans notre cas de figure:
- Le type **Option[A]** ne va bien évidemment pas puisqu’on ne peut pas renseigner l’erreur.
- Le type **Try[A]** (ou **Either[Error, A]** dans fp-ts). ne va pas non plus car on veut séquencer nos erreurs alors il va falloir que notre fonction renvoie soit la bonne réponse soit un array d’erreur que nous allons par la suite pouvoir interpréter. 
- Le type **Either[A, E]** qui renvoie soit un **Right[E]** qui contient la bonne réponse (the right answer) soit un **Left[A]** qui renvoie la mauvaise réponse et c'est ce que l'on recherche. Les lettres A et le E peuvent être remplacés par le type qu’on veut, un boolean, un int, un string etc. Ainsi un **Either[string, boolean]** renverrait un string dans le cas d’une mauvaise réponse et un boolean dans l’autre cas. Dans notre cas ça va être un peu plus qu’un type primaire, puisqu’à gauche on va avoir un array de string et à droite une structure spéciale regroupant toutes les infos dont a besoin pour traiter la demande de l’utilisateur.

Je me suis énormément inspiré de cet article pour ma structuration: https://dev.to/gcanti/getting-started-with-fp-ts-either-vs-validation-5eja , alors n’hésitez pas à aller voir son article. Le mien n’est qu’une interprétation de ce dernier sur mon projet et en français.

Dans la logique imperative, il faudrait donc partir sur un **Either[string[], Qush]** où Qush est une interface propre à mon programme contenant nottament les arguments du cli. Cependant, nous allons, à la place de l'array de string, utiliser un NonEmptyArray[A] de la librairie fp-ts pour une raison très simple, ce dernier a une fonction getSemigroup qui crée un **Semigroup** à partir de ce type et on va voir besoin des caractéristiques d'un **Semigroup** pour composer nos erreurs en un array d'erreurs.

Certains ne savent très certainement pas ce qu'est un **Semigroup**, voyez simplement ça comme une structure ayant une loi de composition qui permet à deux éléments d'un même type de fusionner en un seul. C'est très très simplement dit mais dans notre cas, voyez juste cette caractéristique à travers la concaténation de deux arrays pour en devenir un seul.

Commençons déjà à refactorer notre code pour faire en sorte que chaque fonction retourne un **Either[string[], void]**. Ici on ne renvoie pas un Qush en cas de bonne réponse car on se sert juste de l'**Either** pour detecter les mauvaises réponses dans le bon cas, on ne va de toute façon rien changer à la valeur initiale:

```typescript
// throw an error if a sequence doesn't exist or exist more than once
const need = (sequence: string, sentence: string): Either<string[], void> => // some computation


// throw an error if a sequence exists
const excess = (sequence: string, sentence: string): Either<string[], void> => // some computation

// throw an error if a key doesn't exist inside a map
const exist = (key: string, map: Map<string, string>, map_name: string): Either<string[], void> => {
    if (!map.has(key)) return left([error_validator_map(key, map, map_name)]);
    return right(null);
};

const validate = (args: string[], preset: Preset): Either<string[], void> => {
    switch (args.length) {
        case 1:
            return ???
        case 2:
            return ???
        case 3:
            return ???
        default:
            return left(["too much arguments or not enough"]);
    }
};
```

J'ai fait qu'une des fonctions ci-dessus car les deux autres reposent sur le même principe. Maintenant, un problème se pose. Comment les composer?

Pour se faire on va avoir besoin de composer nos **Either** de la sorte:

```
Right() && Left(["error 2"])           => Left(["error 2"])
Right() && Right()                     => Right()
Left(["error 1"]) && Right()           => Left(["error 1"])
Left(["error 1"]) && Left(["error 2"]) => Left(["error 1", "error 2"])
```

Heureusement pour nous, fp-ts nous permet de faire ça très aisément grâce à deux choses: une fonction de **Either** qui prend un **Semigroup** et retourne une applicative appelée getValidation et une fonction sequenceT qui va composer des **Semigroups** de gauche à droite grâce à cette applicative.

Ainsi on peut créer notre fonction validate de la sorte:

<aside-element>
    <callout-element type="advice">La fonction "pipe" permet de chaine les transformations.</callout-element>
</aside-element>

```typescript
const applicativeValidation = getValidation(getSemigroup<string>());

const validate = (args: string[], preset: Preset): Either<string[], void> => {
    switch (args.length) {
        // case : qush <message>
        case 1:
            return pipe(
                sequenceT(applicativeValidation)(
                    need("<message>", preset.template),
                    excess("<action>", preset.template),
                    excess("<target>", preset.template)
                ),
                map(() => null)
            );
        // case : qush <action> <message>
        case 2:
            return pipe(
                sequenceT(applicativeValidation)(
                    need("<message>", preset.template),
                    need("<action>", preset.template),
                    excess("<target>", preset.template),
                    exist(args[0], preset.actions, "actions")
                ),
                map(() => null)
            );
        // case : qush <action> <target> <message>
        case 3:
            return pipe(
                sequenceT(applicativeValidation)(
                    need("<action>", preset.template),
                    need("<message>", preset.template),
                    need("<target>", preset.template),
                    exist(args[0], preset.actions, "actions"),
                    exist(args[1], preset.targets, "targets")
                ),
                map(() => null)
            );
        default:
            return left(["too much arguments or not enough"]);
    }
};
```

Grâce à ça, on peut remplacer dans notre index.ts:

```typescript
validate(args, preset);
execute();
```

par

<aside-element>
    <callout-element type="advice">Le "fold" appelle show_error dans le cas où validate retourne un left et exécute la pipeline dans le cas où validate retourne un right.</callout-element>
</aside-element>

```typescript
pipe(
    validate(args, preset),
    fold(show_error, () => execute(toQush([args, preset])))
);
```

Cela peut vous sembler un peu ridicule et sans intérêt, pourtant on vient tout juste de supprimer les effets de bord, de rendre les erreurs composables et donc de pouvoir en renvoyer plusieurs au lieu d'une et sans le savoir, on a rendu notre système très modulable!

# La modularité d'une telle architecture

La modularité, on va la voir avec la deuxième partie du problème. La gestion des erreurs git qui se trouve dans l'index.ts sous forme de conditions. On va ici tout bouger dans la fichier validator.ts renommé validate par validatePreset et créer notre fonction validate pour composer l'ensemble des erreurs ensemble.

```typescript
const applicativeValidation = getValidation(getSemigroup<string>());

/**
 * Validate if the repository is not up to date compare to the remote one
 * TODO: this is still not functionnal
 * ! effect due to execSync call
 */
const validateNotuptodate = (): Either<NonEmptyArray<string>, void> => {
    return execSync("git status --porcelain").toString() === ""
        ? left(["the repository is already up to date"])
        : right(null);
};

/**
 * Validate if the repository doesn't need pull
 * TODO: this is still not functionnal
 * ! effect due to execSync call
 */
const validateNeedpull = (): Either<NonEmptyArray<string>, void> => // some computation

/**
 * Validate if the preset and the args are compatible
 * @param args
 * @param preset
 */
const validatePreset = (
    args: string[],
    preset: Preset
): Either<NonEmptyArray<string>, Qush> => {
    // done before
};

/**
 * validate a command according to his preset and his arguments
 * @param args
 * @param preset
 */
const validate = (
    args: minimist.ParsedArgs,
    preset: Preset
): Either<NonEmptyArray<string>, Qush> => {
    return pipe(
        sequenceT(applicativeValidation)(
            validateNotuptodate(),
            validateNeedpull(),
            validatePreset(args._, preset)
        ),
        map(() => toQush([args, preset]))
    );
};
```

Il n'a vraiment pas fallu coder beaucoup de choses pour rajouter de nouvelles erreurs et maintenant, notre script index ressemble à ceci:

```typescript
if (args["H"] === true) {
    // show help
} else {
    pipe(validate(args, preset), fold(show_error, execute));
}
```

Le fold est ici simplifié car notre fonction validate se charge de créer le qush lui-même et de renvoyer son résultat dans le container **Right** en cas de bonne réponse.

Parmis les erreurs, j'avais aussi oublié de traiter le cas où la commande est lancée en dehors d'un repository git alors pour fixer ça rien de plus facile avec cette nouvelle structure:

On rajoute notre fonction validateIsrepo():

```typescript
const validateIsrepo = (): Either<NonEmptyArray<string>, void> => {
    if (process.env.QUSH_TEST === "true") return right(null);
    return execSync("git rev-parse --is-inside-work-tree", {
        stdio: "ignore",
    }).toString() !== "true"
        ? left(["the command is running outside à git repository"])
        : right(null);
};
```

On rajoute cette fonction lors de la composition dans validate:

```typescript
sequenceT(applicativeValidation)(
            validateIsrepo(),
            validateNotuptodate(),
            ...
         )
```

Et c'est tout!

C'est beaucoup plus lisible, beaucoup plus testable, beaucoup plus modulable, beaucoup plus propre, beaucoup moins sujette aux erreurs. On a plus d'effets de bord!

Hein?

Quoi?

Il y en a encore car j'exécute des commandes externes avec la fonction execSync?

Bon c'est vrai je l'avoue...

En réalité les fonctions liées à github et donc produisant des effets de bord devraient être des **IO[Either[NonEmptyArray[string], void]]** mais je ne voulais pas aller trop vite dans ma compréhension de la chose. Une occasion future d'utiliser les IO monads dans un cas concret pour encore et toujours en apprendre plus sur la programmation fonctionnelle 👊.

Source du code: https://github.com/dylandoamaral/qush.

Merci à [Romain Legoas](https://fr.linkedin.com/in/romain-le-goas-883b1a156) et Charlène Correia d'avoir relu cet article et corriger mes erreurs.

Photo par [Jaromír Kavan](https://unsplash.com/@jerrykavan) sur [Unsplash](https://unsplash.com/photos/2UJNFZViRIk).