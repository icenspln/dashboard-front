import { array, date, object, string } from "yup";

export type TeacherRegisterFormType = {
    firstName: string;
    lastName: string;
    birthDate: Date;
    phoneNumber: string;
    modules: string[];
};
export const TypeRegisterSchema = object({
    firstName: string().required("requried").max(20, "first name is too long"),
    lastName: string().required("required").max(20, "last name is too long"),
    birthDate: date().required("required").typeError("required"),
    phoneNumber: string()
        .required("required")
        .matches(/^\d+$/, "wrong number")
        .min(10, "number should be at least 10 digits"),
    modules: array().min(1, "required").required("required"),
});
