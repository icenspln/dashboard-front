import { Link } from "react-router-dom";
import ButtonPrimary from "../../components/ButtonPrimary";
import { ParticularGroupsTable } from "./particular-groups-table/ParticularGroupsTable";
import { SpecialGroupsTableContextProvider } from "./particular-groups-table/core/SpecialGroupsContext";

export default function ParticularGroupManagement() {
  return (
    <SpecialGroupsTableContextProvider>
      <section className="w-full min-h-screen p-4 bg-mainBg">
        <nav className="flex items-center justify-end mb-4">
          <Link to={`/particulargroupmanagement/new`}>
            <ButtonPrimary text="إضافة فوج جديد" active />
          </Link>
        </nav>
        <ParticularGroupsTable />
      </section>
    </SpecialGroupsTableContextProvider>
  );
}
