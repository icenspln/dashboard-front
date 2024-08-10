import { AxiosInstance } from "../../../../api/Axios";
import { TeacherRegisterFormType } from "./_models";

export function teacherRegister(data: TeacherRegisterFormType) {
  return AxiosInstance.post("/teacher", data).then((res) => res.data);
}
