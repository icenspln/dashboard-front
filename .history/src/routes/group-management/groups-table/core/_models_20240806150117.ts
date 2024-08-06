export type Group = {
  groupId: number;
  dayOfWeek: string;
  timing: {
    hour: number;
    minute: number;
  };
  responsibleTeacher: string;
  module: string;
  institution: string | "primarySchool" | "middleSchool" | "highSchool";
  level: number;
  pricing: number;
  roomNumber: number;
  maxNumberOfStudents: number;
};
