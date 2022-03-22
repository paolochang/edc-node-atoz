# Twitter Authentication

## Twitter `auth` API

### POST: `/auth/signup`

#### Request

```
{
  "username": "ellie",
  "password": "abcd1234",
  "name": "Ellie",
  "email": "ellie@email.com",
  "url": ""
}
```

#### Response `200`

```
{
  token,
  username
}
```

### POST: `/auth/login`

#### Request

```json
{
  "username": "ellie",
  "password": "abcd1234"
}
```

#### Response `200`

```
{
  token,
  username
}
```

### GET: `/auth/me`

#### Response `200`

```
{
  token,
  username
}
```
