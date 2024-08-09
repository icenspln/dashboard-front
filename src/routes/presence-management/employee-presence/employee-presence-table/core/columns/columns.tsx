import { createColumnHelper } from "@tanstack/react-table";
import { PresenceList } from "../_models";



const columnHelper = createColumnHelper<PresenceList>();

export const defaultColumns = [
 
 
  columnHelper.accessor("employeeId", {
    header: "الرقم",
    cell: (info) => info.getValue(),
  }),
 
  columnHelper.accessor("date", {
    header: "اليوم",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("time", {
    header: "الوقت",
    cell: (info) => info.getValue(),
  }),
 

];
