import { object, string, number } from "yup";

export const StudentRegisterSchema = object({
    firstName: string().required("first name required").max(20, "Too long"),
    lastName: string().required("last name required").max(20, "Too long"),
    birthDate: string().required("birth date required"),
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

export type StudentRegisterFormType = {
    firstName: string;
    lastName: string;
    birthDate: string;
    phoneNumber: string;
    guardianPhoneNumber: string;
    institution: string | "primarySchool" | "middleSchool" | "highSchool";
    level: number;
    speciality?: string;
};

// export const speciality = {
//     level1: ["Science", "literature"],
//     level2: [
//         "Maths",
//         "Experimental sciences",
//         "Management and economy",
//         "Etiquette and philosophy",
//         "Languages",
//     ],
// }
