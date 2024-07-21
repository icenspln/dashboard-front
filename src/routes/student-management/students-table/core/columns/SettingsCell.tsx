import { useState } from "react";
import DotsSvg from "../../../../../assets/icons/DotsSvg";

export default function SettingsCell() {
  const [open, setOpen] = useState(false);

  const options = [
    "تعديل المعلومات",
    "حذف من القائمة",
    "رؤية الأفواج الحالية",
    "تغيير الفوج",
  ];
  return (
    <div>
      <div>
        <div
          className={`w-fit rounded-sm m-1 h-fit cursor-pointer ${open ? "bg-[#F1F5F9]" : "bg-white"} `}
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          <DotsSvg />
        </div>
        {open && (
          <div className="bg-white px-4 py-4 shadow-md   absolute z-10 w-[192px] h-auto rounded-md border border-[#F1F5F9]">
            <ul className="flex flex-col gap-2">
              {options.map((opt, i) => (
                <>
                  <li
                    className="font-medium text-blueDark cursor-pointer"
                    key={i}
                  >
                    {opt}
                  </li>
                </>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
