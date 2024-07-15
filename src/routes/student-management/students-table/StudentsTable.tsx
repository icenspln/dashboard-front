import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { defaultColumns } from "./core/columns/columns";
import data from "./core/data.json";
import { Student } from "./core/_models";

export function StudentsTable() {
  const studentData: Student[] = data;

  const table = useReactTable({
    columns: defaultColumns,
    data: studentData,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="">
      <table className="w-full bg-white ">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr className="border border-b-light" key={headerGroup.id}>
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
