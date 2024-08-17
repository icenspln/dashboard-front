import { AxiosInstance } from "../../../../api/Axios";

export function getSpecialGroups(filter: string, page: number = 1) {
  return AxiosInstance.get(`/special-groups/?${filter}&page=${page}`).then(
    (res) => res.data
  );
}
