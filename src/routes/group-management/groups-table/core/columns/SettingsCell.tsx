import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import DotsSvg from "../../../../../assets/icons/DotsSvg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//importing the overlays
import DeleteGroupOverlay from "./overlays/deleteGroup";
import AddNewSessionOverlay from "./overlays/addNewSession";
import RegistredStudentsOverlay from "./overlays/registredStudentsList";
import TeacherPresence from "./overlays/teacherPresence";

export default function SettingsCell() {

  const [activeOverlay, setActiveOverlay] = useState<string | null>(null)
  const navigate = useNavigate()
  const options = [
    { label: "تعديل المعلومات", action: () => {} },
    { label: "حذف الفوج", action: () => setActiveOverlay("deleteGroup") },
    { label: "إضافة حصة إضافية", action: () =>  setActiveOverlay("addNewSession")},
    { label: "رؤية قائمة الحضور", action: () => navigate("/groupspresencemanagement") },
    { label: "رؤية قائمة المسجلين", action: () => setActiveOverlay("registredStudents") },
    { label: "حضور / غياب الأستاذ", action: () => setActiveOverlay("teacherPresence") },
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
        {activeOverlay === "deleteGroup" && <DeleteGroupOverlay onClose={closeOverlay} />}
        {activeOverlay === "addNewSession" && <AddNewSessionOverlay onClose={closeOverlay} />}
        {activeOverlay === "registredStudents" && <RegistredStudentsOverlay onClose={closeOverlay} />}
        {activeOverlay === "teacherPresence" && <TeacherPresence onClose={closeOverlay} />}
      </Popup>
     
    </div>
  );
}
