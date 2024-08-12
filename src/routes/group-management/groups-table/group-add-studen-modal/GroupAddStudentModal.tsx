import { useContext } from "react";
import { GroupsTableContext } from "../core/GroupsTableContext";
import { RegistredStudentsOverlay } from "../core/columns/overlays/registredStudentsList";

export function GroupAddStudentModal() {
  const { setGroupModal, setSelectedGroup } = useContext(GroupsTableContext);
  const closeModal = () => {
    setSelectedGroup(null);
    setGroupModal(false);
  };
  return <RegistredStudentsOverlay onClose={closeModal} key={1} />;
}
