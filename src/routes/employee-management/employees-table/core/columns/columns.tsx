import { createColumnHelper } from "@tanstack/react-table";
import { Employee } from "../_models";

import { PricingButton } from "../../../../../components/PricingButtonEdit";

const columnHelper = createColumnHelper<Employee>();

export const defaultColumns = [
  
  columnHelper.accessor("date", {
    header: "اليوم",
    cell: (info) => info?.getValue(),
  }),
  
  columnHelper.accessor("firstName", {
    header: "الإسم الكامل",
    cell: (info) => info?.getValue(),
  }),

  columnHelper.accessor("position", {
    header: "الوظيفة",
    cell: (info) => info?.getValue(),
  }),
 
  columnHelper.accessor("phoneNumber", {
    header: "رقم الهاتف",
    cell: (info) => info?.getValue(),
  }),
 

  


];
