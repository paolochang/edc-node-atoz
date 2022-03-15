const fs = require("fs");

/**
 * 3 Different types of file rename function
 *
 * 1. rename(..., callback(error, data))
 *    - Do everything for the passed parameters and run callback at the end
 *
 * 2. renameSync(...)
 *    - Does not include callback function as a parameter
 *    - Wait until renameSync(...) finishes
 *    - Use with try and catch
 *
 * 3. promises.rename().then().catch(0)
 */

try {
  /**
   * try not to use since the script stops at renameSync function until it finishes
   *
   * note: path starts at where the node command entered
   */
  fs.renameSync("./file.txt", "./file-new.txt");
} catch (err) {
  console.error(err);
}

console.log("finish fs.renameSync()");

fs.rename("./file-new.txt", "./file-with-callback.txt", (error) =>
  console.error("ERROR:", error)
);

console.log("finish fs.rename()");

fs.promises
  .rename("./file-with-callback.txt", "./file.txt")
  .then(() => console.log("finish fs.promises.rename()"))
  .catch(console.error);
