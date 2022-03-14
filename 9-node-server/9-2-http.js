const http = require("http");
/**
 *  http2는 https와 함께 적용이 됨으로 개발 pc에 ssl certificate 이 존제하지 않는다.
 *  개발시 ssl certificate을 받아 browswer에 인증을 하여도 되지만
 *  개발하는 단계에서는 복잡할수 있으므로 강의에서는 http module로 배웠다가 배포할때 http2를 사용해 보도록 한다.
 */
// const http2 = require("http2");

console.log(http.STATUS_CODES);
console.log(http.METHODS);

const server = http.createServer((req, res) => {
  console.log("incoming...");
  console.log(req.headers);
  console.log(req.httpVersion);
  console.log(req.method);
  console.log(req.url);
  res.write("Welcome!");
  res.end();
});

server.listen(8080);
