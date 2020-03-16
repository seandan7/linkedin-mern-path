const cp = require("child_process");

const questionApp = cp.spawn("node", ["questions.js"]);

questionApp.stdin.write("Sean \n");
questionApp.stdin.write("CB \n");
questionApp.stdin.write("Code stuff \n");

questionApp.stdout.on("data", data => {
    console.log(`from the question app: ${data}`);
})

questionApp.on('close', () => {
    console.log("questionApp ended");
})