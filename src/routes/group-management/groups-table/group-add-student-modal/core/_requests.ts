import { AxiosInstance } from "../../../../../api/Axios";

export function getStudents() {
  return AxiosInstance.get(`/student/filter`).then((res) => res.data.data);
}

export function assignStudentToGroup(groupID: string, studentId: string) {
  return AxiosInstance.post(`/groups/${groupID}/assignStudent`, {
    studentId,
  }).then((res) => res.data);
}

export function deleteStudentFromGroup(groupID: string, studentId: string) {
  return AxiosInstance.post(`/groups/${groupID}/removeStudent`, {
    studentId,
  }).then((res) => res.data);
}
