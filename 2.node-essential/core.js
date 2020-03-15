const path = require('path');
//const util = require('util');
const {log} = require('util');
const v8 = require('v8');

// path
const dirUploads = path.join(__dirname, 'www', 'files', 'uploads');
console.log(dirUploads)

// util
//util.log(path.basename(__filename));

log("^ the name of current file")

// v8
log(v8.getHeapStatistics());