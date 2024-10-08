import { Student } from "../../../../student-management/students-table/core/_models";

export type FullStudent = {
    _id: string;
    firstName: string;
    lastName: string;
    birthDate: string;
    phoneNumber: string;
    guardianPhoneNumber: string;
    scanningCardId: string;
    institution: string;
    level: number;
    studentId: number;
    __v: number;
    createdAt: string;
    groupFinancials: {
        groupId: string;
        groupOutstandingBalanc: number;
        groupPaidAmount: number;
        joinDate: string;
    };
    financials: {
        totalDebts: number;
        totalOutstandingBalance: number;
    };
};

//same as group type but responsible teacher is string
export type AttendanceGroup = {
    _id: string;
    groupId: number;
    dayOfWeek: string;
    timing: {
        hour: number;
        minute: number;
        _id: string;
    };
    responsibleTeacher: string;
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
};

export type Attendance = {
    date: string;
    status: string;
};
export type Attendees = {
    group: string;
    student: string;
    status: string;
    date: string;
};
export type AttendanceForGroupType = {
    attendeesLeftGroup: {
        student: Student;
        attendees: Attendees[];
        financials: {
            totalDebts: number;
            totalOutstandingBalance: number;
        };
    }[];
    alldays: string[];
    group: AttendanceGroup;
    students: {
        student: FullStudent;
        attendance: { date: string; status: string }[];
    }[];
};

// export type AttendanceForTeacherGroupType = {
//   attendeesLeftGroup: [] | Student[];
//   group: Group;
//   alldays: string[];
//   students: { student: Student; attendance: Attendance[] }[];
// };

// export type SetAttendanceForStudentType = {
//   groupId: string;
//   TeacherId: string;
//   date: string;
//   status: "present" | "absent";
// };
