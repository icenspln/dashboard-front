import { useContext } from "react";
import { MonthSelectionOptions, YearSelectionOptions } from "../core/_models";
import { GroupsTableContext } from "../core/GroupsTableContext";
import { FilterButton } from "../../../../../components/ButtonFilter";

export function GroupTableForm() {
  const { setFilterState } = useContext(GroupsTableContext);

  const updateYearFilter = (selectedOptions: any) => {
    setFilterState((prev: any) => ({
      ...prev,
      years: selectedOptions.map((opt: any) => opt.id),
    }));
  };
  const updateMonthFilter = (selectedOptions: any) => {
    setFilterState((prev: any) => ({
      ...prev,
      months: selectedOptions.map((opt: any) => opt.id),
    }));
  };

  return (
    <>
      <FilterButton
        label="السنة"
        options={YearSelectionOptions}
        setFilterState={updateYearFilter}
      />
      <FilterButton
        label="الشهر"
        options={MonthSelectionOptions}
        setFilterState={updateMonthFilter}
      />
    </>
  );
}
