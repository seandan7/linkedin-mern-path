const fs = require("fs");

//const files = fs.readdirSync("./assets"); - Syncron
fs.readdir('./assets', (err, files) => {
    if (err) throw err;
    console.log("Done reading files");
    console.log(files);
});
console.log("Start reading files");