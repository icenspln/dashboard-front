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

export default function StudentControlPanel() {
  const navigate = useNavigate();

  const { id } = useParams();
  const [studentInfo, setStudentInfo] = useState<GetStudentByCardIdType>();

  const isUserId = id && id.startsWith("user-"); // Example logic to differentiate
  const isScanningCardId = id && id.startsWith("card-");

  const userId = isUserId ? id?.replace("user-", "") : null;
  const scanningCardId = isScanningCardId ? id?.replace("card-", "") : null;
  console.log(scanningCardId);
  const { data, isPending, error } = useQuery({
    queryKey: ["getStudentByCardId"],
    queryFn: () => getStudentByCardId(userId, scanningCardId),
  });

  useEffect(() => {
    if (data) setStudentInfo(data);
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


    // const [rfid, setRfid] = useState<string>(""); // State to store RFID scan value

    // const handleRfidScan = async (scannedRfid: string) => {
    //   try {
    //     setRfid(scannedRfid);
    //     console.log(scannedRfid)
    //     console.log("scanning")
    //     navigate(`/attendancemanagement/card-${scannedRfid}`);
    //     // const response = await updateCard(employeeId, scannedRfid);
    //     // console.log("Card updated successfully:", response);
    //     // setModal(2); // Move to the next modal on success
    //   } catch (error) {
    //     console.error("Error updating card:", error);
    //   }
    // };
  
    // useEffect(() => {
    //   const handleKeyPress = (event: KeyboardEvent) => {
    //     if (event.key === "Enter") {
    //       // When Enter is pressed, use the scanned RFID value
    //       console.log(rfid);
  
    //       handleRfidScan(rfid);
    //       setRfid(""); // Clear the input after processing
    //     } else {
    //       // Accumulate RFID characters as they are typed
    //       setRfid((prevRfid) => prevRfid + event.key);
    //     }
    //   };
  
    //   if (screen) {
    //     window.addEventListener("keydown", handleKeyPress);
    //   }
  
    //   // Cleanup on component unmount
    //   return () => {
    //     window.removeEventListener("keydown", handleKeyPress);
    //   };
    // }, [screen, rfid]);
  
  

  if (studentInfo && !error)
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
