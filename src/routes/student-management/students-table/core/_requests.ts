import { AxiosInstance } from "../../../../api/Axios";

export const getStudents = (filter: string = "", page: number = 1) => {
  return AxiosInstance.get(`/student/filter?${filter}&page=${page}`).then(
    (res) => res.data
  );
};

//student/filter?institution=highSchool&level=2&search=Jane&page=1
