import { number, object, string } from "yup";

export type GroupRegisterFormType = {
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
export const TypeRegisterSchema = object({
    dayOfWeek: string().required("required"),
    timing: string().required("required"),
    responsibleTeacher: object({
        label: string().required(),
        value: string().required("requried"),
    }).required("required"),
    module: string().required("required"),
    institution: string().required("required"),
    level: number().required("required"),
    pricing: number().required("requred").typeError("wrong price"),
    roomNumber: number().required("required").typeError("wrong number"),
    maxNumberOfStudents: number()
        .required("required")
        .typeError("wrong number"),
});
