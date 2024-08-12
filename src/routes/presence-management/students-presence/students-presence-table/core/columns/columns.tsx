import { createColumnHelper } from "@tanstack/react-table";
import {
  AttendanceForStudentGroupType,
  AttendanceForStudentType,
} from "../_models";
import { StudentPresentButton } from "../../../../../../components/isPresentButton";
import { PricingButton } from "../../../../../../components/PricingButtonEdit";
import {
  ChangedGroupButton,
  DeleteFromGroupButton,
} from "../../../../../../components/changeGroupButton";

const columnHelper = createColumnHelper<AttendanceForStudentGroupType>();

export const defaultColumns = [
  columnHelper.accessor("group.groupId", {
    header: "الفوج",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("group.pricing", {
    header: "ثمن الدفع الشهري",
    cell: (info) => info.getValue(),
  }),
  // columnHelper.accessor("groups.alldays", {
  //   header: "11/08/2024",
  //   cell: (info) => info.getValue(),
  // }),
  columnHelper.accessor("attendance", {
    header: "11/08/2024",
    // cell: (info) => info.getValue(),
  }),
];
