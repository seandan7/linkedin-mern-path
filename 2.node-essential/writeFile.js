const fs = require('fs');

const md = `
#This is a new file

We can write text with fs.writeFile

`;
fs.writeFile("./assets/notes.md", md.trim(), err => {
    if(err) {
        throw err;
    }
});