import { StudentInfoTable } from "./studentInfoTable";
import { StudentPaymentTable } from "./studentPaymentTable";
import GroupList from "./groupList";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState, useRef } from "react";
import { getStudentByCardId } from "./core/_requests";
import { GetStudentByCardIdType } from "./core/_models";
import Notifications from "./notifications";
import { useNavigate } from "react-router-dom";

export default function StudentControlPanel() {
  const [rfid, setRfid] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const [scanningCard, setScanningCard] = useState<string | null>(null);

  const { id } = useParams();
  const [studentInfo, setStudentInfo] = useState<GetStudentByCardIdType>();
  const isUserId = id && id.startsWith("user-"); // Example logic to differentiate
  const isScanningCardId = id && id.startsWith("card-");

  const userId = isUserId ? id?.replace("user-", "") : null;
  const scanningCardId = isScanningCardId ? id?.replace("card-", "") : null;
  useEffect(() => {
    setScanningCard(scanningCardId);
  }, [scanningCardId]);
  const { data, isPending, error, refetch } = useQuery({
    queryKey: ["getStudentByCardId"],
    queryFn: () => getStudentByCardId(userId, scanningCard),
    enabled: !!userId || !!scanningCard,
    retry: false,
  });



  useEffect(() => {
    console.log("use effect data");
    if (data) {
      console.log("refetch");
      if (data.status === 200) {
        setStudentInfo(data.data);
      }
    } else if (error) {
      console.error("Error fetching student data:", error);
      // setStatus();
      // setStudentInfo(null);0010589654
    }
  }, [data, isPending, error, refetch]);

  const handleRfidScan = async (scannedRfid: string) => {
    try {
      setRfid(scannedRfid);
      setScanningCard(scannedRfid);
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

    if (inputRef.current) {
      inputRef.current.focus(); // Focus the hidden input field
    }
    if (screen) {
      window.addEventListener("keydown", handleKeyPress);
    }

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [rfid]);

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

  if (studentInfo  && !error ) {
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
          <Notifications studentInfo={studentInfo} />
        </div>
      </div>
    );
}}
