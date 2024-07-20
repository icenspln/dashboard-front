export type Student = {
  studentId: number;
  firstName: string;
  lastName: string;
  birthDate: string |Date;
  phoneNumber?: string;
  gardianPhoneNumber: string;
  scanningCardId: string;
  institution: string |"primarySchool" | "middleSchool" | "highSchool";
  level: number;
  paid:any;
  toBePaid:any;
};
