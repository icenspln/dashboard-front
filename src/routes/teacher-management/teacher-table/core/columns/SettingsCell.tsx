import { useState } from "react";
import DotsSvg from "../../../../../assets/icons/DotsSvg";
import { useNavigate } from "react-router-dom";
import { Teacher } from "../_models";
import { useTeacherTable } from "../TeacherTableContext";

export default function SettingsCell({ row }: { row: Teacher }) {
    const { setPaymentCheckModal, setTeacher } = useTeacherTable();

    const navigate = useNavigate();

    const settingsOptions = [
        {
            label: "Edit Informations",
            action: () => {
                navigate(
                    `/teachers-management/edit/${row._id}?firstName=${row.firstName}&lastName=${row.lastName}&phoneNumber=${row.phoneNumber}&birthDate=${row.birthDate}&modules=${row.modules.join(",")}`
                );
            },
        },
        {
            label: "Download Payment Check",
            action: () => {
                setTeacher(row);
                setPaymentCheckModal(true);
            },
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
