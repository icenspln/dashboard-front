// import DotsSvg from "../../../../../assets/icons/DotsSvg";
import { useState } from "react";
import DotsSvg from "../../../../assets/icons/DotsSvg";
import { Link } from "react-router-dom";

export default function SettingsCell({ _id }: { _id: string }) {
  const [settings, setSettings] = useState(false);

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
                    <Link to={`/studentmanagement/edit/${_id}`}>
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
