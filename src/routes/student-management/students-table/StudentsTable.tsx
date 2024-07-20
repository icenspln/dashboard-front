import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { defaultColumns } from "./core/columns/columns";
import data from "./core/data.json";
import { Student } from "./core/_models";
import { motion } from "framer-motion";
import { useRef } from "react";

export function StudentsTable() {
  const constraintsRef = useRef(null);
  const studentData: Student[] = data;

  const table = useReactTable({
    columns: defaultColumns,
    data: studentData,
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
                      className="text-textGray text-start p-3 font-normal min-w-[180px]"
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
            <tr className="border border-b-light last:border-none" key={row.id}>
              {row.getAllCells().map((cell) => {
                return (
                  <td
                    className="text-darkGray text-start p-3 font-normal"
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
