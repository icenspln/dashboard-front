import { AxiosInstance } from "../../../../api/Axios";
import { GroupRegisterFormType } from "./_models";

export function groupRegister(data: GroupRegisterFormType) {
  return AxiosInstance.post("/groups", data).then((res) => res.data);
}
export const getTeachers = () => {
  return AxiosInstance.get(`/teacher`).then((res) => res.data);
};