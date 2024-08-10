import { AxiosInstance } from "../../../../api/Axios";

export function getGroups(filter: string) {
  return AxiosInstance.get(`/groups/filter?${filter}`).then((res) => res.data);
}
