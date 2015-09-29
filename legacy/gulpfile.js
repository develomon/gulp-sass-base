// Quick and dirty `gulpfile.js`
// MacMladen (C) 2015
// author: MacMladen <macmladen@gmail.com>
// date: 2015-09-29

// Set some properties here ----------------------------------
var mySass = './sass/**/*.{sass,scss}';
var myCSS  = './css';

// -----------------------------------------------------------
// if needed, other things could be hacked down there
// otherwise, no need to touch anything bellow this line
// -----------------------------------------------------------

// Setting node/gulp dependencies ----------------------------
var gulp           = require('gulp');
var sass           = require('gulp-sass');
var sourcemaps     = require('gulp-sourcemaps');
var importOnce     = require('node-sass-import-once');
var cssGlobbing    = require('gulp-css-globbing');
var assetFunctions = require('node-sass-asset-functions');

// Identify Sass environment
var nsass = require('gulp-sass/node_modules/node-sass');
console.log(nsass.info);

// Gulp Sass Task
gulp.task('sass', function() {
  gulp.src(mySass)
    .pipe(cssGlobbing({
      extensions: ['.css', '.scss']
    }))
    // Uncomment this and bottom write if you want separate maps (you don't)
    //.pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: [
        './node_modules/breakpoint-sass/stylesheets',
        './node_modules/compass-mixins/lib',
        './node_modules/susy/sass'
      ],
      outputStyle: 'nested',   // there is some issue with expanded
      sourceMap: true,         // Inline source maps (preferred)
      sourceMapContents: true, // Needed for node-sass generation of the maps
      sourceMapEmbed: false,   // Needed to embed (inline) maps
      outFile: './mycss',      // Needed although unused in inline maps
      importer: importOnce,    // arguments for node-sass-import-once
      importOnce: {
        index: false,
        css: false,            // import CSS too but we done it in globbing
        bower: false           // use bower path for libraries
      },
      functions: assetFunctions({  // primary for image functions missing from compass-mixins
        images_path: './images',
        fonts_path: './fonts',
        http_images_path: './images',
        http_fonts_path: './fonts',
        asset_cache_buster: function (http_path, real_path, done) {
          done('1442217566');     // you can postfix to invalidate cache
        }
      }),
      errLogToConsole: true
    }))
    //.pipe(sourcemaps.write())
    .pipe(gulp.dest(myCSS));
});

// Create Gulp Default Task
// ------------------------
// Having watch within the task ensures that 'sass' has already ran before watching
//
// This setup is slightly different from the one on the blog post at
// http://www.zell-weekeat.com/gulp-libsass-with-susy/#comment-1910185635
gulp.task('default', ['sass'], function () {
  gulp.watch(mySass, ['sass'])
});
