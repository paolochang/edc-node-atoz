const path = require("path");

// POSIX (Unix: Mac, Linux): 'Users/<username>/path.../<filename>
// Windows: 'C:\\path...\<filename>

console.log("DIRNAME:", __dirname);
console.log("FILENAME:", __filename);

console.log("PATH SEPERATOR:", path.sep);
console.log("PATH DELIMITER:", path.delimiter);

// basename
console.log("BASENAME:", path.basename(__filename));
console.log("BASENAME:", path.basename(__filename, ".js"));

// dirname
console.log("DIRNAME:", path.dirname(__filename));

// extension
console.log("EXTENSION:", path.extname(__filename));

// parse
const parsed = path.parse(__filename);
console.log("PARSED:", parsed);
console.log("PARSED ROOT:", parsed.root);
console.log("PARSED NAME:", parsed.name);

const str = path.format(parsed);
console.log("OBJECT TO STRING:", str);

// isAbsolute
console.log("IS ABSOLUTE:", path.isAbsolute(__dirname)); // /Users
console.log("IS ABSOLUTE:", path.isAbsolute("../")); // Relative path

// normalize
console.log("NORMALIZE:", path.normalize("./folder////////sub"));

// join
console.log(__dirname + path.sep + "image");
console.log(path.join(__dirname, "image"));
