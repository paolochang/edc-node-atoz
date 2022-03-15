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
    console.log(`\u001b[32mCREATED: ${videosDir} \u001b[0m`);
  }
  if (!fs.existsSync(capturedDir)) {
    fs.mkdirSync(capturedDir);
    console.log(`\u001b[32mCREATED: ${capturedDir} \u001b[0m`);
  }
  if (!fs.existsSync(originalDir)) {
    fs.mkdirSync(originalDir);
    console.log(`\u001b[32mCREATED: ${originalDir} \u001b[0m`);
  }
}

function moveFile(targetDir, filename) {
  fs.rename(
    path.join(workingDir, filename),
    path.join(targetDir, filename),
    (error) => {
      if (!error) {
        console.info(`move ${filename} to ${path.basename(targetDir)}`);
      } else console.error("ERROR:", error);
    }
  );
}

function readFiles(path) {
  fs.readdir(path, (err, files) => {
    if (!err) {
      files.forEach((filename) => {
        // organize video types
        if (filename.match(/(mp4|mov)$/gm)) moveFile(videosDir, filename);
        // organize captured files
        if (filename.match(/(png|aae)$/gm)) moveFile(capturedDir, filename);
        // organize original files
        const edited = `IMG_E${filename.split("_")[1]}`;
        if (files.find((f) => f.includes(edited)))
          moveFile(originalDir, filename);
      });
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
