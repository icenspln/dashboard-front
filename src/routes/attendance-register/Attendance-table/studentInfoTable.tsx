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
        <div className="max-w-4xl w-[637px] h-[133px] mt-10  border border-gray-200 rounded-lg shadow-sm">
        <table className=" w-[633px] rounded-lg  bg-white">
          <thead  className="">
            <tr className="h-[61px]  px-4 py-2 border-b text-center text-blue ">
              {table.getRowModel().rows.map((row) => (
                <th key={row.id}>
                    
                  {flexRender(
                    row.getVisibleCells()[0].column.columnDef.cell,
                    row.getVisibleCells()[0].getContext()
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="text-center">
                {row.getVisibleCells().slice(1).map((cell) => (
                  <td key={cell.id} className="px-4 py-2 border-b">
                    <div className="text-gray-500">
                      {flexRender(
                        cell.column.columnDef.header,
                        cell.getContext()
                      )}
                    </div>
                    <div>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    );
  }
  