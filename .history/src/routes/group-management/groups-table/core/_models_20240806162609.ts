export type Teacher = {
  modules: string[];
  _id: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  phoneNumber: string;
  teacherId: number;
  __v: number;
};


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
  currentNumberOfStudents:number;
};
