import { createColumnHelper } from "@tanstack/react-table";
import { ParticularGroup } from "../_models";
import SettingPopupMenu from "../../../../../components/ButtonSettings";
import { Link } from "react-router-dom";

const columnHelper = createColumnHelper<ParticularGroup>();

export const defaultColumns = [
  columnHelper.accessor("profId", {
    header: "الرقم",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("firstName", {
    header: "إسم الحصة",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("lastName", {
    header: "اليوم",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("moduleName", {
    header: "الوقت",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("institution", {
    header: "القاعة",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("level", {
    header: "المستوى",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("level", {
    header: "السنة",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("level", {
    header: "المادة",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("level", {
    header: "الأستاذ",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("level", {
    header: "عدد المسجلين",
    cell: (info) => info.getValue(),
  }),
  columnHelper.display( {
    header: "الإعدادت",
    cell: () =>{
      
      const options = [
        {label :'تعديل المعلومات', action: () => {} },
        {label :'حذف المعلومات', action: () => {} },
        {label :'رؤية قائمة الحضور', 
          action: () => {
            <Link to={'PresenceListmanagement'}></Link>
          }
         },
        {label :'رؤية قائمة المسجلين', action: () => {} }

      ];
      return <SettingPopupMenu options={options} />
    }
  }),
];
