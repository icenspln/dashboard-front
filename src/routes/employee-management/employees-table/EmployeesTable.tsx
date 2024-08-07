import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { defaultColumns } from "./core/columns/columns";
import { Employee } from "./core/_models";
import { motion } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getEmployees } from "./core/_requests";
import  data from "../employees-table/core/data.json"

export function EmployeesTable() {
  const constraintsRef = useRef(null);
  //const [Employees, setEmployees] = useState<Employee[]>([]);
  const EmployeeData :Employee[]= data
//
  ////query functions
  //const { data, isLoading } = useQuery({
  //  queryKey: ["getTeachers"],
  //  queryFn: getEmployees,
  //});
//
  //useMemo(() => {
  //  if (data && !isLoading) {
  //    setEmployees(data.data);
  //  }
  //}, [data, isLoading]);

  // table functions
  const table = useReactTable({
    columns: defaultColumns,
   // data: Employees,
    data:EmployeeData,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div
      ref={constraintsRef}
      className="overflow-x-clip max-w-[660px] bg-white border border-[#E2E8F0] rounded-xl"
    >
      <motion.table
        drag={"x"}
        dragConstraints={constraintsRef}
        dragElastic={0}
        dragMomentum={false}
        className="max-w-[660px]   rounded-xl"
      >
        <thead>
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr className="border-b  border-b-light " key={headerGroup.id}>
                {headerGroup.headers.map(
                  (
                    header // map over the headerGroup headers array
                  ) => (
                    <th
                      key={header.id}
                      className="text-textGray text-start p-3 font-normal w-full min-w-[180px]"
                      colSpan={header.colSpan}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </th>
                  )
                )}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              className="border-b  border-b-light last:border-none"
              key={row.id}
            >
              {row.getAllCells().map((cell) => {
                return (
                  <td
                    className="text-darkGray text-start p-3 font-normal w-full min-w-[180px]"
                    key={cell.id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </motion.table>
    </div>
  );
}
