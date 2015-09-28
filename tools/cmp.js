// This one is to check two generated files in css-ruby and css-node folders.
// I am going just to count selectors, descriptors and rules,
// which should give rough picture if they match.
// for those I have globally installed:
//   /usr/local/lib
//   ├── analyze-css@0.10.1
//   ├── bower@1.5.2
//   ├── cssstats@2.1.0
//   ├── generator-drupal-theme@0.1.7
//   ├── grunt-cli@0.1.13
//   ├── gulp@3.9.0
//   ├── npm@2.14.3
//   ├── speed-test@1.1.0
//   ├── stylestats@5.4.3
//   ├── yo@1.4.8
//   └── yslow@3.1.0

var fs = require('fs');
var cssstats = require('cssstats');

var cssSource = process.argv[2];
var cssDest   = process.argv[3];

var css = fs.readFileSync(cssSource, 'utf8');
var objSource = cssstats(css);

var css = fs.readFileSync(cssDest, 'utf8');
var objDest = cssstats(css);

//console.log(objSource);

var
  rules        = objDest.rules.total - objSource.rules.total,
  selectors    = objDest.selectors.total - objSource.selectors.total,
  declarations = objDest.declarations.total - objSource.declarations.total,
  mediaQueries = objDest.mediaQueries.total - objSource.mediaQueries.total,
  mediaUnique  = objDest.mediaQueries.unique;

delete objDest.selectors.values;
delete objDest.selectors.getSpecificityGraph;
delete objDest.selectors.getSortedSpecificity;
delete objDest.selectors.getRepeatedValues;

var kool = (rules + selectors + declarations + mediaQueries) == 0 ? "\033[42m\033[97m\033[1m excellent. \033[0m" : "\033[41m\033[97m\033[1m dough!";

console.log('Checking Ruby vs Node:', kool);
console.log('Rules        : ', rules,        objDest.rules.total);
console.log('Selectors    : ', selectors,    objDest.selectors.total);
console.log('Declarations : ', declarations, objDest.declarations.total);
console.log('mediaQueries : ', mediaQueries, objDest.mediaQueries.total);
console.log('mediaUnique  : ', mediaUnique);
console.log('Selectors : ', objDest.selectors);
console.log('\033[0m');
