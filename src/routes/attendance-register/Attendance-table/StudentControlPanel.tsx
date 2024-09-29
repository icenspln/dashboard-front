import { StudentInfoTable } from "./studentInfoTable";
import { StudentPaymentTable } from "./studentPaymentTable";
import GroupList from "./groupList";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getStudentByCardId } from "./core/_requests";
import { GetStudentByCardIdType } from "./core/_models";
import Notifications from "./notifications";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function StudentControlPanel() {
  const navigate = useNavigate();
  const [rfid, setRfid] = useState<string>(""); // State to store RFID scan value

  const { id } = useParams();
  const [studentInfo, setStudentInfo] = useState<GetStudentByCardIdType>();
  const [status, setStatus] = useState<number | null>(null);
  const isUserId = id && id.startsWith("user-"); // Example logic to differentiate
  const isScanningCardId = id && id.startsWith("card-");

  const userId = isUserId ? id?.replace("user-", "") : null;
  const scanningCardId = isScanningCardId ? id?.replace("card-", "") : null;
  const { data, isPending, error, refetch } = useQuery({
    queryKey: ["getStudentByCardId"],
    queryFn: () => getStudentByCardId(userId, scanningCardId),
    enabled: !!userId || !!scanningCardId,
  });

  useEffect(() => {
    if (data) {
      setStatus(data.status);
      if (data.status === 200) setStudentInfo(data.data);
    }
  }, [data, isPending, error]);

  if (isPending)
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl my-auto">تحميل...</h1>
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl my-auto text-yellow-300">
          التلميذ لا ينتمي لأي فوج
        </h1>
      </div>
    );

  const handleRfidScan = async (scannedRfid: string) => {
    try {
      setRfid(scannedRfid);
      console.log(scannedRfid);
      console.log("scanning");
      await refetch();
      navigate(`/attendancemanagement/card-${scannedRfid}`);
    } catch (error) {
      console.error("Error updating card:", error);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        // When Enter is pressed, use the scanned RFID value
        console.log(rfid);

        handleRfidScan(rfid);
        setRfid("");
      } else {
        // Accumulate RFID characters as they are typed
        setRfid((prevRfid) => prevRfid + event.key);
      }
    };

    if (screen) {
      window.addEventListener("keydown", handleKeyPress);
    }

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [rfid]);

  if (status === 201) {
    return (
      <motion.div
        transition={{ duration: 0.2, type: "just" }}
        initial={{ x: 400 }}
        animate={{ x: 0 }}
        key={2}
        className="flex flex-col gap-1 items-center h-full"
      >
        <h2 className="text-lg text-center mb-3 font-bold text-blueDark">
          تم تسجيل الموظف بنجاح بنجاح{" "}
        </h2>
        <p className="w-full text-textGray2 text-center">
          يمكنك تفقد تواريخ التسجيل في صفحة الموظف{" "}
        </p>
        <div className="my-auto">{/* <Check /> */}</div>
      </motion.div>
    );
  } else if (studentInfo && !error)
    return (
      <div className="flex  gap-[25px] p-4 py-8 min-h-screen">
        <div className="w-full min-h-full flex flex-col gap-3 items-stretch justify-start">
          <StudentInfoTable student={studentInfo.student} />
          <StudentPaymentTable studentInfo={studentInfo} />
          <GroupList studentInfo={studentInfo} />
          {/* <div className="flex justify-end text-xl py-1">
          <CardlessRegister />
        </div> */}
        </div>
        <div className="w-full min-h-full ">
          <Notifications />
        </div>
      </div>
    );
}
