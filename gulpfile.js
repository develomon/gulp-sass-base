var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps  = require('gulp-sourcemaps');
var importOnce  = require('node-sass-import-once');
var cssGlobbing = require('gulp-css-globbing');
var assetFunctions = require('node-sass-asset-functions');

// Identify Sass environment
var nsass = require('gulp-sass/node_modules/node-sass');
console.log(nsass.info);

// Gulp Sass Task
gulp.task('sass', function() {
  gulp.src('./sass/*.scss')
    .pipe(cssGlobbing({
      extensions: ['.css', '.scss']
    }))
    //.pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: [
        './node_modules/breakpoint-sass/stylesheets',
        './node_modules/compass-mixins/lib'
      ],
      outputStyle: 'nested',
      sourceMap: true,
      sourceMapContents: true,
      sourceMapEmbed: false,
      outFile: './css-node',
      importer: importOnce,
      importOnce: {
        index: false,
        css: false,
        bower: false
      },
      functions: assetFunctions({
        images_path: './images',
        fonts_path: './fonts',
        http_images_path: './images',
        http_fonts_path: './fonts',
        asset_cache_buster: function (http_path, real_path, done) {
          done('1442217566');
        }
      }),
      errLogToConsole: true
    }))
    //.pipe(sourcemaps.write())
    .pipe(gulp.dest('./css-node'));
});

// Create Gulp Default Task
// ------------------------
// Having watch within the task ensures that 'sass' has already ran before watching
//
// This setup is slightly different from the one on the blog post at
// http://www.zell-weekeat.com/gulp-libsass-with-susy/#comment-1910185635
gulp.task('default', ['sass'], function () {
  gulp.watch('./{,*/}*.{scss,sass}', ['sass'])
});
