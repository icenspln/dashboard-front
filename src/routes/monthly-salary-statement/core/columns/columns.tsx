import { createColumnHelper } from "@tanstack/react-table";
import { SalaryStatement } from "../_models";


const columnHelper = createColumnHelper<SalaryStatement>();

export const defaultColumns = [
  columnHelper.accessor("teacherId", {
    header: "الرقم",
    cell: (info) => info?.getValue(),
  }),
  columnHelper.accessor("firstName", {
    header: "السنة",
    cell: (info) => info?.getValue(),
  }),

  columnHelper.accessor("firstName", {
    header: "عدد الأفواج الكلية",
    cell: (info) => info?.getValue()
  }),
  columnHelper.accessor("firstName", {
    header: "عدد الأفواج الحالية",
    cell: (info) => info?.getValue()
  }),

  columnHelper.accessor("firstName", {
    header: "المجموع",
    cell: (info) => info?.getValue()
  }),
  
];
