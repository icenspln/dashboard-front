import { useContext } from "react";
// import { MonthSelectionOptions, YearSelectionOptions } from "../core/_models";
import { StudentsTableContext } from "../core/StudentsTableContext";
import { FilterButton } from "../../../../../components/ButtonFilterRadio";
import {
  MonthSelectionOptions,
  YearSelectionOptions,
} from "../../../groups-presence/groups-presence-table/core/_models";

export function StudentTableForm() {
  const { setFilterState } = useContext(StudentsTableContext);

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
