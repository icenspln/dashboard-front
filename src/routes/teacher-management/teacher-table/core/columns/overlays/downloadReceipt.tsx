import React, { useState } from "react";
import { Overlay } from "../../../../../../components/Overlay";
import ConfirmButton from "../../../../../../components/confirmButton";
// import PasswordInput from "./Popup-menu-component/passwordInputField";
import Checklist from "../../../../../../components/CheckList";
import { useNavigate } from "react-router-dom";
import GetMonthYear from "../../../../../../components/GetMonths";
import { useSettings,  } from "../../../../../settings/core/SettingsContext";
import PasswordInput from "../../../../../settings/passwordInputField";

const chooseMonthOption = GetMonthYear(2024);
interface DownloadReceiptOverlayProps {
  onClose: () => void;
  teacherId: string;
}

const DownloadReceiptOverlay: React.FC<DownloadReceiptOverlayProps> = ({
  onClose,
  teacherId,
}) => {
  //state for filtering in teacher pdf

  const {
 
    checkPassword,
  } = useSettings();
  const [timeQuery, setTimeQuery] = useState<{ month: number; year: number }>();
  const [currentView, setCurrentView] = useState<"checklist" | "password">(
    "checklist"
  );
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();  // const handleConfirmClick = () => {
  //   if (currentView === "checklist") {
  //     setCurrentView("password");
  //   } else if (currentView === "password") {
  //     if (timeQuery) {
  //       navigate(
  //         `/teachermanagement/teacherpayment/${teacherId}?month=${timeQuery?.month}&year=${timeQuery?.year}`
  //       );
  //       return;
  //     }
  //     navigate(`/teachermanagement/teacherpayment/${teacherId}`);
  //   }
  // };
  const handleConfirmClick = async () => {
    if (currentView === "checklist") {
      setCurrentView("password");
    } else if (currentView === "password") {
      try {
        const isValid = await checkPassword(password);
        if (isValid) {
          setError("");
          if (timeQuery) {
            navigate(
              `/teachermanagement/teacherpayment/${teacherId}?month=${timeQuery?.month}&year=${timeQuery?.year}`
            );
          } else {
            navigate(`/teachermanagement/teacherpayment/${teacherId}`);
          }
        } else {
          setError("كلمة المرور غير صحيحة");
        }
      } catch {
        setError("حدث خطأ ما. حاول مرة أخرى.");
      }
    }
  };

  return (
    <Overlay onClose={onClose}>
      <>
        <div className="w-[511px] flex flex-col items-center gap-[15px]">
          {currentView === "checklist" ? (
            <>
              <h1 className="text-2xl">تحميل كشف الراتب الشهري</h1>
              <p>
                يرجى اختيار شهر الدفع من أجل تحميل كشف الراتب الشهري لهذا
                الأستاذ
              </p>
              <div className="flex w-full justify-between items-center gap-[12px]">
                <div className="flex-1">
                  <Checklist
                    items={chooseMonthOption}
                    setState={setTimeQuery}
                  />
                </div>
                <ConfirmButton
                  text="التالي"
                  className="text-white w-[91px]"
                  onClick={handleConfirmClick}
                />
              </div>
            </>
          ) : (
            <>
            <h1 className="text-2xl">أدخل كلمة المرور</h1>
            <p>يرجى إدخال كلمة المرور قبل تحميل قسيمة الدفع</p>
            <div className="flex w-full justify-between items-center gap-[12px]">
              <div className="flex-1">
                <PasswordInput
                  placeHolder="أدخل كلمة المرور"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <ConfirmButton
                text="التالي"
                className="text-white w-[90px]"
                onClick={handleConfirmClick}
              />
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </>
          )}
        </div>
      </>
    </Overlay>
  );
};

export default DownloadReceiptOverlay;
