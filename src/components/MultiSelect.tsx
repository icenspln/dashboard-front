import { useEffect, useRef, useState } from "react";

export default function MultiSelect({ setValue }: { setValue?: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedModules, setSelectedModules] = useState<any>([]);
  const dropdownRef = useRef<any>(null);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (event: any) => {
    const { value, checked } = event.target;
    setSelectedModules((prev: any) => {
      if (checked) {
        setValue("modules", [...prev, value]);
        return [...prev, value];
      } else {
        setValue(
          "modules",
          prev.filter((m: any) => m !== value)
        );
        return prev.filter((m: any) => m !== value);
      }
    });
  };

  const handleClickOutside = (event: Event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className="relative w-full" ref={dropdownRef}>
        <button
          className="min-w-[140px] bg-white transition hover:bg-light border border-solid border-light text-blueDark font-medium flex flex-row items-center rounded-lg gap-3 px-3 py-2 "
          onClick={(e) => {
            e.preventDefault();
            handleButtonClick();
          }}
        >
          اختر المادة
        </button>
        {isOpen && (
          <div className=" block absolute bg-white rounded-md min-w-[160px] shadow-sm z-10">
            <label className="m-3 flex justify-between flex-row-reverse cursor-pointer">
              <input
                type="checkbox"
                value="لغة عربية"
                checked={selectedModules.includes("لغة عربية")}
                onChange={handleCheckboxChange}
              />
              <span className="text-md">لغة عربية</span>
            </label>
            <label className="m-3 flex justify-between flex-row-reverse cursor-pointer">
              <input
                type="checkbox"
                value="رياضيات"
                checked={selectedModules.includes("رياضيات")}
                onChange={handleCheckboxChange}
              />
              <span className="text-md">رياضيات</span>
            </label>

            <label className="m-3 flex justify-between flex-row-reverse cursor-pointer">
              <input
                type="checkbox"
                value="فيزياء"
                checked={selectedModules.includes("فيزياء")}
                onChange={handleCheckboxChange}
              />
              <span className="text-md">فيزياء</span>
            </label>

            <label className="m-3 flex justify-between flex-row-reverse cursor-pointer">
              <input
                type="checkbox"
                value="علوم"
                checked={selectedModules.includes("علوم")}
                onChange={handleCheckboxChange}
              />
              <span className="text-md">علوم</span>
            </label>

            <label className="m-3 flex justify-between flex-row-reverse cursor-pointer">
              <input
                type="checkbox"
                value="فلسفة"
                checked={selectedModules.includes("فلسفة")}
                onChange={handleCheckboxChange}
              />
              <span className="text-md">فلسفة</span>
            </label>
            <label className="m-3 flex justify-between flex-row-reverse cursor-pointer">
              <input
                type="checkbox"
                value="فرنسية"
                checked={selectedModules.includes("فرنسية")}
                onChange={handleCheckboxChange}
              />
              <span className="text-md">فرنسية</span>
            </label>
            <label className="m-3 flex justify-between flex-row-reverse cursor-pointer">
              <input
                type="checkbox"
                value="انجليزية"
                checked={selectedModules.includes("انجليزية")}
                onChange={handleCheckboxChange}
              />
              <span className="text-md">انجليزية</span>
            </label>
            <label className="m-3 flex justify-between flex-row-reverse cursor-pointer">
              <input
                type="checkbox"
                value="اسبنيولية"
                checked={selectedModules.includes("اسبنيولية")}
                onChange={handleCheckboxChange}
              />
              <span className="text-md">اسبنيولية</span>
            </label>
          </div>
        )}
      </div>
    </>
  );
}
