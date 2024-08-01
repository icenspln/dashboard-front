import { createColumnHelper } from "@tanstack/react-table";
import { PresenceList } from "../_models";
import PresentButton from "./isPresentButton";
import { PricingButton } from "./PricingButtonEdit";
import { ChangedGroupButton, DeleteFromGroupButton } from "./changeGroupButton";

const columnHelper = createColumnHelper<PresenceList>();

export const defaultColumns = [
 
 
  columnHelper.accessor("studentName", {
    header: "الفوج",
    cell: (info) => info.getValue(),
  }),
 
  columnHelper.accessor("pricing", {
    header: "ثمن الدفع الشهري",
    cell: PricingButton,
  }),
  columnHelper.accessor("dayOfWeek", {
    header: "11/08/2024",
    cell: PresentButton,
  }),
  columnHelper.accessor("dayOfWeek", {
    header: "11/08/2024",
    cell: PresentButton,
  }),
  columnHelper.accessor("dayOfWeek", {
    header: "11/08/2024",
    cell: ChangedGroupButton,
  }),
  columnHelper.accessor("dayOfWeek", {
    header: "11/08/2024",
    cell: DeleteFromGroupButton,
  }),

];
