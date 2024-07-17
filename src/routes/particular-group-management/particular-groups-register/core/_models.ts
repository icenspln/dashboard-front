export type ParticularGroupRegisterFormType = {
  day: string;
  time: string;
  professor:string;
  moduleName: string;
  scanningCardId: string;
  institution: string | "primarySchool" | "middleSchool" | "highSchool";
  level: number;
  price:number;
  classRoom:string;
};
