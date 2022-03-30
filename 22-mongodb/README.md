# mongoDB

- Primary unit of data is a `document`
- Documents organised in `collections`
- Document structure is not enforced by DB
- Each document is `self-contained`
- `Data duplication` instead of relation

## MongoDB Document 작성시

`SQL`은 관계형 `database`로 `join query`의 성능이 좋은 반면 `NoSQL`에서 `collection`간에 관계를 선언 할 수 있지만 성늘이 저하됨으로 관계보다는 정보의 중복을 선호 한다.
`Twitter`를 예로 들어 모든 사용자가 트윗을 쿼리하는 횟수가, 사용자가 사용자의 정보를 업데이트 하는 횟부보다 많기 때문에 중복된 정보를 사용한다.
만약 `NoSQL`을 사용하면서 `collection`간에 관계가 필요하다면 `NoSQL` 대신 `SQL`을 사용해야 하지 않는가 생각해 본다.
