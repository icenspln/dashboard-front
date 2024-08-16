import { StudentInfoTable } from "./studentInfoTable";
import { StudentPaymentTable } from "./studentPaymentTable";
import GroupList from "./groupList";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getStudentByCardId } from "./core/_requests";
import { GetStudentByCardIdType } from "./core/_models";

export default function TablesContainer() {
  const { id } = useParams();
  const [studentInfo, setStudentInfo] = useState<GetStudentByCardIdType>();

  const { data, isPending, error } = useQuery({
    queryKey: ["getStudentByCardId"],
    queryFn: () => getStudentByCardId(id!),
  });

  useEffect(() => {
    if (data) setStudentInfo(data);
  }, [data, isPending, error]);
  if (studentInfo)
    return (
      // <div className="flex items-center w-full gap-[25px] px-4 ">
      <>
        <div>
          <StudentInfoTable student={studentInfo.student} />
          <StudentPaymentTable studentInfo={studentInfo} />
          <GroupList />
          {/* <div className="flex justify-end text-xl py-1">
          <CardlessRegister />
        </div> */}
        </div>
        {/* <div className="w-full">
        <Notifications />
      </div> */}
      </>
      // </div>
    );
}
