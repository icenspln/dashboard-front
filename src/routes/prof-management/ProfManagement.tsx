import { Link } from "react-router-dom";
import ButtonPrimary from "../../components/ButtonPrimary";
import { ProfTable } from "./prof-table/ProfTable";

export default function ProfManagement() {
  
;

  
  
  return (
    <section className="w-full min-h-screen p-4 bg-mainBg">
      <nav className="flex items-center justify-end mb-4">
        <Link to={`/profmanagement/new`}>
          <ButtonPrimary text="تسجيل جديد" active />
        </Link>
      </nav>
      <div>
        <ProfTable />
      </div>
    </section>
  );
}
