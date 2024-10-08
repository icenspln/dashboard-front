import { Teacher } from "../../../teacher-management/teacher-table/core/_models";

export type SpecialGroup = {
  timing: {
    hour: number;
    minute: number;
  };
  _id: string;
  name: string;
  roomNumber: number;
  date: string;
  teacher: Teacher;
  module: string;
  institution: string;
  level: number;
  pricing: number;
  students: string[];
  createdAt: string;
  updatedAt: string;
  specialGroupId: number;
  __v: number;
};
export interface FilterOption {
  id: string;
  label: string;
}
export const ModuleSelectionOptions = [
  { id: 1, label: "الرياضيات" },
  { id: 2, label: "اللغة العربية" },
  { id: 3, label: "اللغة الفرنسية" },
  { id: 4, label: "اللغة الانجليزية" },
  { id: 5, label: "التربية المدنية" },
  { id: 6, label: "التربية الإسلامية" },
  { id: 7, label: "التربية العلمية" },
  { id: 8, label: "تاريخ وجغرافيا" },
];
export const DaysSelectionOptions = [
  { id: 1, label: "الأحد" },
  { id: 2, label: "الإثنين" },
  { id: 3, label: "الثلاثاء" },
  { id: 4, label: "الأربعاء" },
  { id: 5, label: "الخميس" },
  { id: 6, label: "الجمعة" },
  { id: 7, label: "السبت" },
];
export const institutionFilterOptions = [
  { id: "primarySchool", label: "الإبتدائي" },
  { id: "middleSchool", label: "المتوسط" },
  { id: "highSchool", label: "الثانوي" },
];

export const levelFilterOptions = [
  { id: 1, label: "الأولى" },
  { id: 2, label: "الثانية" },
  { id: 3, label: "الثالثة" },
  { id: 4, label: "الرابعة" },
  { id: 5, label: "الخامسة" },
];
export const ColumnSelectionOptions = [
  { id: 1, label: "الرقم" },
  { id: 2, label: "الإسم" },
  { id: 3, label: "اللقب" },
  { id: 4, label: "تاريخ الميلاد" },
  { id: 5, label: "المستوى" },
  { id: 6, label: "السنة" },
  { id: 7, label: "رقم الهاتف" },
  { id: 8, label: "تاريخ التسجيل" },
  { id: 9, label: "عدد الأفواج الكلية" },
  { id: 10, label: "عدد الأفواج الحالية" },
  { id: 11, label: "الثمن الذي تم دفع" },
  { id: 12, label: "الثمن الذي يجب دفعه" },
  { id: 13, label: "المجموع" },
  { id: 14, label: "الإعدادات" },
];

export const modulesFilterOptions = [
  { id: "رياضيات", label: "رياضيات" },
  { id: "علوم", label: "علوم" },
  { id: "فيزياء", label: "فيزياء" },
  { id: "لغة عربية", label: "لغة عربية" },
  { id: "فلسفة", label: "فلسفة" },
  { id: "محاسبة", label: "محاسبة" },
  { id: "فرنسية", label: "فرنسية" },
  { id: "انجليزية", label: "انجليزية" },
  { id: "تاريخ و جغرافيا", label: "تاريخ و جغرافيا" },
  { id: "شريعة اسلامية", label: "شريعة اسلامية" },
  { id: "ألمانية", label: "ألمانية" },
  { id: "هندسة مدنية", label: "هندسة مدنية" },
  { id: "هندسة ميكانيكية", label: "هندسة ميكانيكية" },
  { id: "هندسة طرائق", label: "هندسة طرائق" },
];

export const dayOfWeekFilterOptions = [
  { id: "Saturday", label: "السبت" },
  { id: "Sunday", label: "الأحد" },
  { id: "Monday", label: "الاثنين" },
  { id: "Tuesday", label: "الثلاثاء" },
  { id: "Wednesday", label: "الأربعاء" },
  { id: "Thursday", label: "الخميس" },
  { id: "Friday", label: "الجمعة" },
];
