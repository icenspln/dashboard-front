import { useContext } from "react";
import { SpecialGroupsTableContext } from "../core/SpecialGroupsContext";
import  RegistredStudentsOverlay from "../core/columns/overlays/registredStudentsList";

export function GroupAddStudentModal() {
  const { setGroupModal, setSelectedGroup } = useContext(SpecialGroupsTableContext);
  const closeModal = () => {
    setSelectedGroup(null);
    setGroupModal(false);
  };
  return <RegistredStudentsOverlay onClose={closeModal} key={1} />;
}
