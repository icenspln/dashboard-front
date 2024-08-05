import { AxiosInstance } from "../../../../api/Axios";

export const getStudents = (filter: string = "") => {
  let url = `/student`;
  if (filter) url += "/filter?";
  return AxiosInstance.get(`${url}${filter}`).then((res) => res.data);
};

//student/filter?institution=highSchool&level=2&search=Jane&page=1
