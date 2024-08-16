import { AxiosInstance } from "../../../../api/Axios";

export function getSpecialGroups(filter: string) {
  return AxiosInstance.get(`/special-groups/?${filter}`).then((res) => res.data);
}
