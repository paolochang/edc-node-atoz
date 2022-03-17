import express from "express";

const app = express();

/**
 *  HTTP Method 와 상관없이 `/api` route 을 호출하면 all을 출력한다.
 *  `/api/<somthing>` 안에 특정한 doc에 접속을 하면 처리가 되지 않는다.
 */
app.all("/api", (req, res, next) => {
  console.log("all");
  next();
});

/**
 *  `/sky` 뒤에 붙는 어떠한 경로를 접속 하더라도 log "use"를 출력한다.
 */
app.use("/sky", (req, res, next) => {
  console.log("use");
  next();
});

/**
 *  한곳에서 여러개의 response 를 보내지 못해 Error 가 뜨는데,
 *  return을 붙여 이를 방지해준다.
 */
app.get(
  "/",
  (req, res, next) => {
    console.log("first1");
    return res.send("Hello");
    /** Call next callback */
    // next();
    /** Ignore next callback */
    // next("route");
    /** Throw an error */
    // next(new Error("error"));
  },
  (req, res, next) => {
    console.log("first2");
    next();
  }
);
app.get("/", (req, res, next) => {
  console.log("second");
});

/**
 *  서버 route를 찾지 못했을 경우
 */
app.use((req, res, next) => {
  res.status(404).send("Not available");
});
/**
 *  서버 끝단에 Error Handler를 작성한다
 */
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send("Sorry, try later");
});
app.listen(8080);
