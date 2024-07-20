import { createColumnHelper } from "@tanstack/react-table";
import { Group } from "../_models";
import SettingPopupMenu from "../../../../../components/ButtonSettings";

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
  columnHelper.accessor("moduleName", {
    header: "المادة",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("professor", {
    header: "الأستاذ",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("level", {
    header: "عدد المسجلين",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("level", {
    header: "تاريخ البداية",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("level", {
    header: "عدد الحصص الكلية",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("level", {
    header: "الإعدادات",
    cell: () => {
      const options = [
        { label: 'تعديل المعلومات', action: () => {} },
        { label: 'حذف الفوج', action: () => {} },
        { label: 'إضافة حصة إضافية', action: () => {} },
        { label: 'رؤية قائمة الحضور', action: () => {} },
        { label: 'رؤية قائمة المسجلين', action: () => {} },
      ];

      return <SettingPopupMenu options={options} />;
    },
  }),
];
