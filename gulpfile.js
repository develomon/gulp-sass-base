'use strict';


// -----------------------------------------------------------------------------
// Dependencies
// -----------------------------------------------------------------------------

var gulp         = require('gulp');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var importOnce   = require('node-sass-import-once');
var cssGlobbing  = require('gulp-css-globbing');
var autoprefixer = require('gulp-autoprefixer');
var sassdoc      = require('sassdoc');

// Identify Sass environment
var nsass = require('gulp-sass/node_modules/node-sass');
console.log(nsass.info);

// -----------------------------------------------------------------------------
// Configuration
// -----------------------------------------------------------------------------

var input = './assets/sass/**/*.{scss,sass}';
//var input = './assets/sass/{,*/}*.{scss,sass}';
var output = './public/css';
var sassdocOptions = { dest: './public/sassdoc' };
var autoprefixerOptions = { browsers: ['last 2 versions', '> 5%', 'Firefox ESR'] };
var sassOptions = {
  includePaths: ['./vendor/compass-mixins/lib'],
  //outputStyle: 'expanded',
  sourceMap: true,
  //sourceMapContents: true,
  sourceMapEmbed: true,
  outFile: './css',
  importer: importOnce,
  importOnce: {
    index: false,
    css: false,
    bower: true
  },
  errLogToConsole: true
};


// -----------------------------------------------------------------------------
// Sass compilation
// -----------------------------------------------------------------------------

gulp.task('sass', function() {
  return gulp
    .src(input)
    .pipe(cssGlobbing({
      extensions: ['.css', '.scss']
    }))
    //.pipe(sourcemaps.init())
    //.pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sass(sassOptions))
    //.pipe(sourcemaps.write())
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(output));
});


// -----------------------------------------------------------------------------
// Sass documentation generation
// -----------------------------------------------------------------------------

gulp.task('sassdoc', function () {
  return gulp
    .src(input)
    .pipe(sassdoc(sassdocOptions))
    .resume();
});


// -----------------------------------------------------------------------------
// Watchers
// -----------------------------------------------------------------------------

gulp.task('watch', function() {
  return gulp
    // Watch the input folder for change,
    // and run `sass` task when something happens
    .watch(input, ['sass'])
    // When there is a change,
    // log a message in the console
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});


// -----------------------------------------------------------------------------
// Production build
// -----------------------------------------------------------------------------

gulp.task('prod', ['sassdoc'], function () {
  return gulp
    .src(input)
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(output));
});


// -----------------------------------------------------------------------------
// Default task
// -----------------------------------------------------------------------------

gulp.task('default', ['sass', 'watch' /*, possible other tasks... */]);

