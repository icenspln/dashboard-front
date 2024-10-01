import React, { useContext, useEffect, useState } from "react";
import SelectGroup from "./Popup-menu-component/PresentStudentsList";
import AsyncSelect from "react-select/async";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Overlay } from "../../../../../../components/Overlay";
import { GroupsTableContext } from "../../GroupsTableContext";
import { returnStudentLabel } from "../../../../../../handlers/returnInArabic";
import {
    assignStudentToGroup,
    deleteStudentFromGroup,
    // getStudents,
} from "../../../group-add-student-modal/core/_requests";
import { Student } from "../../../../../student-management/students-table/core/_models";
import ButtonRoundedPrimary from "../../../../../../components/ButtonRoundedPrimary";
import { getFilteredStudents } from "../../../../../student-management/students-table/core/_requests";

interface RegistredStudentsOverlayProps {
    onClose: () => void;
}

export const RegistredStudentsOverlay: React.FC<
    RegistredStudentsOverlayProps
> = ({ onClose }) => {
    const [filter, setFilter] = useState("");
    const queryClient = useQueryClient();
    const { selectedGroup, setSelectedGroup } = useContext(GroupsTableContext);
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

    const { data, isPending, error } = useQuery({
        queryKey: ["getStudents", filter],
        queryFn: () => getFilteredStudents(filter),
    });

    useEffect(() => {
        if (data && !error && !isPending) {
            const excludeSet = selectedGroup?.students.map((std) => std._id);
            const filteredSet = data.data.filter(
                (item: any) => !excludeSet?.includes(item._id)
            );
            const arr = filteredSet.map((student: any) => {
                return {
                    value: `${student._id}`,
                    label: returnStudentLabel(
                        student.firstName,
                        student.lastName
                    ),
                };
            });
            setReactSelectOptions(arr);
            setSelectedOption(undefined);
        }
        if (error) setReactSelectOptions([{ label: "Error", value: "" }]);
    }, [data, isPending, error, selectedGroup]);

    const onSubmitGroups = () => {
        const student = selectedOption;
        mutation.mutate({
            groupId: selectedGroup?._id,
            studentId: student?.value,
        });
    };

    const filterStudents = (inputValue: string) => {
        setFilter(inputValue);

        if (data && !isPending && !error) {
            return data.data.map((student: Student) => {
                return {
                    label: student.firstName + " " + student.lastName,
                    value: student._id,
                };
            });
        } else {
            return [];
        }
    };

    const loadOptions = (inputValue: string) =>
        new Promise<any>((resolve) => {
            // setTimeout(() => {
            resolve(filterStudents(inputValue));
            // }, 1000);
        });

    //mutation for signing up a student for a group
    const mutation = useMutation({
        mutationFn: ({ groupId, studentId }: any) =>
            assignStudentToGroup(groupId, studentId),
        onSuccess: (res) => {
            toast.success("Student has been enrolled");
            // onClose();
            queryClient.invalidateQueries({ queryKey: ["getGroups"] });
            setSelectedGroup(res);
        },
        onError: (err: any) => {
            toast.error("something went wrong");
            if (err.response.data.message == "Student already in the group")
                toast.error("Student Already in group");
            // onClose();
            queryClient.invalidateQueries({ queryKey: ["getGroups"] });
        },
    });

    // //mutation for removing a student for a group

    const removeMutation = useMutation({
        mutationFn: ({ groupId, studentId }: any) =>
            deleteStudentFromGroup(groupId, studentId),
        onSuccess: (res) => {
            toast.success("Student has been removed from the group");
            // onClose();
            queryClient.invalidateQueries({ queryKey: ["getGroups"] });
            setSelectedGroup(res);
        },
        onError: () => {
            toast.error("something went wrong");
            // onClose();
            queryClient.invalidateQueries({ queryKey: ["getGroups"] });
        },
    });

    const deleteGroup = (groupId: string, studentId: string) => {
        removeMutation.mutate({ groupId, studentId });
    };

    return (
        <Overlay onClose={onClose} isVisible>
            <>
                <div className=" w-[553px]  flex flex-col items-center gap-[15px]">
                    <h1 className="text-2xl">List of Enrolled Students</h1>
                    <p className="text-textGray">
                        please choose a student to add to this group
                    </p>

                    <div className="flex w-full h-[250px] overflow-auto flex-col gap-[12px]">
                        {selectedGroup && (
                            <>
                                {selectedGroup.students.map((student, i) => (
                                    <SelectGroup
                                        id={i}
                                        key={i}
                                        onDelete={() =>
                                            deleteGroup(
                                                selectedGroup._id,
                                                student._id
                                            )
                                        }
                                        label={returnStudentLabel(
                                            student.firstName,
                                            student.lastName
                                        )}
                                    />
                                ))}
                            </>
                        )}
                        {/* {error && <span>خطأ</span>} */}
                    </div>
                </div>
                <div className="flex my-10 w-full">
                    <div className="w-full me-3">
                        <AsyncSelect
                            isClearable
                            defaultOptions={reactSelectOptions}
                            className="max-w-[553px]"
                            loadOptions={loadOptions}
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
                </div>
            </>
        </Overlay>
    );
};
