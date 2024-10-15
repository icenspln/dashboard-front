import PersonSvg from "../../../assets/icons/PersonSvg";
import PhoneSvg from "../../../assets/icons/PhoneSvg";
import SettingsCell from "./core/columns/SettingsCell";
import { useNavigate } from "react-router-dom";

import { useEmployeeContext } from "./core/EmployeeContext";
import EmployeeEditCard from "./employee-edit-card/EmployeeEditCard";
import emptyImage from "../../../assets/imgs/empty.svg";
import Spinner from "../../../components/Spinner";

export function EmployeesTable() {
    const navigate = useNavigate();
    const { employees, isLoading, error } = useEmployeeContext();

    const handleClick = (id: string) => {
        navigate(`/employees-presence-management/${id}`);
    };
    if (error) {
        return (
            <div className="flex justify-center items-center min-h-full">
                Something went wrong..
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-full">
                <Spinner />
            </div>
        );
    }

    if (employees.length == 0)
        return (
            <div
                // ref={constraintsRef}
                className="overflow-x-clip border border-[#E2E8F0] rounded-xl"
            >
                <table
                    // drag={"x"}
                    // dragConstraints={constraintsRef}
                    // dragElastic={0}
                    // dragMomentum={false}
                    className="w-full bg-white rounded-xl"
                >
                    <tbody>
                        <tr>
                            <td className="p-4 w-full text-center">
                                <img
                                    className="mx-auto"
                                    width={600}
                                    src={emptyImage}
                                    alt=""
                                />
                                There are no Employees
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );

    return (
        <div className="flex flex-wrap gap-[12px] ">
            {employees.map((employee) => (
                <div
                    key={employee._id}
                    className="w-[343px] h-[82px] border-2 rounded-lg p-4 flex items-center justify-between shadow-sm"
                >
                    <div className="flex items-center">
                        <div>
                            <p
                                className="text-xl font-medium hover:cursor-pointer hover:underline hover:underline-offset-4"
                                onClick={() => handleClick(employee._id!)}
                            >
                                {employee.firstName} {employee.lastName}
                            </p>
                            <p className="text-sm text-gray-500 flex items-center gap-[16px] mt-2">
                                <span className=" flex items-center gap-[8px] ">
                                    <PersonSvg />
                                    {employee.job}
                                </span>

                                <span className="flex items-center gap-[8px]">
                                    <PhoneSvg />
                                    {employee.phoneNumber}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <SettingsCell />
                    </div>
                    <EmployeeEditCard employeeId={employee._id!} />
                </div>
            ))}
        </div>
    );
}
