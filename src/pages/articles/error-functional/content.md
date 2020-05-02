---
path: "/articles/il_faut_traiter_les_erreurs_fonctionnellement"
date: "2019-12-03"
title: "Il faut traiter les erreurs fonctionnellement"
subtitle: "Programmation fonctionnelle"
description: "Pour mon nouveau projet, j'ai eu à faire à de la gestion d'erreurs. D'abord en impérative, j'ai vite refactorer le tout fonctionnellement et je vais vous expliquez comment et pourquoi."
featuredImage: "feature.jpg"
tags:
    - typescript
    - fp-ts
    - github
keywords: "nouveau projet, dylan do amaral, programmation, acp, add, commit, push, add-commit-push, typescript, articles, nodejs, cli, tool, erreur, erreurs, exception, exceptions, gérer, fonctionnelle, programmation fonctionnelle, either, getvalidation"
source: "dylandoamaral"
hide: false
---

**Gérer les exceptions dans un programme est primordiale, il faut impérativement le faire pour éviter tout crash non désiré. Bon ça c’est déjà bien mais le faire fonctionnellement c’est mieux et on va voir une façon concrète de le faire.**

# Add-commit-push et sa gestion des erreurs post v0.2.0

Pour vous remettre dans le contexte, j’écris cette article pendant le développement d’[un petit CLI fait en typescript](https://www.npmjs.com/package/add-commit-push) visant à add, commit et push en une seule ligne de code. Tournant à environ 10 commits par jour j’en avais marre de devoir écrire les mêmes lignes encore et encore.

Un tel programme a bien évidement, comme tout programme, besoin de gérer des exceptions. 
- On ne va pas push si le programme est déjà à jour. 
- On ne va pas non plus push si le projet requiert un pull. 
- On ne vas pas non plus le faire si les arguments ne sont pas les bons.

Même avec un grand attrait pour le fonctionnel j’ai d’abord tout fait en impérative, y compris la gestion de ces erreurs parceque je voulais un prototype qui fonctionne et ceux très rapidement. Alors à quoi ressemble t’elle cette gestion des erreurs? Dans ce projet c’était assez simple, j'ai créé une fonction validation pour regarder si les arguments étaient bien renseigner et throw des exceptions pour laisser les effets de bords faire le travail. puis j'ai entouré le tout de tonnes de if pour gérer tout le cas liéer à Github (rappeler vous je voulais une première version très rapidement).

Ça fonctionne, et pour un prototype c’était pas mal. Maintenant certaine choses me chiffonnaient et c’est ces dernière qui m’ont poussé a passer à un code fonctionnel. 
- Si par exemple, il y avait plusieurs arguments faux alors seul le premier détecter envoyait une erreur car on ne peut pas accumuler des erreurs de la sorte.
- On alourdissait le process en l’englobant d’un try catch et en rajoutant plein de petit if pour traiter tout les cas.
- On laisse place aux effets de bords et ces derniers peuvent être imprévisible.

Alors j’ai créer une branche fonctional et j’ai commencer à travailler sur une version fonctionnelle de mon programme. Pour se faire j’ai utilisé la librairie [fp-ts](https://github.com/gcanti/fp-ts) qui permet de rajouter du fonctionnel au typescript. Plusieurs objectifs en tête à ce moment ci, pouvoir renseigner plusieurs erreurs et non une seul, rendre la gestion des erreurs plus modulable, réduire les effets de bords.

Voyons donc le code (simplifié) impératif et comment je suis arriver à le transformer en une version fonctionnelle beaucoup plus propre et pratique.

validator.ts :

```typescript	
// throw an error if a sequence doesn't exist or exist more than once
const need = (sequence: string, sentence: string): void => // some computation

// throw an error if a sequence exist
const excess = (sequence: string, sentence: string): void => // some computation
	
// throw an error if a key doesn't exist inside a map
const exist = (key: string, map: Map<string, string>, map_name: string): void => // some computation

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
    const help = args["H"] === true || args["help"] === true;
    const yes = args["Y"] === true || args["yes"] === true;

    if (help) {
        // show help
    } else {
        const update = execSync("git status --porcelain").toString() === "" ? true : false;

        execSync("git fetch");
        const base = get_commit_id("@ @{u}", "base");
        const local = get_commit_id("@", "local");

        if (update) {
            console.log("There is nothing to push");
        } else if (local === base) {
            console.log("The current repository is not up to data, you have to pull before use this command.");
        } else {
            validate(args, preset);
            execute();
        }
    }
} catch (e) {
    console.error(e)
}
```

# Le chantier fonctionnel, de la théorie à la mise en pratique

La première étape était de changer cette fonction de validation pour qu’elle ne throw pas les erreurs mais les renvoient pour les traiter ulterieurement rendant ainsi la fonction pure. C’est généralement ce qu’on fait en programmation fonctionnelle, on prend un type ayant deux états, on renvoie l’un quand il y a une erreur et l’autre quand il y en a pas et on traite les deux cas par la suite. Je vous renvois sur cette article de François Sarradin pour en savoir plus https://blog.univalence.io/ne-faites-pas-cette-erreur/.

Des types on en a plein, on a le célèbre **Option** ou **Optional** qui se popularise beaucoup notamment depuis la version 8 de java. On a le **Try** présenté dans l’article ci dessus qui est fait pour gérer les erreurs et on en a d’autres encore.

Dans notre cas, le type **Option<A>** ne va bien évidemment pas puisqu’on ne peut pas renseigner l’erreur, le type **Try<A>** ne va pas non plus car on veut chainer nos erreurs alors il va falloir que notre fonction renvoie soit la bonne réponse soit un array d’erreur que nous allons par la suite pouvoir interpréter et de toute façon il n'exist même pas dans fp-ts. Alors on va utiliser le type **Either<A, E>** qui renvoie soit un **Right<E>** qui contient la bonne réponse (the right answer) soit un **Left<A>** qui renvoie la mauvaise réponse. Les lettres A et le E peuvent être remplacer par le type qu’on veut, un boolean, un int, un string etc. Ainsi un **Either<string, boolean>** renverrait un string dans le cas d’une mauvaise réponse et un boolean dans l’autre cas. Dans notre cas ça va être un peu plus qu’un type primaire, puisqu’a gauche on va avoir un array de string et à droite une structure spéciale regroupant toute les infos qu’on a besoin pour traiter la demande de l’utilisateur. 

Je me suis énormément inspiré de cette article pour ma structuration: https://dev.to/gcanti/getting-started-with-fp-ts-either-vs-validation-5eja alors n’hésitez pas à checker son article. Le mien n’est qu’une interprétation de ce dernier sur mon projet, en français et avec un langage plus "humain" comparé aux gens parlant généralement de programmation fonctionnelle.

Dans la logique il faudrait donc partir sur un **Either<string[], Acp>** où Acp est une interface propre à mon programme contenant les arguments du cli et un preset. Cependant, nous allons, à la place de l'array de string, utiliser un NonEmptyArray<A> de la librairie fp-ts pour une raison très simple, ce dernier à une fonction getSemigroup qui créer un **Semigroup** à partir de ce type et on va voir besoin des caractéristiques d'un **Semigroup** pour composer nos erreurs en un array d'erreurs.

Certains ne savent très certainement pas ce qu'est un **Semigroup**, voyez simplement ça comme un structure ayant une loi de composition qui permet à deux éléments d'un même type de fusionner en un seul. C'est très très simplement dit mais dans notre cas, voyez juste cette caractéristiques à travers la concaténation de deux arrays pour en devenir un seul.

Commencons déjà à refactorer notre code pour faire en sorte que chaque fonction retourne un **Either<string[], void>**. Ici on ne renvoit pas un Acp en cas de bonne réponse car on se sert juste de l'**Either** pour detecter les mauvaises réponses dans le bon cas, on ne va de toute façon rien changer à la valeur initiale:

```typescript	
// throw an error if a sequence doesn't exist or exist more than once
const need = (sequence: string, sentence: string): Either<string[], void> => // some computation


// throw an error if a sequence exist
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

J'ai fait qu'une des fonctions ci-dessus car les deux autres reposent sur le même principe. Maintenant, un problème se pause. Comment les composer? 

Pour se faire on va avoir besoin de composer nos **Either** de la sorte:

```
Right() && Left(["error 2"])           => Left(["error 2"])
Right() && Right()                     => Right()
Left(["error 1"]) && Right()           => Left(["error 1"])
Left(["error 1"]) && Left(["error 2"]) => Left(["error 1", "error 2"])
```
Heuresement pour nous, fp-ts nous permet de faire ça très aisément grâce à deux choses: une fonction de Either qui prend un semigroup et retourne une applicative appelé getValidation et une fonction sequenceT qui va composé des semigroups de gauche à droite grâce à cette applicative.

ainsi on peut créer notre fonction validate de la sorte:

<aside-element>
    <callout-element type="advice">La fonction pipe permet de chainer les transformations et est, d'après ma compréhension des choses, l'équivalent d'un for compréhension en Scala.</callout-element>
</aside-element>

```typescript	
const applicativeValidation = getValidation(getSemigroup<string>());

const validate = (args: string[], preset: Preset): Either<string[], void> => {	
    switch (args.length) {
        // case : acp <message>
        case 1:
            return pipe(
                sequenceT(applicativeValidation)(
                    need("<message>", preset.template),
                    excess("<action>", preset.template),
                    excess("<target>", preset.template)
                ),
                map(() => null)
            );
        // case : acp <action> <message>
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
        // case : acp <action> <target> <message>
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
    <callout-element type="advice">Le fold appel show_error dans le cas ou validate retourne un left et exécute la pipeline dans le cas ou validate renvoit un right.</callout-element>
</aside-element>

```typescript
pipe(validate(args, preset), fold(show_error, () => execute(toAcp([args, preset]))));
``` 

Cela peut vous semblez un peu ridicule et sans intéret et pourtant on vient tout juste de supprimer les effets de bords, de rendre les erreurs composables et donc de pouvoir en renvoyer plusieurs erreurs au lieu d'une et sans le savoir, on a rendu notre système très modulable!

# La modularité d'une telle architecture

La modularité, on va la voir avec la deuxième partie du problème. La gestion des erreurs github qui se trouve dans l'index.ts sous forme de conditions. On va ici tout bouger dans la fichier validator.ts renommé validate par validate_preset et créer notre fonction validate pour composer l'ensemble des erreurs ensembles.

```typescript
const applicativeValidation = getValidation(getSemigroup<string>());

/**
 * Validate if the repository is not up to date compare to the remote one
 * TODO: this is still not functionnal
 * ! effect due to execSync call
 */
const validate_notuptodate = (): Either<NonEmptyArray<string>, void> => {
    if(process.env.ACP_TEST === "true") return right(null);
    return execSync("git status --porcelain").toString() === "" ? left(["the repository is already up to date"]) : right(null);
};

/**
 * Validate if the repository doesn't need pull
 * TODO: this is still not functionnal
 * ! effect due to execSync call
 */
const validate_needpull = (): Either<NonEmptyArray<string>, void> => {
    if(process.env.ACP_TEST === "true") return right(null);

    const get_commit_id = (args: string, name: string) => {
        try {
            return execSync(`git rev-parse ${args}`, { stdio: "ignore" }).toString();
        } catch {
            return `${name}: failed`;
        }
    };

    const base = get_commit_id("@ @{u}", "base");
    const local = get_commit_id("@", "local");

    return base === local ? left(["you need to pull"]) : right(null);
};

/**
 * Validate if the preset and the args are compatible
 * @param args
 * @param preset
 */
const validate_preset = (args: string[], preset: Preset): Either<NonEmptyArray<string>, Acp> => {
   // done before
};

/**
 * validate a command according to his preset and his arguments
 * @param args
 * @param preset
 */
const validate = (args: minimist.ParsedArgs, preset: Preset): Either<NonEmptyArray<string>, Acp> => {
    return pipe(
        sequenceT(applicativeValidation)(
            validate_notuptodate(),
            validate_needpull(),
            validate_preset(args._, preset),
        ),
        map(() => toAcp([args, preset]))
    );
};
```

Il n'a vraiment pas fallut coder beaucoup de choses pour rajouter de nouvelles erreurs et maintenant, notre index ressemble à ceci:

```typescript
const help = args["H"] === true || args["help"] === true;

if (help) {
    // show help
} else {
    pipe(validate(args, preset), fold(show_error, execute));
}
```

Le fold est ici simplifier car notre fonction validate se charge de créer le acp lui-même et de renvoyer son résultat dans le container **Right** en cas de bonne réponse.

Parmis les erreurs, j'avais aussi oublié de traiter le cas ou la commande est lancé en dehors d'un repository git alors pour fix ça rien de plus facile avec cette nouvelle structure:

On rajoute notre fonction validate_isrepo():

```typescript
const validate_isrepo = (): Either<NonEmptyArray<string>, void> => {
    if (process.env.ACP_TEST === "true") return right(null);
    return execSync("git rev-parse --is-inside-work-tree", { stdio: "ignore" }).toString() !== "true" ?
     left(["the command is running outside à git repository"]) :
     right(null);
};
```

On rajoute cette fonction lors de la composition dans validate:

```typescript
sequenceT(applicativeValidation)(
            validate_isrepo(),
            validate_notuptodate(),
            ...
         )
```

Et c'est tout!

C'est beaucoup plus lisible, beaucoup plus testable, beaucoup plus modulable, beaucoup plus propre, beaucoup moins sujette aux erreurs. On a plus d'effets de bords! 

Hein? 

Quoi? 

Il y en a encore car j'execute des commandes externes avec la fonction execSync? 

Bon c'est vrai je l'avoue...

Peut être une occasion future d'utiliser les IO monads dans un cas concret pour encore et toujours en apprendre plus sur la programmation fonctionnelle 👊.

source du code: https://github.com/dylandoamaral/add-commit-push