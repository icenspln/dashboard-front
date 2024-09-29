import React from "react"
import { Overlay } from "../../../../../../components/Overlay"
import ConfirmButton from "../../../../../../components/confirmButton"
import { deleteGroup } from "../../_requests";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface DeleteGroupOverlayProps {
    onClose: () => void
    groupId: string
}

const DeleteGroupOverlay: React.FC<DeleteGroupOverlayProps> = ({ onClose, groupId }) => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: () => deleteGroup(groupId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getGroups"] }); // Invalidate the getGroups query
            onClose(); // Close the overlay after deletion
        },
        onError: (error) => {
            console.error("Failed to delete group:", error);
        },
    });

    const handleDelete = () => {
        mutation.mutate();
    };

    return (
        <Overlay onClose={onClose}>
            <>
                <div className="relative bg-white w-[460px] h-[188px] rounded gap-[10px] flex flex-col items-center justify-evenly text-center">
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 w-8 h-8 bg-red-400 text-white rounded-full flex items-center justify-center hover:bg-red-700"
                    >
                        &times;
                    </button>
                    <h1 className="text-xl font-bold">
                        {" "}
                        هل أنت متأكد من أنك تريد حذف هذا الفوج{" "}
                    </h1>
                    <p className="text-gray-400">
                        لا يمكنك استعادة الفوج بعد الحذف، ستختفي بيانات دفع
                        الفوج للأستاذ و بيانات دفع التلاميذ المسجلين فيه
                    </p>
                    <span className="flex justify-center">
                        <ConfirmButton
                            text="تأكيد الحذف"
                            className="text-white bg-red-400"
                            onClick={handleDelete}
                        />
                    </span>
                </div>
            </>
        </Overlay>
    )
}

export default DeleteGroupOverlay
