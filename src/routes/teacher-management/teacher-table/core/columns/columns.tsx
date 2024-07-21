import { createColumnHelper } from "@tanstack/react-table";
import { Teacher } from "../_models";
import SettingsCell from "./SettingsCell";
import BirthDateCell from "./BirthDateCell";

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
  // columnHelper.accessor("domain", {
  //   header: "المادة",
  //   cell: (info) => info.getValue(),
  // }),
  // columnHelper.accessor("institution", {
  //   header: "المستوى",
  //   cell: (info) => info.getValue(),
  // }),
  // columnHelper.accessor("level", {
  //   header: "السنة",
  //   cell: (info) => info.getValue(),
  // }),
  // columnHelper.accessor("level", {
  //   header: "رقم الهاتف",
  //   cell: (info) => info.getValue(),
  // }),
  columnHelper.accessor("birthDate", {
    header: "تاريخ الميلاد",
    cell: (info) => <BirthDateCell value={info.getValue()} />,
  }),
  // columnHelper.accessor("level", {
  //   header: "عدد الأفواج الكلية",
  //   cell: (info) => info.getValue(),
  // }),
  // columnHelper.accessor("level", {
  //   header: "عدد الأفواج الحالية",
  //   cell: (info) => info.getValue(),
  // }),
  // columnHelper.accessor("level", {
  //   header: "الرواتب المدفوعة",
  //   cell: (info) => info.getValue(),
  // }),
  // columnHelper.accessor("level", {
  //   header: "راتب الشهر الحالي",
  //   cell: (info) => info.getValue(),
  // }),
  columnHelper.display({
    header: "الإعدادات",
    cell: () => <SettingsCell />,
  }),
];
