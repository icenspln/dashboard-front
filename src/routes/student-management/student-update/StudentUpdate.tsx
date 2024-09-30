import { useContext } from "react";
import { UpdateContext, UpdateContextProvider } from "./core/UpdateContext";
import StudentCard from "./student-card/StudentCard";
import StudentUpdateForm from "./student-update-form/StudentUpdateForm";

function StudentUpdate() {
    const { successModal } = useContext(UpdateContext);

    return (
        <>
            <StudentUpdateForm />
            {successModal && <StudentCard />}
        </>
    );
}

export const StudentUpdateWrapper = () => {
    return (
        <>
            <UpdateContextProvider>
                <section className="w-full min-h-screen p-4 bg-mainBg">
                    <div className="  mb-6">
                        <h1 className="text-2xl font-medium">Edit Student</h1>
                        <p className="font-medium text-textGray">
                            Update student's data
                        </p>
                    </div>
                    <StudentUpdate />
                </section>
            </UpdateContextProvider>
        </>
    );
};
