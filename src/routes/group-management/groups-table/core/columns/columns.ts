import { createColumnHelper } from "@tanstack/react-table";
import { Group } from "../_models";

const columnHelper = createColumnHelper<Group>();

export const defaultColumns = [
  columnHelper.accessor("groupId", {
    header: "الرقم",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("day", {
    header: "اليوم",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("time", {
    header: "الوقت",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("classRoom", {
    header: "القاعة",
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
