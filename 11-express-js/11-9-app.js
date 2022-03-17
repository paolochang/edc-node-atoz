import express from "express";
import fs from "fs";
import fsAsync from "fs/promises";
import {} from "express-async-errors";

const app = express();

app.use(express.json());

app.get("/file1", (req, res) => {
  /**
   * 동기적 처리: try catch를 사용하여 error를 다룬다
   * Error 처리를 하지 않을경우 맨 끝의 error handling "Something went wrong" 이 출력
   */
  // try {
  //   const data = fs.readFileSync("/file.txt");
  // } catch (err) {
  //   res.status(404).send("File not found");
  // }

  /** 비동기: 내부적으로 애러가 발생하여 try, catch로 error를 잡을 수 없다 */
  fs.readFile("/file1.txt", (err, data) => {
    if (err) {
      res.status(404).send("File not found");
    }
  });
});

/**
 *  install express-async-errors
 */
app.get("/file2", (req, res) => {
  /** promises: 비동기 */
  return fsAsync.readFile("/file.txt");
});

app.get("/file3", async (req, res) => {
  const data = await fsAsync.readFile("file.txt");
});

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).json({ message: "Something went wrong" });
});

app.listen(8080);
