import { useContext } from "react";
import { UpdateContext, UpdateContextProvider } from "./core/UpdateContext";
import TeacherCard from "./teacher-card/TeacherCard";
import TeacherUpdateForm from "./teacher-update-form/TeacherUpdateForm";

function TeacherUpdate() {
    const { successModal } = useContext(UpdateContext);

    return (
        <>
            <TeacherUpdateForm />
            {successModal && <TeacherCard />}
        </>
    );
}

export const TeacherUpdateWrapper = () => {
    return (
        <>
            <UpdateContextProvider>
                <section className="w-full min-h-screen p-4 bg-mainBg">
                    <div className="  mb-6">
                        <h1 className="text-2xl font-medium">Edit Teacher</h1>
                        <p className="font-medium text-textGray">
                            Update student's data
                        </p>
                    </div>
                    <TeacherUpdate />
                </section>
            </UpdateContextProvider>
        </>
    );
};
