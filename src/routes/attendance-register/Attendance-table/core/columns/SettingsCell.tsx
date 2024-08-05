import { useState } from "react";
import Popup from "reactjs-popup";
import DotsSvg from "../../../../../assets/icons/DotsSvg";

import DeleteFromListOverlay from "./overlays/deleteFromList";
import ChangeGroupOverlay from "./overlays/changeGroup";

import ConfirmButton from "../../../../../components/confirmButton";

export default function SettingsCell() {
  const [activeOverlay, setActiveOverlay] = useState<string | null>(null)
  
  const options = [
    
    { label: "حذف من الفوج", action: () => setActiveOverlay("deleteFromList") },
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
        {activeOverlay === "changeGroup" && <ChangeGroupOverlay onClose={closeOverlay} />}
      </Popup>
     
    </div>
  );
}
