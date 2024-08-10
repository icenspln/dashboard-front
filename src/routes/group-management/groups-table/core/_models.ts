import { Student } from "../../../student-management/students-table/core/_models";
import { Teacher } from "../../../teacher-management/teacher-table/core/_models";

export type Group = {
  groupId: number;
  dayOfWeek: string;
  timing: {
    hour: number;
    minute: number;
    _id: string;
  };
  responsibleTeacher: Teacher;
  module: string;
  institution: string | "primarySchool" | "middleSchool" | "highSchool";
  level: number;
  pricing: number;
  roomNumber: number;
  maxNumberOfStudents: number;
  currentNumberOfStudents: number;
  additionalStudyDays: string[];
  __v: number;
  students: Student[];
};
