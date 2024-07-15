import ButtonPrimary from "../../components/ButtonPrimary";
import { StudentsTable } from "./students-table/StudentsTable";

export default function StudentManagement() {
  return (
    <section className="w-full p-4 bg-mainBg">
      <nav className="flex items-center justify-end mb-4">
        <ButtonPrimary text="تسجيل جديد" active />
      </nav>
      <div>
        <StudentsTable />
      </div>
    </section>
  );
}
