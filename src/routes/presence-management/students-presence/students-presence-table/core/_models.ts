import { Group } from "../../../../group-management/groups-table/core/_models";
import { Student } from "../../../../student-management/students-table/core/_models";

export type AttendanceForStudentType = {
  student: Student;
  groups: {
    group: Group;
    alldays: string[];
    attendance: {
      date: Date;
      status: string;
    }[];
  }[];
};

export type AttendanceForStudentGroupType = {
  group: Group;
  alldays: string[];
  attendance: {
    date: Date;
    status: string;
  }[];
};
