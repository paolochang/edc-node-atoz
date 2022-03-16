# ExpressJS

1. NodeJS Frameworks 중 독보적인 사용량
   - 많은 사람들이 사용하고 검증된 Framework
   - 문제에 대한 해결방안들이 이미 다루어지거나 빨리 개선됨
2. 가볍고 심플하고 유연하고 강력한 Framework
   - 배우기 쉽고 다른 Framework로 넘어가도 이해가 빠르다

## 사용법

```js
const express = require("express");
const app = express(); // 생성자

/**
 *  HTTP Request methods와 동일
 *  GET, POST, PUT, DELETE, ALL, USE
 *
 *  @param {string} path - URL/Path
 *  @param {callback} callback - (request, response, next) middleware
 *
 */
app.get('/posts', function (req, res, next) {
   res.send(...)
})

app.post('/posts', function (req, res, next) {
   res.send(...)
})

app.put('/posts', function (req, res, next) {
   res.send(...)
})

app.delete('/posts/:id', function (req, res, next) {
   res.send(...)
})

app.listen(8080)
```

## Middleware

`express`는 수많은 `middleware`의 연속으로 이루어 진다.

```js
app.use(json); // json parsing
app.use(headers); // headers
app.get("/"); // root <- path가 동일시 res.send() 보내고 뒤의 middleware 는 실행하지 않는다.
app.get("/posts"); // posts
app.use(error); // handle error
```

## Reference

- [Express Documentation](https://expressjs.com/en/4x/api.html)
