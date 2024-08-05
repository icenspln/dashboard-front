export type Student = {
  _id: string;
  studentId: number;
  firstName: string;
  lastName: string;
  birthDate: string | Date;
  phoneNumber?: string;
  gardianPhoneNumber: string;
  scanningCardId: string;
  institution: string | "primarySchool" | "middleSchool" | "highSchool";
  createdAt: Date;
  level: number;
  __v?: number;
  groups: any[];
  pricing: string;
};
