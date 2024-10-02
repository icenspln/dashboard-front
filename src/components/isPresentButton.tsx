import { useState } from "react";
import HandCursorSvg from "../assets/icons/HandCursorSvg";
import { SetAttendanceForStudentType } from "../routes/presence-management/students-presence/students-presence-table/core/_models";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setAttendanceForStudent } from "../routes/presence-management/students-presence/students-presence-table/core/_requests";
import { returnAttendanceInAR } from "../handlers/returnInArabic";
import toast from "react-hot-toast";

const StudentPresentButton = ({
    att,
    groupId,
    studentId,
    invalidatedQueryName = "changeStudentPresence",
}: {
    att: {
        date: string;
        status: string;
    };
    groupId: any;
    studentId: string;
    invalidatedQueryName?: string;
}) => {
    const [attendance, setAttendance] = useState<string>(att.status);

    // useEffect(() => {
    //   setAttendance(att.status);
    // }, []);

    const handleClick = (newStatus: "present" | "absent") => {
        mutation.mutate({
            date: att.date,
            groupId,
            status: newStatus,
            studentId,
        });
    };
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (data: SetAttendanceForStudentType) =>
            setAttendanceForStudent({ ...data }),
        mutationKey: [invalidatedQueryName],
        onSuccess: (res) => {
            toast.success("prensece has been changed");
            queryClient.invalidateQueries({
                queryKey: [invalidatedQueryName],
            });
            setAttendance(res.attendance.status);
        },
        onError: () => toast.error("something went wrong"),
    });
    if (mutation.isPending)
        return (
            <>
                <button className="bg-green-100 text-gray-500  py- px-2 rounded-full cursor-pointer flex justify-between items-center max-w-full w-[180px] h-[26px]`}">
                    <span className="flex-1 text-right">...</span>

                    <span className="ml-15">
                        <HandCursorSvg />
                    </span>
                </button>
            </>
        );

    if (attendance == "present")
        return (
            <button
                onClick={() => handleClick("absent")}
                className={
                    "bg-green-100 text-green-500  py- px-2 rounded-full cursor-pointer flex justify-between items-center max-w-full w-[180px] h-[26px]`}"
                }
            >
                <span className="flex-1 text-right">Present</span>

                <span className="ml-15">
                    <HandCursorSvg />
                </span>
            </button>
        );
    if (attendance == "absent")
        return (
            <button
                onClick={() => handleClick("present")}
                className={
                    "bg-orange-100 text-orange-500 py- px-2 rounded-full cursor-pointer flex justify-between items-center max-w-full w-[180px] h-[26px]"
                }
            >
                <span className="flex-1 text-right">Absent</span>

                <span className="ml-15">
                    <HandCursorSvg />
                </span>
            </button>
        );

    return (
        <>
            <button className=" bg-red-100 text-red-500 py-2 px-2 rounded-full flex justify-between items-center max-w-full w-[180px] h-[26px] cursor-default">
                {returnAttendanceInAR(att.status)}
            </button>
        </>
    );
};

const TeacherPresentButton = () => {
    return (
        <button className=" bg-red-100 text-red-500 py-2 px-2 rounded-full flex justify-between items-center max-w-full w-[180px] h-[26px]">
            أستاذ غائب
        </button>
    );
};
export { StudentPresentButton, TeacherPresentButton };
