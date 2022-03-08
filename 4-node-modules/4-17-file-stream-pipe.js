const fs = require("fs");
const zlib = require("zlib");
const http = require("http");

const readStream = fs.createReadStream("./sample.txt");
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream("./sample.zip");

const piping = readStream.pipe(zlibStream).pipe(writeStream);

piping.on("finish", () => {
  console.log("finished!");
});

const server = http.createServer((req, res) => {
  // fs.readFile("./sample.txt", (err, data) => {
  //   res.end(data);
  // });
  const stream = fs.createReadStream("./sample.txt");
  stream.pipe(res);
});
server.listen(3000);
