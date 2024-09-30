import { Student } from "../../../student-management/students-table/core/_models";
import { Teacher } from "../../../teacher-management/teacher-table/core/_models";

export type TeacherAbsence = {
    _id: string;
    date: string;
    groupId: string;
    __v: number;
};
export type Group = {
    _id: string;
    groupId: number;
    dayOfWeek: string;
    timing: {
        hour: number;
        minute: number;
        _id: string;
    };
    responsibleTeacher: Teacher;
    module: string;
    institution: string | "primarySchool" | "middleSchool" | "highSchool";
    level: number;
    pricing: number;
    roomNumber: number;
    maxNumberOfStudents: number;
    currentNumberOfStudents: number;
    additionalStudyDays: string[];
    __v: number;
    students: Student[];
    attendanceStatus?: string;
    absences: TeacherAbsence[];
};
export interface FilterOption {
    id: string;
    label: string;
}
