import { Link } from "react-router-dom";
import ButtonPrimary from "../../components/ButtonPrimary";
import {ParticularGroupsTable,} from "./particular-groups-table/ParticularGroupsTable"



export default function ParticularGroupManagement() {
  
;

  
  
  return (
    <section className="w-full min-h-screen p-4 bg-mainBg">
       <nav className="flex items-center justify-end mb-4">
        <Link to={`/particulargroupmanagement/new`}>
          <ButtonPrimary text="إضافة فوج جديد" active />
        </Link>
        
        
      </nav>
      <div>
        <ParticularGroupsTable  />
      </div>
    </section>
  );
}
