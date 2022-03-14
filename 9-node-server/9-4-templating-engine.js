const http = require("http");
const fs = require("fs");
/**
 *  Template을 만들어 놓은 상태에서 request에 따른 response의 data에 맞게 page를 동적으로 만들어 보내줄 수 있다.
 *
 *  Templating Engine 중 EJS 사용방법 데모
 */
const ejs = require("ejs");

const name = "Paolo";
const courses = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "React" },
  { name: "NodeJS" },
];
const server = http.createServer((req, res) => {
  const url = req.url;
  res.setHeader("Content-Type", "text/html");
  if (url === "/") {
    ejs
      .renderFile("./template/index.ejs", { name })
      .then((data) => res.end(data));
  } else if (url === "/courses") {
    ejs
      .renderFile("./template/courses.ejs", { courses })
      .then((data) => res.end(data));
  } else {
    ejs
      .renderFile("./template/notfound.ejs", { name })
      .then((data) => res.end(data));
  }
});

server.listen(8080);
