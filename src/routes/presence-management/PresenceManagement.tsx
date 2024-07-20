import { Link } from "react-router-dom";
import ButtonPrimary from "../../components/ButtonPrimary";
import { PresenceListsTable } from "./presence-table/PresenceTable";



export default function PresenceListsManagement() {
  
;

  
  
  return (
    <section className="w-full min-h-screen p-4 bg-mainBg">
       <nav className="flex items-center justify-end mb-4">
        <Link to={`/PresenceListmanagement/new`}>
         
        </Link>
        
        
      </nav>
      <div>
        <PresenceListsTable  />
      </div>
    </section>
  );
}
