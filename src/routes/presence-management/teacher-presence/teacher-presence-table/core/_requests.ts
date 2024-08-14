import { AxiosInstance } from "../../../../../api/Axios";
import { SetAttendanceForStudentType } from "./_models";

export function getAttendanceForTeacher(teacherId: string) {
  return AxiosInstance.get(`/attendance/teacher/${teacherId}`).then(
    (res) => res.data
  );
}
///attendance/mark-present
export function setAttendanceForStudent(data: SetAttendanceForStudentType) {
  return AxiosInstance.post(`/attendance/mark-present`, { ...data }).then(
    (res) => res.data
  );
}
