import { createColumnHelper } from "@tanstack/react-table";
import { SpecialGroup } from "../_models";
// import { Link } from "react-router-dom";
import SettingsCell from "./SettingsCell";
import {
  returnInstitutionInAR,
  returnLevelInAR,
} from "../../../../../handlers/returnInArabic";

const columnHelper = createColumnHelper<SpecialGroup>();

export const defaultColumns = [
  columnHelper.accessor("specialGroupId", {
    header: "الرقم",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("name", {
    header: "إسم الحصة",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("date", {
    header: "اليوم",
    cell: (info) => {
      const date = new Date(info.getValue());
      const formattedDate = date.toISOString().split("T")[0];
      return formattedDate;
    },
  }),
  columnHelper.accessor("timing", {
    header: "الوقت",
    cell: (info) =>
      `${info.getValue().hour.toString().padStart(2, "0")}:${info.getValue().minute.toString().padStart(2, "0")}`,
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
  columnHelper.accessor("teacher", {
    header: "الأستاذ",
    cell: (info) => `${info.getValue().firstName}  ${info.getValue().lastName}`,
  }),
  columnHelper.accessor("students", {
    header: "عدد المسجلين",
    cell: (info) => info.getValue().length,
  }),

  columnHelper.display({
    header: "الإعدادت",
    cell: (props) => <SettingsCell row={props.row.original} />,
  }),
];
