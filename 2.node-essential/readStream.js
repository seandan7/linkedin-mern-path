const fs = require("fs");

// ability to read file bit by bit
const readStream = fs.createReadStream("./assets/Readme.md", "UTF-8");

let fileTxt = "";

console.log("Type something...");

readStream.on("data", data => {
    console.log(`I read ${data.length - 1} characters of text`);
    fileTxt += data;
});

readStream.once("data", data => {
    console.log(data);
});

readStream.on("end", () => {
    console.log("Done reading");
    console.log(`In total, I read ${fileTxt.length - 1} characters of texts`);
});