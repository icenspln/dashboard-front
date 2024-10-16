import { useEffect, useRef, useState } from "react";
import { modules } from "../handlers/appGlobalVARS";

export function SubjectMultiSelect({
    setValue,
    initValue,
}: {
    setValue?: any;
    initValue: string[];
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedModules, setSelectedModules] = useState<string[]>(initValue);
    const dropdownRef = useRef<any>(null);

    const handleButtonClick = () => {
        setIsOpen(!isOpen);
    };

    const handleCheckboxChange = (event: any) => {
        const { value, checked } = event.target;
        setSelectedModules((prev: any) => {
            if (checked) {
                setValue("modules", [...prev, value]);
                return [...prev, value];
            } else {
                setValue(
                    "modules",
                    prev.filter((m: any) => m !== value)
                );
                return prev.filter((m: any) => m !== value);
            }
        });
    };

    const handleClickOutside = (event: Event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="relative w-full" ref={dropdownRef}>
                <button
                    className="min-w-[140px] bg-white transition hover:bg-light border border-solid border-light text-blueDark font-medium flex flex-row items-center rounded-lg gap-3 px-3 py-2 "
                    onClick={(e) => {
                        e.preventDefault();
                        handleButtonClick();
                    }}
                >
                    Choose Teacher's Module
                </button>
                {isOpen && (
                    <div className=" block absolute bg-white rounded-md min-w-[160px] shadow-sm z-10">
                        {modules.map((m) => (
                            <label
                                key={m.id}
                                className="m-3 flex justify-between flex-row-reverse cursor-pointer"
                            >
                                <input
                                    type="checkbox"
                                    value={m.id}
                                    checked={selectedModules.includes(m.id)}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="text-md">{m.label}</span>
                            </label>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
