import { createColumnHelper } from "@tanstack/react-table";
import { Student } from "../_models";
import BirthDateCell from "./BirthDateCell";
import InstitutionCell from "./InstitutionCell";
import SettingsCell from "./SettingsCell";

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

  columnHelper.display({
    header: "الإعدادات",
    cell: () => <SettingsCell />,
  }),
];
