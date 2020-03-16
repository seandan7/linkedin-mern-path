const events = require("events");

const emitter = new events.EventEmitter();

emitter.on("customEvent", (message, sender) => {
    console.log(`${sender} says ${message}`);
});

// // create event
// emitter.emit("customEvent", "Hello World", "Computer");
// emitter.emit("customEvent", "That's pretty cool", "Sean");

process.stdin.on("data", data=> {
    const input = data.toString().trim();
    if (input === "exit") {
        emitter.emit("customEvent", "Goodbye", "Process")
        process.exit();
    }
    emitter.emit("customEvent", input, "terminal");
});