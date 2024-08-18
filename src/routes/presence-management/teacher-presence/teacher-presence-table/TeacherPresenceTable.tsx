import { motion } from "framer-motion";
import { useContext, useMemo, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAttendanceForTeacher } from "./core/_requests";
import { useParams } from "react-router-dom";
import { AttendanceForTeacherGroupType } from "./core/_models";
// import {
//   returnDayInAR,
//   returnInstitutionInAR,
//   returnLevelInAR,
//   returnTimeString,
// } from "../../../../handlers/returnInArabic";
import { StudentPresentButton } from "../../../../components/isPresentButton";
import { teacherpresenceTableContext } from "./core/TeacherPresenceTableContext";
import { PricingButton } from "../../../../components/PricingButtonEdit";

export function TeacherPresenceListsTable() {
  const constraintsRef = useRef(null);
  const { id } = useParams();
  const [groups, setGroups] = useState<AttendanceForTeacherGroupType[]>([]);
  console.log("presence table groups", groups);

  const { filter } = useContext(teacherpresenceTableContext);

  const { data, isLoading, error } = useQuery({
    queryKey: ["getAttendanceForTeacher", filter],
    queryFn: () => getAttendanceForTeacher(id!, filter),
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
          <>
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
                      <th className="p-2 w-[100px] text-start">الرقم</th>
                      <th className="p-2 w-[200px] text-start">الطالب</th>
                      <th className="p-2 w-[200px] text-start">
                        ثمن الدفع الشهري
                      </th>
                      <th className="p-2 w-[200px] text-start">
                        الثمن الذي يجب دفعه
                      </th>
                      <th className="p-2 w-[200px] text-start">الديون</th>
                      <th className="p-2 w-[200px] text-start">مجموع الديون</th>
                      <th className="p-2 w-[200px] text-start">رقم الهاتف</th>
                      {grp.alldays.map((day, i) => (
                        <th className="w-[200px] p-2 text-start" key={i}>
                          {new Date(day).toLocaleDateString()}
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
                        <td className="w-[100px] p-2 text-start flex gap-1">
                          {grp.group.groupId}
                        </td>

                        <td className="w-[200px] p-2 text-start flex gap-1">
                          {std.student.firstName + " " + std.student.lastName ||
                            "N/A"}
                        </td>

                        <td className="p-2 w-[200px] text-start underline">
                          <PricingButton
                            initValue={
                              std.student.groupFinancials?.groupPaidAmount || 0
                            }
                            submit={(newValue) => {
                              setGroups((prevGroups) =>
                                prevGroups.map((grpItem) =>
                                  grpItem === grp
                                    ? {
                                        ...grpItem,
                                        students: grpItem.students.map(
                                          (studentItem) =>
                                            studentItem === std
                                              ? {
                                                  ...studentItem,
                                                  student: {
                                                    ...studentItem.student,
                                                    groupFinancials: {
                                                      ...studentItem.student
                                                        .groupFinancials,
                                                      groupPaidAmount: newValue,
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
                          {std.student.financials.totalOutstandingBalance || 0}
                        </td>

                        <td className="p-2 w-[200px] text-start underline">
                          {std.student.financials.totalDebts || 0}
                        </td>
                        <td className="p-2 w-[200px] text-start underline">
                          {std.student.financials.totalOutstandingBalance +
                            std.student.financials.totalDebts || 0}
                        </td>
                        <td className="w-[200px] p-2 text-start flex gap-1">
                          {std.student.phoneNumber}
                        </td>
                        {std.attendance.map((att, i) => (
                          <th
                            className="w-[200px] p-2 text-start font-medium"
                            key={i}
                          >
                            <StudentPresentButton
                              att={att}
                              groupId={grp.group._id}
                              studentId={std.student._id}
                              invalidatedQueryName="getAttendanceForGroup"
                            />
                          </th>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </motion.table>
              </div>
            )}

            {grp.attendeesLeftGroup.length > 0 && (
              <div className="mb-8 mt-3 overflow-x-clip border border-light rounded-xl w-full bg-white">
                <h2>leftgroup</h2>
                <motion.table
                  drag={"x"}
                  dragConstraints={constraintsRef}
                  dragElastic={0}
                  dragMomentum={false}
                  className="w-full rounded-xl "
                >
                  <thead>
                    <tr className="flex items-center justify-start  w-full text-textGray font-medium border-b border-light bg-whtie">
                      <th className="p-2 w-[200px] text-start">الرقم</th>
                      <th className="p-2 w-[200px] text-start">الطالب</th>
                      <th className="p-2 w-[200px] text-start">
                        ثمن الدفع الشهري
                      </th>
                      <th className="p-2 w-[200px] text-start">
                        الثمن الذي يجب دفعه
                      </th>
                      <th className="p-2 w-[200px] text-start">الديون</th>
                      <th className="p-2 w-[200px] text-start">مجموع الديون</th>
                      <th className="p-2 w-[200px] text-start">رقم الهاتف</th>
                      {grp.attendeesLeftGroup.map((std) => (
                        <>
                          {std.attendees.map((att, i) => (
                            <th className="w-[200px] p-2 text-start" key={i}>
                              {new Date(att.date).toLocaleDateString()}
                            </th>
                          ))}
                        </>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {grp.attendeesLeftGroup.map((std, i) => (
                      <tr
                        key={i}
                        className="flex items-center justify-start  w-full text-darkGray border-b border-light py-3"
                      >
                        <td className="w-[200px] p-2 text-start flex gap-1">
                          {grp.group.groupId}
                        </td>

                        <td className="w-[200px] p-2 text-start flex gap-1">
                          {std.student.firstName + " " + std.student.lastName ||
                            "N/A"}
                        </td>

                        <td className="p-2 w-[200px] text-start underline">
                          N/A
                        </td>

                        {std.financials.totalOutstandingBalance !=
                          undefined && (
                          <td className="p-2 w-[200px] text-start underline">
                            {std.financials.totalOutstandingBalance || "N/A"}
                          </td>
                        )}

                        {std.financials.totalDebts != undefined && (
                          <td className="p-2 w-[200px] text-start underline">
                            {std.financials.totalDebts || "N/A"}
                          </td>
                        )}

                        <td className="p-2 w-[200px] text-start underline">
                          {std.financials.totalOutstandingBalance +
                            std.financials.totalDebts || "N/A"}
                        </td>

                        <td className="w-[200px] p-2 text-start flex gap-1">
                          {std.student.phoneNumber}
                        </td>

                        {std.attendees.map((att, i) => (
                          <th
                            className="w-[200px] p-2 text-start font-medium"
                            key={i}
                          >
                            <StudentPresentButton
                              att={att}
                              groupId={grp.group._id}
                              studentId={std.student._id}
                              invalidatedQueryName="getAttendanceForGroup"
                            />
                          </th>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </motion.table>
              </div>
            )}
          </>
        ))}
      </div>
    );
}
