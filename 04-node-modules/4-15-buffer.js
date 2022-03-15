/**
 *  Buffer: fixed-size chuck of memory,
 *          array of integers, byte of data
 */

const buf = Buffer.from("Hi");

console.log(buf);
console.log(buf.length);
console.log(buf[0]); // print as ASCII code
console.log(buf[1]); // print as ASCII code
console.log(buf.toString("utf-8"));

// create
const buf2 = Buffer.alloc(2); // reset buffer, slower than allocUnsafe()
const buf3 = Buffer.allocUnsafe(2); // may contain random buffer value but faster
const buf4 = Buffer.alloc(2);
buf2[0] = 72;
buf2[1] = 105;
buf2.copy(buf4);
console.log(buf2, buf2.toString());
console.log(buf3, buf3.toString());
console.log(buf4, buf4.toString());

// concat
const newBuf = Buffer.concat([buf, buf2, buf3, buf4]);
