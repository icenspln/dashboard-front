// import ButtonPrimary from "../../../components/ButtonPrimary";
import { GroupsPresenceListsTable } from "./groups-presence-table/GroupsPresenceTable";
import { GroupsTableContextProvider } from "./groups-presence-table/core/GroupsTableContext";
import { GroupTableForm } from "./groups-presence-table/group-table-form/GroupTableForm";

export default function GroupsPresenceListsManagement() {
    return (
        <GroupsTableContextProvider>
            <section className="w-full min-h-screen p-4 bg-mainBg">
                <div className="flex justify-between items-center mb-4">
                    <div className=" flex gap-[12px]">
                        <GroupTableForm />
                    </div>
                    {/* <nav className="flex items-center gap-[12px]">
            <ButtonPrimary text="تحميل قسيمة الدفع" active />
          </nav> */}
                </div>
                <div>
                    <GroupsPresenceListsTable />
                </div>
            </section>
        </GroupsTableContextProvider>
    );
}
