import { AxiosInstance } from "../../../../api/Axios";

export function UpdateCard(studentId: string, newCardId: string) {
  AxiosInstance.post(`/student/update-scanning-card/${studentId}`, newCardId);
}
