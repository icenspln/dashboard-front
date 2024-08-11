import { Link } from "react-router-dom";
import ButtonPrimary from "../../components/ButtonPrimary";
import { EmployeesTable } from "./employees-card/EmployeesCard";
import SearchBar from "../../components/SearchBar";




export default function EmployeeManagement() {
  return (
    <section className="w-full min-h-screen p-4 bg-mainBg">
     
      <div className="flex justify-between items-center mb-4">
      <div className=" flex gap-[12px]">
      <SearchBar/>
       
        
      </div>
      <nav className="flex gap-[12px] items-center ">
       
        <Link to={`/employeemanagement/new`}>
          <ButtonPrimary text="تسجيل موظف جديد" active />
        </Link>
      </nav>
      </div>
      <EmployeesTable />
    </section>
  );
}
