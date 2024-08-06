export type Teacher = {
  modules: string[];
  _id: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  phoneNumber: string;
  teacherId: number;
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

export interface FilterOption {
  id: string;
  label: string;
}


export const institutionFilterOptions = [
  { id: "primarySchool", label: "الإبتدائي" },
  { id: "middleSchool", label: "المتوسط" },
  { id: "highSchool", label: "الثانوي" },
];
export const levelFilterOption = [
  { id: "1", label: "الأولى" },
  { id: "2", label: "الثانية" },
  { id: "3", label: "الثالثة" },
  { id: "4", label: "الرابعة" },
  { id: "5", label: "الخامسة" },
];
