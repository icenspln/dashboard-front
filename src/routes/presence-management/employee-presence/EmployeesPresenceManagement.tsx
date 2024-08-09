
import { EmployeePresenceListsTable } from "./employee-presence-table/EmployeePresenceTable";





export default function EmployeePresenceListsManagement() {
  
  return (
    <section className="w-full min-h-screen p-4 bg-mainBg">
     <div className="flex justify-between items-center mb-4">
      <div className=" flex gap-[12px]">
    
        
      </div>
      <nav className="flex items-center gap-[12px]">
       
      
      </nav>
      </div>
      <div>
        <EmployeePresenceListsTable  />
      </div>
    </section>
  );
}
