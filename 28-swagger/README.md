# Swagger

- `RESTful API` 정의하기
- `RESTful API` 다큐먼트 작성
- `code`와 `docs` `sync`하기
- `API` 편하게 적용하기

## Definition

- Domain Specific Language to describe RESTful API
- OpenAPI Specification 3.x.x
- Swagger Specification 2.0
- Swagger Tools

## Approaches to OpenAPI

1. `Code First` a.k.a "bottoms up"
   - `Traditional` approach to API development
   - API definition is generated from the source code
   - PROS:
     - Faster API implementation
     - Good starting point for existing projects
   - CONS:
     - API definition is scattered across the code
     - Focuses on the implementation not API design
2. `Design First` a.k.a "top down"
   - Relatively new approach to API development
   - API definition document is the single source of truth
   - PROS:
     - API definition is one source of truth
     - Early collaboration and feedback
     - Focus on API design yields better APIs
   - CONS:
     - Takes longer to develop and deliver the API
   - How to implement in node environment
     1. Using `Codegen`: `openapi-generator`
        - No clear separation between generated code and hand-written handlers
        - Cannot selectively use individual parts (validator, router)
     2. Using `Middleware`: `express-openapi-validator`
        - Express middleware
        - Validates request parameters and responses
        - Includes constomisable router

## Reference

- [Swagger Tools](https://swagger.io/)
- [OpenAPI Documentation](https://oai.github.io/Documentation/)
- [OpenAPI Specification](https://spec.openapis.org/oas/v3.1.0)
