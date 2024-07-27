import { createColumnHelper } from "@tanstack/react-table";
import { Student } from "../_models";
import BirthDateCell from "./BirthDateCell";
import InstitutionCell from "./InstitutionCell";
import SettingsCell from "./SettingsCell";

const columnHelper = createColumnHelper<Student>();

export const studentInfoColumns = [
 
  columnHelper.accessor("firstName", {
    header: "الإسم",
    cell: (info) => info?.getValue(),
  }),
  columnHelper.accessor("level", {
    header: "السنة",
    cell: (info) => info?.getValue(),
  }),
 
  columnHelper.accessor("institution", {
    header: "المستوى",
    cell: (info) => <InstitutionCell value={info?.getValue()} />,
  }),
  
  columnHelper.accessor("phoneNumber", {
    header: "رقم الهاتف",
    cell: (info) => info?.getValue(),
  }),
  columnHelper.accessor("birthDate", {
    header: "تاريخ الميلاد",
    cell: (info) => <BirthDateCell value={info?.getValue()} />,
    // cell: (info) => info.getValue(),
  }),
];
export const studentPaymentColumns = [
  columnHelper.accessor("level", {
    header: "الثمن الذي تم دفعه",
    cell: (info) => info?.getValue(),
  }),
 
  columnHelper.accessor("institution", {
    header: "الثمن الذي يجب دفعه",
    cell: (info) => <InstitutionCell value={info?.getValue()} />,
  }),
  
  columnHelper.accessor("phoneNumber", {
    header: "المجموع",
    cell: (info) => info?.getValue(),
  })
]
