import React from "react";
import DeleteSvg from "../../../../../../../assets/icons/DeleteSvg";

interface SelectGroupProps {
    id: number;
    label: string;
    onDelete: (id: number) => void;
}

const SelectGroup: React.FC<SelectGroupProps> = ({ id, label, onDelete }) => {
    return (
        <div className="flex items-center justify-between bg-grayBlue  rounded px-4 py-2 md:w-[517px] h-[32px] shadow-md hover:bg-gray-100 ">
            <span>{label}</span>
            <button
                onClick={(e) => {
                    e.stopPropagation(); // Prevent click from triggering parent click events
                    onDelete(id);
                }}
                className="cursor-pointer"
            >
                <DeleteSvg />
            </button>
        </div>
    );
};

export default SelectGroup;
