import { createColumnHelper } from "@tanstack/react-table";
import BirthDateCell from "./BirthDateCell";
import InstitutionCell from "./InstitutionCell";
import SettingsCell from "./SettingsCell";
import { Student } from "../core/_models";

const columnHelper = createColumnHelper<Student>();

export const defaultColumns = [
  columnHelper.accessor("studentId", {
    header: "الرقم",
    cell: (info) => info?.getValue(),
  }),
  columnHelper.accessor("firstName", {
    header: "الإسم",
    cell: (info) => info?.getValue(),
  }),
  columnHelper.accessor("lastName", {
    header: "اللقب",
    cell: (info) => info?.getValue(),
  }),
  columnHelper.accessor("birthDate", {
    header: "تاريخ الميلاد",
    cell: (info) => <BirthDateCell value={info?.getValue()} />,
    // cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("institution", {
    header: "المستوى",
    cell: (info) => <InstitutionCell value={info?.getValue()} />,
  }),
  columnHelper.accessor("level", {
    header: "السنة",
    cell: (info) => info?.getValue(),
  }),
  columnHelper.accessor("phoneNumber", {
    header: "رقم الهاتف",
    cell: (info) => info?.getValue(),
  }),
  columnHelper.accessor("groups", {
    header: "الأفواج",
    cell: (info) => info?.getValue().length,
  }),

  // columnHelper.accessor("_id", {
  //   header: "الإعدادات",
  //   cell: (info) => <SettingsCell row={info.row.getAllCells()} />,
  // }),
  columnHelper.display({
    id: "action",
    cell: (props) => <SettingsCell row={props.row.original} />,
  }),
];
