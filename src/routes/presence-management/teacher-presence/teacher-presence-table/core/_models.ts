import { Group } from "../../../../group-management/groups-table/core/_models";
import { Student } from "../../../../student-management/students-table/core/_models";
import { Teacher } from "../../../../teacher-management/teacher-table/core/_models";

export type Attendance = {
  date: string;
  status: string;
};

export type AttendanceForTeacherType = {
  Teacher: Teacher;
  groups: AttendanceForTeacherGroupType[];
};

export type AttendanceForTeacherGroupType = {
  attendeesLeftGroup: [] | Student[];
  group: Group;
  alldays: string[];
  students: { student: Student; attendance: Attendance[] }[];
};

export type SetAttendanceForStudentType = {
  groupId: string;
  TeacherId: string;
  date: string;
  status: "present" | "absent";
};
export const MonthSelectionOptions = [
  { id: 1, label: "جانفي" },
  { id: 2, label: "فيفري" },
  { id: 3, label: "مارس" },
  { id: 4, label: "أفريل" },
  { id: 5, label: "ماي" },
  { id: 6, label: "جوان" },
  { id: 7, label: "جويلية" },
  { id: 8, label: "أوت" },
  { id: 9, label: "سبتمبر" },
  { id: 10, label: "أكتوبر" },
  { id: 11, label: "نوفمبر" },
  { id: 12, label: "ديسمبر" },
];
export const YearSelectionOptions = [
  { id: 1, label: "2024" },
  { id: 2, label: "2025" },
];
