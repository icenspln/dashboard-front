import CardAnimationSvg from "../../../assets/icons/CardAnimationSvg";
import { StudentInfoTable } from "./studentInfoTable";
import { StudentPaymentTable } from "./studentPaymentTable";
import GroupList from "./groupList";
import CardlessRegister from "../Attendance-navigation-page/overlays/cardlessRegisterLink";

export default function TablesContainer(){
  return(
    
    <div className="flex w-full gap-[25px] min-h-screen p-4 bg-mainBg">

    <div>
      <StudentInfoTable />
      <StudentPaymentTable />
      <GroupList/>
      <div className="flex justify-end text-xl py-1">
        <CardlessRegister/>
        </div>
    </div>
    
    <div className="flex justify-center items-center aligns-center">
      <CardAnimationSvg />
    </div>

  </div>
    
  )
}