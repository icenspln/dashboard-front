export type TeacherRegisterFormType = {
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  domain: string;
  institution: string | "primarySchool" | "middleSchool" | "highSchool";
  level: number;
};
