import { AxiosInstance } from "../../../../api/Axios";

export function getGroups() {
  return AxiosInstance.get("/groups").then((res) => res.data);
}
