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
const videosDir = path.join(workingDir, "videos");
const capturedDir = path.join(workingDir, "captured");
const originalDir = path.join(workingDir, "original");

function createDirectories() {
  if (!fs.existsSync(videosDir)) {
    fs.mkdirSync(videosDir);
    console.log("CREATED:", videosDir);
  }
  if (!fs.existsSync(capturedDir)) {
    fs.mkdirSync(capturedDir);
    console.log("CREATED:", capturedDir);
  }
  if (!fs.existsSync(originalDir)) {
    fs.mkdirSync(originalDir);
    console.log("CREATED:", originalDir);
  }
}

function moveFile(newpath, filename) {
  fs.rename(
    path.join(workingDir, filename),
    path.join(newpath, filename),
    (error) => {
      if (!error) {
        console.log(`move ${filename} to ${newpath}`);
      } else console.error("ERROR:", error);
    }
  );
}

function organizeFiles(filename) {
  const ext = filename.split(".");
  switch (ext[1]) {
    case "mp4":
    case "mov":
      moveFile(videosDir, filename);
      break;
    case "png":
    case "aae":
      moveFile(capturedDir, filename);
      break;
    case "jpg":
      const fileNumber = ext[0].split("_")[1];
      if (fileNumber.charAt(0) === "E") {
        moveFile(originalDir, filename.replace("E", ""));
      }
      break;
    default:
      return;
  }
}

function readFiles(path) {
  fs.readdir(path, (err, files) => {
    if (!err) {
      files.forEach(organizeFiles);
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
createDirectories();
readFiles(workingDir);
