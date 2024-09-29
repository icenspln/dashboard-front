import { RegistrationContextProvider } from "./core/RegistrationContext"
import StudentRegisterForm from "./student-register-form/StudentRegisterForm"
import StudentCard from "./student-card/StudentCard"
import { useState } from "react"
import { StudentGroupModal } from "./student-group-modal/StudentGroupModal"

export default function StudentRegister() {
    const [studentId, setStudentId] = useState<string>("")

    return (
        <RegistrationContextProvider>
            <section className="w-full min-h-screen p-4 bg-mainBg">
                <div className="  mb-6">
                    <h1 className="text-2xl font-medium">New Student</h1>
                    <p className="font-medium text-textGray">
                        Register new student data
                    </p>
                </div>
                <StudentRegisterContent
                    studentId={studentId}
                    setStudentId={setStudentId}
                />
            </section>
        </RegistrationContextProvider>
    )
}

interface studentRegisterContentProps {
    studentId: string
    setStudentId: (id: string) => void
}
function StudentRegisterContent({
    studentId,
    setStudentId,
}: studentRegisterContentProps) {
    return (
        <div>
            <StudentRegisterForm setStudentId={setStudentId} />
            <StudentCard studentId={studentId} />
            <StudentGroupModal studentId={studentId} />
        </div>
    )
}
