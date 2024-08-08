import { Link } from "react-router-dom";
import ButtonPrimary from "../../components/ButtonPrimary";
import { TeacherTable } from "./teacher-table/TeacherTable";
import ExcelSvg from "../../assets/icons/ExcelSvg";
import SearchBar from "../../components/SearchBar";
import { FilterButton } from "../../components/ButtonFilter";
import {
  institutionFilterOptions,
  levelFilterOptions,
  ModuleSelectionOptions,
} from "./teacher-table/core/_models";

export default function TeacherManagement() {
  return (
    <section className="w-full min-h-screen p-4 bg-mainBg">
      <div className="flex justify-between items-center mb-4">
        <div className=" flex gap-[12px]">
          <SearchBar />
          <FilterButton label="المادة" options={ModuleSelectionOptions} />
          <FilterButton label="المستوى" options={institutionFilterOptions} />
          <FilterButton label="السنة" options={levelFilterOptions} />

          {/* <ColumnSelection options={ColumnSelectionOptions} /> */}
        </div>
        <nav className="flex items-center gap-[12px]">
          <ExcelSvg />
          <Link to={`/teachermanagement/new`}>
            <ButtonPrimary text="تسجيل جديد" active />
          </Link>
        </nav>
      </div>
      <TeacherTable />
    </section>
  );
}
