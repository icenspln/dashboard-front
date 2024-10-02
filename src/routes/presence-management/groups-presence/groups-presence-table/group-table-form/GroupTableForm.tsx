import { useContext } from "react";
import { GroupsTableContext } from "../core/GroupsTableContext";
import { FilterButton } from "../../../../../components/ButtonFilterRadio";
import {
    MonthSelectionOptions,
    YearSelectionOptions,
} from "../../../../../handlers/appGlobalVARS";

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
                label="Year"
                options={YearSelectionOptions}
                setFilterState={updateYearFilter}
            />
            <FilterButton
                name="month"
                label="Month"
                options={MonthSelectionOptions}
                setFilterState={updateMonthFilter}
            />
        </>
    );
}
