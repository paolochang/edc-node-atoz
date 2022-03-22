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

## JSON Web Token (JWT)

<img src="/assets/jwt.png" width="600px" title="Session Cookies" alt="Session Cookies"></img><br/>

### PROS

- `session`을 사용할때는 `server`에 `state`라는 상태가 필요했다면, `JWT`는 한번 생성한 뒤 `client`에 보내주고 다시 검증하는 절차만 필요하기 때문에 별도의 상태가 필요하지 않는다.
- `server` 확장, `micro services` 및 `분산형 시스템`을 사용하여도 서로 `server`간에 네트워크 요청을 통해서 사용자에 대한 검증을 사용하지 않아도 `JWT`를 해독할 `secret key`만 가지고 있으면 된다.

### CONS

- `secret key` 노출시 보안에 대한 위협

## bcrypt

`bcrypt`는 단방향의 암호화 알고리즘을 사용한 해쉬 함수로 기존의 비밀번호를 `salt`와 함께 해쉬화하여 암호화된 비밀번호를 `database`에 저장한다.

- 예

  ```
  $2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy
  \/ \/ \____________________/\_____________________________/
  Alg Cost       Salt                        Hash
  ```

  - `2a`: 해쉬 알고리즘 식별자 (bcrypt)
  - `10`: Cost factor (2^10 ==> 1,024 rounds)
  - `N9qo8uLOickgx2ZMRZoMye`: 16바이트(128비트) 솔트, base64-encoded to 22 characters
  - `IjZAgcfl7p92ldGxad68LJZdL17lhWy`: 24바이트(192비트) 해시, base64-encoded to 31 characters
