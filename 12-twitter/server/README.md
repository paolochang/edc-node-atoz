# Twitter

## API Spec

### Tweets Schema

```js
{
  id: string,
  message: string,
  createdAt: Date,
  name: string,
  username: string,
  url: string (optional),
}
```

#### GET: `/tweets`

Get all tweets

##### Response `200`

```js
{
  [tweet, tweet ...]
}
```

#### GET: `/tweets?username=:username`

Get all tweets for user's username

##### Response `200`

```js
{
  [tweet, tweet ...]
}
```

#### POST `tweets`

Create new tweet

##### Request

```js
{
  name: user_firstname,
  username: user_nickname,
  message: content,
  url: url,
}
```

Note: `Login` 기능 미 구현시, name, username 필요

##### Response `201`

```js
{
  tweet;
}
```

#### PUT `/tweets/:id`

Update tweet

##### Request

```js
{
  message: content,
}
```

##### Response `200`

```js
{
  tweet;
}
```

#### DELETE `/tweets/:id`

Delete tweet

##### Response `204`
