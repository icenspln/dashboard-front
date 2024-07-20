import { createColumnHelper } from "@tanstack/react-table";
import { Prof } from "../_models";
import SettingPopupMenu from "../../../../../components/ButtonSettings";

const columnHelper = createColumnHelper<Prof>();

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
  columnHelper.accessor("domain", {
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
  columnHelper.accessor("level", {
    header: "رقم الهاتف",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("level", {
    header: "تاريخ التجسيل",
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
  columnHelper.accessor("level", {
    header: "الرواتب المدفوعة",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("level", {
    header: "راتب الشهر الحالي",
    cell: (info) => info.getValue(),
  }),
  columnHelper.display({
    header: "الإعدادات",
    cell: () => {
      const options = [
        { label: 'تعديل المعلومات', action: () => {} },
        { label: 'حذف من القائمة', action: () => {} },
        { label: 'تحميل قسيمة الدفع للشهر', action: () => {} },
      
      ];

      return <SettingPopupMenu options={options} />;
    },
  }),
];
