import { Link } from "react-router-dom";
import ButtonPrimary from "../../components/ButtonPrimary";
import { TeacherTable } from "./teacher-table/TeacherTable";

export default function TeacherManagement() {
  return (
    <section className="w-full min-h-screen p-4 bg-mainBg">
      <nav className="flex items-center justify-end mb-4">
        <Link to={`/teachermanagement/new`}>
          <ButtonPrimary text="تسجيل جديد" active />
        </Link>
      </nav>
      <TeacherTable />
    </section>
  );
}
