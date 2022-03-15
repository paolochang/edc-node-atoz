const fs = require("fs");

/**
 *  Since createRadStream returns ReadStream and on returns itself,
 *  we can use chaining to make the code shorter
 */
const data = [];
fs.createReadStream("./sample.txt", {
  highWaterMark: 1028, // default 64k bytes
  encoding: "utf-8",
})
  .once("data", (chunk) => {
    data.push(chunk);
    console.count("data");
  })
  .on("end", () => {
    console.log(data.join(""));
  })
  .on("error", (error) => {
    console.log(error);
  });
