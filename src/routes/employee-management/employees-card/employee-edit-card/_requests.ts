import { AxiosInstance } from "../../../../api/Axios";

export function assignCardToEmployee(studentId: string, newCardId: string) {
  AxiosInstance.post(`/student/update-scanning-card/${studentId}`, newCardId);
}
export function updateCard(id: string, newScanningCardId: string) {
  return AxiosInstance.put(`/student/update-scanning-card/${id}`, {
    newScanningCardId,
  }).then((res) => res.data);
}
