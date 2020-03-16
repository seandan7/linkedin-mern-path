const readline = require('readline');
const { EventEmitter } = require("events");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



module.exports = (questions, doneFunc = f => f) => {
    const answers = [];

    const [firstQuest] = questions;

    const emitter = new EventEmitter();


    const questionAnswered = (answer) => {
        // event on answer
        emitter.emit("answer", answer);
        answers.push(answer);
        if (answers.length < questions.length) {
            rl.question(questions[answers.length], questionAnswered);
        } else {
            // event on complete
            emitter.emit("complete", answers);
            doneFunc(answers);
        }
    };
    rl.question(firstQuest, questionAnswered);
    return emitter;
}
