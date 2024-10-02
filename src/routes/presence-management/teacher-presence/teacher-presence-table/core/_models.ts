import { Group } from "../../../../group-management/groups-table/core/_models";
import { Teacher } from "../../../../teacher-management/teacher-table/core/_models";
import { Note } from "../../../../attendance-register/Attendance-table/core/_models";
import {
    Attendees,
    FullStudent,
} from "../../../groups-presence/groups-presence-table/core/_models";

export type Attendance = {
    date: string;
    status: string;
};

export type AttendanceForTeacherType = {
    Teacher: Teacher;
    groups: AttendanceForTeacherGroupType[];
};

export type AttendanceForTeacherGroupType = {
    attendeesLeftGroup: {
        student: FullStudent;
        attendees: Attendees[];
        financials: {
            totalDebts: number;
            totalOutstandingBalance: number;
        };
    }[];
    group: Group;
    alldays: string[];
    students: {
        student: FullStudent;
        attendance: Attendance[];
        notes: Note[];
    }[];
};

export type SetAttendanceForStudentType = {
    groupId: string;
    TeacherId: string;
    date: string;
    status: "present" | "absent";
};
