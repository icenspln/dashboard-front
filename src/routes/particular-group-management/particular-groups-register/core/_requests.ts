import { AxiosInstance } from "../../../../api/Axios";
import { ParticularGroupRegisterFormType } from "./_models";

export function groupRegister(data: ParticularGroupRegisterFormType) {
  return AxiosInstance.post("/special-groups", data).then((res) => res.data);
}
export const getTeachers = () => {
  return AxiosInstance.get(`/teacher`).then((res) => res.data);
};
export const getFilteredTeachers = (name: string = "") => {
  return AxiosInstance.get(`/teacher?name=${name}`).then((res) => res.data);
};
