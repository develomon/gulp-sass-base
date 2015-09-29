// -----------------------------------------------------------------------------
// Dependencies
// -----------------------------------------------------------------------------

var gulp         = require('gulp');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var cssGlobbing  = require('gulp-css-globbing');
var autoprefixer = require('gulp-autoprefixer');

var config = require('./_config.js').sass;

// Identify Sass environment
var nsass = require('gulp-sass/node_modules/node-sass');
console.log(nsass.info);

// -----------------------------------------------------------------------------
// Sass compilation
// -----------------------------------------------------------------------------

gulp.task('sass', function() {
  //console.log("Izvor", config);
  return gulp
    .src(config.Source)
    .pipe(cssGlobbing({
      extensions: ['.css', '.scss']
    }))
    //.pipe(sourcemaps.init())
    //.pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sass(config.Options))
    //.pipe(sourcemaps.write())
    .pipe(autoprefixer(config.autoprefixerOptions))
    .pipe(gulp.dest(config.Destination));
});
