// import DotsSvg from "../../../../../assets/icons/DotsSvg";
import { useContext, useState } from "react";
import DotsSvg from "../../../../assets/icons/DotsSvg";
import { Link } from "react-router-dom";
import { StudentsTableContext } from "../core/StudentsTableContext";

export default function SettingsCell({ row }: { row: any }) {
  const [settings, setSettings] = useState(false);

  const { setSelectedStudent, setGroupModal, setEditCardModal } =
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
            <div className="">
              <article className="grid gap-1 absolute bg-white rounded z-10 shadow-lg p-1 text-lg">
                <Link
                  to={`/studentmanagement/edit/${row._id}?firstName=${row.firstName}&lastName=${row.lastName}&phoneNumber=${row.phoneNumber}&guardianPhoneNumber=${row.guardianPhoneNumber}&birthDate=${row.birthDate}&institution=${row.institution}&level=${row.level}&speciality=${row.speciality}`}
                >
                  <button className="w-full px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded hover:bg-gray-200">
                    تعديل المعلومات
                  </button>
                </Link>
                <button
                  onClick={setStudent}
                  className="w-full px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
                >
                  تغيير الفوج
                </button>
                <button
                  onClick={() => setEditCardModal(true)}
                  className="w-full px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
                >
                  تغيير البطاقة
                </button>
              </article>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
