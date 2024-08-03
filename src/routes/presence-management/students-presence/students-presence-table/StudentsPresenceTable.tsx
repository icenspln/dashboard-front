import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { defaultColumns } from "./core/columns/columns";
import data from "../../data.json"
import { PresenceList } from "./core/_models";
import { motion } from "framer-motion";
import { useRef } from "react";


export function StudentsPresenceListsTable() {
  const constraintsRef = useRef(null)
  const PresenceListData: PresenceList[] = data;

  const table = useReactTable({
    columns: defaultColumns,
    data: PresenceListData,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div   ref={constraintsRef}
      >
       
  {data.map((group, index) => (
    <div key={index} className="mb-4  overflow-x-clip border  rounded-xl "> 
      
      
      <motion.table
        drag={"x"}
        dragConstraints={constraintsRef}
        dragElastic={0}
        dragMomentum={false}
        className="max-w-full rounded-xl"
      >
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr className="   border-b-light " key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="text-textGray text-start p-3 font-normal "
                  colSpan={header.colSpan}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows
            .filter((row) => row.original.groupId === group.groupId) 
            .map((row) => (
              <tr className="border  border-b-light " key={row.id}>
                {row.getAllCells().map((cell) => (
                  <td className={`text-darkGray text-start p-3 font-normal w-full min-w-[220px] ${cell.column.columnDef || ''}`} key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
        </motion.table>
      
      
    </div>
    
  ))}
</div>

  );
}
