import { useState } from "react";
import Popup from "reactjs-popup";
import DotsSvg from "../../../../../assets/icons/DotsSvg";

import DeleteFromListOverlay from "./overlays/deleteFromList";
import ChangeGroupOverlay from "./overlays/changeGroup";
import RegistredStudentsOverlay from "./overlays/registredStudentsList";
import ConfirmButton from "./overlays/Popup-menu-component/confirmButton";

export default function SettingsCell() {
  const [activeOverlay, setActiveOverlay] = useState<string | null>(null)
  
  const options = [
    { label: "تعديل المعلومات", action: () => {} },
    { label: "حذف من القائمة", action: () => setActiveOverlay("deleteFromList") },
    { label: "رؤية الأفواج الحالية", action: () =>  setActiveOverlay("registredStudentsList")},
    { label: "تغيير الفوج", action: () => setActiveOverlay("changeGroup") },
    
  ];
  const closeOverlay = () => setActiveOverlay(null);
  return (
    <div>
      <Popup
        trigger={
          <button>
            <DotsSvg/>
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
        {activeOverlay === "deleteFromList" && <DeleteFromListOverlay onClose={closeOverlay} />}
        {activeOverlay === "registredStudentsList" && <RegistredStudentsOverlay onClose={closeOverlay} />}
        {activeOverlay === "changeGroup" && <ChangeGroupOverlay onClose={closeOverlay} />}
      </Popup>
     
    </div>
  );
}
