import { motion } from "framer-motion"
import { useContext, useMemo, useRef, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { AttendanceForGroupType } from "./core/_models"
import { StudentPresentButton } from "../../../../components/isPresentButton"
import { getAttendanceForGroup } from "./core/_requests"
import { GroupsTableContext } from "./core/GroupsTableContext"
import jsPDF from "jspdf"
import html2canvas from "html2canvas"

export function GroupsPresenceListsTable() {
    const { filter } = useContext(GroupsTableContext)
    const constraintsRef = useRef(null)
    const { id } = useParams()
    const [group, setGroup] = useState<AttendanceForGroupType>()
    const [isPrinting, setIsPrinting] = useState(false)

    const { data, isLoading, error } = useQuery({
        queryKey: ["getAttendanceForGroup", filter],
        queryFn: () => getAttendanceForGroup(id!, filter),
    })

    useMemo(() => {
        if (data) {
            setGroup(data)
        }
    }, [data, isLoading, error])

    //     enum: ["present", "absent", "upcoming", "not joined", "unknown" , "out of group", "changed group" , "teacher absent"],
    const printPDF = () => {
        setIsPrinting(true)
        setTimeout(() => {
            const input = document.getElementById("presence-table")
            if (input) {
                html2canvas(input).then((canvas) => {
                    const imgData = canvas.toDataURL("image/png")
                    const pdf = new jsPDF()
                    const imgProps = pdf.getImageProperties(imgData)
                    const pdfWidth = pdf.internal.pageSize.getWidth()
                    const pdfHeight =
                        (imgProps.height * pdfWidth) / imgProps.width
                    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight)
                    pdf.save("presence.pdf")
                    setIsPrinting(false)
                })
            }
        }, 1000) // Delay to ensure CSS is applied
    }
    if (group)
        return (
            <div ref={constraintsRef}>
                <button
                    onClick={printPDF}
                    className="mb-4 p-2 bg-blue-500 text-white rounded"
                >
                    Print as PDF
                </button>
                <div className="mb-8 overflow-x-clip border border-light rounded-xl w-full bg-white">
                    <motion.table
                        id="presence-table"
                        drag={"x"}
                        dragConstraints={constraintsRef}
                        dragElastic={0}
                        dragMomentum={false}
                        className="w-full rounded-xl "
                    >
                        <style>
                            {`
          @media print {
            .hide-on-print {
              display: none;
            }
          }
        `}
                        </style>
                        <thead>
                            <tr className="flex items-center justify-start gap-7 w-full text-textGray font-medium border-b border-light bg-whtie">
                                <th className="p-2 w-[100px] text-start">
                                    الرقم
                                </th>
                                <th className="p-2 w-[200px] text-start">
                                    الطالب
                                </th>
                                <th
                                    className={`p-2 w-[200px] text-start ${isPrinting ? "hidden" : ""}`}
                                >
                                    ثمن الدفع الشهري
                                </th>
                                <th
                                    className={`p-2 w-[200px] text-start ${isPrinting ? "hidden" : ""}`}
                                >
                                    الديون
                                </th>
                                <th
                                    className={`p-2 w-[200px] text-start ${isPrinting ? "hidden" : ""}`}
                                >
                                    مجموع الديون
                                </th>
                                <th className="p-2 w-[200px] text-start">
                                    رقم الهاتف
                                </th>
                                {group.alldays.map((day, i) => (
                                    <th
                                        className="w-[200px] p-2 text-start"
                                        key={i}
                                    >
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
                                    <td className="w-[100px] p-2 text-start flex gap-1">
                                        {group.group.groupId}
                                    </td>

                                    <td className="w-[200px] p-2 text-start flex gap-1">
                                        {std.student.firstName +
                                            " " +
                                            std.student.lastName || "N/A"}
                                    </td>

                                    <td
                                        className={`p-2 w-[200px] text-start underline ${isPrinting ? "hidden" : ""}`}
                                    >
                                        {
                                            std.student.groupFinancials
                                                ?.groupPaidAmount
                                        }
                                    </td>

                                    <td
                                        className={`p-2 w-[200px] text-start underline ${isPrinting ? "hidden" : ""}`}
                                    >
                                        {std.student.financials
                                            .totalOutstandingBalance || 0}
                                    </td>

                                    <td
                                        className={`p-2 w-[200px] text-start underline ${isPrinting ? "hidden" : ""}`}
                                    >
                                        {std.student.financials.totalDebts || 0}
                                    </td>
                                    <td
                                        className={`p-2 w-[200px] text-start underline ${isPrinting ? "hidden" : ""}`}
                                    >
                                        {std.student.financials
                                            .totalOutstandingBalance +
                                            std.student.financials.totalDebts ||
                                            0}
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
                                    <td className="w-[100px] p-2 text-start flex gap-1">
                                        {group.group.groupId}
                                    </td>

                                    <td className="w-[200px] p-2 text-start flex gap-1">
                                        {std.student.firstName +
                                            " " +
                                            std.student.lastName || "N/A"}
                                    </td>

                                    <td
                                        className={`p-2 w-[200px] text-start underline ${isPrinting ? "hide-on-print" : ""}`}
                                    >
                                        N/A
                                    </td>

                                    {std.financials.totalOutstandingBalance !=
                                        undefined && (
                                        <td
                                            className={`p-2 w-[200px] text-start underline ${isPrinting ? "hide-on-print" : ""}`}
                                        >
                                            {std.financials
                                                .totalOutstandingBalance ||
                                                "N/A"}
                                        </td>
                                    )}

                                    {std.financials.totalDebts != undefined && (
                                        <td
                                            className={`p-2 w-[200px] text-start underline ${isPrinting ? "hide-on-print" : ""}`}
                                        >
                                            {std.financials.totalDebts || "N/A"}
                                        </td>
                                    )}

                                    <td
                                        className={`p-2 w-[200px] text-start underline ${isPrinting ? "hide-on-print" : ""}`}
                                    >
                                        {std.financials
                                            .totalOutstandingBalance +
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
        )

    return null
}
//     if (group)
//         return (
//             <div ref={constraintsRef}>
//                 <button
//                     onClick={printPDF}
//                     className="mb-4 p-2 bg-blue-500 text-black rounded"
//                 >
//                     Print as PDF
//                 </button>
//                 <div className="mb-8 overflow-x-clip border border-light rounded-xl w-full bg-white">
//                     <motion.table
//                         id="presence-table"
//                         drag={"x"}
//                         dragConstraints={constraintsRef}
//                         dragElastic={0}
//                         dragMomentum={false}
//                         className="w-full rounded-xl "
//                     >
//                         <thead>
//                             <tr className="flex items-center justify-start gap-7 w-full text-textGray font-medium border-b border-light bg-whtie">
//                                 <th className="p-2 w-[100px] text-start">
//                                     الرقم
//                                 </th>
//                                 <th className="p-2 w-[200px] text-start">
//                                     الطالب
//                                 </th>
//                                 <th
//                                     className={`p-2 w-[200px] text-start ${isPrinting ? "hide-on-print" : ""}`}
//                                 >
//                                     ثمن الدفع الشهري
//                                 </th>
//                                 <th
//                                     className={`p-2 w-[200px] text-start ${isPrinting ? "hide-on-print" : ""}`}
//                                 >
//                                     الديون
//                                 </th>
//                                 <th
//                                     className={`p-2 w-[200px] text-start ${isPrinting ? "hide-on-print" : ""}`}
//                                 >
//                                     مجموع الديون
//                                 </th>
//                                 <th className="p-2 w-[200px] text-start">
//                                     رقم الهاتف
//                                 </th>
//                                 {group.alldays.map((day, i) => (
//                                     <th
//                                         className="w-[200px] p-2 text-start"
//                                         key={i}
//                                     >
//                                         {new Date(day).toLocaleDateString()}
//                                     </th>
//                                 ))}
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {group.students.map((std, i) => (
//                                 <tr
//                                     key={i}
//                                     className="flex items-center justify-start gap-7 w-full text-darkGray border-b border-light py-3"
//                                 >
//                                     <td className="w-[100px] p-2 text-start flex gap-1">
//                                         {group.group.groupId}
//                                     </td>

//                                     <td className="w-[200px] p-2 text-start flex gap-1">
//                                         {std.student.firstName +
//                                             " " +
//                                             std.student.lastName || "N/A"}
//                                     </td>

//                                     <td className="p-2 w-[200px] text-start underline">
//                                         {
//                                             std.student.groupFinancials
//                                                 ?.groupPaidAmount
//                                         }
//                                         {/* <PricingButton
//                       initValue={
//                         std.student.groupFinancials?.groupPaidAmount || 0
//                       }
//                     /> */}
//                                     </td>

//                                     <td className="p-2 w-[200px] text-start underline">
//                                         {std.student.financials
//                                             .totalOutstandingBalance || 0}
//                                     </td>

//                                     <td className="p-2 w-[200px] text-start underline">
//                                         {std.student.financials.totalDebts || 0}
//                                     </td>
//                                     <td className="p-2 w-[200px] text-start underline">
//                                         {std.student.financials
//                                             .totalOutstandingBalance +
//                                             std.student.financials.totalDebts ||
//                                             0}
//                                     </td>
//                                     <td className="w-[200px] p-2 text-start flex gap-1">
//                                         {std.student.phoneNumber}
//                                     </td>
//                                     {std.attendance.map((att, i) => (
//                                         <th
//                                             className="w-[200px] p-2 text-start font-medium"
//                                             key={i}
//                                         >
//                                             <StudentPresentButton
//                                                 att={att}
//                                                 groupId={group.group._id}
//                                                 studentId={std.student._id}
//                                                 invalidatedQueryName="getAttendanceForGroup"
//                                             />
//                                         </th>
//                                     ))}
//                                 </tr>
//                             ))}
//                             {group.attendeesLeftGroup.map((std, i) => (
//                                 <tr
//                                     key={i}
//                                     className="flex items-center justify-start gap-7 w-full text-darkGray border-b border-light py-3"
//                                 >
//                                     <td className="w-[100px] p-2 text-start flex gap-1">
//                                         {group.group.groupId}
//                                     </td>

//                                     <td className="w-[200px] p-2 text-start flex gap-1">
//                                         {std.student.firstName +
//                                             " " +
//                                             std.student.lastName || "N/A"}
//                                     </td>

//                                     <td className="p-2 w-[200px] text-start underline">
//                                         N/A
//                                     </td>

//                                     {std.financials.totalOutstandingBalance !=
//                                         undefined && (
//                                         <td className="p-2 w-[200px] text-start underline">
//                                             {std.financials
//                                                 .totalOutstandingBalance ||
//                                                 "N/A"}
//                                         </td>
//                                     )}

//                                     {std.financials.totalDebts != undefined && (
//                                         <td className="p-2 w-[200px] text-start underline">
//                                             {std.financials.totalDebts || "N/A"}
//                                         </td>
//                                     )}

//                                     <td className="p-2 w-[200px] text-start underline">
//                                         {std.financials
//                                             .totalOutstandingBalance +
//                                             std.financials.totalDebts || "N/A"}
//                                     </td>

//                                     <td className="w-[200px] p-2 text-start flex gap-1">
//                                         {std.student.phoneNumber}
//                                     </td>

//                                     {std.attendees.map((att, i) => (
//                                         <th
//                                             className="w-[200px] p-2 text-start font-medium"
//                                             key={i}
//                                         >
//                                             <StudentPresentButton
//                                                 att={att}
//                                                 groupId={group.group._id}
//                                                 studentId={std.student._id}
//                                                 invalidatedQueryName="getAttendanceForGroup"
//                                             />
//                                         </th>
//                                     ))}
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </motion.table>
//                 </div>
//             </div>
//         )
// }
