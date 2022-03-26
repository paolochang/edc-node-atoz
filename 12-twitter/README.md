# Twitter

## Socket

### Passing `token` as auth ✅

- `client/src/network/socket.js`에서

  ```js
  export default class Socket {
    constructor(baseURL, getAccessToken) {
      this.io = socket(baseURL, {
        auth: (callback) => callback({ token: getAccessToken() }), // <- auth 사용시
      });
    }
  }
  ```

- `server/connection.js`에서

  ```js

  class Socket {
    constructor(server) {
      (...)

      this.io.use((socket, next) => {
        /** token 을 auth 에 받아올 때 socket 에서 표준적으로 정해진 auth 를 사용해야 한다 **/
        const token = socket.handshake.auth.token;
        if (!token) {
          return next(new Error("Authentication error"));
        }
        jwt.verify(token, config.jwt.secretKey, (error, decoded) => {
          if (error) {
            return next(new Error("Authentication error"));
          }
          next();
        });
      });

      (...)
    }
  }
  ```

### Passing `token` as query 🚫

- `client/src/network/socket.js`에서

  ```js
  export default class Socket {
    constructor(baseURL, getAccessToken) {
      this.io = socket(baseURL, {
        query: { token: getAccessToken() }, // <- query 사용시
      });
    }
  }
  ```

- `server/connection.js`에서

  ```js

  class Socket {
    constructor(server) {
      (...)

      this.io.use((socket, next) => {
        /** token 을 query 에 받아올 때 **/
        const token = socket.handshake.query && socket.handshake.query.token
        /**
         *  문제점: browser console 및 log 에 token 이 노출됨
        */
        if (!token) {
          return next(new Error("Authentication error"));
        }
        jwt.verify(token, config.jwt.secretKey, (error, decoded) => {
          if (error) {
            return next(new Error("Authentication error"));
          }
          next();
        });
      });

      (...)
    }
  }
  ```
