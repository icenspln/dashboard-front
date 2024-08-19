import React, { useState } from "react";
import { Overlay } from "../../../../../../components/Overlay";
import ConfirmButton from "../../../../../../components/confirmButton";
import PasswordInput from "./Popup-menu-component/passwordInputField";
import Checklist from "../../../../../../components/CheckList";
import { useNavigate } from "react-router-dom";
import GetMonthYear from "../../../../../../components/GetMonths";

const chooseMonthOption = GetMonthYear(2022);
interface DownloadReceiptOverlayProps {
  onClose: () => void;
  teacherId: string;
}

const DownloadReceiptOverlay: React.FC<DownloadReceiptOverlayProps> = ({
  onClose,
  teacherId,
}) => {
  //state for filtering in teacher pdf
  const [timeQuery, setTimeQuery] = useState({ month: 1, year: 2024 });
  const [currentView, setCurrentView] = useState<"checklist" | "password">(
    "checklist"
  );
  const navigate = useNavigate();
  const handleConfirmClick = () => {
    if (currentView === "checklist") {
      setCurrentView("password");
    } else if (currentView === "password") {
      navigate(
        `/teachermanagement/teacherpayment/${teacherId}?month=${timeQuery.month}&year=${timeQuery.year}`
      );
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
                  <PasswordInput />
                </div>
                <ConfirmButton
                  text="التالي"
                  className="text-white w-[90px]"
                  onClick={handleConfirmClick}
                />
              </div>
            </>
          )}
        </div>
      </>
    </Overlay>
  );
};

export default DownloadReceiptOverlay;
