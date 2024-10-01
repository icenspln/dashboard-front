import TeacherPresence from "../core/columns/overlays/teacherPresence";
import { useGroupsTable } from "../core/GroupsTableContext";

export function TeacherAbsenceModal() {
    const { setSelectedGroup, selectedGroup, setTeacherAbsenceModal } =
        useGroupsTable();

    const closeOverlay = () => {
        setSelectedGroup(null);
        setTeacherAbsenceModal(false);
    };

    if (selectedGroup)
        return (
            <>
                <TeacherPresence group={selectedGroup} onClose={closeOverlay} />
            </>
        );
}
