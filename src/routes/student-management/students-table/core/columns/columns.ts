import { createColumnHelper } from "@tanstack/react-table";
import { Student } from "../_models";

const columnHelper = createColumnHelper<Student>();

export const defaultColumns = [
  columnHelper.accessor("studentId", {
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
  columnHelper.accessor("level", {
    header: "رقم الهاتف",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("level", {
    header: "تاريخ التسجيل",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("level", {
    header: "عدد الأفواج الكلية",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("level", {
    header: "عدد الأفواج الحالية",
    cell: (info) => info.getValue(),
  }),
];
