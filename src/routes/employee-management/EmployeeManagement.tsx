import { Link } from "react-router-dom";
import ButtonPrimary from "../../components/ButtonPrimary";
import { EmployeesTable } from "./employees-card/EmployeesTable";
import { EmployeeProvider } from "./employees-card/core/EmployeeContext";
import { EmployeeSearch } from "./employees-search/EmployeeSearch";

export default function EmployeeManagement() {
    return (
        <EmployeeProvider>
            <section className="w-full min-h-screen p-4 bg-mainBg">
                <div className="flex justify-between items-center mb-4">
                    <div className=" flex gap-[12px]">
                        <EmployeeSearch />
                    </div>
                    <nav className="flex gap-[12px] items-center ">
                        <Link to={`/employees-management/new`}>
                            <ButtonPrimary text="New Employee" active />
                        </Link>
                    </nav>
                </div>
                <EmployeesTable />
            </section>
        </EmployeeProvider>
    );
}
