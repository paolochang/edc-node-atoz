# HTTP

## HTTP/HTTPs

### `HTTP`: Hypertext Transfer Protocol (1989)

`Client`가 `Server`에 요청하면, `Server`에서는 `Client`가 요청한 `request`에 해당하는 응답 `response`를 돌려주는, `request`와 `response`로 이루어진 `protocol`이라고 볼 수 있다.

### `HTTPs`: Hypertext Transfer Protocol Secure (1994)

전세계에서 가장 유명한 웹사이트 137,971 중 57.1% 가 `HTTPs`를 사용한다.

- TSL/SSL 등 조금 더 안전한 암호화 된 방법으로 데이타 통신이 이루어지기 때문에 제 삼자가 그 내용을 볼 수 없다.

### `HTTP v1` (1997)

- 전세계의 웹사이트 중 30% 정도가 현재 `HTTP v1`을 사용한다.
- text-based
- uncompressed headers (헤더의 사이즈가 크다)
- one file at a time
- inefficient

### `HTTP v2` (2015)

- `HTTP v1`에서 문제가 됐던 부분을 개선한 `HTTP v2`는 `HTTP v1`와 비교하여 많은 부분들이 변경 되었으며, 기술적인 부분으로는 `HTTP`와 `HTTPs`를 동시에 지원 할 수 있지만, `HTTP v2`는 `HTTPs`로만 동작 할 수 있다. 즉 `HTTP v2`로 넘어가면서 보안이 없는 `HTTP`는 브라우져에서 허용하지 않는다. 전세계의 웹사이트 중 50% 정도가 현재 `HTTP v2`을 사용한다.
- binary based protocol (efficient/secure)
- header compression
- multiplexing
- stream prioritization

### `HTTP v3` (2019)

- 현재 개발이 진행중이며, `HTTPs`만 동작하며 대부분의 브라우져에서 지원하지 않는다.
- TCP 기반으로 만들어진 기존의 `HTTP`와는 다르게 UDP를 기반으로 개선하고 있다.
- `HTTP v2`와 크게 다르지 않는다.

## STATUS CODES

### `1XX`: Information

- 100: Continue
- 102: Processing

### `2XX`: Successful

- 200: OK
- 201: Created
- 204: No Content

### `3XX`: Redirection

- 301: Moved Permanently
- 302: Found
- 303: See Other (GET 요청에서만 사용가능)
- 307: Temporary Redirect
- 308: Permanent Redirect

### `4XX`: Client Error

- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 405: Method Not Allowed
- 409: Conflict

### `5XX`: Server Error

- 500: Internal Server Error
- 502: Bad Gateway
- 503: Service Unavailable

## Request Methods

- `URL` (Uniform Resource Locator) can be used on `web pages (http)`, `file transfer (ftp)`, `email (mailto)`, and `database (jdbc)`

- &lt;protocal&gt;://&lt;hostname&gt;:&lt;port&gt;/&lt;pathname&gt;?&lt;query&gt;

- `port`는 생략 가능

### Request Methods 종류

- GET: get
- POST: create
- PUT: replace
- DELETE: delete
- PATCH: replace partially
- HEAD: get without body
- OPTIONS: all supported methods for URL
- TRACE: echoes the received request

### 서버의 resource를 변경하지 않고 읽어올때

- GET
- HEAD
- OPTIONS
- TRACE

### 서버의 데이터를 변경하는 Request Methods

- POST
- PUT
- DELETE
- PATCH

### Request Methods Table

|                              | GET | POST  | PUT | DELETE | PATCH | HEAD | OPTIONS | TRACE |
| ---------------------------- | --- | ----- | --- | ------ | ----- | ---- | ------- | ----- |
| Request has body             | No  | Yes   | Yes | May    | Yes   | No   | No      | No    |
| Successful response has body | Yes | Yes   | No  | May    | Yes   | No   | Yes     | No    |
| Safe                         | Yes | No    | No  | No     | No    | Yes  | Yes     | Yes   |
| Idempotent                   | Yes | No    | Yes | Yes    | No    | Yes  | Yes     | Yes   |
| Cacheable                    | Yes | (\*1) | No  | No     | No    | Yes  | No      | No    |
| Allowed in HTML forms        | Yes | Yes   | No  | No     | No    | No   | No      | No    |

- (\*1) Only if freshness information is included

## HTTP Headers

### HTTP 특징

1. Stateless Protocol:
   `Server`에 요청하는 개별적 `request`는 서로 연관되어져 있지 않으며 `request` 그대로의 data를 가지고 있어야 한다.
2. `Sessions` & `Cookies`:
   Stateless Protocol에서 사용자가 로그인 되 있다는 것을 알 수 있는 방법으로 `Sessions`과 `Cookies`가 사용된다. 예전에는 `client`가 `server`에 로그인 요청시, `server`는 `client`에게 로그인에 필요한 정보를 포함한 `headers`를 보내주게 된다. `cookies`는 `browser`에서 잠시 보관하고 있는 저장소의 역할을 하며 `headers`에 로그인에 필요한 정보를 포함하고 있으면 `browser`가 자동으로 `cookies`에 저장을 해준다. 다음 `request`에 똑같은 `cookies`를 `headers`에 넣어서 `server`에 보낸다. `request body`는 Stateless로 로그인 되어 있는 정보가 없지만 `headers` 안에 정보를 포함하고 있다.
   예)
   ```
   auth_token=xxx...
   ```
   `headers` 안에는 `User-Agent`가 존제하는데, 이는 `browswer`와 운영체재에 대한 정보를 가지고 있다.
3. Standard Headers, Custom Headers

   - Standard: Authorization (o)
   - Custom: x-auth (x)

   `Cookie`에 `authentication` 정보를 포함 할때, 상황에 맞고 의미있는 `header`를 사용한다. 이미 `Authorization`이라는 `header`가 존재하기 때문에 `x-auth` 혹은 이외의 이름을 붙여 따로 저장하는 방법을 사용 할 수는 있지만 가장 이상적인 방법은 아니다.

### HTTP Headers Categories

- Authentication

  - Authorization

- Caching

  - Cache-Control
  - Expires

- Message body information

  - Content-Length
  - Content-Type
  - Content-Language

- CORS

## Reference:

- [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [HTTP response status codes 한국어](https://developer.mozilla.org/ko/docs/Web/HTTP/Status)
- [HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [HTTP request methods 한국어](https://developer.mozilla.org/ko/docs/Web/HTTP/Methods)
- [HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
- [HTTP headers 한국어](https://developer.mozilla.org/ko/docs/Web/HTTP/Headers)
