import { AxiosInstance } from "../../../../api/Axios";
import { EmployeeRegisterFormType } from "./_models";

export function employeeRegister(data: EmployeeRegisterFormType) {
  return AxiosInstance.post("/employee", data).then((res) => res.data);
}

export function updateCard(id: string, newScanningCardId: string) {
  return AxiosInstance.put(`/employee/${id}/scanningCardId`, { newScanningCardId })
    .then((res) => res.data);
}