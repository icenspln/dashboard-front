import { object, string } from "yup";

export const EmployeeRegisterFormTypeSchema = object({
  firstName: string().required("الحقل اجباري").max(20, "الحقل طويل جدا"),
  lastName: string().required("الحقل اجباري").max(20, "الحقل طويل جدا"),
  // typeError("الحقل اجباري")
  phoneNumber: string()
    .required("الحقل اجباري")
    .matches(/^\d+$/, "الرقم غير صحيح")
    .min(10, "الرقم غير صحيح"),
  job: string().required("الحقل اجباري").max(20, "الحقل طويل جدا"),
});

export type EmployeeRegisterFormType = {
  firstName: string;
  lastName: string;
  job: string;
  phoneNumber: string;
  //guardianPhoneNumber: string;
};
