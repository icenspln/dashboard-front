import { AxiosInstance } from "../../../../../api/Axios";
import { SetAttendanceForStudentType } from "../../../students-presence/students-presence-table/core/_models";

export function getAttendanceForGroup(groupId: string, filter : string) {

  return AxiosInstance.get(`/attendance/group/${groupId}?${filter}`).then(
    (res) => res.data
  );
}
///attendance/mark-present
export function setAttendanceForStudent(data: SetAttendanceForStudentType
) {
  return AxiosInstance.post(`/attendance/mark-present`, { ...data }).then(
    (res) => res.data
  );
}
