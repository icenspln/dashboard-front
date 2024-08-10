import { AxiosInstance } from "../../../../api/Axios";

export const getTeachers = (filter: string = "") => {
  return AxiosInstance.get(`/teacher/filter?${filter}`).then((res) => res.data);
};
