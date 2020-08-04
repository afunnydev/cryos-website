var $ = require('gulp-load-plugins')();
var rimraf = require('rimraf');
var exec = require('child_process').exec;
var browser = require('browser-sync').create();
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');

gulp.task('clean', (done) => {
    //Delete our old css files
    // rimraf('{public,static/css}/**/*', done);
    rimraf('{public,static/css/maps,static/css/materialize.css}', done);
});

// Compile SCSS files to CSS
gulp.task('styles', () => {
    return gulp.src('src/sass-materialize/materialize.scss')
        .pipe($.sourcemaps.init())
        .pipe($.sass())
        .on('error', $.sass.logError)
        .pipe(cleanCSS({compatibility: 'ie9'}))
        .pipe($.sourcemaps.write('maps'))
        .pipe(gulp.dest('static/css'))
        .pipe(browser.stream());
});

//calls Hugo to generate pages
gulp.task('hugo', () => {
  return exec('hugo --cleanDestinationDir', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
  });
});

//cleans out public, compiles Sass, and starts Hugo
gulp.task('build', gulp.series('clean', 'styles', 'hugo'));

// watching
gulp.task("watch", () => {
  browser.init({
      proxy: "http://localhost:1313/"
  });

  gulp.watch('src/sass-materialize/**/*.scss', gulp.series('styles'));
});

// Start a server with LiveReload to preview the site in
gulp.task('server', () => {
  setTimeout(() => {
    browser.init({
    server: 'public/',
    port: 8000
  });
  }, 1000);

  setTimeout(() => {
  // watch for changes to files and build again if any are found
  gulp.watch(['content/**/*.html','layouts/**/*.html', 'src/sass-materialize/**/*.scss', 'static/**/*.js'], gulp.series('build'));
  // gulp.watch(['public/**/*']).on('change', function(){
  //   setTimeout(browser.reload, 1000);
  // });
  }, 5000);
});
