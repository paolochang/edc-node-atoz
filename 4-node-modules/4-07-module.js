/**
 *  Create package.json
 *  ```
 *  $ npm init --yes
 *  ```
 *
 *  add:
 *  ```
 *  "type": "module"
 *  ```
 */
import { getCount, increase } from "./4-07-counter.js";

increase();
console.log(getCount());
