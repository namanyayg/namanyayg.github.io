var gulp = require('gulp')
var fs = require('fs')
var gutil = require('gulp-util')

var p = {
  stylus: require('gulp-stylus'),
  autoprefixer: require('gulp-autoprefixer'),
  jade: require('gulp-jade'),
  uglify: require('gulp-uglify'),
  concat: require('gulp-concat'),
  include: require('gulp-include'),
  clean: require('gulp-clean'),
  browserSync: require('browser-sync'),
  gulpif: require('gulp-if'),
  zip: require('gulp-zip'),
  data: require('gulp-data'),
}

var debug = false
var publish = true
var build = true




// Paths

var paths = {
  styles: {
    src: 'styl/*.styl',
    watch: ['styl/*.styl', 'styl/**/*.styl'],
    dest: 'css',
  },

  templates: {
    src: ['jade/*.jade', 'jade/**/*.jade', '!jade/_*.jade', '!jade/**/_*.jade'],
    watch: ['jade/**/*.jade', 'jade/*.jade'],
    dest: '.',
  }
}




/**
 * Server
 *
 * Creates server on localhost:4242
 * or ip:4242 for mobiles
 */

gulp.task('browser-sync', function () {
  p.browserSync({
    server: {
      baseDir: ".",
    },
    port: 4242,
    notify: false
  })
})




/**
 * Styles
 *
 * Compresses and includes .styl
 */

gulp.task('styles', function () {
  var src = paths.styles.src
  var dest = paths.styles.dest
  var uglyLevel = debug || publish ? 'expanded' : 'compress'

  gulp.src(src)
    .pipe(p.stylus({ set: [uglyLevel] }))
    .pipe(p.autoprefixer())
    .pipe(gulp.dest(dest))
    .pipe(p.gulpif(!publish, p.browserSync.reload({ stream: true })))
})




/**
 * Templates
 *
 * Compiles and compressed .jade
 */

gulp.task('templates', function () {
  var src = paths.templates.src
  var dest = paths.templates.dest
  var uglyLevel = debug || publish

  gulp.src(src, { base: 'jade/' })
    .pipe(p.data(function () {
      return JSON.parse(
        fs.readFileSync('./js/data.json')
      );
    }))
    .pipe(p.jade({
      pretty: uglyLevel,
    }))
    .pipe(gulp.dest(dest))
    .pipe(p.gulpif(!publish, p.browserSync.reload({ stream: true })))
})





/**
 * Watch
 *
 * Sets watching on styles, templates, and scripts
 */

gulp.task('watch', function () {
  gulp.watch(paths.styles.watch, ['styles'])
  gulp.watch(paths.templates.watch, ['templates'])
})



/**
 * Default task
 *
 * Runs on 'gulp'
 */

gulp.task('default', function () {
  debug = debug || false
  publish = publish || false
  gulp.start('templates', 'styles')

  if (!publish && !build) {
    gulp.start('watch')
    gulp.start('browser-sync')
  }
})