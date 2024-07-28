import {
    useReactTable,
    getCoreRowModel,
    flexRender,
  } from "@tanstack/react-table";
  import { studentPaymentColumns } from "./core/columns/columns";
  import { Student } from "./core/_models";
  import ConfirmButton from "./core/columns/overlays/Popup-menu-component/confirmButton";
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
      <div className="max-w-4xl w-[637px] h-[151px] mt-10  border border-gray-200 rounded-lg ">
      <div className="border rounded-lg  overflow-hidden">
        <div className="bg-gray-100 ">
          {table.getHeaderGroups().map((headerGroup) => (
            <div key={headerGroup.id} className="grid grid-cols-3 divide-x divide-gray-300 text-gray-400">
              {headerGroup.headers.map((header) => (
                <div key={header.id} className="text-center py-2">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </div>
              ))}
            </div>
          ))}
          {table.getRowModel().rows.map((row) => (
            <div key={row.id} className="grid grid-cols-3 divide-x divide-gray-300 py-2">
              {row.getVisibleCells().map((cell) => (
                <div key={cell.id} className="text-center  flex justify-center align-center">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between p-4 bg-white gap-[12px]">
         
          <input
            type="text"
            className="w-full border border-gray-300 outline-gray-300 rounded-lg p-2 w-1/2"
    
            placeholder="2000 دج"
            
          />
          <ConfirmButton text="تسجيل دفع جديد" color="bg-blue" textColor="text-white"/>
        </div>
      </div>
    </div>
    );
  }
  