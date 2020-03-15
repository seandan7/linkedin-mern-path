const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    "What is your name",
    "What is your location",
    "What are you going to do with node js",
    
];

const collectAnswers = (questions, doneFunc) => {
    const answers = [];

    const [firstQuest] = questions;
    const questionAnswered = (answer) => {
        answers.push(answer);
        if (answers.length < questions.length) {
            rl.question(questions[answers.length], questionAnswered);
        } else {
            doneFunc(answers);
        }
    }
    rl.question(firstQuest, questionAnswered);
}

collectAnswers(questions, answers => {
    console.log("Thanks for your answers");
    console.log(answers);
    process.exit();
});