import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { defaultColumns } from "./core/columns/columns";
import data from "../data.json"
import { PresenceList } from "./core/_models";
import { motion } from "framer-motion";
import { useRef } from "react";
import PersonSvg from "../../../../assets/icons/PersonSvg";
import PhoneSvg from "../../../../assets/icons/PhoneSvg";

export function EmployeePresenceListsTable() {
  const constraintsRef = useRef(null)
  const PresenceListData: PresenceList[] = data;

  const table = useReactTable({
    columns: defaultColumns,
    data: PresenceListData,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
    <div>
      <p className="text-xl font-medium">
        أمير مسدو
      </p>
      <p className="text-sm text-gray-500 flex items-center gap-[16px] mt-2">
        <span className=" flex items-center gap-[8px] ">
          <PersonSvg />
          مستشار توجيه
        </span>
  
        <span className="flex items-center gap-[8px]">
          <PhoneSvg />
          63 25 78 0554
        </span>
      </p>
    </div>
    <div className="w-[511px] overflow-x-clip border border-[#E2E8F0] rounded-xl mt-4">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr className="border-b border-b-light" key={headerGroup.id}>
                {headerGroup.headers.map(
                  (
                    header, // map over the headerGroup headers array
                  ) => (
                    <th
                      key={header.id}
                      className="text-textGray text-start p-3 font-normal w-full min-w-[180px]"
                      colSpan={header.colSpan}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                    </th>
                  ),
                )}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr className="border-b border-b-light last:border-none" key={row.id}>
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
      </table>
    </div>
  </>
  
  );
}
