# HTTP/HTTPs

## Definition

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
