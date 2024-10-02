import { createColumnHelper } from "@tanstack/react-table";
import BirthDateCell from "./BirthDateCell";
import SettingsCell from "./SettingsCell";
import { Student } from "../_models";
import { digitToStringLevel } from "../../../../../handlers/returnInArabic";

const columnHelper = createColumnHelper<Student>();

export const defaultColumns = [
    columnHelper.accessor("studentId", {
        header: "ID",
        cell: (info) => info?.getValue(),
    }),
    columnHelper.accessor("firstName", {
        header: "First Name",
        cell: (info) => info?.getValue(),
    }),
    columnHelper.accessor("lastName", {
        header: "Last Name",
        cell: (info) => info?.getValue(),
    }),
    columnHelper.accessor("birthDate", {
        header: "Birth Date",
        cell: (info) => <BirthDateCell value={info?.getValue()} />,
        // cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("institution", {
        header: "Institution",
        cell: (info) => <>{info.getValue()}</>,
    }),
    columnHelper.accessor("level", {
        header: "Level",
        cell: (info) => digitToStringLevel(info?.getValue()),
    }),
    columnHelper.accessor("phoneNumber", {
        header: "Phone Number",
        cell: (info) => info?.getValue(),
    }),
    columnHelper.accessor("createdAt", {
        header: "Creation date",
        cell: (info) => new Date(info.getValue()).toLocaleDateString(),
    }),
    columnHelper.accessor("groups", {
        header: "Groups Number",
        cell: (info) => info?.getValue().length,
    }),

    columnHelper.display({
        header: "Settings",
        id: "action",
        cell: (props) => <SettingsCell row={props.row.original} />,
    }),
];
