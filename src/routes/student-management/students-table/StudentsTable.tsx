import {
    useReactTable,
    getCoreRowModel,
    flexRender,
} from "@tanstack/react-table";
import { Student } from "./core/_models";
import { motion } from "framer-motion";
import { useContext, useMemo, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getStudents } from "./core/_requests";
import { StudentsTableContext } from "./core/StudentsTableContext";
import StudentCardEdit from "./student-edit-card/StudentCard";
import { defaultColumns } from "./core/columns/columns";
import { Pagination } from "../../../components/pagination";
import { StudentGroupModal } from "./student-group-modal/StudentGroupModal";

function StudentsTable() {
    const { filter, enrollStudentModal, editCardModal } =
        useContext(StudentsTableContext);
    const constraintsRef = useRef(null);
    const [students, setStudents] = useState<Student[]>([]);
    const [page, setPage] = useState<number>(1);

    //query functions
    const { data, isLoading } = useQuery({
        queryKey: ["getStudents", filter, page],
        queryFn: () => getStudents(filter, page),

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

    return (
        <>
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
                                <tr
                                    className="border-b border-b-light"
                                    key={headerGroup.id}
                                >
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
                                                    header.column.columnDef
                                                        .header,
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
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </motion.table>
                {enrollStudentModal && <StudentGroupModal />}
                {editCardModal && <StudentCardEdit />}
            </div>
            {data?.totalPages > 1 && (
                <Pagination
                    setPage={setPage}
                    page={page}
                    totalPages={data.totalPages}
                />
            )}
        </>
    );
}

export function StudentTableWrapper() {
    return <StudentsTable />;
}
