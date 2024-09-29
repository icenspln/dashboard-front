import { useContext, useEffect, useState } from "react";
// import RegistredStudentsOverlay from "../core/columns/modals/registredStudentsList";
// import { StudentsTableContext } from "../core/StudentsTableContext";
import { RegistrationContext } from "../core/RegistrationContext";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    assignStudentToGroup,
    deleteStudentFromGroup,
    getFilteredGroups,
} from "./core/_requests";
import { Group } from "./core/_model";
import { returnGroupLabel } from "../../../../handlers/returnInArabic";
import toast from "react-hot-toast";
import { Overlay } from "../../../../components/Overlay";
import SelectGroup from "../../students-table/core/columns/modals/Popup-menu-component/PresentStudentsList";
import ButtonRoundedPrimary from "../../../../components/ButtonRoundedPrimary";
import AsyncSelect from "react-select/async";

export function StudentGroupModal({ studentId }: { studentId: string }) {
    const { setGroupModal } = useContext(RegistrationContext);
    const onclose = () => {
        setGroupModal(false);
    };

    return (
        <RegistredStudentsOverlay
            studentId={studentId}
            onClose={onclose}
            key={1}
        />
    );
}

const RegistredStudentsOverlay = ({
    studentId,
    onClose,
}: {
    studentId: string;
    onClose: any;
}) => {
    const { groupModal } = useContext(RegistrationContext);
    const queryClient = useQueryClient();
    const [filter, setFilter] = useState("");
    const [selectedOption, setSelectedOption] = useState<{
        label: string;
        value: string;
    }>();
    const [reactSelectOptions, setReactSelectOptions] = useState<
        {
            value: string;
            label: string;
        }[]
    >([{ label: "loading", value: "" }]);

    const { isPending, error, data } = useQuery({
        queryKey: ["getFilteredGroups", filter],
        queryFn: () => getFilteredGroups(filter),
    });

    const [groups, setGroups] = useState<Group[]>([]);

    useEffect(() => {
        if (data && !error && !isPending) {
            const arr = data.data.map((group: any) => {
                return {
                    value: `${group._id}`,
                    label: `${returnGroupLabel(group as any)}`,
                };
            });
            setReactSelectOptions(arr);
        }
        if (error) setReactSelectOptions([{ label: "خطأ", value: "" }]);
    }, [data, isPending, error, studentId, groups]);

    const onSubmitGroups = () => {
        const group = selectedOption;
        mutation.mutate({
            groupId: group?.value,
            studentId: studentId,
        });
    };

    //mutation for signing up a student for a group
    const mutation = useMutation({
        mutationFn: ({ groupId, studentId }: any) =>
            assignStudentToGroup(groupId, studentId),
        onSuccess: (res) => {
            toast.success("تم تسجيل الطالب بنجاح");
            // onClose();
            queryClient.invalidateQueries({ queryKey: ["getStudents"] });
            setGroups((prev) => [...prev, res]);
        },
        onError: (err: any) => {
            const message = err.response.data.message;
            if (message == "Student already in the group") {
                toast.error(message);
            } else if (
                message ==
                "Cannot add student: group is already at maximum capacity."
            ) {
                toast.error(message);
            } else {
                toast.error("something went wrong");
            }
            // onClose();
            queryClient.invalidateQueries({ queryKey: ["getStudents"] });
        },
    });

    //mutation for removing a student for a group

    const removeMutation = useMutation({
        mutationFn: ({ groupId, studentId }: any) =>
            deleteStudentFromGroup(groupId, studentId),
        onSuccess: (res) => {
            toast.success("student has been removed succesfully");
            // onClose();
            queryClient.invalidateQueries({ queryKey: ["getStudents"] });
            setGroups((prev) => [...prev].filter((grp) => grp._id != res._id));
        },
        onError: () => {
            toast.error("something went wrong");
            // onClose();
            queryClient.invalidateQueries({ queryKey: ["getStudents"] });
        },
    });
    const deleteGroup = (groupId: string, studentId: string) => {
        removeMutation.mutate({ groupId, studentId });
    };

    // useEffect(() => {
    //   setGroups(selectedStudent?.groups || []);
    // }, [selectedStudent]);

    const filterStudents = (inputValue: string) => {
        setFilter(inputValue);
        if (inputValue == "") setFilter("");
        if (data && !isPending && !error) {
            return data.data.map((group: any) => {
                return {
                    label: returnGroupLabel(group),
                    value: group._id,
                };
            });
        } else {
            return [];
        }
    };

    const loadOptions = (inputValue: string) =>
        new Promise<any>((resolve) => {
            // setTimeout(() => {
            console.log("called", inputValue);
            resolve(filterStudents(inputValue));
            // }, 1000);
        });

    if (groupModal)
        return (
            <Overlay onClose={onClose} isVisible>
                <>
                    <div className=" w-[553px]  flex flex-col items-center gap-[15px]">
                        <h1 className="text-2xl">Choose the Group</h1>
                        <p>choose the group you want to add the student to</p>

                        <div className="flex w-full flex-col gap-[12px]">
                            {groups && studentId && (
                                <>
                                    {groups.map((group, i) => (
                                        <SelectGroup
                                            id={i}
                                            key={i}
                                            onDelete={() =>
                                                deleteGroup(
                                                    group._id,
                                                    studentId
                                                )
                                            }
                                            label={returnGroupLabel(
                                                group as any
                                            )}
                                        />
                                    ))}
                                </>
                            )}
                            {error && <span>something went wrong</span>}
                        </div>
                    </div>

                    <div className="my-10">
                        <AsyncSelect
                            isClearable
                            defaultOptions={reactSelectOptions}
                            className="max-w-[553px]"
                            loadOptions={loadOptions}
                            onInputChange={loadOptions}
                            // defaultValue={SelectedOption}
                            onChange={setSelectedOption as any}
                        />
                    </div>
                    <span className="flex justify-center gap-[12px]">
                        <ButtonRoundedPrimary
                            text="Submit"
                            onClick={onSubmitGroups}
                        />
                    </span>
                </>
            </Overlay>
        );
};
