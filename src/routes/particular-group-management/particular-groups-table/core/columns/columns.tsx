import { createColumnHelper } from "@tanstack/react-table";
import { ParticularGroup } from "../_models";
import { Link } from "react-router-dom";
import SettingsCell from "./SettingsCell";

const columnHelper = createColumnHelper<ParticularGroup>();

export const defaultColumns = [
  columnHelper.accessor("profId", {
    header: "الرقم",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("firstName", {
    header: "إسم الحصة",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("lastName", {
    header: "اليوم",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("moduleName", {
    header: "الوقت",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("institution", {
    header: "القاعة",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("level", {
    header: "المستوى",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("level", {
    header: "السنة",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("level", {
    header: "المادة",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("level", {
    header: "الأستاذ",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("level", {
    header: "عدد المسجلين",
    cell: (info) => info.getValue(),
  }),
  columnHelper.display({
    header: "الإعدادت",
    cell: () => <SettingsCell />,
  }),
];
