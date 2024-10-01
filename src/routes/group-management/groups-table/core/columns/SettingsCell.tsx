import "reactjs-popup/dist/index.css";
import DotsSvg from "../../../../../assets/icons/DotsSvg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGroupsTable } from "../GroupsTableContext";

export default function SettingsCell({ row }: { row: any }) {
    const { setGroupModal, setSelectedGroup, setTeacherAbsenceModal } =
        useGroupsTable();
    const navigate = useNavigate();

    const assignStudentToGroup = () => {
        setGroupModal(true);
        setSelectedGroup(row);
    };

    const teacherAbsence = () => {
        setTeacherAbsenceModal(true);
        setSelectedGroup(row);
    };
    const settingsOptions = [
        {
            label: "Edit Informations",
            action: () => {
                navigate(
                    `/groups-management/edit/${row._id}?dayOfWeek=${row.dayOfWeek}&timing=${row.timing.hour.toString().padStart(2, "0")}:${row.timing.minute.toString().padStart(2, "0")}&responsibleTeacherLabel=${row.responsibleTeacher.firstName + " " + row.responsibleTeacher.lastName}&responsibleTeacherValue=${row.responsibleTeacher._id}&module=${row.module}&institution=${row.institution}&level=${row.level}&pricing=${row.pricing}&roomNumber=${row.roomNumber}&maxNumberOfStudents=${row.maxNumberOfStudents}`
                );
            },
        },
        {
            label: "List of Attendance",
            action: () =>
                navigate(
                    `/groups-management/groups-presence-management/${row._id}`
                ),
        },
        {
            label: "List of Students Enrolled",
            action: () => assignStudentToGroup(),
            // action: () => setActiveOverlay("registredStudents"),
        },
        {
            label: "Teacher's Presence & Absence",
            action: () => teacherAbsence(),
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
