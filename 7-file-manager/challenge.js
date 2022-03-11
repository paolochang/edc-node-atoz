const fs = require("fs");
const os = require("os");
const path = require("path");

const arguments = process.argv;
if (!arguments[2]) {
  console.error(`ERROR: Please pass the name of the folder as a argument`);
  return;
}
const dirname = arguments[2];
const dirpath = path.join(os.homedir(), "Pictures");
const workingDir = path.join(os.homedir(), "Pictures", dirname);

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

if (!fs.existsSync(workingDir)) {
  console.error(`ERROR: "${dirname}" is not found in "${dirpath}"`);
  return;
}
console.log(`Processing in ${workingDir}...`);
// createDirectories();
// readFiles(dirname);
