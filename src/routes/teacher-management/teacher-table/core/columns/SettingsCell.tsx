import { useState } from "react";
import Popup from "reactjs-popup";
import DotsSvg from "../../../../../assets/icons/DotsSvg";
import DeleteFromListOverlay from "./overlays/deleteFromList";
import DownloadReceiptOverlay from "./overlays/downloadReceipt";
import { useNavigate } from "react-router-dom";
import { Teacher } from "../_models";

export default function SettingsCell({ row }: { row: Teacher }) {
  const [activeOverlay, setActiveOverlay] = useState<string | null>(null);
  const navigate = useNavigate();

  const options = [
    {
      label: "تعديل المعلومات",
      action: () => {
        navigate(
          `/teachermanagement/edit/${row._id}?firstName=${row.firstName}&lastName=${row.lastName}&phoneNumber=${row.phoneNumber}&birthDate=${row.birthDate}&modules=${row.modules.join(",")}`
        );
      },
    },
    {
      label: "حذف من القائمة",
      action: () => setActiveOverlay("deleteFromList"),
    },
    {
      label: "تحميل قسيمة الدفع للشهر",
      action: () => setActiveOverlay("downloadReceipt"),
    },
    {
      label: "قائمة الحضور",
      action: () => {
        navigate(`/teachermanagement/teacherpresencemanagement/${row._id}`);
      },
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
        {activeOverlay === "downloadReceipt" && (
          <DownloadReceiptOverlay onClose={closeOverlay} />
        )}
      </Popup>
    </div>
  );
}
