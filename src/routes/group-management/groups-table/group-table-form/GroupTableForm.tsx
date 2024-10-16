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
        <div className="flex flex-col gap-3 md:flex-row items-start md:items-center">
            <div className="flex  items-center rounded border-2 border-gray bg-white min-w-[100px] lg:min-w-[241px] h-[32px]">
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
            <div className="flex  gap-3 flex-col md:flex-row items-start md:items-center">
                <div className="flex gap-3">
                    <FilterButton
                        label="Level"
                        options={levelFilterOptions}
                        setFilterState={updateLevelFilter}
                    />
                    <FilterButton
                        label="Institution"
                        options={institutionFilterOptions}
                        setFilterState={updateInstitutionFilter}
                    />
                </div>
                <div className="flex gap-3">
                    <FilterButton
                        label="Subject"
                        options={modules}
                        setFilterState={updateModulesFilter}
                    />
                    <FilterButton
                        label="Day"
                        options={dayOfWeekFilterOptions}
                        setFilterState={updateDayFilter}
                    />
                </div>
            </div>
        </div>
    );
}
