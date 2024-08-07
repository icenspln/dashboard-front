import { Link } from "react-router-dom";
import ButtonPrimary from "../../components/ButtonPrimary";
import { EmployeesTable } from "./employees-table/EmployeesTable";
import SearchBar from "../../components/SearchBar";
import {ColumnSelection} from "../../components/ButtonFilter";
import ExcelSvg from "../../assets/icons/ExcelSvg";



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
export default function EmployeeManagement() {
  return (
    <section className="w-full min-h-screen p-4 bg-mainBg">
     
      <div className="flex justify-between items-center mb-4">
      <div className=" flex gap-[12px]">
      <SearchBar/>
       
        <ColumnSelection options={ColumnSelectionOptions} />
      </div>
      <nav className="flex gap-[12px] items-center ">
        <ExcelSvg/>
        <Link to={`/employeemanagement/new`}>
          <ButtonPrimary text="تسجيل موظف جديد" active />
        </Link>
      </nav>
      </div>
      <EmployeesTable />
    </section>
  );
}
