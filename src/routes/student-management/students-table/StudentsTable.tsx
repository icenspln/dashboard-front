import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { Student } from "./core/_models";
import { motion } from "framer-motion";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getStudents } from "./core/_requests";
import { StudentsTableContext } from "./core/StudentsTableContext";
import { defaultColumns } from "./columns/columns";

function StudentsTable() {
  const { updateModal, institutionFilter, searchBarFilter } =
    useContext(StudentsTableContext);
  const [filter, setFilter] = useState("");

  const constraintsRef = useRef(null);
  const [students, setStudents] = useState<Student[]>([]);

  //query functions

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["getStudents"],
    queryFn: () => getStudents(filter),
  });

  useEffect(() => {
    let url = "institution=";
    url += institutionFilter.join(",") + `&`;
    url += `search=${searchBarFilter}&`;
    console.log(`fiinal url`, url);
    setFilter(url);
    refetch();
  }, [institutionFilter, searchBarFilter]);

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
      {/* <StudentDeleteModal /> */}
    </div>
  );
}

export function StudentTableWrapper() {
  return <StudentsTable />;
}
