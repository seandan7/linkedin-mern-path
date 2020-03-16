const collectAnswers = require('./lib/collectAnswers');
const questions = [
    "What is your name? ",
    "What is your location? ",
    "What are you going to do with node js? ",
    
];

const answerevents = collectAnswers(questions);

answerevents.on("answer", answer => {
    console.log(answer);
});
answerevents.on("complete", answers => {
    console.log("Thanks for your answers");
    console.log(answers);
    process.exit();
});

answerevents.on("complete", () => process.exit());