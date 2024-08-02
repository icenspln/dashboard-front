import DotsSvg from "../../../../../assets/icons/DotsSvg";
import { useState } from "react";

export default function SettingsCell() {
  const [settings, setSettings] = useState(false);

  const options = [
    { label: "تعديل المعلومات" },
    { label: "رؤية الأفواج الحالية" },
    { label: "تغيير الفوج" },
    { label: "تغيير البطاقة" },
    { label: "حذف من القائمة" },
  ];
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
                  {options.map((option, index) => (
                    <li key={index} className="w-full cursor-pointer">
                      {option.label}
                    </li>
                  ))}
                </ul>
              </article>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
