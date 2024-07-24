import { createColumnHelper } from "@tanstack/react-table";
import { Group } from "../_models";
import SettingsCell from "./SettingsCell";

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
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("roomNumber", {
    header: "القاعة",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("institution", {
    header: "المستوى",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("level", {
    header: "السنة",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("module", {
    header: "المادة",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("responsibleTeacher", {
    header: "الأستاذ",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("level", {
    header: "عدد المسجلين",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("level", {
    header: "تاريخ البداية",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("level", {
    header: "عدد الحصص الكلية",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("level", {
    header: "الإعدادات",
    cell: () => <SettingsCell />,
  }),
];
