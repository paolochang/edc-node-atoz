import axios from "axios";

export default class HttpClient {
  constructor(baseURL, authErrorEventBus, getCsrfToken) {
    this.authErrorEventBus = authErrorEventBus;
    this.getCsrfToken = getCsrfToken;
    this.client = axios.create({
      baseURL: baseURL,
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
  }

  async fetch(url, options) {
    const { body, method, headers } = options;
    const req = {
      url,
      method,
      headers: {
        ...headers,
        "twitter-csrf-token": this.getCsrfToken(),
      },
      data: body,
    };

    try {
      const res = await this.client(req);
      return res.data;
    } catch (err) {
      if (err.response) {
        const data = err.response.data;
        const message =
          data && data.message ? data.message : "Something went wrong. 🧐";
        throw new Error(message);
      }
      throw new Error("connection error");
    }
  }
}
