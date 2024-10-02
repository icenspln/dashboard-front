import React from "react";
import { Overlay } from "../../../../../../components/Overlay";
import ConfirmButton from "../../../../../../components/confirmButton";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteStudentFromGroup } from "../../../../../student-management/students-table/student-group-modal/core/_requests";
import toast from "react-hot-toast";

interface DeleteFromListOverlayProps {
    onClose: () => void;
    studentId: string | undefined;
    groupId: string;
}

const DeleteFromListOverlay: React.FC<DeleteFromListOverlayProps> = ({
    onClose,
    studentId,
    groupId,
}) => {
    const queryClient = useQueryClient();
    const removeMutation = useMutation({
        mutationFn: ({ groupId, studentId }: any) =>
            deleteStudentFromGroup(groupId, studentId),
        onSuccess: () => {
            toast.success("Student has been removed Successfully");
            onClose();
            queryClient.invalidateQueries({ queryKey: ["getStudentByCardId"] });
        },
        onError: () => {
            toast.error("something went wrong");
            onClose();
            queryClient.invalidateQueries({ queryKey: ["getStudentByCardId"] });
        },
    });
    const deleteGroup = (groupId: string, studentId: string) => {
        removeMutation.mutate({ groupId, studentId });
    };

    if (studentId)
        return (
            <Overlay onClose={onClose} isVisible>
                <>
                    <div className=" bg-white w-[379px] h-[158px] rounded  gap-[10px]  flex flex-col text-center">
                        <h1 className="text-xl ">
                            Are you sure you want to remove student from the
                            group?
                        </h1>
                        <p className="text-gray-500">
                            you cant restore the payments after deletion
                        </p>
                        <span className="flex justify-center ">
                            <ConfirmButton
                                text="Confirm Deletion"
                                className="text-white bg-red-400"
                                onClick={() => deleteGroup(groupId, studentId)}
                            />
                        </span>
                    </div>
                </>
            </Overlay>
        );
};

export default DeleteFromListOverlay;
