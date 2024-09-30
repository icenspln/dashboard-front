import { object, string, number } from "yup";

export const StudentUpdateSchema = object({
    firstName: string().required("first name required").max(20, "Too long"),
    lastName: string().required("last name required").max(20, "Too long"),
    birthDate: string().required("birth date required"),
    // typeError("الحقل اجباري")
    phoneNumber: string()
        .required("phone number required")
        .matches(/^\d+$/, "Wrong Number"),
    guardianPhoneNumber: string()
        .required("parent's phone number required")
        .matches(/^\d*$/, "Wrong Number"),
    institution: string().required("institution required"),
    level: number().required("level requried"),
    speciality: string(),
});

export type StudentUpdateFormType = {
    firstName: string;
    lastName: string;
    birthDate: string;
    phoneNumber: string;
    guardianPhoneNumber: string;
    institution: string | "primarySchool" | "middleSchool" | "highSchool";
    level: number;
    speciality?: string;
};
