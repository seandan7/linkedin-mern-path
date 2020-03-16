const fs = require("fs");

fs.renameSync("./assets/colors.json", "./assets/colorData.json");

fs.rename("./assets/notes.md", "./storage-files/notes.md", err => {
    if(err) throw err;
});

setTimeout(() => {
    // remove a file
    fs.unlinkSync("./assets/alex.jpg");
}, 3000)