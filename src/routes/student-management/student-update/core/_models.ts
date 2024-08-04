import { object, string, number } from "yup";

export const StudentUpdateSchema = object({
  firstName: string().required("الحقل اجباري").max(20, "الحقل طويل جدا"),
  lastName: string().required("الحقل اجباري").max(20, "الحقل طويل جدا"),
  birthDate: string().required("الحقل اجباري"),
  // typeError("الحقل اجباري")
  phoneNumber: string()
    .required("الحقل اجباري")
    .matches(/^\d+$/, "الرقم غير صحيح")
    .min(10, "الرقم غير صحيح"),
  guardianPhoneNumber: string()
    .required("الحقل اجباري")
    .matches(/^\d*$/, "الرقم غير صحيح")
    .min(10, "الرقم غير صحيح"),
  institution: string().required("الحقل اجباري"),
  level: number().required("الحقل اجباري").positive("الحقل اجباري"),
  speciality: string(),
});

export type StudentUpdateFormType = {
  firstName: string;
  lastName: string;
  birthDate: string;
  phoneNumber: string;
  guardianPhoneNumber: string;
  // scanningCardId: string;
  institution: string | "primarySchool" | "middleSchool" | "highSchool";
  level: number;
  speciality?: string;
};

export const speciality = {
  level1: ["جذع مشترك علوم", "ادب"],
  level2: [
    "رياضيات",
    "علوم تجريبية",
    "تسيير و اقتصاد",
    "تقني رياضي",
    "اداب و فلسفة",
    "لغات",
  ],
};
