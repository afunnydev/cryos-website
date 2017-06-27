## Rappel

Tel que mentionné dans l'introduction, il faut bien maitrîser le concept d'identifiant:

- Deux articles différents **ne doivent pas** avoir le même identifiant.
- La version française d'un article et la version anglaise d'un article **ont le même identifiant**.

C'est de cette manière que notre ami Hugo (encore une fois, ce n'est pas un nom de personne) reconnaîtra que c'est le même article, mais sous une différente forme.

```hint|directive
Aussi, n'oubliez pas le Flow de travail décrit dans l'Introduction ;)
```

## Création

Tel qu'expliqué précédemment, vous devez déjà savoir comment créer un article? Voyons voir..

1. Cliquez sur le menu
2. Cliquez sur le petit + à droite d'Article-FRS ou Article-ENS

### Les champs

- *Titre officiel* : Ceci est le titre de l'article que tout le monde pourra voir dans la liste et sur la page d'un article individuel
- *Titre SEO* : Titre de la page web, indexé par Google. *non-visible*
- *Description SEO* : Description de la page web, indexé par Google. *non-visible*
- *Lien* : La portion de lien de la page web qui sera après le http://www.cryos.com ou http://www.cryos.com/en. Il peut contenir seulement des chiffes, lettres et tirets. C'est très important de le choisir intelligement, pour le référencement. 

```hint|directive
Exemple en français: "ceci-est-un-exemple" donnera http://www.cryos.com/ceci-est-un-example
Exemple en anglais: "this-is-my-example" donnera http://www.cryos.com/en/this-is-my-example
```

- *Identifiant* : Nous en avons discuté dans l'introduction. C'est l'identifiant unique de cet article, qui doit être le même dans toutes les langues traduites. Il peut contenir seulement des chiffes, lettres et tirets. Ex: 04-exemple-article
- *Résumé court* : Notre ami Hugo (encore une fois pas le nom) crée automatiquement des résumé d'article pour les carousel et les pages où il y plusieurs articles. Cependant, sur certaines tailles d'appareil, cette description est trop grande sur la page d'accueil. Écrivez donc ici quelque chose entre 250 et 300 caractères seulement si l'article est sur la page d'accueil
- *Auteur* : C'est bien important d'appliquer le concept d'identifiant ici, pour qu'Hugo puisse retrouver les informations de l'auteur. Chaque auteur possède un identifiant unique, qu'il faut utiliser ici pour associer l'article à l'auteur

```hint|directive
Vous voulez associé cette article à Charlène Boisclair? Vous devez utiliser son identifiant unique que vous pouvez retrouver dans [la section auteur de votre CMS](/admin/#/collections/settings/entries/auteur). Dans ce cas-ci, vous utiliserez *boisclair*.
```

- *Date de publication* : La date de publication de l'article. Sachez que dans la majorité des cas, les articles sont affichées en ordre de publication. Vous pouvez donc jouer avec ses dates pour faire varier l'ordre des articles
- *Image: Choisissez votre image dans votre ordinateur. Je vous conseille de changer le nom du fichier de l'image pour le même que celui de l'identifiant, ce sera plus facile à retrouver. Cette fonctionnalité sera améliorée avec le temps :) **AUCUN ESPACE, CARACTÈRE SPÉCIAUX OU ACCENT DANS LE NOM DU FICHIER**

```hint|directive
Exemple de nom de fichier: 04-example-article.jpg, soigne-vos-pieds.jpg, les-podiatres.jpg
```

```hint|warning
*Mauvais exemple de nom de fichier*: soigné vos pieds.jpg, cryospôdiatrie.jpg
```

- *Catégories* : C'est ici que vous entrerez les noms des catégories utilisées. **Vous devez être constants dans le nom des catégories** pour qu'Hugo fasse le lien entre les articles. S'il y a plusieurs articles, vous devez les séparer d'une virgule et d'un espace. Vous pouvez entrer un nombre illimité de catégories. Vous n'avez qu'à jeter un coup d'oeil à la page blog pour voir la liste des catégories actives et apporter les corrections nécessaires si une erreur s'est glissée.

```hint|directive
Voici un example si vous avez 4 catégories: Biomécanique, Blessures sportives, Orthèses plantaires, Posture
```

```hint|warning
Les catégories FOOT ORTHOTICS et Foot Orthotics ne sont pas les mêmes.
```

- *Voir sur la page d'accueil, orthèses ou cryvizion* : Par défaut, ils sont inactifs. Si vous voulez voir cette article sur la page indiquée, vous n'avez qu'à cliquer sur le sélecteur pour le rendre coloré. Noté qu'Hugo gère les langues, donc votre article en anglais apparaît seulement dans le site anglais, peu importe la page.

### Le texte

Vous devrez vous familiariser avec la terminologie Markdown, mais je vous fait la promesse que c'est plus simple que ce à quoi vous êtes habitués et que vous allez préférer à Wordpress.

#### Markdown

Qu'est-ce que [Markdown](https://learn.getgrav.org/content/markdown)? C'est une manière simplifiée d'écrire du HTML, qui est la façon dont vous allez organiser les éléments de votre page (les en-têtes, les listes, les mots en gras, etc). 

Voici un fichier qui va grandement vous aider à vous retrouver. C'est surtout la première page qui va vous êtes utile.

```download|span-3
{
    "title": "Aide-mémoire Markdown (.pdf)",
    "filename": "markdown-cheatsheet",
    "subtitle": "C'est pour votre bien!",
    "url": "docs/markdown-cheatsheet.pdf"
}
```
#### Règles de base

- Après chaque symbole Markdown, vous devez mettre un espace pour que le système fasse la distinction entre le texte et l'organisation

```hint|warning
*####Qu'est-ce que la podiatrie?* ne fonctionne pas :) Vous devez utiliser *\#\#\#\# Qu'est-ce que la podiatrie*
```

- Espacer bien votre texte et vos titres avec des sauts de ligne
- Pour mettre quelque chose en italique, encercler votre mot ou paragraphe de \* et cela se fera automatiquement, comme suit \*test\*
- Si vous devez utiliser le symbole \# ou \*, vous devez ajouter \ devant le \# ou le \* pour que le système sache qu'il ne doit pas l'interpréter

#### Ce que vous devez savoir

Voici les choses à savoir qui vous seront utiles:

- Toutes les questions/sous-titres devraient être précédées de \#\#\#\# (avec un espace entre après le dernier \#), car elle sont des <h4>. La couleur ainsi que les majuscules seront appliquées **automatiquement** une fois rendu sur votre site, donc vous devriez écrire ces titres en **minuscules**
- J'ai mis tous les premiers paragraphes d'introduction en italique

### L'aperçu