import { AxiosInstance } from "../../../../api/Axios";

export const getTeachers = () => {
  return AxiosInstance.get("/teacher").then((res) => res.data);
};
