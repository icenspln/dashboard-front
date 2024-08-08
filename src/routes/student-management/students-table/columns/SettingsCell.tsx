// import DotsSvg from "../../../../../assets/icons/DotsSvg";
import { useContext, useState } from "react";
import DotsSvg from "../../../../assets/icons/DotsSvg";
import { Link } from "react-router-dom";
import { StudentsTableContext } from "../core/StudentsTableContext";

export default function SettingsCell({ row }: { row: any }) {
  const [settings, setSettings] = useState(false);

  const { setSelectedStudent, setGroupModal } =
    useContext(StudentsTableContext);

  const setStudent = () => {
    setSelectedStudent(row);
    setGroupModal(true);
  };
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
                  <li className="cursor-pointer" onClick={setStudent}>
                    تغيير الفوج
                  </li>
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
