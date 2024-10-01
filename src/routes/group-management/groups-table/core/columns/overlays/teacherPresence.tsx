import { Overlay } from "../../../../../../components/Overlay";
import ConfirmButton from "../../../../../../components/confirmButton";
import { useEffect, useState } from "react";
import { Group, TeacherAbsence } from "../../_models";
import { returnGroupLabel } from "../../../../../../handlers/returnInArabic";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteTeacherAbsence, setTeacherAbsence } from "../../_requests";
import DeleteSvg from "../../../../../../assets/icons/DeleteSvg";

interface TeacherPresenceProps {
    onClose: () => void;
    group: Group;
}

export default function TeacherPresence({
    onClose,
    group,
}: TeacherPresenceProps) {
    // const groups = [
    //     { label: "الأحد  2024 / 10 / 23 - 03:00" },
    //     { label: "الأحد  2024 / 10 / 23 - 03:00" },
    //     { label: "الأحد  2024 / 10 / 23 - 03:00" },
    // ]
    const queryClient = useQueryClient();

    const [dates, setDates] = useState<TeacherAbsence[]>([]);
    const [dateValue, setDateValue] = useState("");

    useEffect(() => {
        if (group.absences) {
            setDates(group.absences);
        }
    }, [group]);

    const mutation = useMutation({
        mutationFn: ({ date, groupId }: { date: string; groupId: string }) =>
            setTeacherAbsence(date, groupId),
        mutationKey: ["postTeacherAbsence"],
        onSuccess: () => {
            toast.success("Teacher Absence has been Added");
            queryClient.invalidateQueries({
                queryKey: ["getGroups"],
            });
        },
        onError: () => {
            toast.error("something went wrong");
            queryClient.invalidateQueries({
                queryKey: ["getGroups"],
            });
        },
    });

    const onSubmit = () => {
        if (!dateValue || !group) return;
        mutation.mutateAsync({ date: dateValue, groupId: group._id });
    };

    const deleteMutation = useMutation({
        mutationFn: ({ absenceId }: { absenceId: string }) =>
            deleteTeacherAbsence(absenceId),
        mutationKey: ["deleteTeacherAbsence"],
        onSuccess: () => {
            toast.success("Teacher Absence has been Removed");
            queryClient.invalidateQueries({
                queryKey: ["getGroups"],
            });
        },
        onError: () => {
            toast.error("something went wrong");
            queryClient.invalidateQueries({
                queryKey: ["getGroups"],
            });
        },
    });

    const submitDeleteAbsence = (absenceId: string) => {
        if (!absenceId) return;
        deleteMutation.mutateAsync({ absenceId });
    };
    return (
        <Overlay onClose={onClose} isVisible>
            <>
                <div className="w-[553px] min-h-[378px] ">
                    <div className="flex flex-col text-center gap-[8px]">
                        <h1 className="font-bold">
                            Presence / Absence of the teacher
                        </h1>
                        <span className="text-gray-400">
                            {returnGroupLabel(group as any)}
                        </span>
                    </div>

                    <div className="">
                        <ul className="mt-3 max-h-[500px] overflow-y-scroll">
                            {dates.length < 1 && (
                                <li className=" w-fill px-5 py-3 flex justify-between  border-b last:border-none">
                                    <span className="">
                                        There are no absences
                                    </span>
                                </li>
                            )}
                            {dates.map((abs) => (
                                <li
                                    key={abs._id}
                                    className=" w-fill px-5 py-3 flex justify-between items-center  border-b last:border-none"
                                >
                                    <span>
                                        {new Date(
                                            abs.date
                                        ).toLocaleDateString()}
                                    </span>
                                    <div
                                        className="cursor-pointer"
                                        onClick={() =>
                                            submitDeleteAbsence(abs._id)
                                        }
                                    >
                                        <DeleteSvg />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center gap-3 items-center">
                    <input
                        className="border-2 rounded-md"
                        type="date"
                        value={dateValue}
                        onChange={(e) => setDateValue(e.target.value)}
                    />{" "}
                    <span className="flex justify-center">
                        <ConfirmButton
                            text="Submit changes"
                            className="text-white"
                            onClick={onSubmit}
                        />
                    </span>
                </div>
            </>
        </Overlay>
    );
}
