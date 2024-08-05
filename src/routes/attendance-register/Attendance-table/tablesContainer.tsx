
import { StudentInfoTable } from "./studentInfoTable";
import { StudentPaymentTable } from "./studentPaymentTable";
import GroupList from "./groupList";
import CardlessRegister from "../Attendance-navigation-page/overlays/cardlessRegisterLink";
import Notifications from "./notifications";

export default function TablesContainer(){
  return(
    
    <div className="flex items-center w-full gap-[25px] px-4 bg-mainBg">
    <div>
      <StudentInfoTable />
      <StudentPaymentTable />
      <GroupList />
      <div className="flex justify-end text-xl py-1">
        <CardlessRegister />
      </div>
    </div>
    <div >
      <Notifications />
    </div>
  </div>
  
    
  )
}