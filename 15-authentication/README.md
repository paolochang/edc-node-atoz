# Authentication

## Authentication

<img src="/assets/authentication.png" width="600px" title="Authentication" alt="Authentication"></img><br/>

## Sessions and Cookies

<img src="/assets/session-cookies.png" width="600px" title="Session Cookies" alt="Session Cookies"></img><br/>

### PROS

- `Session`이라는 `database`에 모든 `session`에 대한 정보를 보관하고 있음으로 신뢰 할수 있는 `data`가 있다.
- `cookies`를 보내기 때문에 `server`에서 보낼때도 쉽고 `client`에서 별도로 처리하지 않아도 `browser`에서 `cookies`를 처리 해줌으로 간단하게 구현이 가능하다.
- `HTTP Only` 옵션을 사용시 안전하게 보안성을 높여서 사용이 가능하다.
- 사용자에게 사용자의 정보를 보내는 것이 아니라 `session ID`를 보내 조금 더 안전하다.

### CONS

- `stateful`: 서버에서 시시각각 변하는 사용자의 정보에 대하여 하나의 `session server`에 정보를 보관하고 있으므로 확장성에 있어 여러개의 `server` 혹은 `micro service` 등을 사용할 때 `session` 정보를 받아오기 위해 내부적인 네트워크 요청이 필요하며 분산형으로 시스템을 잘 디자인 했음에도 불구하고 성능이 좋지 않을 때가 있다.
