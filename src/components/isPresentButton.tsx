import { useEffect, useState } from "react";
import HandCursorSvg from "../assets/icons/HandCursorSvg";
import {
  AttendanceForStudentType,
  SetAttendanceForStudentType,
} from "../routes/presence-management/students-presence/students-presence-table/core/_models";
import { Group } from "../routes/group-management/groups-table/core/_models";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setAttendanceForStudent } from "../routes/presence-management/students-presence/students-presence-table/core/_requests";
import { returnAttendanceInAR } from "../handlers/returnInArabic";
import toast from "react-hot-toast";

const StudentPresentButton = ({
  att,
  groupId,
  studentId,
}: {
  att: {
    date: string;
    status: string;
  };
  groupId: any;
  studentId: string;
}) => {
  const [attendance, setAttendance] = useState<string>(att.status);
  console.log("att state", att.date, attendance);

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
    mutationKey: ["changeStudentPresence"],
    onSuccess: (res) => {
      toast.success("changed presence");
      queryClient.invalidateQueries({
        queryKey: ["getAttendanceForStudent"],
      });
      setAttendance(res.attendance.status);
    },
    onError: () => toast.error("presence didnt change"),
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
        <span className="flex-1 text-right">حاضر</span>

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
        <span className="flex-1 text-right">غائب</span>

        <span className="ml-15">
          <HandCursorSvg />
        </span>
      </button>
    );

  return (
    <>
      <button className=" bg-red-100 text-red-500 py-2 px-2 rounded-full flex justify-between items-center max-w-full w-[180px] h-[26px]">
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
