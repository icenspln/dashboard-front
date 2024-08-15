import { AxiosInstance } from "../../../../api/Axios";
import { StudentRegisterFormType } from "./_models";

export function studentRegister(data: StudentRegisterFormType) {
  return AxiosInstance.post("/student", data).then((res) => res.data);
}

export function studentPhoneNumberCheck(phoneNumber: string) {
  return AxiosInstance.get(
    `/student/check-phone-number?phoneNumber=${phoneNumber}`
  ).then((res) => res.data);
}

export function updateCard(id: string, newScanningCardId: string) {
  return AxiosInstance.put(`/student/update-scanning-card/${id}`, { newScanningCardId })
    .then((res) => res.data);
}
