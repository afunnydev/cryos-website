var $ = require('gulp-load-plugins')();
var rimraf = require('rimraf');
var sequence = require('run-sequence');
var exec = require('child_process').exec;

var browser = require('browser-sync').create();
var gulp = require('gulp');

gulp.task('clean', function(done) {
    //Delete our old css files
    rimraf('{public,static/css}/**/*', done);
});

// Compile SCSS files to CSS
gulp.task('styles', function() {
    return gulp.src('src/scss/styles.scss')
        .pipe($.sourcemaps.init())
        .pipe($.sass())
        .on('error', $.sass.logError)
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest('static/css'))
        .pipe(browser.stream());
});

//calls Hugo to generate pages
gulp.task('hugo', ['styles'], function() {
  return exec('hugo', function(err, stdout, stderr) {
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
  browser.init({
    server: './public',
    port: 8000
  });

  //watch for changes to files and build again if any are found
  gulp.watch(['content/**/*.html','layouts/**/*.html', 'src/scss/**/*.scss'], ['build']);
  gulp.watch(['public/**/*']).on('change', browser.reload);
});

gulp.task('default', ['build', 'server']);
