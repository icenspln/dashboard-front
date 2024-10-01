import React from "react"
import { Overlay } from "../../../../../../components/Overlay"
import ConfirmButton from "../../../../../../components/confirmButton"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteTeacher } from "../../_requests"
interface DeleteFromListOverlayProps {
    onClose: () => void
    teacherId: string
}

const DeleteFromListOverlay: React.FC<DeleteFromListOverlayProps> = ({
    onClose,
    teacherId,
}) => {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: () => deleteTeacher(teacherId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getTeachers"] }) // Invalidate the getGroups query
            onClose() // Close the overlay after deletion
        },
        onError: (error) => {
            console.error("Failed to delete group:", error)
        },
    })

    const handleDelete = () => {
        mutation.mutate()
    }

    return (
        <Overlay onClose={onClose}>
            <>
                <div className=" bg-white w-[379px] rounded  gap-[10px]  flex flex-col text-center">
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 w-8 h-8 bg-red-400 text-white rounded-full flex items-center justify-center hover:bg-red-700"
                    >
                        &times;
                    </button>

                    <h1 className="text-l font-bold">
                        {" "}
                        هل أنت متأكد من أنك تريد حذف هذا المستخدم{" "}
                    </h1>
                    <p className="text-gray-500">
                        لا يمكنك استعادة حساب هذا المستخدم بعد الحذف
                    </p>
                </div>
                <span className="flex justify-center mt-5 ">
                    <ConfirmButton
                        text="تأكيد الحذف"
                        className="text-white bg-red-400"
                        onClick={handleDelete}
                    />
                </span>
            </>
        </Overlay>
    )
}

export default DeleteFromListOverlay
