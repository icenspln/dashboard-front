import { createColumnHelper } from "@tanstack/react-table";
import { Student } from "../_models";
import BirthDateCell from "./BirthDateCell";
import InstitutionCell from "./InstitutionCell";
import { PricingButton } from "../../../../../components/PricingButtonEdit";

const columnHelper = createColumnHelper<Student>();

// export const studentInfoColumns = [

//   columnHelper.accessor("institution", {
//     header: "المستوى",
//     cell: (info) => <InstitutionCell value={info?.getValue()} />,
//   }),

//   columnHelper.accessor("level", {
//     header: "السنة",
//     cell: (info) => info?.getValue(),
//   }),

//   columnHelper.accessor("phoneNumber", {
//     header: "رقم الهاتف",
//     cell: (info) => info?.getValue(),
//   }),
//   columnHelper.accessor("birthDate", {
//     header: "تاريخ الميلاد",
//     cell: (info) => <BirthDateCell value={info?.getValue()} />,
//     // cell: (info) => info.getValue(),
//   }),
// ];

export const studentPaymentColumns = [
  columnHelper.accessor("_id", {
    header: "الثمن الذي تم دفعه",
    cell: PricingButton,
  }),

  columnHelper.accessor("level", {
    header: "الثمن الذي يجب دفعه",
    cell: PricingButton,
  }),
  columnHelper.accessor("level", {
    header: "الديون",
    cell: PricingButton,
  }),

  columnHelper.accessor("level", {
    header: "المجموع",
    cell: (info) => info?.getValue(),
  }),
];
