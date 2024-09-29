import Popup from "reactjs-popup"
import "reactjs-popup/dist/index.css"
import DotsSvg from "../../../../../assets/icons/DotsSvg"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
//importing the overlays
import DeleteGroupOverlay from "./overlays/deleteGroup"
import AddNewSessionOverlay from "./overlays/addNewSession"
import TeacherPresence from "./overlays/teacherPresence"
import { GroupsTableContext } from "../GroupsTableContext"
import { RegistredStudentsOverlay } from "./overlays/registredStudentsList"

export default function SettingsCell({ row }: { row: any }) {
    const [activeOverlay, setActiveOverlay] = useState<string | null>(null)
    const { setGroupModal, setSelectedGroup, setAdditionalDayModal } =
        useContext(GroupsTableContext)
    const navigate = useNavigate()

    const assignStudentToGroup = () => {
        setGroupModal(true)
        setSelectedGroup(row)
    }
    const groupAddAdditionalDays = () => {
        setSelectedGroup(row)
        setAdditionalDayModal(true)
    }
    // const groupTeacherAbsences = () => {
    //     setSelectedGroup(row)
    //     setAdditionalDayModal(true)
    // }
    // useEffect(() => {
    //   assignStudentToGroup();
    // }, [triggerNewData]);

    const options = [
        {
            label: "تعديل المعلومات",
            action: () => {
                navigate(
                    `/groupmanagement/edit/${row._id}?dayOfWeek=${row.dayOfWeek}&timing=${row.timing.hour.toString().padStart(2, "0")}:${row.timing.minute.toString().padStart(2, "0")}&responsibleTeacherLabel=${row.responsibleTeacher.firstName + " " + row.responsibleTeacher.lastName}&responsibleTeacherValue=${row.responsibleTeacher._id}&module=${row.module}&institution=${row.institution}&level=${row.level}&pricing=${row.pricing}&roomNumber=${row.roomNumber}&maxNumberOfStudents=${row.maxNumberOfStudents}`
                )
            },
        },
        {
            label: "حذف الفوج",
            action: () => {
                setSelectedGroup(row)
                setActiveOverlay("deleteGroup")
            },
        },
        {
            label: "قائمة الحضور",
            action: () =>
                navigate(
                    `/groupmanagement/groupspresencemanagement/${row._id}`
                ),
        },
        {
            label: "قائمة المسجلين",
            action: () => assignStudentToGroup(),
            // action: () => setActiveOverlay("registredStudents"),
        },
        {
            label: "حضور / غياب الأستاذ",
            action: () => {
                setSelectedGroup(row)
                return setActiveOverlay("teacherPresence")
            },
        },

        {
            label: "إضافة حصة إضافية",
            action: () => groupAddAdditionalDays(),
        },
    ]
    const closeOverlay = () => setActiveOverlay(null)
    return (
        <div>
            <Popup
                trigger={
                    <button>
                        <DotsSvg />
                    </button>
                }
                arrow={false}
                position="bottom center"
            >
                <div className="grid gap-1">
                    {options.map((option, index) => (
                        <button
                            key={index}
                            className="w-full px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
                            onClick={option.action}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
                {activeOverlay === "deleteGroup" && (
                    <DeleteGroupOverlay onClose={closeOverlay}  groupId={row._id}/>
                )}
                {activeOverlay === "addNewSession" && (
                    <AddNewSessionOverlay onClose={closeOverlay} />
                )}
                {activeOverlay === "registredStudents" && (
                    <RegistredStudentsOverlay onClose={closeOverlay} />
                )}

                {activeOverlay === "addNewSession" && (
                    <AddNewSessionOverlay onClose={closeOverlay} />
                )}
                {activeOverlay === "registredStudents" && (
                    <RegistredStudentsOverlay onClose={closeOverlay} />
                )}
                {activeOverlay === "teacherPresence" && (
                    <TeacherPresence group={row} onClose={closeOverlay} />
                )}
            </Popup>
        </div>
    )
}
