# hugo-gulp-sass-boilerplate
A boilerplate for quick starting projects that use gulp, sass and hugo
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
# clone hugo-gulp-sass-boilerplate
git clone https://github.com/bniedermeyer/hugo-gulp-sass-boilerplate.git new-site

# remove the origin repo
cd new-site
git remote remove origin
#when you are ready to push to new remote repo
git remote add origin https://github.com/<your repo path here>
git push -u origin master
```

#### Hugo
Install Hugo with Homebrew
```bash
brew update && brew install hugo
```

#### Gulp
Gulp must be globally installed
```bash
npm install -g gulp
```

#### Dependencies
Install  dependencies with NPM.

```bash
npm Install
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
Gulp is configured to use [Browser Sync](https://www.browsersync.io/) to help streamline your workflow. Any changes made to files in `/layouts`, `/content`, or `/src/scss` will cause Gulp to rebuild the site and refresh your view in the browser. This way you can see how your changes are impacting the view in real time.

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
