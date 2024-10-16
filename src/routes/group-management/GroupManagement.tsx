import { Link } from "react-router-dom";
import ButtonPrimary from "../../components/ButtonPrimary";
import { GroupsTable } from "./groups-table/GroupsTable";
import { GroupTableForm } from "./groups-table/group-table-form/GroupTableForm";
import { GroupsTableContextProvider } from "./groups-table/core/GroupsTableContext";

export default function GroupManagement() {
    return (
        <GroupsTableContextProvider>
            <section className="w-full min-h-screen p-4 bg-mainBg">
                <div className="flex flex-col lg:flex-row gap-3 justify-between items-start lg:items-center mb-4">
                    <div className=" flex gap-[12px]">
                        <GroupTableForm />
                    </div>
                    <nav className="flex items-center gap-[12px]">
                        <Link to={`/groups-management/new`}>
                            <ButtonPrimary text="New Group" active />
                        </Link>
                    </nav>
                </div>
                <GroupsTable />
            </section>
        </GroupsTableContextProvider>
    );
}
