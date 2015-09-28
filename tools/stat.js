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
var cssToStat = process.argv[2];

var css = fs.readFileSync(cssToStat, 'utf8');
var objNode = cssstats(css);

//console.log(objRuby);

delete objNode.selectors.values;
delete objNode.selectors.getSpecificityGraph;
delete objNode.selectors.getSortedSpecificity;
delete objNode.selectors.getRepeatedValues;

console.log('Checking CSS:');
console.log('Rules        : ', objNode.rules.total);
console.log('Selectors    : ', objNode.selectors.total);
console.log('Declarations : ', objNode.declarations.total);
console.log('mediaQueries : ', objNode.mediaQueries.total);
console.log('mediaUnique  : ', objNode.mediaQueries.unique);
console.log('Selectors:', objNode.selectors);
console.log('\033[0m');
