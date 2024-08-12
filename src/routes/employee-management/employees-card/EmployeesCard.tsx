import PersonSvg from "../../../assets/icons/PersonSvg";
import PhoneSvg from "../../../assets/icons/PhoneSvg";
import SettingsCell from "./core/columns/SettingsCell";
import { useNavigate } from "react-router-dom";

import { useEmployeeContext } from "./EmployeeContext";

export function EmployeesTable() {
  const navigate = useNavigate();
  const { employees, isLoading } = useEmployeeContext();

  if (isLoading) {
    return <div>...تحميل</div>;
  }

  const handleClick = (id: string) => {
    navigate(`/employeepresencemanagement/${id}`);
  };

  return (
    <div className="flex flex-wrap gap-[12px] ">
      {employees.map((empolyee) => (
        <div
          key={empolyee._id}
          className="w-[343px] h-[82px] border-2 rounded-lg p-4 flex items-center justify-between shadow-sm"
        >
          <div className="flex items-center">
            <div>
              <p
                className="text-xl font-medium hover:cursor-pointer hover:underline hover:underline-offset-4"
                onClick={() => handleClick(empolyee._id!)}
              >
                {empolyee.firstName} {empolyee.lastName}
              </p>
              <p className="text-sm text-gray-500 flex items-center gap-[16px] mt-2">
                <span className=" flex items-center gap-[8px] ">
                  <PersonSvg />
                  {empolyee.job}
                </span>

                <span className="flex items-center gap-[8px]">
                  <PhoneSvg />
                  {empolyee.phoneNumber}
                </span>
              </p>
            </div>
          </div>
          <div>
            <SettingsCell />
          </div>
        </div>
      ))}
    </div>
  );
}
