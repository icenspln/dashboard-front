import { Teacher } from "../../../../teacher-management/teacher-table/core/_models";
import { Student } from "../../core/_models";

export type Group = {
  __v: number;
  _id: string;
  additionalStudyDays: any[];
  createdAt: string;
  currentNumberOfStudents: number;
  dayOfWeek: string;
  groupId: number;
  institution: string;
  level: number;
  maxNumberOfStudents: 20;
  module: string;
  pricing: number;
  responsibleTeacher: Teacher;
  roomNumber: number;
  timing: { hour: number; minute: number; _id: string };
  students: Student[];
};
