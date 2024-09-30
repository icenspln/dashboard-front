//Both of the  button and column selection filter here

import React, { useEffect, useState } from "react";
import PlusSvg from "../assets/icons/PlusSvg";
import ColumnsSelectionSvg from "../assets/icons/ColumnsSelectionSvg";

interface FilterOption {
    id: number | string;
    label: string;
}

interface FilterButtonProps {
    label: string;
    options: FilterOption[];
    onSelect?: (option: FilterOption) => void;
    setFilterState?: any;
    stateName?: any;
}

const FilterButton: React.FC<FilterButtonProps> = ({
    label,
    options,
    onSelect,
    setFilterState,
}) => {
    const [selectedOptions, setSelectedOptions] = useState<FilterOption[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setFilterState(selectedOptions);
    }, [selectedOptions]);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: FilterOption) => {
        let updatedOptions = [...selectedOptions];
        if (updatedOptions.find((opt) => opt.id === option.id)) {
            updatedOptions = updatedOptions.filter(
                (opt) => opt.id !== option.id
            );
        } else {
            updatedOptions.push(option);
        }
        setSelectedOptions(updatedOptions);
        if (onSelect) {
            onSelect(option);
        }
    };

    return (
        <div className="relative">
            <button
                onClick={toggleOpen}
                className="bg-white flex items-center gap-[8px] min-w-[116px] w-full h-[32px] px-4 py-2 border border-dashed border-gray-300 rounded-md shadow-sm hover:bg-gray-100"
            >
                <PlusSvg />
                <span className="text-gray-700">{label}</span>
            </button>

            {isOpen && (
                <div className="absolute w-[166px] mt-1 bg-white rounded border border-gray-300 shadow-lg z-10">
                    {options.map((option) => (
                        <label
                            key={option.id}
                            className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            htmlFor="checkbox"
                            onClick={() => handleOptionClick(option)}
                        >
                            <span>{option.label}</span>
                            <input
                                name="checkbox"
                                type="checkbox"
                                checked={
                                    selectedOptions.find(
                                        (opt) => opt.id === option.id
                                    ) !== undefined
                                }
                                onChange={() => handleOptionClick(option)}
                                className="form-checkbox text-blue-500 mr-2 w-[16px] h-[16px]"
                            />
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
};
//column selection
interface FilterOption {
    id: number | string;
    label: string;
}

interface ColumnSelectionProps {
    options: FilterOption[];
    onSelect?: (selectedOptions: FilterOption[]) => void;
}

const ColumnSelection: React.FC<ColumnSelectionProps> = ({
    options,
    onSelect,
}) => {
    const [selectedOptions, setSelectedOptions] = useState<FilterOption[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: FilterOption) => {
        const updatedOptions = selectedOptions.find(
            (opt) => opt.id === option.id
        )
            ? selectedOptions.filter((opt) => opt.id !== option.id)
            : [...selectedOptions, option];

        setSelectedOptions(updatedOptions);
        if (onSelect) {
            onSelect(updatedOptions);
        }
    };

    return (
        <div className="relative">
            <button onClick={toggleOpen}>
                <ColumnsSelectionSvg />
            </button>

            {isOpen && (
                <div className="absolute w-[175px] min-h-[320px] mt-1 bg-white rounded border border-gray-300 shadow-lg z-10">
                    {options.map((option) => (
                        <label
                            key={option.id}
                            className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleOptionClick(option)}
                            htmlFor="checkbox"
                        >
                            <span>{option.label}</span>
                            <input
                                type="checkbox"
                                name="checkbox"
                                checked={
                                    selectedOptions.find(
                                        (opt) => opt.id === option.id
                                    ) !== undefined
                                }
                                onChange={(e) => {
                                    e.stopPropagation();
                                    handleOptionClick(option);
                                }}
                                className="form-checkbox text-blue-500 mr-2 w-[16px] h-[16px]"
                            />
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
};

export { ColumnSelection, FilterButton };
