import React from "react"
import { Overlay } from "../../../../../../components/Overlay"
import ConfirmButton from "../../../../../../components/confirmButton"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteStudentFromGroup } from "../../../../../student-management/students-table/student-group-modal/core/_requests"
import toast from "react-hot-toast"

interface DeleteFromListOverlayProps {
    onClose: () => void
    studentId: string | undefined
    groupId: string
}

const DeleteFromListOverlay: React.FC<DeleteFromListOverlayProps> = ({
    onClose,
    studentId,
    groupId,
}) => {
    const queryClient = useQueryClient()
    const removeMutation = useMutation({
        mutationFn: ({ groupId, studentId }: any) =>
            deleteStudentFromGroup(groupId, studentId),
        onSuccess: () => {
            toast.success("تمت إزالة الطالب بنجاح")
            onClose()
            queryClient.invalidateQueries({ queryKey: ["getStudentByCardId"] })
        },
        onError: () => {
            toast.error("حدث خطأ ما")
            onClose()
            queryClient.invalidateQueries({ queryKey: ["getStudentByCardId"] })
        },
    })
    const deleteGroup = (groupId: string, studentId: string) => {
        removeMutation.mutate({ groupId, studentId })
    }

    if (studentId)
        return (
            <Overlay onClose={onClose} isVisible>
                <>
                    <div className=" bg-white w-[379px] h-[158px] rounded  gap-[10px]  flex flex-col text-center">
                        <h1 className="text-xl ">
                            {" "}
                            هل أنت متأكد من أنك تريد حذف هذا المستخدم{" "}
                        </h1>
                        <p className="text-gray-500">
                            لا يمكنك استعادة حساب هذا المستخدم بعد الحذف
                        </p>
                        <span className="flex justify-center ">
                            <ConfirmButton
                                text="تأكيد الحذف"
                                className="text-white bg-red-400"
                                onClick={() => deleteGroup(groupId, studentId)}
                            />
                        </span>
                    </div>
                </>
            </Overlay>
        )
}

export default DeleteFromListOverlay
