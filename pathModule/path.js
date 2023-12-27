const path = require("path");

console.log(path.dirname("d:node/pathModule/path.js"));
console.log(path.extname("d:node/pathModule/path.js"));
console.log(path.basename("d:node/pathModule/path.js"));

const myPath = path.parse("d:node/pathModule/path.js");
console.log(myPath.name);