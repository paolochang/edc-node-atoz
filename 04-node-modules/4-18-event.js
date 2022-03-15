const EventEmitter = require("events");

const emitter = new EventEmitter();
const callback1 = (arg) => {
  console.log("first callback", arg);
};
emitter.on("ellie", callback1);

emitter.on("ellie", (arg) => {
  console.log("second callback", arg);
});

emitter.on("ellie", (arg) => {
  console.log("third callback", arg);
});

emitter.emit("ellie", { message: 1 });
emitter.removeListener("ellie", callback1);
emitter.emit("ellie", { message: 2 });
emitter.removeAllListeners();
emitter.emit("ellie", { message: 3 });
