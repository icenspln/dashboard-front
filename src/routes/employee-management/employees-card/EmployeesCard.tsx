import PersonSvg from "../../../assets/icons/PersonSvg";
import PhoneSvg from "../../../assets/icons/PhoneSvg";
import SettingsCell from "./core/columns/SettingsCell";
import { Employee } from "./core/_models";

import { useMemo, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getEmployees } from "./core/_requests";
import  data from "./core/data.json"




export function EmployeesTable() {

  //const [Employees, setEmployees] = useState<Employee[]>([]);
 // const EmployeeData :Employee[] = data
//
  ////query functions
  //const { data, isLoading } = useQuery({
  //  queryKey: ["getTeachers"],
  //  queryFn: getEmployees,
  //});
//
  //useMemo(() => {
  //  if (data && !isLoading) {
  //    setEmployees(data.data);
  //  }
  //}, [data, isLoading]);

  return (
    <div className="flex flex-wrap gap-[12px] ">
  {data.map((empolyee) => (
    <div
      key={empolyee.id}
      className="w-[343px] h-[82px] border rounded-lg p-4 flex items-center justify-between shadow-sm"
    >
      <div className="flex items-center">
        <div>
          <p className="text-xl font-medium">{empolyee.firstName}</p>
          <p className="text-sm text-gray-500 flex items-center gap-[16px] mt-2">
            <span className=" flex items-center gap-[8px] ">
              <PersonSvg />
              {empolyee.position}
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
