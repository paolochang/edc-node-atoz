let tweets = [
  {
    id: "1",
    text: "드림코딩에서 강의 들으면 너무 좋으다",
    createdAt: "2021-05-09T04:20:57.000Z",
    name: "Bob",
    username: "bob",
    url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
  },
  {
    id: "2",
    text: "안녕?",
    createdAt: "2021-05-09T04:20:57.000Z",
    name: "Ellie",
    username: "ellie",
  },
];

export function getAll() {
  return tweets;
}

export function getAllByUsername(username) {
  return tweets.filter((tweet) => tweet.username === username);
}

export function getById(tweetId) {
  return tweets.find((tweet) => tweet.id === tweetId);
}

export function create(text, name, username) {
  const newTweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
    url: "",
  };
  tweets = [newTweet, ...tweets];
  return newTweet;
}

export function update(id, text) {
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) tweet.text = text;
  return tweet;
}

export function remove(tweetId) {
  tweets = tweets.filter((tweet) => tweet.id !== tweetId);
}
