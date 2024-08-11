import { number, object, string } from "yup";

export type GroupUpdateFormType = {
  dayOfWeek: string;
  timing: string;
  responsibleTeacher: { label: string; value: string };
  module: string;
  institution: string;
  level: number;
  pricing: number;
  roomNumber: number;
  maxNumberOfStudents: number;
};

export const GroupUpdateSchema = object({
  dayOfWeek: string().required("الحقل اجباري"),
  timing: string().required("الحقل اجباري"),
  responsibleTeacher: object({
    label: string().required(),
    value: string().required("الحقل اجباري"),
  }).required("الحقل اجباري"),
  module: string().required("الحقل اجباري"),
  institution: string().required("الحقل اجباري"),
  level: number().required("الحقل اجباري"),
  pricing: number().required("الحقل اجباري").typeError("الحقل اجباري"),
  roomNumber: number().required("الحقل اجباري").typeError("الحقل اجباري"),
  maxNumberOfStudents: number()
    .required("الحقل اجباري")
    .typeError("الحقل اجباري"),
});
