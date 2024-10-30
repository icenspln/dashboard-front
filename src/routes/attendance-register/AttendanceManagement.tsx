import { NavigateToRegister } from "./Attendance-navigation-page/NavigateToRegister";
import { useState, useEffect , useRef   } from "react";
import { useNavigate } from "react-router-dom";

export default function AttendanceManagement() {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);


  const [rfid, setRfid] = useState<string>(""); // State to store RFID scan value

  const handleRfidScan = async (scannedRfid: string) => {
    try {
      setRfid(scannedRfid);
      console.log(scannedRfid)
      console.log("scanning")
      setTimeout(() => {
        navigate(`/attendancemanagement/card-${scannedRfid}`);
      }, 100); // Adjust delay if necessary
    } catch (error) {
      console.error("Error scanning card:", error);
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
  }, [screen, rfid]);


  return <NavigateToRegister />;
}
