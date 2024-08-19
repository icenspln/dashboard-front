import CardAnimationSvg from "../../../assets/icons/CardAnimationSvg";
import CardlessRegister from "./overlays/cardlessRegisterLink";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function NavigateToRegister() {
  const navigate = useNavigate();


  const [rfid, setRfid] = useState<string>(""); // State to store RFID scan value

  const handleRfidScan = async (scannedRfid: string) => {
    try {
      setRfid(scannedRfid);
      console.log(scannedRfid)
      console.log("scanning")
      navigate(`/attendancemanagement/card-${scannedRfid}`);
      // const response = await updateCard(employeeId, scannedRfid);
      // console.log("Card updated successfully:", response);
      // setModal(2); // Move to the next modal on success
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
        setRfid(""); // Clear the input after processing
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
  }, [screen, rfid]);


  return (
    <div className="h-screen flex flex-col justify-center items-center text-center text-2xl gap-[12px]">
      <span>
        <h1 className="">تسجيل البطاقة الذكية</h1>
      </span>
      <span>
        <p className="text-gray-500">
          يرجى تمرير البطاقة الذكية على الآلة لتسجيل الحضور
        </p>
      </span>

      <CardAnimationSvg />
      <CardlessRegister />
    </div>
  );
}
