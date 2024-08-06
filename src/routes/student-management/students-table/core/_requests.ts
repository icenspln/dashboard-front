import { AxiosInstance } from "../../../../api/Axios";

export const getStudents = (filter: string = "") => {
  return AxiosInstance.get(`/student/filter?${filter}`).then((res) => res.data);
};

//student/filter?institution=highSchool&level=2&search=Jane&page=1
