import { motion } from "framer-motion";
import { useContext, useMemo, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAttendanceForStudent } from "./core/_requests";
import { useParams } from "react-router-dom";
import { AttendanceForStudentGroupType } from "./core/_models";
import {
  returnDayInAR,
  returnInstitutionInAR,
  returnLevelInAR,
  returnTimeString,
} from "../../../../handlers/returnInArabic";
import { StudentPresentButton } from "../../../../components/isPresentButton";
import { StudentsTableContext } from "./core/StudentsTableContext";

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
                  <th className="p-2 w-[200px] text-start">الفوج</th>
                )}
                {grp?.attendance.map((att, i) => (
                  <th className=" w-[200px] p-2 text-start" key={i}>
                    {new Date(att.date).toLocaleDateString()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="flex items-center justify-start gap-7 w-full text-darkGray">
                {grp.group.groupId && (
                  <td className="w-[200px] p-2 text-start flex gap-1">
                    <span>{returnLevelInAR(grp.group.level)}</span>
                    <span>{returnInstitutionInAR(grp.group.institution)}|</span>
                    <span>{returnDayInAR(grp.group.dayOfWeek)}|</span>
                    <span>{returnTimeString(grp.group.timing)}</span>
                  </td>
                )}
                {grp?.attendance.map((att, i) => (
                  <td className="w-[200px] p-2 text-start" key={i}>
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
