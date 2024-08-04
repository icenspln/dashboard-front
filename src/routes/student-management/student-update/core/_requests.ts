import { AxiosInstance } from "../../../../api/Axios";
import { StudentUpdateFormType } from "./_models";

export async function studentUpdate(id: string, data: StudentUpdateFormType) {
  return AxiosInstance.put(`/student/edit/${id}`, data).then((res) => res.data);
}
