import { AxiosInstance } from "../../../../api/Axios";

export function getGroups() {
  return AxiosInstance.get("/groups/filter").then((res) => res.data);
}
