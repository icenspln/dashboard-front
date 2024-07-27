import CardAnimationSvg from "../../../assets/icons/CardAnimationSvg";
import { StudentInfoTable } from "./studentInfoTable";
import { StudentPaymentTable } from "./studentPaymentTable";
import GroupList from "./groupList";

export default function TablesContainer(){
  return(
    
    <div className="flex w-full min-h-screen p-4 bg-mainBg">

    <div>
      <StudentInfoTable />
      <StudentPaymentTable />
      <GroupList/>
    </div>
    <div className="flex justify-center items-center aligns-center">
      <CardAnimationSvg />
    </div>

  </div>
    
  )
}