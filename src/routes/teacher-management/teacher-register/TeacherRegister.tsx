import { RegistrationContextProvider } from "./core/RegistrationContext";
import TeacherCard from "./teacher-card/TeacherCard";
import TeacherRegisterForm from "./teacher-register-form/TeacherRegisterForm";
export default function TeacherRegister() {
    return (
        <RegistrationContextProvider>
            <section className="w-full min-h-screen p-4 bg-mainBg">
                <div className="  mb-6">
                    <h1 className="text-2xl font-medium">New Teacher</h1>
                    <p className="text-textGray">Register new teacher data</p>
                </div>
                <div>
                    <TeacherRegisterForm />
                    <TeacherCard />
                </div>
            </section>
        </RegistrationContextProvider>
    );
}
