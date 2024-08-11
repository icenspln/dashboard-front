import {
    useReactTable,
    getCoreRowModel,
    flexRender,
  } from "@tanstack/react-table";
  import { studentInfoColumns } from "./core/columns/columns";
  import { Student } from "./core/_models";
  import { motion } from "framer-motion";
  import { useMemo, useRef, useState } from "react";
  import { useQuery } from "@tanstack/react-query";
  import { getStudents } from "./core/_requests";
  import  data from "../Attendance-table/core/data.json" 
  
  export function StudentInfoTable() {
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
      columns: studentInfoColumns,
     // data: students,
      data:studentData,
      getCoreRowModel: getCoreRowModel(),
    });
  
    return (
      <div 
      ref={constraintsRef}
      className=" max-w-4xl w-[637px] mt-10 border border-[#E2E8F0] rounded-xl"
      >
      <div className="bg-gray-100 p-4  text-center text-blue text-2xl border-b rounded-t-xl ">
        {data[0].firstName}
      </div>
      <motion.table
      
       className="w-[633px]  rounded-b-xl bg-white"
       >
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} 
            className="text-center">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-2 ">
                  <div className="text-gray-500">
                    {cell.column.columnDef.header as string}
                  </div>
                  <div>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </motion.table>
    </div>
      
    );
  }
  