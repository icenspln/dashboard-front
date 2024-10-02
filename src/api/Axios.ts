import axios from "axios";

export const AxiosInstance = axios.create({
    baseURL: "http://siradj-backend-production.up.railway.app:8080/api",
    timeout: 1000,
    //   headers: {'X-Custom-Header': 'foobar'}
});
