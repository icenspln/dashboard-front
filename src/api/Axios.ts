import axios from "axios";

export const AxiosInstance = axios.create({
   baseURL: "https://siradj-backend-production.up.railway.app:443/api",
  //  baseURL: "http://localhost:8080/api",
    timeout: 1000,
    //   headers: {'X-Custom-Header': 'foobar'}
});
