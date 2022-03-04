const process = require("process");

console.log("code 1");
console.time("timeEnd: code 1");
setTimeout(() => {
  console.timeEnd("timeEnd: code 1");
  console.log("setTimeout 0 sec");
}, 0);

console.log("code 2");
console.time("timeEnd: code 2");
setImmediate(() => {
  console.timeEnd("timeEnd: code 2");
  console.log("setImmediate");
});

console.log("code 3");
console.time("timeEnd: code 3");
process.nextTick(() => {
  console.timeEnd("timeEnd: code 3");
  console.log("process.nextTick");
});
