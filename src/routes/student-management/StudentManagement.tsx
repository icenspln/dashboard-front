import { Link } from "react-router-dom";
import ButtonPrimary from "../../components/ButtonPrimary";
import { StudentsTable } from "./students-table/StudentsTable";

export default function StudentManagement() {
  return (
    <section className="w-full min-h-screen p-4 bg-mainBg">
      <nav className="flex items-center justify-end mb-4">
        <Link to={`/studentmanagement/new`}>
          <ButtonPrimary text="تسجيل جديد" active />
        </Link>
      </nav>
      <div>
        <StudentsTable />
      </div>
    </section>
  );
}
