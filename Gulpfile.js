var gulp         = require('gulp'),
    rimraf       = require('rimraf'),
    concat       = require('gulp-concat'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    source       = require('vinyl-source-stream'),
    buffer       = require('vinyl-buffer'),
    browserify   = require('browserify')
;

var build = './build';
var app = './app';
var js = './app/js';
var sassDir = './app/sass';

gulp.task('clean', ['clean:js', 'clean:css'], function(cb) {
  console.log('Everything has been cleaned'); cb();
});

gulp.task('clean:js', function(cb) {
  rimraf(build + '/js/**/*.js', cb);
});

gulp.task('clean:css', function(cb) {
  rimraf(build + '/css/', cb);
});

gulp.task('copy', function() {
  return gulp.src(app + '/**/**.html', {
      base: app
    })
    .pipe(gulp.dest(build))
  ;
});

gulp.task('scripts', ['copy'], function() {
  var b = browserify({
    entries: app + '/js/app.js',
    insertGlobals: true
  });

  return b
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest(build + '/js/'))
  ;
});

gulp.task('sass', function() {
  return gulp.src(sassDir + '/app.scss')
    .pipe(sass({
      includePaths: './app/sass'
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie 9'],
      cascade: false
    }))
    .pipe(concat('app.css'))
    .pipe(gulp.dest(build + '/css'))
  ;
});

gulp.task('build', ['clean', 'copy', 'sass', 'scripts'], function() {
  console.log('Front-end built.');
});
