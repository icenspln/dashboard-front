export type SalaryStatement = {
  _id?: string;
  teacherId: number;
  institution: string | "primarySchool" | "middleSchool" | "highSchool";
  __v?: number;
  firstName:string;
  lastName:string;
};
