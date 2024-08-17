import { Link } from "react-router-dom";
import ButtonPrimary from "../../components/ButtonPrimary";
import { EmployeesTable } from "./employees-card/EmployeesTable";
import SearchBar from "../../components/SearchBar";
import { EmployeeProvider } from "./employees-card/core/EmployeeContext";

export default function EmployeeManagement() {
  return (
    <EmployeeProvider>
      <section className="w-full min-h-screen p-4 bg-mainBg">
        <div className="flex justify-between items-center mb-4">
          <div className=" flex gap-[12px]">
            <SearchBar />
          </div>
          <nav className="flex gap-[12px] items-center ">
            <Link to={`/employeemanagement/new`}>
              <ButtonPrimary text="تسجيل موظف جديد" active />
            </Link>
          </nav>
        </div>
        <EmployeesTable />
      </section>
    </EmployeeProvider>
  );
}
