import EmployeeRegisterForm from "./employee-register-form/EmployeeRegisterForm";
import { RegistrationContextProvider } from "./core/RegistrationContext";
import EmployeeCard from "./employee-card/EmployeeCard";

export default function EmployeeRegister() {
  return (
    <RegistrationContextProvider>
      <section className="w-full min-h-screen p-4 bg-mainBg">
        <div className="  mb-6">
          <h1 className="text-2xl font-medium">تسجيل جديد | تعديل المعلومات</h1>
        </div>
        <EmployeeRegisterContent />
      </section>
    </RegistrationContextProvider>
  );
}

function EmployeeRegisterContent() {
  return (
    <div>
      <EmployeeRegisterForm />
      <EmployeeCard />
    </div>
  );
}
