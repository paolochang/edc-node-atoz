type Tweet = {
  id: string;
  text: string;
  createdAt: Date;
  name: string;
  username: string;
  url?: string;
};

const tweets: Tweet[] = [
  {
    id: "1",
    text: "드림코딩에서 강의 들으면 너무 좋으다",
    createdAt: new Date(),
    name: "Bobby",
    username: "bobby",
  },
  {
    id: "2",
    text: "안녕?",
    createdAt: new Date(),
    name: "Ellie",
    username: "ellie",
  },
];

export async function getAll(): Promise<Tweet[]> {
  return tweets;
}
