import { motion } from "framer-motion";
import { useContext, useMemo, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAttendanceForStudent } from "./core/_requests";
import { useParams } from "react-router-dom";
import { AttendanceForStudentGroupType } from "./core/_models";
import {
    digitToStringLevel,
    returnTimeString,
} from "../../../../handlers/returnInArabic";
import { StudentPresentButton } from "../../../../components/isPresentButton";
import { StudentsTableContext } from "./core/StudentsTableContext";
import Spinner from "../../../../components/Spinner";
import emptyImage from "../../../../assets/imgs/empty.png";

export function StudentsPresenceListsTable() {
    const { filter } = useContext(StudentsTableContext);
    const constraintsRef = useRef(null);
    const { id } = useParams();
    const [groups, setGroups] = useState<AttendanceForStudentGroupType[]>([]);

    const { data, isLoading, error } = useQuery({
        queryKey: ["getAttendanceForStudent", filter],
        queryFn: () => getAttendanceForStudent(id!, filter),
    });

    useMemo(() => {
        if (data) {
            setGroups(data.groups);
        }
    }, [data, isLoading, error]);

    //     enum: ["present", "absent", "upcoming", "not joined", "unknown" , "out of group", "changed group" , "teacher absent"],

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-full">
                Something went wrong..
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-full">
                <Spinner />
            </div>
        );
    }

    if (data.groups.length == 0)
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
                    className="w-full bg-white rounded-xl"
                >
                    <tbody>
                        <tr>
                            <td className="p-4 w-full text-center">
                                <img
                                    className="mx-auto"
                                    width={600}
                                    src={emptyImage}
                                    alt=""
                                />
                                Student did not attende any classes yet
                            </td>
                        </tr>
                    </tbody>
                </motion.table>
            </div>
        );

    return (
        <div ref={constraintsRef}>
            {groups.map((grp, i) => (
                <div
                    key={i}
                    className="mb-4 overflow-x-clip border border-light rounded-xl w-full"
                >
                    <motion.table
                        drag={"x"}
                        dragConstraints={constraintsRef}
                        dragElastic={0}
                        dragMomentum={false}
                        className="w-full rounded-xl "
                    >
                        <thead>
                            <tr className="flex items-center justify-start gap-7 w-full text-textGray font-medium border-b border-light ">
                                {grp?.group.groupId && (
                                    <th className="p-2 w-[200px] text-start">
                                        Group
                                    </th>
                                )}
                                {grp?.attendance.map((att, i) => (
                                    <th
                                        className=" w-[200px] p-2 text-start"
                                        key={i}
                                    >
                                        {new Date(
                                            att.date
                                        ).toLocaleDateString()}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="flex items-center justify-start gap-7 w-full text-darkGray">
                                {grp.group.groupId && (
                                    <td className="w-[300px] p-2 text-start flex gap-1">
                                        <span>
                                            {digitToStringLevel(
                                                grp.group.level
                                            )}
                                        </span>
                                        <span>{grp.group.institution}|</span>
                                        <span>{grp.group.dayOfWeek}|</span>
                                        <span>
                                            {returnTimeString(grp.group.timing)}
                                        </span>
                                    </td>
                                )}
                                {grp?.attendance.map((att, i) => (
                                    <td
                                        className="w-[200px] p-2 text-start"
                                        key={i}
                                    >
                                        <StudentPresentButton
                                            invalidatedQueryName="getAttendanceForStudent"
                                            att={att}
                                            studentId={id!}
                                            groupId={grp.group._id}
                                        />
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </motion.table>
                </div>
            ))}
        </div>
    );
}
