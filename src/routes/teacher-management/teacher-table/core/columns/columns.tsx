import { createColumnHelper } from "@tanstack/react-table";
import { Teacher } from "../_models";
import SettingsCell from "./SettingsCell";

const columnHelper = createColumnHelper<Teacher>();

export const defaultColumns = [
  columnHelper.accessor("teacherId", {
    header: "الرقم",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("firstName", {
    header: "الإسم",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("lastName", {
    header: "اللقب",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("birthDate", {
    header: "تاريخ الميلاد",
    cell: (info) => new Date(info.getValue()).toLocaleDateString(),
  }),
  columnHelper.accessor("phoneNumber", {
    header: "رقم الهاتف",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("modules", {
    header: "المادة",
    cell: (info) => `${info.getValue().join(",")}`,
  }),

  columnHelper.accessor("numberOfGroups", {
    header: "عدد الأفواج الكلية",
    cell: (info) => info.getValue(),
  }),
  columnHelper.display({
    header: "الإعدادات",
    cell: () => <SettingsCell />,
  }),
];
