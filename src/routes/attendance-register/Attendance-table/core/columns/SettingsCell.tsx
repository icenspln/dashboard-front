import { useState } from "react";
import Popup from "reactjs-popup";
import DotsSvg from "../../../../../assets/icons/DotsSvg";

import DeleteFromListOverlay from "./overlays/deleteFromList";
import { GetStudentByCardIdType } from "../_models";

export default function SettingsCell({
  studentInfo,
  groupId,
}: {
  studentInfo: GetStudentByCardIdType;
  groupId: string;
}) {
  const [activeOverlay, setActiveOverlay] = useState<string | null>(null);

  const options = [
    { label: "حذف من الفوج", action: () => setActiveOverlay("deleteFromList") },
    // { label: "تغيير الفوج", action: () => setActiveOverlay("changeGroup") },
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
              className="w-full px-4 py-2  text-gray-700 bg-gray-100  rounded hover:bg-gray-200"
              onClick={option.action}
            >
              {option.label}
            </button>
          ))}
        </div>
        {activeOverlay === "deleteFromList" && (
          <DeleteFromListOverlay
            groupId={groupId}
            onClose={closeOverlay}
            studentId={studentInfo.student._id}
          />
        )}
        {/* {activeOverlay === "changeGroup" && <ChangeGroupOverlay onClose={closeOverlay} />} */}
      </Popup>
    </div>
  );
}
