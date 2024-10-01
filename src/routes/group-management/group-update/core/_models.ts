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
    dayOfWeek: string().required("requried"),
    timing: string().required("required"),
    responsibleTeacher: object({
        label: string().required(),
        value: string().required("required"),
    }).required("required"),
    module: string().required("required"),
    institution: string().required("required"),
    level: number().required("required"),
    pricing: number().required("required").typeError("wrong number"),
    roomNumber: number().required("required").typeError("wrong number"),
    maxNumberOfStudents: number()
        .required("required")
        .typeError("wrong number")
        .max(20, "too much students"),
});
