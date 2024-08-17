import { useEmployeeContext } from "../employees-card/core/EmployeeContext";

export function EmployeeSearch() {
  const { setFilterState, filterState } = useEmployeeContext();

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
      {/* <FilterButton label="السنة" options={levelFilterOptions} /> */}
      {/* <ColumnSelection options={ColumnSelectionOptions} /> */}
    </>
  );
}
