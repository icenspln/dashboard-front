import { createColumnHelper } from "@tanstack/react-table";
import { PresenceList } from "../_models";
import {
  StudentPresentButton,
  TeacherPresentButton,
} from "../../../../../../components/isPresentButton";
import { PricingButton } from "../../../../../../components/PricingButtonEdit";
import {
  ChangedGroupButton,
  DeleteFromGroupButton,
} from "../../../../../../components/changeGroupButton";

const columnHelper = createColumnHelper<PresenceList>();

export const defaultColumns = [
  columnHelper.accessor("groupId", {
    header: "الرقم",
    cell: (info) => info.getValue(),
  }),

  columnHelper.accessor("studentName", {
    header: "الطالب",
    cell: (info) => info.getValue(),
  }),

  columnHelper.accessor("pricing", {
    header: "ثمن الدفع الشهري",
    cell: () => PricingButton,
  }),
  columnHelper.accessor("phoneNumber", {
    header: "رقم الهاتف",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("dayOfWeek", {
    header: "11/08/2024",
    cell: () => TeacherPresentButton,
  }),
  columnHelper.accessor("dayOfWeek", {
    header: "11/08/2024",
    cell: () => StudentPresentButton,
  }),
  columnHelper.accessor("dayOfWeek", {
    header: "11/08/2024",
    cell: () => StudentPresentButton,
  }),
  columnHelper.accessor("dayOfWeek", {
    header: "11/08/2024",
    cell: ChangedGroupButton,
  }),
  columnHelper.accessor("dayOfWeek", {
    header: "11/08/2024",
    cell: () => DeleteFromGroupButton,
  }),
];
