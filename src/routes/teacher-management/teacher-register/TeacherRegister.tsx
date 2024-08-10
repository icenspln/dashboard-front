import { RegistrationContextProvider } from "./core/RegistrationContext";
import TeacherCard from "./teacher-card/TeacherCard";
import TeacherRegisterForm from "./teacher-register-form/TeacherRegisterForm";
export default function TeacherRegister() {
  return (
    <RegistrationContextProvider>
      <section className="w-full min-h-screen p-4 bg-mainBg">
        <div className="  mb-6">
          <h1 className="text-2xl font-medium">تسجيل جديد | تعديل المعلومات</h1>
        </div>
        <div>
          <TeacherRegisterForm />
          <TeacherCard />
        </div>
      </section>
    </RegistrationContextProvider>
  );
}
