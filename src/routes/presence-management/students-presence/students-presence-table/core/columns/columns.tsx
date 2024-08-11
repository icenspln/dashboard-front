import { createColumnHelper } from "@tanstack/react-table";
import { PresenceList } from "../_models";
import { StudentPresentButton } from "../../../../../../components/isPresentButton";
import { PricingButton } from "../../../../../../components/PricingButtonEdit";
import { ChangedGroupButton, DeleteFromGroupButton } from "../../../../../../components/changeGroupButton";

const columnHelper = createColumnHelper<PresenceList>();

export const defaultColumns = [
 
 
  columnHelper.accessor("group", {
    header: "الفوج",
    cell: (info) => info.getValue(),
  }),
 
  columnHelper.accessor("pricing", {
    header: "ثمن الدفع الشهري",
    cell: PricingButton,
  }),
  columnHelper.accessor("dayOfWeek", {
    header: "11/08/2024",
    cell: StudentPresentButton,
  }),
  columnHelper.accessor("dayOfWeek", {
    header: "11/08/2024",
    cell: StudentPresentButton,
  }),
  columnHelper.accessor("dayOfWeek", {
    header: "11/08/2024",
    cell: ChangedGroupButton,
  }),
  columnHelper.accessor("dayOfWeek", {
    header: "11/08/2024",
    cell: DeleteFromGroupButton,
  }),
  columnHelper.accessor("dayOfWeek", {
    header: "11/08/2024",
    cell: DeleteFromGroupButton,
  }),

];
