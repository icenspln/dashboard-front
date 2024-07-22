import { Link } from "react-router-dom";
import ButtonPrimary from "../../components/ButtonPrimary";
import { GroupsTable } from "./groups-table/GroupsTable";

export default function GroupManagement() {
  return (
    <section className="w-full min-h-screen p-4 bg-mainBg">
      <nav className="flex items-center justify-end mb-4">
        <Link to={`/groupmanagement/new`}>
          <ButtonPrimary text="إضافة فوج جديد" active />
        </Link>
      </nav>
      <GroupsTable />
    </section>
  );
}
