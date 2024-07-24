import { Link } from "react-router-dom";
import ExcelSvg from "../../assets/icons/ExcelSvg";
import { PresenceListsTable } from "./presence-table/PresenceTable";
import SearchBar from "../../components/SearchBar";




export default function PresenceListsManagement() {
  

  
  
  return (
    <section className="w-full min-h-screen p-4 bg-mainBg">
       <nav className="flex items-center justify-between mb-4">
       <SearchBar/>
        <Link to={`/presencemanagement/`}>
         <ExcelSvg/>
        </Link>
        
        
      </nav>
      <div>
        <PresenceListsTable  />
      </div>
    </section>
  );
}
