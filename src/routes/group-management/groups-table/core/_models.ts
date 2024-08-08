import { Teacher } from "../../../teacher-management/teacher-table/core/_models";

export type Group = {
  groupId: number;
  dayOfWeek: string;
  timing: {
    hour: number;
    minute: number;
  };
  responsibleTeacher: Teacher;
  module: string;
  institution: string | "primarySchool" | "middleSchool" | "highSchool";
  level: number;
  pricing: number;
  roomNumber: number;
  maxNumberOfStudents: number;
};
