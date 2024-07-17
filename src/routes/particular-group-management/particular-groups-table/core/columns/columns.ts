import { createColumnHelper } from "@tanstack/react-table";
import { ParticularGroup } from "../_models";

const columnHelper = createColumnHelper<ParticularGroup>();

export const defaultColumns = [
  columnHelper.accessor("profId", {
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
  columnHelper.accessor("moduleName", {
    header: "المادة",
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
];
