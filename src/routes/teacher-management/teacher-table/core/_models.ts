export type Teacher = {
  _id: string;
  teacherId: number;
  firstName: string;
  lastName: string;
  birthDate: Date;
  phoneNumber: string;
  modules: string[];
  numberOfGroups: number;
  __v: 0;
};
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

export const institutionFilterOptions = [
  { id: 1, label: "الإبتدائي" },
  { id: 2, label: "المتوسط" },
  { id: 3, label: "الثانوي" },
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
