import { useContext, useEffect, useState } from "react";
// import { LevelFilter } from "../../../../components/LevelFilter";
import SearchBar from "../../../../components/SearchBar";
import { StudentsTableContext } from "../core/StudentsTableContext";
import { ColumnSelection } from "../../../../components/ButtonFilter";
import PlusSvg from "../../../../assets/icons/PlusSvg";

export function StudentTableForm() {
  const ColumnSelectionOptions = [
    { id: 1, label: "الرقم" },
    { id: 2, label: "الإسم" },
    { id: 3, label: "اللقب" },
    { id: 4, label: "تاريخ الميلاد" },
    { id: 5, label: "المستوى" },
    { id: 6, label: "السنة" },
    { id: 7, label: "رقم الهاتف" },
    { id: 8, label: "تاريخ التسجيل" },
    { id: 9, label: "عدد الأفواج الكلية" },
    { id: 10, label: "عدد الأفواج الحالية" },
    { id: 11, label: "الثمن الذي تم دفع" },
    { id: 12, label: "الثمن الذي يجب دفعه" },
    { id: 13, label: "المجموع" },
    { id: 14, label: "الإعدادات" },
  ];

  const { searchBarFilter, setSearchBarFilter } =
    useContext(StudentsTableContext);

  return (
    <>
      <div className="flex items-center rounded border-2 border-gray bg-white  min-w-[241px] h-[32px]">
        <input
          onChange={(e: any) => setSearchBarFilter(e.target.value)}
          value={searchBarFilter}
          className="appearance-none bg-transparent  border-none w-full text-gray-700 mr-3 px-3 py-2  leading-tight focus:outline-none"
          type="text"
          placeholder="البحث في القائمة"
        />
      </div>
      <InstitutionFilter />
      {/* <FilterButton label="السنة" options={levelFilterOptions} /> */}
      {/* <ColumnSelection options={ColumnSelectionOptions} /> */}
    </>
  );
}

interface FilterOption {
  id: string;
  label: string;
}

const institutionFilterOptions = [
  { id: "primarySchool", label: "الإبتدائي" },
  { id: "middleSchool", label: "المتوسط" },
  { id: "highSchool", label: "الثانوي" },
];

const InstitutionFilter = () => {
  const [selectedOptions, setSelectedOptions] = useState<FilterOption[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const { setInstitutionFilter, institutionFilter } =
    useContext(StudentsTableContext);

  useEffect(() => {
    setInstitutionFilter(selectedOptions.map((opt) => opt.id));
  }, [selectedOptions]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: FilterOption) => {
    let updatedOptions = [...selectedOptions];
    if (updatedOptions.find((opt) => opt.id === option.id)) {
      updatedOptions = updatedOptions.filter((opt) => opt.id !== option.id);
    } else {
      updatedOptions.push(option);
    }
    setSelectedOptions(updatedOptions);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleOpen}
        className="bg-white flex items-center gap-[8px] w-[120px] h-[32px] px-4 py-2 border border-dashed border-gray-300 rounded-md shadow-sm hover:bg-gray-100"
      >
        <PlusSvg />
        <span className="text-gray-700">المؤسسة</span>
      </button>

      {isOpen && (
        <div className="absolute w-[166px] mt-1 bg-white rounded border border-gray-300 shadow-lg z-10">
          {institutionFilterOptions.map((option) => (
            <label
              key={option.id}
              className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
              htmlFor="checkbox"
              onClick={() => handleOptionClick(option)}
            >
              <span>{option.label}</span>
              <input
                name="checkbox"
                type="checkbox"
                checked={
                  selectedOptions.find((opt) => opt.id === option.id) !==
                  undefined
                }
                onChange={() => handleOptionClick(option)}
                className="form-checkbox text-blue-500 mr-2 w-[16px] h-[16px]"
              />
            </label>
          ))}
        </div>
      )}
    </div>
  );
};
