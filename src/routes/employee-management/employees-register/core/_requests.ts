import { AxiosInstance } from "../../../../api/Axios";
import { EmployeeRegisterFormType } from "./_models";

export function EmployeeRegister(data: EmployeeRegisterFormType) {
  return AxiosInstance.post("/employee", data).then((res) => res.data);
}
