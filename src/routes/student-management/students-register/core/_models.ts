import { object, string, number, date } from "yup";

export const StudentRegisterSchema = object({
  firstName: string().required("الحقل اجباري").max(20, "الاسم غبر صحيح"),
  lastName: string().required("الحقل اجباري").max(20, "اللقب غبر صحيح"),
  birthDate: date().typeError("الحقل اجباري").required("الحقل اجباري"),
  phoneNumber: string()
    .required("الحقل اجباري")
    .matches(/^\d+$/, "الرقم غير صحيح")
    .max(10, "الرقم غير صحيح"),
  guardianPhoneNumber: string()
    .required("الحقل اجباري")
    .matches(/^\d*$/, "الرقم غير صحيح")
    .max(10, "الرقم غير صحيح"),
  scanningCardId: string().required(),
  institution: string().required(),
  level: number().required(),
  speciality: string().nullable(),
}).required();

export type StudentRegisterFormType = {
  firstName: string;
  lastName: string;
  birthDate: Date;
  phoneNumber: string;
  guardianPhoneNumber: string;
  scanningCardId: string;
  institution: string | "primarySchool" | "middleSchool" | "highSchool";
  level: number;
  speciality?: string | null;
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
