import { createColumnHelper } from "@tanstack/react-table";
import { Group } from "../_models";
import SettingsCell from "./SettingsCell";
import InstitutionCell from "./InstitutionCell";
import DayCell from "./DayCell";

const columnHelper = createColumnHelper<Group>();

export const defaultColumns = [
  columnHelper.accessor("groupId", {
    header: "الرقم",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("dayOfWeek", {
    header: "اليوم",
    cell: (info) => <DayCell value={info?.getValue()} />,
  }),
  columnHelper.accessor("timing", {
    header: "الوقت",
    cell: (info) => {
      const timing = info.getValue();
      const formattedTime = `${timing.hour.toString().padStart(2, "0")}:${timing.minute.toString().padStart(2, "0")}`;
      return formattedTime;
    },
    // cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("roomNumber", {
    header: "القاعة",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("institution", {
    header: "المستوى",
    cell: (info) => <InstitutionCell value={info?.getValue()} />,
  }),
  columnHelper.accessor("level", {
    header: "السنة",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("module", {
    header: "المادة",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("responsibleTeacher", {
    header: "الأستاذ",
    cell: (info) => {
      const teacher = info.getValue();
      return `${teacher.firstName} ${teacher.lastName}`;
    },
    // cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("currentNumberOfStudents", {
    header: "عدد المسجلين",
    cell: (info) => info.getValue(),
  }),
  // columnHelper.accessor("level", {
  //   header: "تاريخ البداية",
  //   cell: (info) => info.getValue(),
  // }),
  // columnHelper.accessor("level", {
  //   header: "عدد الحصص الكلية",
  //   cell: (info) => info.getValue(),
  // }),
  columnHelper.display({
    header: "الإعدادات",
    id: "action",
    cell: (props) => <SettingsCell row={props.row.original} />,
  }),
  // columnHelper.accessor("level", {
  //   header: "الإعدادات",
  //   cell: () => <SettingsCell />,
  // }),
];
