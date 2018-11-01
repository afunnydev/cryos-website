var $ = require('gulp-load-plugins')();
var rimraf = require('rimraf');
var sequence = require('run-sequence');
var exec = require('child_process').exec;

var browser = require('browser-sync').create();
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');

gulp.task('clean', function(done) {
    //Delete our old css files
    // rimraf('{public,static/css}/**/*', done);
    rimraf('{public,static/materialize.css', done);
});

// Compile SCSS files to CSS
gulp.task('styles', function() {
    return gulp.src('src/sass-materialize/materialize.scss')
        .pipe($.sourcemaps.init())
        .pipe($.sass())
        .on('error', $.sass.logError)
        .pipe($.sourcemaps.write())
        .pipe(cleanCSS({compatibility: 'ie9'}))
        .pipe(gulp.dest('static/css'))
        .pipe(browser.stream());
});

//calls Hugo to generate pages
gulp.task('hugo', ['styles'], function() {
  return exec('hugo --cleanDestinationDir', function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
  });
});

//cleans out public, compiles Sass, and starts Hugo
gulp.task('build', function(done) {
  sequence('clean', 'styles', 'hugo', done);
});

// Start a server with LiveReload to preview the site in
gulp.task('server', function() {
  setTimeout(function(){
    browser.init({
    server: 'public/',
    port: 8000
  });
  }, 1000);
  setTimeout(function(){
  //watch for changes to files and build again if any are found
  gulp.watch(['content/**/*.html','layouts/**/*.html', 'src/sass-materialize/**/*.scss', 'src/sass-materialize/components/**/*.scss', 'static/**/*.js'], ['build']);
  // gulp.watch(['public/**/*']).on('change', function(){
  //   setTimeout(browser.reload, 1000);
  // });
  }, 5000);
});

gulp.task('default', ['build', 'server']);
