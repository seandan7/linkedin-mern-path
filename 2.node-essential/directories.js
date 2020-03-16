const fs = require("fs");

// rename storage folder
//fs.renameSync("./storage-files", "./storage");

// remove files in directory
fs.readdirSync("./storage").forEach(fileName => {
    fs.unlinkSync(`./storage/${fileName}`);
});
// after files removed, you can remove a directory
fs.rmdir("./storage", err => {
    if (err) {
        throw err;
    }
})

