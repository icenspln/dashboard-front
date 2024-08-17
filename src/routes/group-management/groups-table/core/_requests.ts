import { AxiosInstance } from "../../../../api/Axios";

export function getGroups(filter: string, page: number = 1) {
  return AxiosInstance.get(`/groups/filter?${filter}&page=${page}`).then(
    (res) => res.data
  );
}
