import EmployeeRegisterForm from "./employee-register-form/EmployeeRegisterForm";
import { RegistrationContextProvider } from "./core/RegistrationContext";
import EmployeeCard from "./employee-card/EmployeeCard";
import {useState }  from "react";
export default function EmployeeRegister() {
  const [employeeId, setEmployeeId] = useState<string>("");

  return (
    <RegistrationContextProvider>
      <section className="w-full min-h-screen p-4 bg-mainBg">
        <div className="  mb-6">
          <h1 className="text-2xl font-medium">تسجيل جديد | تعديل المعلومات</h1>
        </div>
        <EmployeeRegisterContent employeeId={employeeId} setEmployeeId={setEmployeeId} />
      </section>
    </RegistrationContextProvider>
  );
}

interface EmployeeRegisterContentProps {
  employeeId: string;
  setEmployeeId: (id: string) => void;
}

function EmployeeRegisterContent({ employeeId, setEmployeeId }: EmployeeRegisterContentProps) {
  return (
    <div>
      <EmployeeRegisterForm setEmployeeId={setEmployeeId} />
      <EmployeeCard employeeId={employeeId} />
    </div>
  );
}