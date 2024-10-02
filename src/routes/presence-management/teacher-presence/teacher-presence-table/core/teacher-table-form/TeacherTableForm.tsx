import { useContext } from "react";
import { teacherpresenceTableContext } from "../TeacherPresenceTableContext";
import { FilterButton } from "../../../../../../components/ButtonFilterRadio";
import {
    MonthSelectionOptions,
    YearSelectionOptions,
} from "../../../../../../handlers/appGlobalVARS";

export function TeacherTableForm() {
    const { setFilterState } = useContext(teacherpresenceTableContext);

    const updateYearFilter = (selectedOptions: any) => {
        setFilterState((prev: any) => ({
            ...prev,
            year: selectedOptions?.id,
        }));
    };
    const updateMonthFilter = (selectedOptions: any) => {
        setFilterState((prev: any) => ({
            ...prev,
            month: selectedOptions?.id,
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
