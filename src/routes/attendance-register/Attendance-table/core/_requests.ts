import { AxiosInstance } from "../../../../api/Axios";

export const getStudents = () => {
  return AxiosInstance.get("/student").then((res) => res.data);
};
