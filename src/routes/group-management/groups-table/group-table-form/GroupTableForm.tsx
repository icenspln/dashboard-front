import { useContext, useEffect, useState } from "react";
import { GroupsTableContext } from "../core/GroupsTableContext";
import PlusSvg from "../../../../assets/icons/PlusSvg";
import {
  FilterOption,
  institutionFilterOptions,
  levelFilterOption,
} from "../core/_models";

import { FilterButton } from "../../../../components/ButtonFilter";

const ModuleSelectionOptions = [
  { id: "الرياضيات", label: "الرياضيات" },
  { id: "اللغة العربية", label: "اللغة العربية" },
  { id: "اللغة الفرنسية", label: "اللغة الفرنسية" },
  { id: "اللغة الانجليزية", label: "اللغة الانجليزية" },
  { id: "التربية المدنية", label: "التربية المدنية" },
  { id: "التربية الإسلامية", label: "التربية الإسلامية" },
  { id: "التربية العلمية", label: "التربية العلمية" },
  { id: "تاريخ وجغرافيا", label: "تاريخ وجغرافيا" },
];

const DaysSelectionOptions = [
  { id: "Sunday", label: "الأحد" },
  { id: "Monday", label: "الإثنين" },
  { id: "Tuesday", label: "الثلاثاء" },
  { id: "Wednesday", label: "الأربعاء" },
  { id: "Thursday", label: "الخميس" },
  { id: "Friday", label: "الجمعة" },
  { id: "Saturday", label: "السبت" },
];


export function GroupTableForm() {
  const { setFilterState, filterState } = useContext(GroupsTableContext);

  return (
    <>
      <div className="flex items-center rounded border-2 border-gray bg-white  min-w-[241px] h-[32px]">
        <input
          onChange={(e: any) =>
            setFilterState((prev: any) => ({
              ...prev,
              searchBar: e.target.value,
            }))
          }
          value={filterState.searchBar}
          className="appearance-none bg-transparent  border-none w-full text-gray-700 mr-3 px-3 py-2  leading-tight focus:outline-none"
          type="text"
          placeholder="البحث في القائمة"
        />
      </div>
      <InstitutionFilter />
      <LevelFilter />
      <FilterButton
        label="المواد"
        filterKey="modules"
        setFilterState={setFilterState}
        options={ModuleSelectionOptions}
        // useEffectCallback={useEffectCallback}
      />

      <FilterButton
        label="الأيام"
        filterKey="dayOfWeek"
        setFilterState={setFilterState}
        options={DaysSelectionOptions}
        // useEffectCallback={useEffectCallback}
      />
      {/* <FilterButton label="الأيام" options={DaysSelectionOptions} /> */}

      {/* <FilterButton label="السنة" options={levelFilterOptions} /> */}
      {/* <ColumnSelection options={ColumnSelectionOptions} /> */}
    </>
  );
}

const InstitutionFilter = () => {
  const [selectedOptions, setSelectedOptions] = useState<FilterOption[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const { setFilterState } = useContext(GroupsTableContext);

  useEffect(() => {
    setFilterState((prev: any) => ({
      ...prev,
      institution: selectedOptions.map((opt) => opt.id),
    }));
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

const LevelFilter = ({}) => {
  const [selectedOptions, setSelectedOptions] = useState<FilterOption[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const { setFilterState } = useContext(GroupsTableContext);

  useEffect(() => {
    setFilterState((prev: any) => ({
      ...prev,
      level: selectedOptions.map((opt) => opt.id),
    }));
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
        className="flex items-center gap-[8px] w-[116px] h-[32px] px-4 py-2 border border-dashed border-gray-300 rounded-md shadow-sm hover:bg-gray-100"
      >
        <PlusSvg />
        <span className="text-gray-700">السنة</span>
      </button>

      {isOpen && (
        <div className="absolute w-[166px] mt-1 bg-white rounded border border-gray-300 shadow-lg z-10">
          {levelFilterOption.map((option) => (
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
