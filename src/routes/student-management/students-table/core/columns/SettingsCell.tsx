import { useState } from "react";
import Popup from "reactjs-popup";
import DotsSvg from "../../../../../assets/icons/DotsSvg";
import { useNavigate } from "react-router-dom";
import DeleteFromListOverlay from "./overlays/deleteFromList";
import ChangeGroupOverlay from "./overlays/changeGroup";
import RegistredStudentsOverlay from "./overlays/registredStudentsList";
import ChangeStudentCardOverlay from "./overlays/changeStudentCard";

export default function SettingsCell() {
  const [activeOverlay, setActiveOverlay] = useState<string | null>(null);
  const navigate = useNavigate();
  const options = [
    { label: "تعديل المعلومات", action: () => {} },
    {
      label: "حذف من القائمة",
      action: () => setActiveOverlay("deleteFromList"),
    },
    {
      label: "رؤية الأفواج الحالية",
      action: () => setActiveOverlay("registredStudentsList"),
    },
    { label: "تغيير الفوج", action: () => setActiveOverlay("changeGroup") },
    { label: "تغيير البطاقة", action: () => setActiveOverlay("changeCard") },
    {
      label: "رؤية تواريخ الدفع",
      action: () => navigate("/studentspaymenthistory"),
    },
    {
      label: "رؤية تواريخ الحضور والغياب",
      action: () => navigate("/studentspresencemanagement"),
    },
  ];
  const closeOverlay = () => setActiveOverlay(null);
  return (
    <div>
      <Popup
        trigger={
          <button>
            <DotsSvg />
          </button>
        }
        arrow={false}
        position="bottom center"
      >
        <div className="grid gap-1">
          {options.map((option, index) => (
            <button
              key={index}
              className="w-full px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
              onClick={option.action}
            >
              {option.label}
            </button>
          ))}
        </div>
        {activeOverlay === "deleteFromList" && (
          <DeleteFromListOverlay onClose={closeOverlay} />
        )}
        {activeOverlay === "registredStudentsList" && (
          <RegistredStudentsOverlay onClose={closeOverlay} />
        )}
        {activeOverlay === "changeGroup" && (
          <ChangeGroupOverlay onClose={closeOverlay} />
        )}
        {activeOverlay === "changeCard" && (
          <ChangeStudentCardOverlay onClose={closeOverlay} />
        )}
      </Popup>
    </div>
  );
}
