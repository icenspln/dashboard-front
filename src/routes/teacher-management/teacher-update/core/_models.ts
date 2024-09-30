import { object, string, date, array } from "yup";

export type TeacherUpdateFormType = {
    firstName: string;
    lastName: string;
    birthDate: Date;
    phoneNumber: string;
    modules: string[];
};
export const TeacherUpdateSchema = object({
    firstName: string().required("requried").max(20, "first name too long"),
    lastName: string().required("requried").max(20, "last name too long"),
    birthDate: date().required("required").typeError("required"),
    phoneNumber: string()
        .required("required")
        .matches(/^\d+$/, "wrong number")
        .min(10, "number should be at least 10 digits")
        .max(20, "too long"),
    modules: array().min(1, "required").required("required"),
});
