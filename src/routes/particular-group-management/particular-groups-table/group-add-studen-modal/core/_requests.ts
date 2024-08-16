import { AxiosInstance } from "../../../../../api/Axios";

export function assignStudentToGroup(groupId: string, studentName: string) {
  return AxiosInstance.post(`/special-groups/add-student`, {
    groupId,studentName
  }).then((res) => res.data);
}

export function deleteStudentFromGroup(groupId: string, studentName: string) {
  return AxiosInstance.post(`/special-groups/remove-student`, {
    groupId,studentName
  }).then((res) => res.data);
}
