import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: "http://127.0.0.1:4000/api",
  timeout: 1000,
  //   headers: {'X-Custom-Header': 'foobar'}
});
