import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { defaultColumns } from "./core/columns/columns";
import { motion } from "framer-motion";
import { Group } from "./core/_models";
import { useMemo, useRef, useState , useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { getGroups } from "./core/_requests";
import data from "../groups-table/core/data.json"
import { GroupsTableContext } from "./core/GroupsTableContext";

export function GroupsTable() {

  const { filter } = useContext(GroupsTableContext);
  const constraintsRef = useRef(null);
  const [students, setStudents] = useState<Group[]>([]);

  //query functions
  const { data, isLoading } = useQuery({
    queryKey: ["getStudents", filter],
    queryFn: () => getGroups(filter),
    // enabled: filt
  });

  useMemo(() => {
    if (data && !isLoading) {
      setStudents(data.data);
    }
  }, [data, isLoading]);

  // table functions
  const table = useReactTable({
    columns: defaultColumns,
    data: students,
    getCoreRowModel: getCoreRowModel(),
  });
//   const constraintsRef = useRef(null);
//   const groupsData : Group = data
// //  const [groups, setGroups] = useState<Group[]>([]);
// //
//  // //query functions
//  // const { data, isLoading } = useQuery({
//  //   queryKey: ["getGroups"],
//  //   queryFn: getGroups,
//  // });
// //
//  // useMemo(() => {
//  //   if (data && !isLoading) {
//  //     setGroups(data.data);
//  //   }
//  // }, [data, isLoading]);

//   // table functions
//   const table = useReactTable({
//     columns: defaultColumns,
//     //data: groups,
//     data : groupsData,
//     getCoreRowModel: getCoreRowModel(),
//   });
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
                      className="text-textGray text-start p-3 font-normal w-full min-w-[180px]"
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
            <tr
              className="border-b border-b-light last:border-none"
              key={row.id}
            >
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
      </motion.table>
    </div>
  );
}
