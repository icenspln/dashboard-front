export type Student = {
  _id?: string;
  studentId: number;
  firstName: string;
  lastName: string;
  birthDate: string | Date;
  phoneNumber?: string;
  gardianPhoneNumber: string;
  scanningCardId: string;
  institution: string | "primarySchool" | "middleSchool" | "highSchool";
  level: number;
  __v?: number;
  groups: any[];
};
