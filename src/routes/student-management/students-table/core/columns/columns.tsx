import { createColumnHelper } from "@tanstack/react-table";
import { Student } from "../_models";
import { TableCell } from "../../../../../components/ButtonEdit";
import SettingPopupMenu from "../../../../../components/ButtonSettings";


const columnHelper = createColumnHelper<Student>();


export const defaultColumns = [
  columnHelper.accessor("studentId", {
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
  columnHelper.accessor("birthDate", {
    header: "تاريخ الميلاد",
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
  columnHelper.accessor("level", {
    header: "رقم الهاتف",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("level", {
    header: "تاريخ التسجيل",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("level", {
    header: "عدد الأفواج الكلية",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("level", {
    header: "عدد الأفواج الحالية",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("paid", {
    header: "الثمن الذي تم دفعه",
    cell: TableCell,
  }),
  columnHelper.accessor("toBePaid", {
    header: "الثمن الذي يجب دفعه",
    cell: (info) => info.getValue(),
  }),
  columnHelper.display({
    id: 'balance',
    header: 'المجموع',
    cell: ({ row }) => {
      const paid = row.original.paid;
      const toBePaid = row.original.toBePaid;
      const balance = paid - toBePaid;
      const balanceClass = balance < 0 ? 'text-red-400' : 'text-green-400';
      return <span className={balanceClass}>{balance}</span>;
    },
  }),
  columnHelper.display({
    header: "الإعدادات",
    cell: () => {
      const options = [
        { label: 'تعديل المعلومات', action: () => {} },
        { label: 'حذف من القائمة', action: () => {} },
        { label: 'رؤية الأفواج الحالية', action: () => {} },
        { label: 'تغيير الفوج', action: () => {} }
      ];

      return <SettingPopupMenu options={options} />;
    },
  }),
];


