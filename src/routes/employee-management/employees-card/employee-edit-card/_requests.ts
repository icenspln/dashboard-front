import { AxiosInstance } from "../../../../api/Axios";

export function updateCard(id: string, newScanningCardId: string) {
  return AxiosInstance.put(`/employee/${id}/scanningCardId`, { newScanningCardId })
    .then((res) => res.data);
}