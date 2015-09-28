// -----------------------------------------------------------------------------
// Configuration
// -----------------------------------------------------------------------------

var src = "./assets";
var dest = "./public";
var sassPaths = [
  './node_modules/compass-mixins/lib',
  './node_modules/breakpoint-sass/stylesheets'
];

var importOnce   = require('node-sass-import-once');

module.exports = {
  sass : {
    Options: {
      includePaths: sassPaths,
      //outputStyle: 'expanded',
      sourceMap: true,
      //sourceMapContents: true,
      sourceMapEmbed: true,
      outFile: './css',
      importer: importOnce,
      importOnce: {
        index: false,
        css: false,
        bower: false
      },
      errLogToConsole: true,
      autoprefixerOptions: {
        browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
      }
    },
    Source : src + '/sass/**/*.{scss,sass}',
    Destination : dest + '/css'
  },
  sassdocOptions: {
    Destination: dest + '/sassdoc'
  }
};
