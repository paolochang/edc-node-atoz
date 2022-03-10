const fs = require("fs");

const dirpath = __dirname;
const dirname = process.argv[2];

function createDirectories() {
  if (!fs.existsSync(`./${dirname}/videos`)) {
    fs.mkdirSync(`./${dirname}/videos`);
    console.log("CREATED:", `./${dirname}/videos`);
  }
  if (!fs.existsSync(`./${dirname}/captured`)) {
    fs.mkdirSync(`./${dirname}/captured`);
    console.log("CREATED:", `./${dirname}/captured`);
  }
  if (!fs.existsSync(`./${dirname}/original`)) {
    fs.mkdirSync(`./${dirname}/original`);
    console.log("CREATED:", `./${dirname}/original`);
  }
}

function moveFile(oldpath, newpath) {
  fs.rename(oldpath, newpath, (error) => {
    if (!error) {
      const dir = newpath.split("/")[2];
      const file = newpath.split("/")[3];
      console.log(`move ${file} to ${dir}`);
    } else console.error("ERROR:", error);
  });
}

function organizeFiles(filename) {
  const ext = filename.split(".");
  switch (ext[1]) {
    case "mp4":
    case "mov":
      moveFile(`./${dirname}/${filename}`, `./${dirname}/videos/${filename}`);
      break;
    case "png":
    case "aae":
      moveFile(`./${dirname}/${filename}`, `./${dirname}/captured/${filename}`);
      break;
    case "jpg":
      const fileNumber = ext[0].split("_")[1];
      if (fileNumber.charAt(0) === "E") {
        moveFile(
          `./${dirname}/${filename.replace("E", "")}`,
          `./${dirname}/original/${filename.replace("E", "")}`
        );
      }
      break;
    default:
      return;
  }
}

function readFiles(directory) {
  fs.readdir(directory, (err, files) => {
    if (!err) {
      files.forEach((file) => organizeFiles(file));
    } else {
      console.log(err);
    }
  });
}

console.log(`Processing in ${dirpath}/${dirname}...`);
createDirectories();
readFiles(dirname);
