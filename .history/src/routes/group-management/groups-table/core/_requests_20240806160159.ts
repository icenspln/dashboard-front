import { AxiosInstance } from "../../../../api/Axios";

// export function getGroups() {
//   return AxiosInstance.get("/groups").then((res) => res.data);
// }



export const getGroups = (filter: string = "") => {
  return AxiosInstance.get(`/groups/filter?${filter}`).then((res) => res.data);
};

//student/filter?institution=highSchool&level=2&search=Jane&page=1
