import { useContext } from "react";
import { GroupsTableContext } from "../core/GroupsTableContext";
import { FilterButton } from "../../../../components/ButtonFilter";
import {
    dayOfWeekFilterOptions,
    institutionFilterOptions,
    levelFilterOptions,
    modules,
} from "../../../../handlers/appGlobalVARS";

export function GroupTableForm() {
    const { setFilterState, filterState } = useContext(GroupsTableContext);

    const updateLevelFilter = (selectedOptions: any) => {
        setFilterState((prev: any) => ({
            ...prev,
            level: selectedOptions.map((opt: any) => opt.id),
        }));
    };
    const updateInstitutionFilter = (selectedOptions: any) => {
        setFilterState((prev: any) => ({
            ...prev,
            institution: selectedOptions.map((opt: any) => opt.id),
        }));
    };
    const updateModulesFilter = (selectedOptions: any) => {
        setFilterState((prev: any) => ({
            ...prev,
            modules: selectedOptions.map((opt: any) => opt.id),
        }));
    };
    const updateDayFilter = (selectedOptions: any) => {
        setFilterState((prev: any) => ({
            ...prev,
            dayOfWeek: selectedOptions.map((opt: any) => opt.id),
        }));
    };
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
                    placeholder="Search The List"
                />
            </div>
            {/* <InstitutionFilter /> */}
            {/* <LevelFilter /> */}
            <FilterButton
                label="السنة"
                options={levelFilterOptions}
                setFilterState={updateLevelFilter}
            />
            <FilterButton
                label="المستوى"
                options={institutionFilterOptions}
                setFilterState={updateInstitutionFilter}
            />
            <FilterButton
                label="المادة"
                options={modules}
                setFilterState={updateModulesFilter}
            />
            <FilterButton
                label="اليوم"
                options={dayOfWeekFilterOptions}
                setFilterState={updateDayFilter}
            />
            {/* <ColumnSelection options={ColumnSelectionOptions} /> */}
        </>
    );
}

// const InstitutionFilter = () => {
//   const [selectedOptions, setSelectedOptions] = useState<FilterOption[]>([]);
//   const [isOpen, setIsOpen] = useState(false);
//   const { setFilterState } = useContext(GroupsTableContext);

//   useEffect(() => {
//     setFilterState((prev: any) => ({
//       ...prev,
//       institution: selectedOptions.map((opt) => opt.id),
//     }));
//   }, [selectedOptions]);

//   const toggleOpen = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleOptionClick = (option: FilterOption) => {
//     let updatedOptions = [...selectedOptions];
//     if (updatedOptions.find((opt) => opt.id === option.id)) {
//       updatedOptions = updatedOptions.filter((opt) => opt.id !== option.id);
//     } else {
//       updatedOptions.push(option);
//     }
//     setSelectedOptions(updatedOptions);
//   };

//   return (
//     <div className="relative">
//       <button
//         onClick={toggleOpen}
//         className="bg-white flex items-center gap-[8px] w-[120px] h-[32px] px-4 py-2 border border-dashed border-gray-300 rounded-md shadow-sm hover:bg-gray-100"
//       >
//         <PlusSvg />
//         <span className="text-gray-700">الطور</span>
//       </button>

//       {isOpen && (
//         <div className="absolute w-[166px] mt-1 bg-white rounded border border-gray-300 shadow-lg z-10">
//           {institutionFilterOptions.map((option) => (
//             <label
//               key={option.id}
//               className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
//               htmlFor="checkbox"
//               onClick={() => handleOptionClick(option)}
//             >
//               <span>{option.label}</span>
//               <input
//                 name="checkbox"
//                 type="checkbox"
//                 checked={
//                   selectedOptions.find((opt) => opt.id === option.id) !==
//                   undefined
//                 }
//                 onChange={() => handleOptionClick(option)}
//                 className="form-checkbox text-blue-500 mr-2 w-[16px] h-[16px]"
//               />
//             </label>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// const LevelFilter = ({}) => {
//   const [selectedOptions, setSelectedOptions] = useState<FilterOption[]>([]);
//   const [isOpen, setIsOpen] = useState(false);
//   const { setFilterState } = useContext(GroupsTableContext);

//   useEffect(() => {
//     setFilterState((prev: any) => ({
//       ...prev,
//       level: selectedOptions.map((opt) => opt.id),
//     }));
//   }, [selectedOptions]);

//   const toggleOpen = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleOptionClick = (option: FilterOption) => {
//     let updatedOptions = [...selectedOptions];
//     if (updatedOptions.find((opt) => opt.id === option.id)) {
//       updatedOptions = updatedOptions.filter((opt) => opt.id !== option.id);
//     } else {
//       updatedOptions.push(option);
//     }
//     setSelectedOptions(updatedOptions);
//   };

//   return (
//     <div className="relative">
//       <button
//         onClick={toggleOpen}
//         className="flex bg-white items-center gap-[8px] w-[116px] h-[32px] px-4 py-2 border border-dashed border-gray-300 rounded-md shadow-sm hover:bg-gray-100"
//       >
//         <PlusSvg />
//         <span className="text-gray-700">السنة</span>
//       </button>

//       {isOpen && (
//         <div className="absolute w-[166px] mt-1 bg-white rounded border border-gray-300 shadow-lg z-10">
//           {levelFilterOption.map((option) => (
//             <label
//               key={option.id}
//               className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
//               htmlFor="checkbox"
//               onClick={() => handleOptionClick(option)}
//             >
//               <span>{option.label}</span>
//               <input
//                 name="checkbox"
//                 type="checkbox"
//                 checked={
//                   selectedOptions.find((opt) => opt.id === option.id) !==
//                   undefined
//                 }
//                 onChange={() => handleOptionClick(option)}
//                 className="form-checkbox text-blue-500 mr-2 w-[16px] h-[16px]"
//               />
//             </label>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };
