import { AxiosInstance } from "../../../api/Axios";

export function assignCardToStudent(studentId: string, newCardId: string) {
    AxiosInstance.post(`/student/update-scanning-card/${studentId}`, newCardId);
}
