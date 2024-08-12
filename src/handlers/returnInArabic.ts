import { Group } from "../routes/group-management/groups-table/core/_models";

export function returnInstitutionInAR(inst: string) {
  switch (inst) {
    case "primarySchool":
      return "ابتدائي";
      break;
    case "middleSchool":
      return "متوسط";
      break;
    case "highSchool":
      return "ثانوي";
  }
}

export function returnLevelInAR(level: number) {
  switch (level) {
    case 1:
      return "​الأولى";
      break;
    case 2:
      return "الثانية";
      break;
    case 3:
      return "الثالثة";
    case 4:
      return "الرابعة";
      break;
    case 5:
      return "الخامسة";
      break;
  }
}

export function returnGroupLabel({
  module,
  institution,
  level,
  responsibleTeacher,
  dayOfWeek,
  timing,
}: Group) {
  return `${module} | ${institution} ${level} | ${responsibleTeacher.firstName + " " + responsibleTeacher.lastName} | ${dayOfWeek} - ${timing.hour}:${timing.minute}`;
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
