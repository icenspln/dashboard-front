import { object, string, date, array } from "yup";

export type TeacherUpdateFormType = {
  firstName: string;
  lastName: string;
  birthDate: Date;
  phoneNumber: string;
  modules: string[];
};
export const TeacherUpdateSchema = object({
  firstName: string().required("الحقل اجباري").max(20, "الحقل طويل جدا"),
  lastName: string().required("الحقل اجباري").max(20, "الحقل طويل جدا"),
  birthDate: date().required("الحقل اجباري").typeError("الحقل اجباري"),
  phoneNumber: string()
    .required("الحقل اجباري")
    .matches(/^\d+$/, "الرقم غير صحيح")
    .min(10, "الرقم غير صحيح"),
  modules: array().min(1, "الحقل اجباري").required("الحقل اجباري"),
});