import express from "express";
import fs from "fs";
import fsAsync from "fs/promises";

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

app.get("/file2", (req, res) => {
  /** promises: 비동기 */
  fsAsync
    .readFile("/file.txt")
    .then((data) => {})
    .catch((err) => {
      res.status(404).send("File not found");
    });
});

app.get("/file3", async (req, res) => {
  /**
   *  await fsAsync.readFile() <- await 를 했기때문에 코드 자체는 동기적이나
   *  error handler 을 호출하지는 않는다. promises 내부에서 발생하는 error 와 같기 때문이다
   */
  try {
    const data = await fsAsync.readFile("file.txt");
  } catch (err) {
    res.status(404).send("File not found");
  }
});

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).json({ message: "Something went wrong" });
});

app.listen(8080);
