import { createColumnHelper } from "@tanstack/react-table";
import { Group } from "../_models";
import SettingsCell from "./SettingsCell";
import {
    returnInstitutionInAR,
    returnLevelInAR,
    returnDayInAR,
} from "../../../../../handlers/returnInArabic";

const columnHelper = createColumnHelper<Group>();

export const defaultColumns = [
    columnHelper.accessor("groupId", {
        header: "ID",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("dayOfWeek", {
        header: "Day",
        cell: (info) => returnDayInAR(info.getValue()),
    }),
    columnHelper.accessor("timing", {
        header: "Time",
        cell: (info) =>
            `${info.getValue().hour.toString().padStart(2, "0")}:${info.getValue().minute.toString().padStart(2, "0")}`,
    }),
    columnHelper.accessor("roomNumber", {
        header: "Room",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("institution", {
        header: "Institution",
        cell: (info) => returnInstitutionInAR(info.getValue()),
    }),
    columnHelper.accessor("level", {
        header: "Level",
        cell: (info) => returnLevelInAR(info.getValue()),
    }),
    columnHelper.accessor("module", {
        header: "Subject",
        cell: (info) => info.getValue(),
    }),
    // columnHelper.accessor("responsibleTeacher", {
    //   header: "الأستاذ",
    //   cell: (info) => `${info.getValue().firstName}  ${info.getValue().lastName}`,
    // }),
    columnHelper.accessor("currentNumberOfStudents", {
        header: "Number of Students",
        cell: (info) => info.getValue(),
    }),

    columnHelper.display({
        header: "Settings",
        cell: (props) => <SettingsCell row={props.row.original} />,
    }),
];
