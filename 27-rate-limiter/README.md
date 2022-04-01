# Rate Limiter

동시다발적으로 `client`가 `server`에 요청을 보내면 `server`에 과부하가 걸려 `shutdown`될 수 있는데, 이를 미연에 방지하기 위하여 `Rate Limiter`를 사용한다. `DoS attack`등의 공격으로 부터 보호 할 수 있다. 이로 인하여 시스템의 안정성과 사용자들간에 공평성을 유지 할 수 있다.

## API Management Platform

- Business Product
  - apigee
  - Tyk.io
- Cloud Services
  - AWS API Gateway
  - Google Cloud API Gateway

## HTTP

- `429` Too Many Requests
- Add `Retry-After: 3600` to headers
