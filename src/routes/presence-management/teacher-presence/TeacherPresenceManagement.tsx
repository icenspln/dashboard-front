import ButtonPrimary from "../../../components/ButtonPrimary";

import { TeacherPresenceListsTable } from "./teacher-presence-table/TeacherPresenceTable";
import { FilterButton } from "../../../components/ButtonFilter";
import {
  MonthSelectionOptions,
  YearSelectionOptions,
} from "./teacher-presence-table/core/_models";

export default function TeacherPresenceManagement() {
  return (
    <section className="w-full min-h-screen p-4 bg-mainBg">
      <div className="flex justify-between items-center mb-4">
        <div className=" flex gap-[12px]">
          <FilterButton
            setFilterState={() => {}}
            label="السنة"
            options={YearSelectionOptions}
          />
          <FilterButton
            setFilterState={() => {}}
            label="الشهر"
            options={MonthSelectionOptions}
          />
        </div>
        <nav className="flex items-center gap-[12px]">
          <ButtonPrimary text="تحميل قسيمة الدفع" active />
        </nav>
      </div>
      <div>
        <TeacherPresenceListsTable />
      </div>
    </section>
  );
}
