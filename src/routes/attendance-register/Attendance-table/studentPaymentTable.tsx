import {
    useReactTable,
    getCoreRowModel,
    flexRender,
  } from "@tanstack/react-table";
  import { studentPaymentColumns } from "./core/columns/columns";
  import { Student } from "./core/_models";


 
 
  import  data from "../Attendance-table/core/data.json" 
  
  export function StudentPaymentTable() {
   
    
    const studentData :Student[]= data

    // table functions
    const table = useReactTable({
      columns: studentPaymentColumns,
     // data: students,
      data:studentData,
      getCoreRowModel: getCoreRowModel(),
    });
  
    return (
      <div className="w-[637px] mt-10  border border-gray-200 rounded-lg shadow-sm">
      <table className="w-full rounded-lg bg-white ">
        <thead className="">
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr className="h-[61px]  rounded-lg px-4 py-2 border-b text-center text-blue" key={headerGroup.id}>
                {headerGroup.headers.map(
                  (
                    header // map over the headerGroup headers array
                  ) => (
                    <th
                      key={header.id}
                      className="text-textGray text-start p-3 font-normal"
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
            <tr className="border border-b-light" key={row.id}>
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
      </table>
    </div>
    );
  }
  