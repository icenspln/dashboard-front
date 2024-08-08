import { useContext } from "react";
import RegistredStudentsOverlay from "../columns/modals/registredStudentsList";
import { StudentsTableContext } from "../core/StudentsTableContext";

export function StudentGroupModal() {
  const { setSelectedStudent, setGroupModal } =
    useContext(StudentsTableContext);
  const closeModal = () => {
    setSelectedStudent(null);
    setGroupModal(false);
  };
  return <RegistredStudentsOverlay onClose={closeModal} key={1} />;
}
