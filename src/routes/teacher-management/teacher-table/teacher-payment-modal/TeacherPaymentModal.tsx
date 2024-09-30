import { ChooseDateModal } from "./ChooseDateModal";
import { useTeacherTable } from "../core/TeacherTableContext";

export function TeacherPaymentModal() {
    const { teacher, setTeacher, setPaymentCheckModal } = useTeacherTable();
    const closeModal = () => {
        setTeacher(null);
        setPaymentCheckModal(false);
    };

    if (teacher)
        return (
            <>
                <ChooseDateModal teacherId={teacher._id} onClose={closeModal} />
            </>
        );
}
