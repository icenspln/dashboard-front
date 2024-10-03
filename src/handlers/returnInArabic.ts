import { Group } from "../routes/student-management/students-table/student-group-modal/core/_model";

export function returnInstitutionInAR(inst: string) {
    switch (inst) {
        case "primaryschool":
            return "ابتدائي";
            break;
        case "middleSchool":
            return "متوسط";
            break;
        case "highSchool":
            return "ثانوي";
    }
}

export function digitToStringLevel(level: number) {
    switch (level) {
        case 1:
            return "first year";
            break;
        case 2:
            return "second year";
            break;
        case 3:
            return "third year";
        case 4:
            return "fourth year";
            break;
        case 5:
            return "fifth yera";
            break;
    }
}

export function returnGroupLabel(group: Group) {
    if (!group) return `group undefined`;
    return `${group.module} | ${digitToStringLevel(group.level)} ${group.institution} | ${group.responsibleTeacher.firstName + " " + group.responsibleTeacher.lastName} | ${group.dayOfWeek} -  ${returnTimeString(group.timing)}`;
}
export function returnGroupLabelWithoutTeacher(group: Group) {
    if (!group) return `group undefined`;
    return `${group.module} | ${digitToStringLevel(group.level)} ${group.institution} | ${group.dayOfWeek} - ${returnTimeString(group.timing)}`;
}
export function returnStudentLabel(firstName: string, lastName: string) {
    return `${firstName} ${lastName}`;
}

export function returnDayInAR(dayInEnglish: string) {
    switch (dayInEnglish) {
        case "Saturday":
            return "السبت";
            break;
        case "Sunday":
            return "الأحد";
            break;
        case "Monday":
            return "الإثنين";
            break;
        case "Tuesday":
            return "الثلاثاء";
            break;
        case "Wednesday":
            return "الأربعاء";
            break;
        case "Thursday":
            return "الخميس";
            break;
        case "Friday":
            return "الجمعة";
            break;
    }
}

export function returnTimeString({
    hour,
    minute,
}: {
    hour: number | string;
    minute: number | string;
    _id?: number | string;
}) {
    const h = hour.toString().padStart(2, "0");
    const m = minute.toString().padStart(2, "0");
    return `${h}:${m}`;
}

export function returnAttendanceInAR(status: string): string {
    switch (status) {
        case "present":
            return "Present";
        case "absent":
            return "Absent";
        case "upcoming":
            return "upcoming";
        case "not joined":
            return "not joined";
        case "unknown":
            return "unknown";
        case "out of group":
            return "out of group";
        case "changed group":
            return "changed group";
        case "teacher absent":
            return "teacher absent";
        default:
            return "unknown";
    }
}

export function intToDay(int: number) {
    let day;
    switch (int) {
        case 1:
            day = "saturday";
            break;
        case 2:
            day = "sunday";
            break;
        case 3:
            day = "monday";
            break;
        case 4:
            day = "tuesday";
            break;
        case 5:
            day = "wednesday";
            break;
        case 6:
            day = "thursday";
            break;
        case 7:
            day = "friday";
            break;
        default:
            day = "N/A";
    }
    return day;
}
