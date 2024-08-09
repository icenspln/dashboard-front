import { createColumnHelper } from "@tanstack/react-table";
import { Student } from "../_models";
import ConfirmButton from "../../../../../components/confirmButton";

const columnHelper = createColumnHelper<Student>();

export const defaultColumns = [
  columnHelper.accessor("studentId", {
    header: "الرقم",
    cell: (info) => info?.getValue(),
  }),
  columnHelper.accessor("dayOfWeek", {
    header: "اليوم",
    cell: (info) => info?.getValue(),
  }),
  columnHelper.accessor("time", {
    header: "الوقت",
    cell: (info) => info?.getValue(),
  }),
  columnHelper.accessor("value", {
    header: "القيمة",
    cell: (info) => info?.getValue(),
  }),
  columnHelper.accessor("value", {
    header: "",
    cell: () => <ConfirmButton text="تحميل وصل الدفع" className="text-white outline hover:bg-white hover:outline-blue hover:text-blue"/>,
  }),
  

];
