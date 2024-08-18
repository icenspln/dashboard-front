import { motion } from "framer-motion";
import { useContext, useMemo, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { AttendanceForGroupType } from "./core/_models";
import { StudentPresentButton } from "../../../../components/isPresentButton";
import { getAttendanceForGroup } from "./core/_requests";
import { GroupsTableContext } from "./core/GroupsTableContext";
import { PricingButton } from "../../../../components/PricingButtonEdit";

export function GroupsPresenceListsTable() {
  const { filter } = useContext(GroupsTableContext);
  const constraintsRef = useRef(null);
  const { id } = useParams();
  const [group, setGroup] = useState<AttendanceForGroupType>();

  const { data, isLoading, error } = useQuery({
    queryKey: ["getAttendanceForGroup", filter],
    queryFn: () => getAttendanceForGroup(id!, filter),
  });

  useMemo(() => {
    if (data) {
      setGroup(data);
    }
  }, [data, isLoading, error]);

  //     enum: ["present", "absent", "upcoming", "not joined", "unknown" , "out of group", "changed group" , "teacher absent"],

  if (group)
    return (
      <div ref={constraintsRef}>
        <div className="mb-8 overflow-x-clip border border-light rounded-xl w-full bg-white">
          <motion.table
            drag={"x"}
            dragConstraints={constraintsRef}
            dragElastic={0}
            dragMomentum={false}
            className="w-full rounded-xl "
          >
            <thead>
              <tr className="flex items-center justify-start gap-7 w-full text-textGray font-medium border-b border-light bg-whtie">
                {group.group.groupId && (
                  <th className="p-2 w-[100px] text-start">الرقم</th>
                )}
                {group.students && (
                  <th className="p-2 w-[200px] text-start">الطالب</th>
                )}

                {group.group.pricing && (
                  <th className="p-2 w-[200px] text-start">ثمن الدفع الشهري</th>
                )}
                {group.group.pricing && (
                  <th className="p-2 w-[200px] text-start">
                    الثمن الذي يجب دفعه
                  </th>
                )}
                {group.group.pricing && (
                  <th className="p-2 w-[200px] text-start">الديون</th>
                )}
                {group.group.pricing && (
                  <th className="p-2 w-[200px] text-start">مجموع الديون</th>
                )}
                {group.students && (
                  <th className="p-2 w-[200px] text-start">رقم الهاتف</th>
                )}
                {group.alldays.map((day, i) => (
                  <th className="w-[200px] p-2 text-start" key={i}>
                    {new Date(day).toLocaleDateString()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {group.students.map((std, i) => (
                <tr
                  key={i}
                  className="flex items-center justify-start gap-7 w-full text-darkGray border-b border-light py-3"
                >
                  {group.group.groupId && (
                    <td className="w-[100px] p-2 text-start flex gap-1">
                      {group.group.groupId}
                    </td>
                  )}

                  <td className="w-[200px] p-2 text-start flex gap-1">
                    {std.student.firstName + " " + std.student.lastName}
                  </td>

                  {std.student.groupFinancials.groupPaidAmount && (
                    <td className="p-2 w-[200px] text-start underline">
                      {/* {std.student.groupFinancials.groupPaidAmount} */}
                      <PricingButton
                        initValue={std.student.groupFinancials.groupPaidAmount}
                      />
                    </td>
                  )}

                  {std.student.financials.totalOutstandingBalance !=
                    undefined && (
                    <td className="p-2 w-[200px] text-start underline">
                      {std.student.financials.totalOutstandingBalance}
                    </td>
                  )}

                  {std.student.financials.totalDebts != undefined && (
                    <td className="p-2 w-[200px] text-start underline">
                      {std.student.financials.totalDebts}
                    </td>
                  )}
                  {std.student.financials.totalOutstandingBalance !=
                    undefined &&
                    std.student.financials.totalDebts != undefined && (
                      <td className="p-2 w-[200px] text-start underline">
                        {std.student.financials.totalOutstandingBalance +
                          std.student.financials.totalDebts}
                      </td>
                    )}
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
                        groupId={group.group._id}
                        studentId={std.student._id}
                        invalidatedQueryName="getAttendanceForGroup"
                      />
                    </th>
                  ))}
                </tr>
              ))}
              {group.attendeesLeftGroup.map((std, i) => (
                <tr
                  key={i}
                  className="flex items-center justify-start gap-7 w-full text-darkGray border-b border-light py-3"
                >
                  {group.group.groupId && (
                    <td className="w-[100px] p-2 text-start flex gap-1">
                      {group.group.groupId}
                    </td>
                  )}

                  <td className="w-[200px] p-2 text-start flex gap-1">
                    {std.student.firstName + " " + std.student.lastName}
                  </td>

                  {/* {std.student.groupFinancials.groupPaidAmount && ( */}
                  <td className="p-2 w-[200px] text-start underline">
                    {/* {std.student.groupFinancials.groupPaidAmount} */}
                    N/A
                    {/* <PricingButton
                        initValue={std.student.groupFinancials.groupPaidAmount}
                      /> */}
                  </td>
                  {/* )} */}

                  {std.financials.totalOutstandingBalance != undefined && (
                    <td className="p-2 w-[200px] text-start underline">
                      {std.financials.totalOutstandingBalance}
                    </td>
                  )}

                  {std.financials.totalDebts != undefined && (
                    <td className="p-2 w-[200px] text-start underline">
                      {std.financials.totalDebts}
                    </td>
                  )}
                  {std.financials.totalOutstandingBalance != undefined &&
                    std.financials.totalDebts != undefined && (
                      <td className="p-2 w-[200px] text-start underline">
                        {std.financials.totalOutstandingBalance +
                          std.financials.totalDebts}
                      </td>
                    )}

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
                        groupId={group.group._id}
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
      </div>
    );
}
