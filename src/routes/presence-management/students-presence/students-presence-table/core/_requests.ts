import { AxiosInstance } from "../../../../../api/Axios";

export function getAttendanceForStudent(studentId: string) {
  return AxiosInstance.get(`/attendance/student/${studentId}`).then(
    (res) => res.data
  );
}
