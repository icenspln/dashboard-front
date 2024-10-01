import { object, string } from "yup";

export const EmployeeRegisterFormTypeSchema = object({
    firstName: string().required("required").max(20, "too long"),
    lastName: string().required("required").max(20, "too long"),
    // typeError("الحقل اجباري")
    phoneNumber: string()
        .required("required")
        .matches(/^\d+$/, "wrong number")
        .min(10, "phone number should be at least 10 digits long"),
    job: string().required("required").max(20, "too long"),
});

export type EmployeeRegisterFormType = {
    firstName: string;
    lastName: string;
    job: string;
    phoneNumber: string;
    //guardianPhoneNumber: string;
};
