import {
  RegistrationContext,
  RegistrationContextProvider,
} from "./core/RegistrationContext";
import StudentRegisterForm from "./student-register-form/StudentRegisterForm";
import StudentCard from "./student-card/StudentCard";
import { StudentPhoneCheck } from "./student-phone-check/StudentPhoneCheck";
import { useContext } from "react";

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
  const { phoneCheckModal } = useContext(RegistrationContext);
  return (
    <div>
      <StudentRegisterForm />
      <StudentCard />
      {phoneCheckModal && <StudentPhoneCheck />}
    </div>
  );
}
