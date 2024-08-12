import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import DotsSvg from "../../../../../assets/icons/DotsSvg";
import { useState } from "react";
//importing the overlays
import DeleteGroupOverlay from "./overlays/deleteGroup";
import AddNewSessionOverlay from "./overlays/addNewSession";
import RegistredStudentsOverlay from "./overlays/registredStudentsList";


import { Link, NavLink } from "react-router-dom";

export default function SettingsCell() {

  const [activeOverlay, setActiveOverlay] = useState<string | null>(null)
  const options = [
    { label: "تعديل المعلومات", action: () => {} },
    { label: "حذف الفوج", action: () => setActiveOverlay("deleteGroup") },
    { label: "إضافة حصة إضافية", action: () =>  setActiveOverlay("addNewSession")},
    { label: "رؤية قائمة الحضور", action: () => {} },
    { label: "رؤية قائمة المسجلين", action: () => setActiveOverlay("registredStudents") },
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
            option.navigateTo ? (
              <NavLink
                key={index}
                to={option.navigateTo}
                className="w-full px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
              >
                {option.label}
              </NavLink>
            ) : (
              <button
                key={index}
                className="w-full px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
                onClick={option.action}
              >
                {option.label}
              </button>
            )
          ))}
        </div>
        {activeOverlay === "deleteGroup" && <DeleteGroupOverlay onClose={closeOverlay} />}
        {activeOverlay === "addNewSession" && <AddNewSessionOverlay onClose={closeOverlay} />}
        {activeOverlay === "registredStudents" && <RegistredStudentsOverlay onClose={closeOverlay} />}
      </Popup>
     
    </div>
  );
}