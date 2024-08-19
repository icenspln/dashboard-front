import { Link } from "react-router-dom";
import ButtonPrimary from "../../../components/ButtonPrimary";

import { TeacherPresenceListsTable } from "./teacher-presence-table/TeacherPresenceTable";
import { TeacherPresenceTableContextProvider } from "./teacher-presence-table/core/TeacherPresenceTableContext";
import { TeacherTableForm } from "./teacher-presence-table/core/teacher-table-form/TeacherTableForm";

export default function TeacherPresenceManagement() {
  return (
    <TeacherPresenceTableContextProvider>
      <section className="w-full min-h-screen p-4 bg-mainBg">
        <div className="flex justify-between items-center mb-4">
          <div className=" flex gap-[12px]">
            <TeacherTableForm />
          </div>
          <nav className="flex items-center gap-[12px]">
            <Link to="/monthlysalarystatement">
              <ButtonPrimary text="تحميل قسيمة الدفع" active />
            </Link>
          </nav>
        </div>
        <div>
          <TeacherPresenceListsTable />
        </div>
      </section>
    </TeacherPresenceTableContextProvider>
  );
}
