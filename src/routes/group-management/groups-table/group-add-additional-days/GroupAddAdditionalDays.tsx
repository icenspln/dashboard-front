import { useContext } from "react";
import AddNewSessionOverlay from "../core/columns/overlays/addNewSession";
import { GroupsTableContext } from "../core/GroupsTableContext";

export function GroupAddAdditionalDays() {
  const { setAdditionalDayModal, setSelectedGroup } =
    useContext(GroupsTableContext);

  const closeModal = () => {
    setSelectedGroup(null);
    setAdditionalDayModal(false);
  };
  return (
    <>
      <AddNewSessionOverlay onClose={closeModal} />
    </>
  );
}
