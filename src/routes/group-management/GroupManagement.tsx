import { Link } from "react-router-dom";
import ButtonPrimary from "../../components/ButtonPrimary";
import { GroupsTable } from "./groups-table/GroupsTable";
import ExcelSvg from "../../assets/icons/ExcelSvg";
import { GroupTableForm } from "./groups-table/group-table-form/GroupTableForm";
import { GroupsTableContextProvider } from "./groups-table/core/GroupsTableContext";

export default function GroupManagement() {
  return (
    <GroupsTableContextProvider>
      <section className="w-full min-h-screen p-4 bg-mainBg">
        <div className="flex justify-between items-center mb-4">
          <div className=" flex gap-[12px]">
            {/* <SearchBar /> */}
            <GroupTableForm />
            {/* <FilterButton label="المادة" options={ModuleSelectionOptions} />
          <FilterButton label="المستوى" options={institutionFilterOptions} />
          <FilterButton label="السنة" options={levelFilterOptions} />
          <FilterButton label="اليوم" options={DaysSelectionOptions} />
          <ColumnSelection options={ColumnSelectionOptions} /> */}
          </div>
          <nav className="flex items-center gap-[12px]">
            <ExcelSvg />
            <Link to={`/groupmanagement/new`}>
              <ButtonPrimary text="إضافة فوج جديد" active />
            </Link>
          </nav>
        </div>
        <GroupsTable />
      </section>
    </GroupsTableContextProvider>
  );
}
