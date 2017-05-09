## Cryos
Project that use gulp, sass and hugo, started from 2 boilerplates (HTML5-Boilerplate + hugo-gulp-sass-boilerplate)

---
## Requirements
* [git](http://git-scm.com)
* [npm](https://www.npmjs.com/about)
* [hugo](https://gohugo.io)
* [gulp](https://gulpjs.com/)

---
## Installation
These should only be needed to be done the first you are setting up your site.

#### Git
```bash
# clone the repo
git clone https://akiamarketing@bitbucket.org/akiamarketing/cryos-hugo.git cryos
cd cryos

```

#### Hugo
Install Hugo with Homebrew
```bash
brew update && brew install hugo
```

#### Dependencies
Install  dependencies with NPM.

```bash
npm install
```

---
## Starting the build process
When you are ready to start working all that is needed is a simple call to Gulp
```bash
#starts the build task and serves your site on a local server
gulp
```
This will start the build then serve your site at `http://localhost:8000`

---
## Workflow
Gulp is configured to use [Browser Sync](https://www.browsersync.io/) to help streamline your workflow. Any changes made to files in `/layouts`, `/content`, or `/src/sass-materialize` will cause Gulp to rebuild the site and refresh your view in the browser. This way you can see how your changes are impacting the view in real time.

All pages are already set up. If it is a main page (directly from the root, for example /trouver-une-clinique), you can find the html template in `layouts/section`. If it is a subpage (example /produits/cryoscan-3d), you can find in `layouts/[parent-folder]`.

Please, create you're own branch, we'll push to master later. You probably know git workflow better than me, but let's keep the master as clean as possible and merge only when ready.

---
## Static files

Images are already in `static/img` and are optimized. If you don't find the images you're looking for in your page folder, look into others since images were repeated and I didn't want to take space for nothing. 

All the static files are in `static/`. You can find js there, don't add vendor for nothing. If you want to use and external library for a feature, let's discuss it. Speed is important :) Don't touch `static/css/materialize.css` directly, see next section

---
## CSS

We're using sass to build materialize.css. You can see the reference files in `src/sass-materialize`. All the basic MaterializeCSS is inside `/sass-materialize/components`. The files for pages are in `/sass-materialize/pages`. You'll see there's also a file for common. If your page's .scss is not there, please create in `/sass-materialize/pages` well commented, and then forget to add `@import "pages/[your-page]";` to the materialize.scss so that it builds properly.

Please have a look at the file `/sass-materialize/components/variables.scss` to see which variables you could use (*especially for colors*)

---

## Known error
Hugo needs to build prior to be served on the server. Sometime, build happen to slowly and content is server or browser is refreshed to quickly, you will get: `Cannot Get /`. Just refresh the browser again and it will work fine. If you prefer, just adjust de setTimeout in gulpfile.js, but you'll wait longer :)

Something, there's and error in the console on the gulp default task

```bash
events.js:161
      throw er; // Unhandled 'error' event
      ^

Error: watch /Users/the2deux/Akia Marketing/Projets/Cryos/cryos-hugo/public/blogue ENOENT
```

Just redo the gulp command, should work... If you can debug, please feel free and teach me please :)
---

## Gulp Tasks
Below is a short description of the tasks you can use with this boilerplate out of the box. They can be called with the following syntax
```bash
gulp <task name>
```

Feel free to tweak the gulpfile to your liking.

* **Clean** - Deletes all files and subdirectories from `/public`.

* **Styles** - Compiles your Sass into `/static/css`.

* **Hugo** - Calls Hugo to generate your site. Files will be output to `/public`.

* **Build** - Calls Clean, Styles and Hugo in that order.

* **Server** - Starts a local server, opens your default browser, and serves `/public` at `http://localhost:8000`.

---
## Deployment

I'm using Netlify to deploy. When there's a push to the master, website is automatically rebuilt. Haven't tried with the branches yet, I'm curious to know what will happen when we push to branch OR when we merge branch to master.
