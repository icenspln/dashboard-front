import { Link } from "react-router-dom";
import ButtonPrimary from "../../components/ButtonPrimary";
import { ParticularGroupsTable } from "./particular-groups-table/ParticularGroupsTable";
import { SpecialGroupsTableContextProvider } from "./particular-groups-table/core/SpecialGroupsContext";
import { ParticularGroupTableForm } from "./particular-groups-table/particular-groups-table-form/ParticularGroupTableForm";
export default function ParticularGroupManagement() {
  return (
    <SpecialGroupsTableContextProvider>
      <section className="w-full min-h-screen p-4 bg-mainBg">
        <div className="flex justify-between justify-end mb-4">
          <div className=" flex gap-[12px]">
            {/* <SearchBar /> */}
            <ParticularGroupTableForm />
            {/* <FilterButton label="المادة" options={ModuleSelectionOptions} />
          <FilterButton label="المستوى" options={institutionFilterOptions} />
          <FilterButton label="السنة" options={levelFilterOptions} />
          <FilterButton label="اليوم" options={DaysSelectionOptions} />
          <ColumnSelection options={ColumnSelectionOptions} /> */}
          </div>
          <nav className="flex items-center gap-[12px]">
            <Link to={`/particulargroupmanagement/new`}>
              <ButtonPrimary text="إضافة فوج جديد" active />
            </Link>
          </nav>
        </div>
        <ParticularGroupsTable />
      </section>
    </SpecialGroupsTableContextProvider>
  );
}
