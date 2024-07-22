import { AxiosInstance } from "../../../../api/Axios";
import { StudentRegisterFormType } from "./_models";

export function studentRegister(data: StudentRegisterFormType) {
  return AxiosInstance.post("/student", data).then((res) => res.data);
}
