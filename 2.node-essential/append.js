const fs = require ("fs");
const colorData = require("./assets/colors.json");

colorData.colorList.forEach(function(color) {
    fs.appendFile("./storage-files/colors.md", `${color.color}: ${color.hex} \n`, err => {
        if(err) throw err;
    }); // name of file to append to
});