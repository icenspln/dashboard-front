import { createColumnHelper } from "@tanstack/react-table";
import { Group } from "../_models";
import SettingsCell from "./SettingsCell";
import { digitToStringLevel } from "../../../../../handlers/returnInArabic";

const columnHelper = createColumnHelper<Group>();

export const defaultColumns = [
    columnHelper.accessor("groupId", {
        header: "ID",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("dayOfWeek", {
        header: "Day",
        cell: (info) => info.getValue(),
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
        cell: (info) => <span className="capitalize">{info.getValue()}</span>,
    }),
    columnHelper.accessor("level", {
        header: "Level",
        cell: (info) => digitToStringLevel(info.getValue()),
    }),
    columnHelper.accessor("module", {
        header: "Subject",
        cell: (info) => info.getValue(),
    }),

    columnHelper.accessor("currentNumberOfStudents", {
        header: "Number of Students",
        cell: (info) => info.getValue(),
    }),

    columnHelper.display({
        header: "Settings",
        cell: (props) => <SettingsCell row={props.row.original} />,
    }),
];
