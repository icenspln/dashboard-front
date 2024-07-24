import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { defaultColumns } from "./core/columns/columns";
import { Student } from "./core/_models";
import { motion } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getStudents } from "./core/_requests";
import  data from "../students-table/core/data.json"

export function StudentsTable() {
  const constraintsRef = useRef(null);
  //const [students, setStudents] = useState<Student[]>([]);
  const studentData :Student[]= data
//
  ////query functions
  //const { data, isLoading } = useQuery({
  //  queryKey: ["getTeachers"],
  //  queryFn: getStudents,
  //});
//
  //useMemo(() => {
  //  if (data && !isLoading) {
  //    setStudents(data.data);
  //  }
  //}, [data, isLoading]);

  // table functions
  const table = useReactTable({
    columns: defaultColumns,
   // data: students,
    data:studentData,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div
      ref={constraintsRef}
      className="overflow-x-clip border border-[#E2E8F0] rounded-xl"
    >
      <motion.table
        drag={"x"}
        dragConstraints={constraintsRef}
        dragElastic={0}
        dragMomentum={false}
        className="max-w-full bg-white rounded-xl"
      >
        <thead>
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr className="border-b border-b-light" key={headerGroup.id}>
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
              className="border-b border-b-light last:border-none"
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
