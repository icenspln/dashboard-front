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
      <div className="max-w-4xl w-[637px] mt-10  border border-gray-200 rounded-lg shadow-sm">
      <div className="border rounded-lg shadow-md overflow-hidden">
        {table.getHeaderGroups().map((headerGroup) => (
          <div key={headerGroup.id} className="bg-gray-100 p-4">
            {headerGroup.headers.map((header, index) => (
              <div key={header.id} className={`text-center ${index !== 0 ? 'border-l border-gray-300' : ''} p-2`}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </div>
            ))}
          </div>
        ))}
        {table.getRowModel().rows.map((row) => (
          <div key={row.id} className="grid grid-cols-5 divide-x divide-gray-300 py-2">
            {row.getVisibleCells().map((cell) => (
              <div key={cell.id} className="text-center p-2">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
      
    );
  }
  