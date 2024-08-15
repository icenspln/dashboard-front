import { motion } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAttendanceForTeacher } from "./core/_requests";
import { useParams } from "react-router-dom";
import { AttendanceForTeacherGroupType } from "./core/_models";
import {
  returnDayInAR,
  returnInstitutionInAR,
  returnLevelInAR,
  returnTimeString,
} from "../../../../handlers/returnInArabic";
import { StudentPresentButton } from "../../../../components/isPresentButton";

export function TeacherPresenceListsTable() {
  const constraintsRef = useRef(null);
  const { id } = useParams();
  const [groups, setGroups] = useState<AttendanceForTeacherGroupType[]>([]);

  console.log(groups);

  const { data, isLoading, error } = useQuery({
    queryKey: ["getAttendanceForTeacher"],
    queryFn: () => getAttendanceForTeacher(id!),
  });

  useMemo(() => {
    if (data) {
      setGroups(data.groups);
    }
  }, [data, isLoading, error]);

  //     enum: ["present", "absent", "upcoming", "not joined", "unknown" , "out of group", "changed group" , "teacher absent"],

  if (data && !isLoading && !error)
    return (
      <div ref={constraintsRef}>
        {groups.map((grp, i) => (
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
                  {grp.group.groupId && (
                    <th className="p-2 w-[200px] text-start">الفوج</th>
                  )}
                  {grp.group.groupId && (
                    <th className="p-2 w-[100px] text-start">الرقم</th>
                  )}
                  {grp.students && (
                    <th className="p-2 w-[200px] text-start">الطالب</th>
                  )}

                  {grp.group.pricing && (
                    <th className="p-2 w-[200px] text-start">
                      ثمن الدفع الشهري
                    </th>
                  )}
                  {grp.alldays.map((day, i) => (
                    <th className="w-[200px] p-2 text-start" key={i}>
                      {new Date(day).toLocaleDateString()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {grp?.students.map((std, i) => (
                  <tr
                    key={i}
                    className="flex items-center justify-start gap-7 w-full text-darkGray border-b border-light py-3"
                  >
                    {grp.group && (
                      <td className="w-[200px] p-2 text-start flex gap-1">
                        <span>{returnLevelInAR(grp.group.level)}</span>
                        <span>
                          {returnInstitutionInAR(grp.group.institution)}|
                        </span>
                        <span>{returnDayInAR(grp.group.dayOfWeek)}|</span>
                        <span>{returnTimeString(grp.group.timing)}</span>
                      </td>
                    )}

                    {grp.group.groupId && (
                      <td className="w-[100px] p-2 text-start flex gap-1">
                        {grp.group.groupId}
                      </td>
                    )}

                    <td className="w-[200px] p-2 text-start flex gap-1">
                      {std.student.firstName + " " + std.student.lastName}
                    </td>
                    {grp.group.pricing && (
                      <td className="p-2 w-[200px] text-start">
                        {grp.group.pricing}
                      </td>
                    )}
                    {std.attendance.map((att, i) => (
                      <th
                        className="w-[200px] p-2 text-start font-medium"
                        key={i}
                      >
                        <StudentPresentButton
                          att={att}
                          groupId={grp.group._id}
                          studentId={std.student._id}
                        />
                      </th>
                    ))}
                  </tr>
                ))}
              </tbody>
            </motion.table>
          </div>
        ))}
      </div>
    );
}
