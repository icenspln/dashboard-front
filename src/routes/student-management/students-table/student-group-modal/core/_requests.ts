import { AxiosInstance } from "../../../../../api/Axios";

export function getGroups() {
  return AxiosInstance.get(`/groups/filter`).then((res) => res.data.data);
}

export function assignStudentToGroup(groupID: string) {
  return AxiosInstance.get(`/groups/${groupID}/assignStudent`).then(
    (res) => res.data
  );
}
