// import DotsSvg from "../../../../../assets/icons/DotsSvg";
import { useState } from "react";
import DotsSvg from "../../../../assets/icons/DotsSvg";
import { Link } from "react-router-dom";

export default function SettingsCell({ row }: { row: any }) {
  const [settings, setSettings] = useState(false);

  //   __v: 0
  // ​
  // _id: "66afc285202b2643cff292f4"
  // ​
  // birthDate: "2024-08-14T00:00:00.000Z"
  // ​
  // firstName: "anoterh"
  // ​
  // ​
  // guardianPhoneNumber: "43242343243"
  // ​
  // institution: "highSchool"
  // ​
  // lastName: "tes"
  // ​
  // level: 2
  // ​
  // phoneNumber: "43242343243"
  // ​
  // speciality: "تسيير و اقتصاد"
  // ​

  return (
    <div>
      <div>
        <div className="relative">
          <button
            className={`${settings ? "w-fit h-fit bg-grayBlue" : "w-fit h-fit bg-white "} rounded-sm`}
            onClick={() => setSettings((prev) => !prev)}
          >
            <DotsSvg />
          </button>
          {settings && (
            <>
              <article className="absolute bg-white rounded z-10 shadow-lg p-3">
                <ul className="flex flex-col gap-3 ">
                  <li>
                    <Link
                      to={`/studentmanagement/edit/${row._id}?firstName=${row.firstName}&lastName=${row.lastName}&phoneNumber=${row.phoneNumber}&guardianPhoneNumber=${row.guardianPhoneNumber}&birthDate=${row.birthDate}&institution=${row.institution}&level=${row.level}&speciality=${row.speciality}`}
                    >
                      تعديل المعلومات
                    </Link>
                  </li>
                  <li>رؤية الأفواج الحالية</li>
                  <li>تغيير الفوج</li>
                  <li>تغيير البطاقة</li>
                </ul>
              </article>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
