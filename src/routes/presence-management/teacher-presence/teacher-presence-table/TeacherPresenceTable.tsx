import { motion } from "framer-motion";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAttendanceForTeacher } from "./core/_requests";
import { useParams } from "react-router-dom";
import { AttendanceForTeacherGroupType } from "./core/_models";

import NoteSvg from "../../../../assets/icons/NoteSvg";
import { StudentPresentButton } from "../../../../components/isPresentButton";
import { teacherpresenceTableContext } from "./core/TeacherPresenceTableContext";
import { PricingButton } from "../../../../components/PricingButtonEdit";
import { GlobalContext } from "../../../../GlobalContext";
import { Teacher } from "../../../teacher-management/teacher-table/core/_models";
import { returnGroupLabelWithoutTeacher } from "../../../../handlers/returnInArabic";
// import { Note } from "../../../attendance-register/Attendance-table/core/_models";

export function TeacherPresenceListsTable() {
    const globalContext = useContext(GlobalContext);
    const constraintsRef = useRef(null);
    const { id } = useParams();
    const [groups, setGroups] = useState<AttendanceForTeacherGroupType[]>([]);
    const [teacher, setTeacher] = useState<Teacher>();
    const [date, setDate] = useState<{ month: number; year: number }>();

    const { filter } = useContext(teacherpresenceTableContext);

    const { data, isLoading, error } = useQuery({
        queryKey: ["getAttendanceForTeacher", filter],
        queryFn: () => getAttendanceForTeacher(id!, filter),
    });

    useMemo(() => {
        if (data) {
            setGroups(data.groups);
            setTeacher(data.teacher);
            setDate({ month: data.queryMonth, year: data.queryYear });
        }
    }, [data, isLoading, error]);

    useEffect(() => {
        if (groups) globalContext.setGroups(groups);
        if (teacher) globalContext.setTeacher(teacher);
        if (date) globalContext.setDate(date);
    }, [groups, teacher]);

    //     enum: ["present", "absent", "upcoming", "not joined", "unknown" , "out of group", "changed group" , "teacher absent"],

    if (data && !isLoading && !error)
        return (
            <div ref={constraintsRef}>
                {groups.map((grp, i) => (
                    <div key={i}>
                        {grp.students.length > 0 && (
                            <div
                                key={i}
                                className="mb-8 overflow-x-clip border border-light rounded-xl w-full bg-white"
                            >
                                <motion.table
                                    drag={"x"}
                                    dragConstraints={constraintsRef}
                                    dragElastic={0}
                                    dragMomentum={false}
                                    className="w-full rounded-xl "
                                >
                                    <thead>
                                        <tr className="flex items-center justify-start gap-7 w-full text-textGray font-medium border-b border-light bg-whtie">
                                            <th className="p-2 w-[250px] text-start">
                                                Group
                                            </th>
                                            <th className="p-2 w-[100px] text-start">
                                                ID
                                            </th>
                                            <th className="p-2 w-[200px] text-start">
                                                Student
                                            </th>
                                            <th className="p-2 w-[200px] text-start">
                                                Total monthly payment
                                            </th>
                                            <th className="p-2 w-[200px] text-start">
                                                Total to pay
                                            </th>
                                            <th className="p-2 w-[200px] text-start">
                                                Debts
                                            </th>
                                            <th className="p-2 w-[200px] text-start">
                                                Total Debts
                                            </th>
                                            <th className="p-2 w-[200px] text-start">
                                                Phone number
                                            </th>
                                            {grp.alldays.map((day, i) => (
                                                <th
                                                    className="w-[200px] p-2 text-start"
                                                    key={i}
                                                >
                                                    {new Date(
                                                        day
                                                    ).toLocaleDateString()}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {grp.students.map((std, i) => (
                                            <tr
                                                key={i}
                                                className="flex items-center justify-start gap-7 w-full text-darkGray border-b border-light py-3"
                                            >
                                                <td className="w-[250px] p-2 text-start flex gap-1">
                                                    {returnGroupLabelWithoutTeacher(
                                                        grp.group as any
                                                    )}
                                                </td>
                                                <td className="w-[100px] p-2 text-start flex gap-1">
                                                    {grp.group.groupId}
                                                </td>

                                                <td className="w-[200px] p-2 text-start flex gap-1">
                                                    <div className="group flex items-center gap-[10px]">
                                                        <span className="relative">
                                                            <NoteSvg />
                                                        </span>
                                                        <div className="w-[629px] max-h-[200px] overflow-auto flex hidden group-hover:block absolute bg-white p-2 border rounded shadow-md ">
                                                            {std.notes.map(
                                                                (note) => (
                                                                    <div
                                                                        key={
                                                                            note._id
                                                                        }
                                                                        className="flex border-t gap-[15px] py-2"
                                                                    >
                                                                        <p>
                                                                            {
                                                                                note.date
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {
                                                                                note.text
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>
                                                        {std.student.firstName +
                                                            " " +
                                                            std.student
                                                                .lastName ||
                                                            "N/A"}
                                                    </div>
                                                </td>

                                                <td className="p-2 w-[200px] text-start underline">
                                                    <PricingButton
                                                        initValue={
                                                            std.student
                                                                .groupFinancials
                                                                ?.groupPaidAmount ||
                                                            0
                                                        }
                                                        submit={(newValue) => {
                                                            setGroups(
                                                                (prevGroups) =>
                                                                    prevGroups.map(
                                                                        (
                                                                            grpItem
                                                                        ) =>
                                                                            grpItem ===
                                                                            grp
                                                                                ? {
                                                                                      ...grpItem,
                                                                                      students:
                                                                                          grpItem.students.map(
                                                                                              (
                                                                                                  studentItem
                                                                                              ) =>
                                                                                                  studentItem ===
                                                                                                  std
                                                                                                      ? {
                                                                                                            ...studentItem,
                                                                                                            student:
                                                                                                                {
                                                                                                                    ...studentItem.student,
                                                                                                                    groupFinancials:
                                                                                                                        {
                                                                                                                            ...studentItem
                                                                                                                                .student
                                                                                                                                .groupFinancials,
                                                                                                                            groupPaidAmount:
                                                                                                                                newValue,
                                                                                                                        },
                                                                                                                },
                                                                                                        }
                                                                                                      : studentItem
                                                                                          ),
                                                                                  }
                                                                                : grpItem
                                                                    )
                                                            );
                                                        }}
                                                    />
                                                </td>

                                                <td className="p-2 w-[200px] text-start underline">
                                                    {std.student.financials
                                                        .totalOutstandingBalance ||
                                                        0}
                                                </td>

                                                <td className="p-2 w-[200px] text-start underline">
                                                    {std.student.financials
                                                        .totalDebts || 0}
                                                </td>
                                                <td className="p-2 w-[200px] text-start underline">
                                                    {std.student.financials
                                                        .totalOutstandingBalance +
                                                        std.student.financials
                                                            .totalDebts || 0}
                                                </td>
                                                <td className="w-[200px] p-2 text-start flex gap-1">
                                                    {std.student.phoneNumber}
                                                </td>
                                                {std.attendance.map(
                                                    (att, i) => (
                                                        <th
                                                            className="w-[200px] p-2 text-start font-medium"
                                                            key={i}
                                                        >
                                                            <StudentPresentButton
                                                                att={att}
                                                                groupId={
                                                                    grp.group
                                                                        ._id
                                                                }
                                                                studentId={
                                                                    std.student
                                                                        ._id
                                                                }
                                                                invalidatedQueryName="getAttendanceForGroup"
                                                            />
                                                        </th>
                                                    )
                                                )}
                                            </tr>
                                        ))}
                                    </tbody>
                                </motion.table>
                            </div>
                        )}

                        {grp.attendeesLeftGroup.length > 0 && (
                            <div className="mb-8 mt-3 overflow-x-clip border border-light rounded-xl w-full bg-white">
                                <motion.table
                                    drag={"x"}
                                    dragConstraints={constraintsRef}
                                    dragElastic={0}
                                    dragMomentum={false}
                                    className="w-full rounded-xl "
                                >
                                    <thead>
                                        <tr className="flex items-center justify-start  w-full text-textGray font-medium border-b border-light bg-whtie">
                                            <th className="p-2 w-[250px] text-start">
                                                Group
                                            </th>
                                            <th className="p-2 w-[100px] text-start">
                                                ID{" "}
                                            </th>
                                            <th className="p-2 w-[200px] text-start">
                                                Student
                                            </th>
                                            <th className="p-2 w-[200px] text-start">
                                                Total monthly payment
                                            </th>
                                            <th className="p-2 w-[200px] text-start">
                                                Total to pay
                                            </th>
                                            <th className="p-2 w-[200px] text-start">
                                                Debts
                                            </th>
                                            <th className="p-2 w-[200px] text-start">
                                                Total debts
                                            </th>
                                            <th className="p-2 w-[200px] text-start">
                                                Phone number
                                            </th>
                                            {grp.attendeesLeftGroup.map(
                                                (std) => {
                                                    return std.attendees.map(
                                                        (att, i) => (
                                                            <th
                                                                className="w-[200px] p-2 text-start"
                                                                key={i}
                                                            >
                                                                {new Date(
                                                                    att.date
                                                                ).toLocaleDateString()}
                                                            </th>
                                                        )
                                                    );
                                                }
                                            )}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {grp.attendeesLeftGroup.map(
                                            (std, i) => (
                                                <tr
                                                    key={i}
                                                    className="flex items-center justify-start  w-full text-warning border-b border-light py-3"
                                                >
                                                    <td className="w-[250px] p-2 text-start flex gap-1">
                                                        {returnGroupLabelWithoutTeacher(
                                                            grp.group as any
                                                        )}
                                                    </td>
                                                    <td className="w-[100px] p-2 text-start flex gap-1">
                                                        {grp.group.groupId}
                                                    </td>

                                                    <td className="w-[200px] p-2 text-start flex gap-1">
                                                        {std.student.firstName +
                                                            " " +
                                                            std.student
                                                                .lastName ||
                                                            "N/A"}
                                                    </td>

                                                    <td className="p-2 w-[200px] text-start underline">
                                                        N/A
                                                    </td>

                                                    {std.financials
                                                        .totalOutstandingBalance !=
                                                        undefined && (
                                                        <td className="p-2 w-[200px] text-start underline">
                                                            {std.financials
                                                                .totalOutstandingBalance ||
                                                                "N/A"}
                                                        </td>
                                                    )}

                                                    {std.financials
                                                        .totalDebts !=
                                                        undefined && (
                                                        <td className="p-2 w-[200px] text-start underline">
                                                            {std.financials
                                                                .totalDebts ||
                                                                "N/A"}
                                                        </td>
                                                    )}

                                                    <td className="p-2 w-[200px] text-start underline">
                                                        {std.financials
                                                            .totalOutstandingBalance +
                                                            std.financials
                                                                .totalDebts ||
                                                            "N/A"}
                                                    </td>

                                                    <td className="w-[200px] p-2 text-start flex gap-1">
                                                        {
                                                            std.student
                                                                .phoneNumber
                                                        }
                                                    </td>

                                                    {std.attendees.map(
                                                        (att, i) => (
                                                            <th
                                                                className="w-[200px] p-2 text-start font-medium"
                                                                key={i}
                                                            >
                                                                <StudentPresentButton
                                                                    att={att}
                                                                    groupId={
                                                                        grp
                                                                            .group
                                                                            ._id
                                                                    }
                                                                    studentId={
                                                                        std
                                                                            .student
                                                                            ._id
                                                                    }
                                                                    invalidatedQueryName="getAttendanceForGroup"
                                                                />
                                                            </th>
                                                        )
                                                    )}
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </motion.table>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        );
}
