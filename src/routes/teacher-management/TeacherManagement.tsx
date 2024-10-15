import { Link } from "react-router-dom";
import ButtonPrimary from "../../components/ButtonPrimary";
import { TeacherTable } from "./teacher-table/TeacherTable";

import { TeachersTableContextProvider } from "./teacher-table/core/TeacherTableContext";
import { TeacherTableForm } from "./teacher-table/teacher-table-form/TeacherTableForm";

export default function TeacherManagement() {
    return (
        <TeachersTableContextProvider>
            <section className="w-full min-h-screen p-4 bg-mainBg">
                <div className="flex justify-between items-center mb-4">
                    <div className=" flex gap-[12px]">
                        <TeacherTableForm />
                        {/* <ColumnSelection options={ColumnSelectionOptions} /> */}
                    </div>
                    <nav className="flex items-center gap-[12px]">
                        <Link to={`/teachers-management/new`}>
                            <ButtonPrimary text="New Teacher" active />
                        </Link>
                    </nav>
                </div>
                <TeacherTable />
            </section>
        </TeachersTableContextProvider>
    );
}
