const fs = require("fs");

const writeStream = fs.createWriteStream("./new.txt");

writeStream.on("finish", () => {
  console.log("finished!");
});

writeStream.write("hello!");
writeStream.write("world!");
writeStream.end();
