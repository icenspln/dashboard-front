import React, { useState, useEffect } from "react";
import AsyncSelect from "react-select/async";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Student } from "../../../student-management/students-table/core/_models";
import { Overlay } from "../../../../components/Overlay";
import { getFilteredStudents } from "../../../student-management/students-table/core/_requests";

interface SelectStudentProps {
    onClose: () => void;
}

const SelectStudent: React.FC<SelectStudentProps> = ({ onClose }) => {
    const [filter, setFilter] = useState("");
    const navigate = useNavigate();
    const [reactSelectOptions, setReactSelectOptions] = useState<
        {
            value: string;
            label: string;
        }[]
    >([{ label: "loading", value: "" }]);
    const [selectedOption, setSelectedOption] = useState<{
        label: string;
        value: string;
    }>();

    useEffect(() => {
        if (selectedOption)
            navigate(`/attendance-management/user-${selectedOption.value}`);
    }, [selectedOption]);

    // const [searchTerm, setSearchTerm] = useState("");
    // const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    //query functions
    const { data, isLoading, error } = useQuery({
        queryKey: ["getStudents", filter],
        queryFn: () => getFilteredStudents(filter),
    });

    const filterStudents = (inputValue: string) => {
        setFilter(inputValue);

        if (data && !isLoading && !error) {
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

    useEffect(() => {
        if (data && !error && !isLoading) {
            const arr = data.data.map((std: Student) => {
                return {
                    value: `${std._id}`,
                    label: `${std.firstName} ${std.lastName}`,
                };
            });
            setReactSelectOptions(arr);
        }
        if (error) setReactSelectOptions([{ label: "error", value: "" }]);
    }, [data, isLoading, error]);

    return (
        <Overlay onClose={onClose} isVisible>
            <div className="flex flex-col items-center w-[517px] min-h-[206px] gap-[15px]">
                <h1 className="text-xl font-bold">
                    Search by name for the student
                </h1>
                <p className="text-base text-gray-500">
                    please enter student's name to lookup his details
                </p>

                <div className="relative w-full text-base">
                    <div className="my-10">
                        <AsyncSelect
                            defaultOptions={reactSelectOptions}
                            className="max-w-[553px]"
                            loadOptions={loadOptions}
                            onInputChange={loadOptions}
                            // defaultValue={SelectedOption}
                            onChange={setSelectedOption as any}
                        />
                    </div>
                </div>
            </div>
        </Overlay>
    );
};
export default SelectStudent;
