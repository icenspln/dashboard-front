import { createColumnHelper } from "@tanstack/react-table";
import { Group } from "../_models";
import SettingsCell from "./SettingsCell";
import {
  returnInstitutionInAR,
  returnLevelInAR,
} from "../../../../../handlers/returnInArabic";

const columnHelper = createColumnHelper<Group>();

export const defaultColumns = [
  columnHelper.accessor("groupId", {
    header: "الرقم",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("dayOfWeek", {
    header: "اليوم",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("timing", {
    header: "الوقت",
    cell: (info) => `${info.getValue().hour}:${info.getValue().minute}`,
  }),
  columnHelper.accessor("roomNumber", {
    header: "القاعة",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("institution", {
    header: "المستوى",
    cell: (info) => returnInstitutionInAR(info.getValue()),
  }),
  columnHelper.accessor("level", {
    header: "السنة",
    cell: (info) => returnLevelInAR(info.getValue()),
  }),
  columnHelper.accessor("module", {
    header: "المادة",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("responsibleTeacher", {
    header: "الأستاذ",
    cell: (info) => `${info.getValue().firstName}  ${info.getValue().lastName}`,
  }),
  columnHelper.accessor("currentNumberOfStudents", {
    header: "عدد المسجلين",
    cell: (info) => info.getValue(),
  }),

  columnHelper.accessor("level", {
    header: "الإعدادات",
    cell: () => <SettingsCell />,
  }),
];
