import { AxiosInstance } from "../../../../api/Axios";

export const getEmployees = () => {
  return AxiosInstance.get("/employee").then((res) => res.data);
};
