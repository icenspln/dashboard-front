import { Group } from "../routes/student-management/students-table/student-group-modal/core/_model"

export function returnInstitutionInAR(inst: string) {
    switch (inst) {
        case "primarySchool":
            return "ابتدائي"
            break
        case "middleSchool":
            return "متوسط"
            break
        case "highSchool":
            return "ثانوي"
    }
}

export function returnLevelInAR(level: number) {
    switch (level) {
        case 1:
            return "​الأولى"
            break
        case 2:
            return "الثانية"
            break
        case 3:
            return "الثالثة"
        case 4:
            return "الرابعة"
            break
        case 5:
            return "الخامسة"
            break
    }
}

export function returnGroupLabel(group: Group) {
    if (!group) return `group undefined`
    return `${group.module} | ${returnLevelInAR(group.level)} ${returnInstitutionInAR(group.institution)} | ${group.responsibleTeacher.firstName + " " + group.responsibleTeacher.lastName} | ${returnDayInAR(group.dayOfWeek)} -  ${returnTimeString(group.timing)}`
}
export function returnGroupLabelWithoutTeacher(group: Group) {
    if (!group) return `group undefined`
    return `${group.module} | ${returnLevelInAR(group.level)} ${returnInstitutionInAR(group.institution)} | ${returnDayInAR(group.dayOfWeek)} - ${returnTimeString(group.timing)}`
}
export function returnStudentLabel(firstName: string, lastName: string) {
    return `${firstName} ${lastName}`
}

export function returnDayInAR(dayInEnglish: string) {
    switch (dayInEnglish) {
        case "Saturday":
            return "السبت"
            break
        case "Sunday":
            return "الأحد"
            break
        case "Monday":
            return "الإثنين"
            break
        case "Tuesday":
            return "الثلاثاء"
            break
        case "Wednesday":
            return "الأربعاء"
            break
        case "Thursday":
            return "الخميس"
            break
        case "Friday":
            return "الجمعة"
            break
    }
}

export function returnTimeString({
    hour,
    minute,
}: {
    hour: number | string
    minute: number | string
    _id?: number | string
}) {
    const h = hour.toString().padStart(2, "0")
    const m = minute.toString().padStart(2, "0")
    return `${h}:${m}`
}

export function returnAttendanceInAR(status: string): string {
    switch (status) {
        case "present":
            return "حاضر"
        case "absent":
            return "غائب"
        case "upcoming":
            return "قادم"
        case "not joined":
            return "لم ينضم"
        case "unknown":
            return "مجهول"
        case "out of group":
            return "نزع من الفوج"
        case "changed group":
            return "تغيير الفوج"
        case "teacher absent":
            return "المعلم غائب"
        default:
            return "حالة غير معروفة"
    }
}
export const modules = [
    { id: "رياضيات", label: "رياضيات" },
    { id: "علوم", label: "علوم" },
    { id: "فيزياء", label: "فيزياء" },
    { id: "لغة عربية", label: "لغة عربية" },
    { id: "فلسفة", label: "فلسفة" },
    { id: "محاسبة", label: "محاسبة" },
    { id: "فرنسية", label: "فرنسية" },
    { id: "انجليزية", label: "انجليزية" },
    { id: "اسبانية", label: "اسبانية" },
    { id: "تاريخ و جغرافيا", label: "تاريخ و جغرافيا" },
    { id: "شريعة اسلامية", label: "شريعة اسلامية" },
    { id: "ألمانية", label: "ألمانية" },
    { id: "هندسة مدنية", label: "هندسة مدنية" },
    { id: "هندسة ميكانيكية", label: "هندسة ميكانيكية" },
    { id: "هندسة طرائق", label: "هندسة طرائق" },
    { id: "عربية / رياضيات", label: "عربية / رياضيات" },
]
export function intToDay(int: number) {
    let day
    switch (int) {
        case 1:
            day = "saturday"
            break
        case 2:
            day = "sunday"
            break
        case 3:
            day = "monday"
            break
        case 4:
            day = "tuesday"
            break
        case 5:
            day = "wednesday"
            break
        case 6:
            day = "thursday"
            break
        case 7:
            day = "friday"
            break
        default:
            day = "N/A"
    }
    return day
}
