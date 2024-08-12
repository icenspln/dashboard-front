import { useContext, useState } from "react";
import Popup from "reactjs-popup";
import DotsSvg from "../../../../../assets/icons/DotsSvg";
import { useNavigate } from "react-router-dom";
import DeleteFromListOverlay from "./modals/deleteFromList";
import ChangeGroupOverlay from "./modals/changeGroup";
import RegistredStudentsOverlay from "./modals/registredStudentsList";
import ChangeStudentCardOverlay from "./modals/changeStudentCard";
import { StudentsTableContext } from "../StudentsTableContext";

export default function SettingsCell({ row }: { row: any }) {
  const { setSelectedStudent, setGroupModal, setEditCardModal } =
    useContext(StudentsTableContext);

  const setStudent = () => {
    setSelectedStudent(row);
    setGroupModal(true);
  };

  const [activeOverlay, setActiveOverlay] = useState<string | null>(null);
  const navigate = useNavigate();
  const options = [
    {
      label: "تعديل المعلومات",
      action: () => {
        navigate(
          `/studentmanagement/edit/${row._id}?firstName=${row.firstName}&lastName=${row.lastName}&phoneNumber=${row.phoneNumber}&guardianPhoneNumber=${row.guardianPhoneNumber}&birthDate=${row.birthDate}&institution=${row.institution}&level=${row.level}&speciality=${row.speciality}`
        );
      },
    },
    {
      label: "رؤية الأفواج الحالية",
      action: () => {
        // setActiveOverlay("registredStudentsList");
        setStudent();
      },
    },
    { label: "تغيير الفوج", action: () => setActiveOverlay("changeGroup") },
    {
      label: "تغيير البطاقة",
      action: () => {
        setEditCardModal(true);
        // setActiveOverlay("changeCard")}
      },
    },
    {
      label: "رؤية تواريخ الدفع",
      action: () => navigate("/studentspaymenthistory"),
    },
    {
      label: "رؤية تواريخ الحضور والغياب",
      action: () =>
        navigate(`/studentmanagement/studentspresencemanagement/${row._id}`),
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
