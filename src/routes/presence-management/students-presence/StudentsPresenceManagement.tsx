// import ButtonPrimary from "../../../components/ButtonPrimary";

import { StudentsPresenceListsTable } from "./students-presence-table/StudentsPresenceTable";
import { StudentsTableContextProvider } from "./students-presence-table/core/StudentsTableContext";
import { StudentTableForm } from "./students-presence-table/student-table-form/StudentTableForm";

export default function StudentsPresenceListsManagement() {
    return (
        <StudentsTableContextProvider>
            <section className="w-full min-h-screen p-4 bg-mainBg">
                <div className="flex justify-between items-center mb-4">
                    <div className=" flex gap-[12px]">
                        <StudentTableForm />
                    </div>
                    <nav className="flex items-center gap-[12px]">
                        {/* <ButtonPrimary text="تحميل قسيمة الدفع" active /> */}
                    </nav>
                </div>
                <div>
                    <StudentsPresenceListsTable />
                </div>
            </section>
        </StudentsTableContextProvider>
    );
}
