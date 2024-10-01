import { createColumnHelper } from "@tanstack/react-table";
import { format } from "date-fns";
import { AttendanceRecord } from "../_models";

const columnHelper = createColumnHelper<AttendanceRecord>();

export const defaultColumns = [
    columnHelper.accessor("employeeId", {
        header: "Number",
        cell: (info) => info.row.index + 1, // Auto-increment using row index
    }),
    columnHelper.accessor("date", {
        header: "Day",
        cell: (info) => format(new Date(info.getValue()), "yyyy / MM / dd"), // Format date
    }),
    columnHelper.accessor("date", {
        header: "Time",
        cell: (info) => format(new Date(info.getValue()), "HH:mm"), // Extract time
    }),
];
