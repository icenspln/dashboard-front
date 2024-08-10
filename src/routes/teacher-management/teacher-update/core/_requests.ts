import { AxiosInstance } from "../../../../api/Axios";
import { TeacherUpdateFormType } from "./_models";

export async function teacherUpdate(id: string, data: TeacherUpdateFormType) {
  return AxiosInstance.put(`/teacher/edit/${id}`, data).then((res) => res.data);
}
