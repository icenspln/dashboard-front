import { RegistrationContextProvider } from "./core/RegistrationContext";
import StudentRegisterForm from "./student-register-form/StudentRegisterForm";
import StudentCard from "./student-card/StudentCard";

export default function StudentRegister() {
  return (
    <RegistrationContextProvider>
      <section className="w-full min-h-screen p-4 bg-mainBg">
        <div className="  mb-6">
          <h1 className="text-2xl font-medium">تسجيل جديد | تعديل المعلومات</h1>
        </div>
        <StudentRegisterContent />
      </section>
    </RegistrationContextProvider>
  );
}

function StudentRegisterContent() {
  return (
    <div>
      <StudentRegisterForm />
      <StudentCard />
    </div>
  );
}
