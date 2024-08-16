import { Teacher } from "../../../../teacher-management/teacher-table/core/_models";

export type SpecialGroup = {
  _id: string;
  name: string;
  timing: {
    hour: number;
    minute: number;
  };
  roomNumber: number;
  date: string;
  teacher: Teacher;
  module: string;
  institution: "primarySchool" | "middleSchool" | "highSchool";
  level: number;
  pricing: number;
  students: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  specialGroupId: number;
};