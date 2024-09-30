import { createColumnHelper } from "@tanstack/react-table";
import { Teacher } from "../_models";
import SettingsCell from "./SettingsCell";

const columnHelper = createColumnHelper<Teacher>();

export const defaultColumns = [
    columnHelper.accessor("teacherId", {
        header: "ID",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("firstName", {
        header: "First Name",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("lastName", {
        header: "Last Name",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("birthDate", {
        header: "Birth Date",
        cell: (info) => new Date(info.getValue()).toLocaleDateString(),
    }),
    columnHelper.accessor("phoneNumber", {
        header: "Phone Number",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("modules", {
        header: "Subject",
        cell: (info) => `${info.getValue().join(",")}`,
    }),

    columnHelper.accessor("numberOfGroups", {
        header: "Groups",
        cell: (info) => info.getValue(),
    }),
    columnHelper.display({
        header: "Settings",
        cell: (props) => <SettingsCell row={props.row.original} />,
    }),
];
