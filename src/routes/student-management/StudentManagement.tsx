import { Link } from "react-router-dom"
import ButtonPrimary from "../../components/ButtonPrimary"
import { StudentTableWrapper } from "./students-table/StudentsTable"
import { StudentsTableContextProvider } from "./students-table/core/StudentsTableContext"
import { StudentTableForm } from "./students-table/student-table-form/StudentTableForm"

export default function StudentManagement() {
    return (
        <StudentsTableContextProvider>
            <section className="w-full min-h-screen p-4 bg-mainBg">
                <div className="flex justify-between items-center mb-4">
                    <div className=" flex gap-[12px]">
                        <StudentTableForm />
                    </div>
                    <nav className="flex ">
                        <Link to={`/students-management/new`}>
                            <ButtonPrimary text="New Student" active />
                        </Link>
                    </nav>
                </div>
                <StudentTableWrapper />
            </section>
        </StudentsTableContextProvider>
    )
}
