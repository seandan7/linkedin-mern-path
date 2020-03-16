const fs = require("fs");

if (!fs.existsSync("storage-files")) {
    fs.mkdir("storage-files", err => {
        if (err) throw err;

        console.log("Directory created");
    });
} else {
    console.log("Already there");
}

