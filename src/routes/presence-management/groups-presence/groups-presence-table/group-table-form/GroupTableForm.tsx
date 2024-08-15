import { useContext } from "react";
import { MonthSelectionOptions, YearSelectionOptions } from "../core/_models";
import { GroupsTableContext } from "../core/GroupsTableContext";
import { FilterButton } from "../../../../../components/ButtonFilterRadio";

export function GroupTableForm() {
  const { setFilterState } = useContext(GroupsTableContext);

  const updateYearFilter = (selectedOptions: any) => {
    setFilterState((prev: any) => ({
      ...prev,
      years: selectedOptions?.id,
    }));
  };
  const updateMonthFilter = (selectedOptions: any) => {
    setFilterState((prev: any) => ({
      ...prev,
      months: selectedOptions?.id,
    }));
  };

  return (
    <>
      <FilterButton
        name="year"
        label="السنة"
        options={YearSelectionOptions}
        setFilterState={updateYearFilter}
      />
      <FilterButton
        name="month"
        label="الشهر"
        options={MonthSelectionOptions}
        setFilterState={updateMonthFilter}
      />
    </>
  );
}
