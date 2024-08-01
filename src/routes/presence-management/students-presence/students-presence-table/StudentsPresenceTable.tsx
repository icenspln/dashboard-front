import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { defaultColumns } from "./core/columns/columns";
import data from "../../data.json"
import { PresenceList } from "./core/_models";




export function StudentsPresenceListsTable() {
  const PresenceListData: PresenceList[] = data;

  const table = useReactTable({
    columns: defaultColumns,
    data: PresenceListData,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="">
  {data.map((student, index) => (
    <div key={index} className="mb-4 "> 
      
      <table className="w-full bg-white border-2 ">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr className="border border-b-light " key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="text-textGray text-start p-3 font-normal"
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
            .filter((row) => row.original.groupId === student.groupId) 
            .map((row) => (
              <tr className="border border-b-light " key={row.id}>
                {row.getAllCells().map((cell) => (
                  <td className={`text-darkGray text-start p-3 font-normal ${cell.column.columnDef || ''}`} key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  ))}
</div>

  );
}
