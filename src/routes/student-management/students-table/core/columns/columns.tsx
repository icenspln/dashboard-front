import { createColumnHelper } from "@tanstack/react-table";
import { Student } from "../_models";
import BirthDateCell from "./BirthDateCell";
import InstitutionCell from "./InstitutionCell";
import SettingsCell from "./SettingsCell";
import { PricingButton } from "../../../../../components/PricingButtonEdit";

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
    header: "تاريخ التسجيل",
    cell: (info) => info?.getValue().length,
  }),
  columnHelper.accessor("groups", {
    header: "عدد الأفواج الكلية",
    cell: (info) => info?.getValue().length,
  }),
  columnHelper.accessor("groups", {
    header: "عدد الأفواج الحالية",
    cell: (info) => info?.getValue().length,
  }),
  columnHelper.accessor("pricing", {
    header: "الثمن الذي تم دفعه",
    cell:  PricingButton
  }),
  columnHelper.accessor("groups", {
    header: "المجموع",
    cell: (info) => info?.getValue().length,
  }),
  

  columnHelper.display({
    header: "الإعدادات",
    cell: () => <SettingsCell />,
  }),
];
