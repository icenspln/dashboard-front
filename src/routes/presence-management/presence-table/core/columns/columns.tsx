import { createColumnHelper } from "@tanstack/react-table";
import { PresenceList } from "../_models";


const columnHelper = createColumnHelper<PresenceList>();

export const defaultColumns = [
  columnHelper.accessor("profId", {
    header: "الرقم",
    cell: (info) => info.getValue(),
  }),
 
  columnHelper.accessor("lastName", {
    header: "اليوم",
    cell: (info) => info.getValue(),
  }),
 
  columnHelper.accessor("level", {
    header: "عدد المسجلين",
    cell: (info) => info.getValue(),
  }),

];
