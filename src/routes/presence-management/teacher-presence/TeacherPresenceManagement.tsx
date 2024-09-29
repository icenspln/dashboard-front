import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ButtonPrimary from "../../../components/ButtonPrimary";
import { TeacherPresenceListsTable } from "./teacher-presence-table/TeacherPresenceTable";
import { TeacherPresenceTableContextProvider } from "./teacher-presence-table/core/TeacherPresenceTableContext";
import { TeacherTableForm } from "./teacher-presence-table/core/teacher-table-form/TeacherTableForm";
import { PercentageModal } from "./PercentageModal"; // Import the modal component

export default function TeacherPresenceManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleModalSubmit = (percentage: number) => {
    navigate(`/monthlysalarystatement/${percentage}`);
  };

  return (
    <TeacherPresenceTableContextProvider>
      <section className="w-full min-h-screen p-4 bg-mainBg">
        <div className="flex justify-between items-center mb-4">
          <div className=" flex gap-[12px]">
            <TeacherTableForm />
          </div>
          <nav className="flex items-center gap-[12px]">
            <button onClick={handleButtonClick}>
              <ButtonPrimary text="تحميل كشف الراتب الشهري" active />
            </button>
          </nav>
        </div>
        <div>
          <TeacherPresenceListsTable />
        </div>
        <PercentageModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleModalSubmit}
        />
      </section>
    </TeacherPresenceTableContextProvider>
  );
}