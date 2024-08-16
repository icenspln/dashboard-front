import { useContext } from "react";
import {
  // dayOfWeekFilterOptions,
  institutionFilterOptions,
  levelFilterOptions,
  // modulesFilterOptions,
} from "../core/_models";
import { SpecialGroupsTableContext } from "../core/SpecialGroupsContext";
import { FilterButton } from "../../../../components/ButtonFilter";

export function ParticularGroupTableForm() {
  const { setFilterState, filterState } = useContext(SpecialGroupsTableContext);

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
  // const updateModulesFilter = (selectedOptions: any) => {
  //   setFilterState((prev: any) => ({
  //     ...prev,
  //     modules: selectedOptions.map((opt: any) => opt.id),
  //   }));
  // };

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
      {/* <FilterButton
        label="المادة"
        options={modulesFilterOptions}
        setFilterState={updateModulesFilter}
      /> */}

      {/* <ColumnSelection options={ColumnSelectionOptions} /> */}
    </>
  );
}
