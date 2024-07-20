export type PresenceList = {
  profId: number;
  firstName: string;
  lastName: string;
  moduleName: string ;
  phoneNumber?: string;
  gardianPhoneNumber: string;
  scanningCardId: string;
  institution: string |"primarySchool" | "middleSchool" | "highSchool";
  level: number;
};
