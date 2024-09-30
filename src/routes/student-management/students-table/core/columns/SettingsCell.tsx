import { useContext, useState } from "react";
import DotsSvg from "../../../../../assets/icons/DotsSvg";
import { useNavigate } from "react-router-dom";
import { StudentsTableContext } from "../StudentsTableContext";
import { Student } from "../_models";

export default function SettingsCell({ row }: { row: Student }) {
    const { setSelectedStudent, toggleStudentGroupsModal, setEditCardModal } =
        useContext(StudentsTableContext);
    const navigate = useNavigate();

    const settingsOptions = [
        {
            label: "Edit Informations",
            action: () => {
                navigate(
                    `/students-management/edit/${row._id}?firstName=${row.firstName}&lastName=${row.lastName}&phoneNumber=${row.phoneNumber}&guardianPhoneNumber=${row.guardianPhoneNumber}&birthDate=${row.birthDate}&institution=${row.institution}&level=${row.level}`
                );
            },
        },
        {
            label: "Edit Groups",
            action: () => {
                toggleStudentGroupsModal(row);
            },
        },
        {
            label: "Change Student Card",
            action: () => {
                setSelectedStudent(row);
                setEditCardModal(true);
            },
        },
        {
            label: "Attendance",
            action: () =>
                navigate(
                    `/students-management/students-presence-management/${row._id}`
                ),
        },
    ];

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative w-fit">
            <div>
                <button onClick={() => setIsOpen((prev) => !prev)}>
                    <DotsSvg />
                </button>
            </div>
            {isOpen && (
                <div className="absolute w-44 z-10 buttom-0 -left-1/2 bg-white shadow-lg border-1 border-textGray2 rounded">
                    {settingsOptions.map((option, index) => (
                        <button
                            key={index}
                            className="w-full px-4 py-2 text-sm text-gray-700  rounded hover:bg-gray-200"
                            onClick={option.action}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
