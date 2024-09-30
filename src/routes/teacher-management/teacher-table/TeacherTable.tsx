import {
    useReactTable,
    getCoreRowModel,
    flexRender,
} from "@tanstack/react-table";
import { defaultColumns } from "./core/columns/columns";
import { Teacher } from "./core/_models";
import { useContext, useMemo, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getTeachers } from "./core/_requests";
import { motion } from "framer-motion";
import {
    TeachersTableContext,
    useTeacherTable,
} from "./core/TeacherTableContext";
import { Pagination } from "../../../components/pagination";
import { TeacherPaymentModal } from "./teacher-payment-modal/TeacherPaymentModal";

export function TeacherTable() {
    const { paymentCheckModal } = useTeacherTable();
    const constraintsRef = useRef(null);
    const [teachers, setTeachers] = useState<Teacher[]>([]);
    const { filter } = useContext(TeachersTableContext);
    // const teacherData: Teacher[] = data;
    const [page, setPage] = useState(1);

    //query functions
    const { data, isLoading } = useQuery({
        queryKey: ["getTeachers", filter, page],
        queryFn: () => getTeachers(filter, page),
    });

    useMemo(() => {
        if (data && !isLoading) {
            setTeachers(data.data);
        }
    }, [data, isLoading]);

    // table functions
    const table = useReactTable({
        columns: defaultColumns,
        //data: teachers,
        data: teachers,
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
                {paymentCheckModal && <TeacherPaymentModal />}
            </div>
            {data?.totalPages > 1 && (
                <Pagination
                    page={page}
                    totalPages={data.totalPages}
                    setPage={setPage}
                />
            )}
        </>
    );
}
