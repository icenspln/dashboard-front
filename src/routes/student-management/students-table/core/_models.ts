import { Group } from "../student-group-modal/core/_model";

export type Student = {
  _id: string;
  studentId: number;
  firstName: string;
  lastName: string;
  birthDate: string | Date;
  phoneNumber?: string;
  guardianPhoneNumber: string;
  scanningCardId: string;
  institution: string | "primarySchool" | "middleSchool" | "highSchool";
  createdAt: Date;
  level: number;
  __v?: number;
  groups: Group[];
  pricing: string;
};

export interface FilterOption {
  id: string;
  label: string;
}

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
