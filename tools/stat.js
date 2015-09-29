// A quick one to get file CSS stats
// MacMladen (C) 2015
// author: MacMladen <macmladen@gmail.com>
// date: 2015-09-29

var fs = require('fs');
var cssstats = require('cssstats');

if (process.argv.length != 3) {

  console.log("This app requires just one argument.");
  console.log("Usage:");
  console.log("$ node tools/stat.js file-to-stat.css");
  return 1;
}

var cssToStat = process.argv[2];

try {
  var cssFile = fs.readFileSync(cssToStat, 'utf8');
}
catch (e) {
  console.log("File does not exist: ", cssToStat);
  return 1;
}

var objNode = cssstats(cssFile);

//console.log(objNode);   // if you wish to dump all properties

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
