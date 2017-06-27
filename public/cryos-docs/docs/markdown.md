### Markdown

Vous devrez vous familiariser avec la terminologie Markdown, mais je vous fait la promesse que c'est plus simple que ce à quoi vous êtes habitués et que vous allez préférer à Wordpress.

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
- Pour mettre en emphase des éléments avec style, vous pouvez ajouter un \> au début de la ligne. Voici un exemple:

```
> Ceci est une phrase un paragraphe que vous trouver important et que vous voulez souligner à votre utilisateur.
```

> Ceci est une phrase un paragraphe que vous trouver important et que vous voulez souligner à votre utilisateur.