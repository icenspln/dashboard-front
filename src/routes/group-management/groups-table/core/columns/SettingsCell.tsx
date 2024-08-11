import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import DotsSvg from "../../../../../assets/icons/DotsSvg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//importing the overlays
import DeleteGroupOverlay from "./overlays/deleteGroup";
import AddNewSessionOverlay from "./overlays/addNewSession";
import RegistredStudentsOverlay from "./overlays/registredStudentsList";

export default function SettingsCell({ row }: { row: any }) {
  const [activeOverlay, setActiveOverlay] = useState<string | null>(null);
  const navigate = useNavigate();
  const options = [
    {
      label: "تعديل المعلومات",
      action: () => {
        navigate(
          `/groupmanagement/edit/${row._id}?dayOfWeek=${row.dayOfWeek}&timing=${row.timing.hour.toString().padStart(2, "0")}:${row.timing.minute.toString().padStart(2, "0")}&responsibleTeacherLabel=${row.responsibleTeacher.firstName + " " + row.responsibleTeacher.lastName}&responsibleTeacherValue=${row.responsibleTeacher._id}&module=${row.module}&institution=${row.institution}&level=${row.level}&pricing=${row.pricing}&roomNumber=${row.roomNumber}&maxNumberOfStudents=${row.maxNumberOfStudents}`
        );
      },
    },
    {
      label: "إضافة حصة إضافية",
      action: () => setActiveOverlay("addNewSession"),
    },
    {
      label: "رؤية قائمة الحضور",
      action: () => navigate("/groupspresencemanagement"),
    },
    {
      label: "رؤية قائمة المسجلين",
      action: () => setActiveOverlay("registredStudents"),
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
        {activeOverlay === "deleteGroup" && (
          <DeleteGroupOverlay onClose={closeOverlay} />
        )}
        {activeOverlay === "addNewSession" && (
          <AddNewSessionOverlay onClose={closeOverlay} />
        )}
        {activeOverlay === "registredStudents" && (
          <RegistredStudentsOverlay onClose={closeOverlay} />
        )}
      </Popup>
    </div>
  );
}
