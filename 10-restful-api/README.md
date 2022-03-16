# RESTful API

## RESTful API

### RESTful API

- RESTful: Representational State Transfer
- API: Application Programming Interface

### Roy Fielding

- HTTP: Standardization process in his 2000 PhD diseertation
- Architechtural Styles and Design of Network-based Software Architectures

### RESTful System: 6 Guiding Constrains

1. Client-server architecture
2. Statelessness
3. Cacheability
4. Layered System
5. Code on demand
6. Uniform Interface
   - Fundamental to the design of any RESTful System
     - Resource Identification in requests
     - Resource manipulation through representations
     - Self-descriptive messages
     - Hypermedia as the engine of application state (HATEOAS)

## Designing Web APIs

### CRUD

- Create: POST
- Read: GET
- Update: PUT
- Delete: DELETE

### Blog Post Example

- `GET: /posts/getPosts`
  - Action `GET`임으로 위의 path를 `GET: /posts`로 작성 가능하다.
- `GET: /posts/createPost`
  - Action `POST`로 변경해야 하며, `POST: /posts`로 작성 가능하다.
- `GET: /posts/1`
  - `posts`에 첫번째 `post`를 가져온다.
- `PUT: /posts/1`
  - `posts`에 첫번째 `post`를 업데이트 한다.
- `DELETE: /posts/1`
  - `posts`에 첫번째 `post`를 지운다.
- `GET: /posts/1/tags`
  - 무엇을 가져오려는지 명확하도록 다음과 같이 작성 가능하다. `GET: /tags/?postId=1`
- `GET: /tags/?query=cool`
  - 위와 같이 `query`를 이용 할 수 있다.

## 기업사례 예제

- List by domain
  - Use Cases
  - HTTP Request Example
  - Parameters / Filters
  - Code Samples
  - Response Example

### YouTube

- Captions
- Channels
- Members
- Playlist
- Thumbnails
- Videos
  - getRating
  - list
  - insert
  - delete

### GitHub

- Pulls
  - HTTP Request Example
    ```
    GET: /repos/{owner}/{repo}/pulls
    ```
  - Parameters
  - Code Samples
  - Response Example

## Reference

- [YouTube Data API: Videos / List](https://developers.google.com/youtube/v3/docs/videos/list)
- [GitHub Docs REST API](https://developer.github.com/v3/)
