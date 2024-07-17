export type Group = {
  groupId: number;
  day: string;
  time: string;
  classRoom: string;
  scanningCardId: string;
  institution: string |"primarySchool" | "middleSchool" | "highSchool";
  level: number;
};
