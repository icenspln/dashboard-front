import { createColumnHelper } from "@tanstack/react-table";
import { PresenceList } from "../_models";
import PresentButton from "./isPresentButton";
import { PricingButton } from "../../../../../components/PricingButtonEdit";

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
    cell: PricingButton,
  }),
  columnHelper.accessor("dayOfWeek", {
    header: "11/08/2024",
    cell: PresentButton,
  }),

];
