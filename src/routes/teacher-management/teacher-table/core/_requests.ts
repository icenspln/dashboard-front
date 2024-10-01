import { AxiosInstance } from "../../../../api/Axios";

export const getTeachers = (filter: string = "", page: number = 1) => {
  return AxiosInstance.get(`/teacher/filter?${filter}&page=${page}`).then(
    (res) => res.data
  );
};


export function deleteTeacher(teacherId: string) {
  return AxiosInstance.delete(`teacher/${teacherId}`).then(
      (res) => res.data
  )
}
