import { createColumnHelper } from "@tanstack/react-table";
import { Group } from "../_models";
import SettingsCell from "./SettingsCell";
import {
  returnInstitutionInAR,
  returnLevelInAR,
  returnDayInAR,

} from "../../../../../handlers/returnInArabic";



const columnHelper = createColumnHelper<Group>();

export const defaultColumns = [
  // columnHelper.accessor("groupId", {
  //   header: "الرقم",
  //   cell: (info) => info.getValue(),
  // }),
  columnHelper.display({
    header: "الفوج",
    cell: (info) => {
      const module = info.row.original.module;
      const level = returnLevelInAR(info.row.original.level);
      const institution = returnInstitutionInAR(info.row.original.institution);
      const teacher = info.row.original.responsibleTeacher
        ? `${info.row.original.responsibleTeacher.firstName} ${info.row.original.responsibleTeacher.lastName}`
        : "N/A"; // If no teacher is assigned

      return `${module} | ${level} ${institution} | ${teacher}`;
    },
  }),

  // Combined column for dayOfWeek and timing
  columnHelper.display({
    header: "التوقيت",
    cell: (info) => {
      const dayOfWeek = returnDayInAR(info.row.original.dayOfWeek);
      const timing = info.row.original.timing;
      const formattedTiming = `${timing.hour
        .toString()
        .padStart(2, "0")}:${timing.minute.toString().padStart(2, "0")}`;

      return `${dayOfWeek} - ${formattedTiming}`;
    },
  }),

  
  // columnHelper.accessor("dayOfWeek", {
  //   header: "اليوم",
  //   cell: (info) => returnDayInAR(info.getValue()),
  // }),
  // columnHelper.accessor("timing", {
  //   header: "الوقت",
  //   cell: (info) =>
  //     `${info.getValue().hour.toString().padStart(2, "0")}:${info.getValue().minute.toString().padStart(2, "0")}`,
  // }),
  // columnHelper.accessor("roomNumber", {
  //   header: "القاعة",
  //   cell: (info) => info.getValue(),
  // }),
  // columnHelper.accessor("institution", {
  //   header: "المستوى",
  //   cell: (info) => returnInstitutionInAR(info.getValue()),
  // }),
  // columnHelper.accessor("level", {
  //   header: "السنة",
  //   cell: (info) => returnLevelInAR(info.getValue()),
  // }),
  // columnHelper.accessor("module", {
  //   header: "المادة",
  //   cell: (info) => info.getValue(),
  // }),
  //////
  // columnHelper.accessor("responsibleTeacher", {
  //   header: "الأستاذ",
  //   cell: (info) => `${info.getValue().firstName}  ${info.getValue().lastName}`,
  // }),
  columnHelper.accessor("currentNumberOfStudents", {
    header: "عدد المسجلين",
    cell: (info) => info.getValue(),
  }),

  columnHelper.display({
    header: "الإعدادات",
    cell: (props) => <SettingsCell row={props.row.original} />,
  }),
];
