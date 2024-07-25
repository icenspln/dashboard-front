import { Link } from "react-router-dom";
import ButtonPrimary from "../../components/ButtonPrimary";
import { StudentsTable } from "./students-table/StudentsTable";
import SearchBar from "../../components/SearchBar";
import {FilterButton,ColumnSelection} from "../../components/ButtonFilter";
import ColumnsSelectionSvg from "../../assets/icons/ColumnsSelectionSvg";
import PlusSvg from "../../assets/icons/PlusSvg";

const institutionFilterOptions = [
  { id: 1, label: 'الإبتدائي' },
  { id: 2, label: 'المتوسط' },
  { id: 3, label: 'الثانوي' },
];

const levelFilterOptions = [
  { id: 1, label: 'الأولى' },
  { id: 2, label: 'الثانية' },
  { id: 3, label: 'الثالثة' },
  { id: 4, label: 'الرابعة' },
  { id: 5, label: 'الخامسة' },
];
const ColumnSelectionOptions = [
  { id: 1, label: 'الرقم' },
  { id: 2, label: 'الإسم' },
  { id: 3, label: 'اللقب' },
  { id: 4, label: 'تاريخ الميلاد' },
  { id: 5, label: 'المستوى' },
  { id: 6, label: 'السنة' },
  { id: 7, label: 'رقم الهاتف' },
  { id: 8, label: 'تاريخ التسجيل' },
  { id: 9, label: 'عدد الأفواج الكلية' },
  { id: 10, label: 'عدد الأفواج الحالية' },
  { id: 11, label: 'الثمن الذي تم دفع' },
  { id: 12, label: 'الثمن الذي يجب دفعه' },
  { id: 13, label: 'المجموع' },
  { id: 14, label: 'الإعدادات' },
  
]
export default function StudentManagement() {
  return (
    <section className="w-full min-h-screen p-4 bg-mainBg">
     
      <div className="flex justify-between items-center mb-4">
      <div className=" flex gap-[12px]">
      <SearchBar/>
        <FilterButton  label="المستوى" options={institutionFilterOptions} />
        <FilterButton  label="السنة" options={levelFilterOptions} />
        <ColumnSelection options={ColumnSelectionOptions} />
      </div>
      <nav className="flex ">
        <Link to={`/studentmanagement/new`}>
          <ButtonPrimary text="تسجيل جديد" active />
        </Link>
      </nav>
      </div>
      <StudentsTable />
    </section>
  );
}
