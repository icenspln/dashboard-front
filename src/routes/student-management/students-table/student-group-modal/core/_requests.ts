import { AxiosInstance } from "../../../../../api/Axios";

export function getGroups() {
  return AxiosInstance.get(`/groups/filter`).then((res) => res.data.data);
}

export function getFilteredGroups(filter: string = "") {
  return AxiosInstance.get(`/groups/filter?search=${filter}`).then(
    (res) => res.data
  );
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
