import { AxiosInstance } from "../../../api/Axios";

export const getSalaryStatement = () => {
  return AxiosInstance.get("/salaryStatement").then((res) => res.data);
};
