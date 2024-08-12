import { createColumnHelper } from "@tanstack/react-table";
import { format } from "date-fns";
import { AttendanceRecord } from "../_models";

const columnHelper = createColumnHelper<AttendanceRecord>();

export const defaultColumns = [
  columnHelper.accessor("employeeId", {
    header: "الرقم",
    cell: (info) => info.row.index + 1, // Auto-increment using row index
  }),
  columnHelper.accessor("date", {
    header: "اليوم",
    cell: (info) => format(new Date(info.getValue()), "yyyy / MM / dd"), // Format date
  }),
  columnHelper.accessor("date", {
    header: "الوقت",
    cell: (info) => format(new Date(info.getValue()), "HH:mm"), // Extract time
  }),
];