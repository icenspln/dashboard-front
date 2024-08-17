import { AxiosInstance } from "../../../../api/Axios";

export const getTeachers = (filter: string = "", page: number = 1) => {
  return AxiosInstance.get(`/teacher/filter?${filter}&page=${page}`).then(
    (res) => res.data
  );
};
