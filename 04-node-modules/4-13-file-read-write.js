const fs = require("fs").promises;

// read a file
fs.readFile("./file.txt", "utf-8") //
  .then((data) => console.log(data))
  .catch(console.error);

// writing a file
fs.writeFile("./file.txt", "Hello, Paolo :)") //
  .catch();

fs.appendFile("./file.txt", "\nAny note to leave?") //
  .then(() => fs.copyFile("./file.txt", "file3.txt"))
  .catch(console.error);

// copy - file2.txt is empty since it's asynchronous
fs.copyFile("./file.txt", "file2.txt") //
  .catch(console.error);

// folder
fs.mkdir("folder") //
  .catch(console.error);

fs.readdir("./") //
  .then(console.log)
  .catch(console.error);
