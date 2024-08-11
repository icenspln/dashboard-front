import { AxiosInstance } from "../../../../api/Axios";

export function groupUpdate(id: string, data: any) {
  return AxiosInstance.put(`/groups/${id}`, data).then((res) => res.data);
}
export const getTeachers = () => {
  return AxiosInstance.get(`/teacher`).then((res) => res.data);
};
