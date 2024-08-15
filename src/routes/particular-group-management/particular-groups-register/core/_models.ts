import { number, object, string } from "yup";


export type ParticularGroupRegisterFormType = {
  day: string;
  name: string;
  timing: string;
  teacher: { label: string; value: string };
  module: string;
  institution: string;
  level: number;
    pricing:number;
    roomNumber: number;
    date: string,
  };


// export type GroupRegisterFormType = {
//   dayOfWeek: string;
//   timing: string;
//   responsibleTeacher: { label: string; value: string };
//   module: string;
//   institution: string;
//   level: number;
//   pricing: number;
//   roomNumber: number;
//   maxNumberOfStudents: number;
// };

export const TypeRegisterSchema = object({
  date : string().required("الحقل اجباري"),

  name: string().required("الحقل اجباري"),
  timing: string().required("الحقل اجباري"),
  teacher: object({
    label: string().required(),
    value: string().required("الحقل اجباري"),
  }).required("الحقل اجباري"),
  module: string().required("الحقل اجباري"),
  institution: string().required("الحقل اجباري"),
  level: number().required("الحقل اجباري"),
  pricing: number().required("الحقل اجباري").typeError("الحقل اجباري"),
  roomNumber: number().required("الحقل اجباري").typeError("الحقل اجباري"),
});
