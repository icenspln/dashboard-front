import { SubmitHandler, useForm } from "react-hook-form";
import { TeacherRegisterFormType, TypeRegisterSchema } from "../core/_models";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { teacherRegister } from "../core/_requests";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useRef, useState } from "react";
import { RegistrationContext } from "../core/RegistrationContext";
import { modules } from "../../../../handlers/appGlobalVARS";

export default function TeacherRegisterForm() {
    const { setScreen } = useContext(RegistrationContext);
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm<TeacherRegisterFormType>({
        resolver: yupResolver(TypeRegisterSchema),
    });

    const onSubmit: SubmitHandler<TeacherRegisterFormType> = (data) => {
        mutation.mutateAsync({ ...data });
    };

    const mutation = useMutation({
        mutationFn: (data: TeacherRegisterFormType) => teacherRegister(data),
        onSuccess: () => {
            setScreen(true);
        },
        onError: () => {
            toast.error("Something Went Wrong");
        },
    });

    return (
        <>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex items-center gap-7 mb-3">
                    <article className="flex flex-col gap-2 w-full min-h-[96px]">
                        <label htmlFor="firstName" className="text-blueDark">
                            First Name
                            <span
                                className="text-red-300 font-bold"
                                title="Item Required"
                            >
                                🞰
                            </span>
                        </label>
                        <input
                            type="text"
                            {...register("firstName")}
                            className="border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4 "
                            placeholder="Teacher's First Name"
                        />
                        {errors.firstName && (
                            <span className="text-red-500">
                                {errors.firstName.message}
                            </span>
                        )}
                    </article>
                    <article className="flex flex-col gap-2 w-full min-h-[96px] ">
                        <label htmlFor="lastName" className="text-blueDark">
                            Last Name
                            <span
                                className="text-red-300 font-bold"
                                title="Item Required"
                            >
                                🞰
                            </span>
                        </label>
                        <input
                            {...register("lastName")}
                            type="text"
                            className="border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4"
                            placeholder="Teacher's Last Name"
                        />
                        {errors.lastName && (
                            <span className="text-red-500">
                                {errors.lastName.message}
                            </span>
                        )}
                    </article>
                </div>

                <div className="flex items-center gap-7 mb-3">
                    <article className="flex flex-col gap-2 w-full min-h-[96px]">
                        <label htmlFor="phoneNumber" className="text-blueDark">
                            Phone Number
                            <span
                                className="text-red-300 font-bold"
                                title="Item Required"
                            >
                                🞰
                            </span>
                        </label>
                        <input
                            {...register("phoneNumber")}
                            type="text"
                            className="border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4"
                            placeholder="0555555555"
                        />
                        {errors.phoneNumber && (
                            <span className="text-red-500">
                                {errors.phoneNumber.message}
                            </span>
                        )}
                    </article>
                    <article className="flex flex-col gap-2 w-full min-h-[96px]">
                        <label htmlFor="birthDate" className="text-blueDark">
                            Birth Date
                            <span
                                className="text-red-300 font-bold"
                                title="Item Required"
                            >
                                🞰
                            </span>
                        </label>
                        <input
                            {...register("birthDate")}
                            type="date"
                            className="border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray "
                        />
                        {errors.birthDate && (
                            <span className="text-red-500">
                                {errors.birthDate.message}
                            </span>
                        )}
                    </article>
                </div>

                <div className="flex items-center gap-7 mb-3">
                    <article className="flex flex-col gap-2 w-full min-h-[96px]">
                        <label htmlFor="modules" className="text-blueDark">
                            Subject
                        </label>
                        <SubjectMultiSelect
                            setValue={setValue}
                            initValue={[]}
                        />
                        {errors.modules && (
                            <span className="text-red-500">
                                {errors.modules.message}
                            </span>
                        )}
                    </article>
                </div>

                <div className="flex items-center justify-start gap-7 w-[140px] ">
                    <button
                        disabled={isSubmitting}
                        type="submit"
                        className={`min-w-[140px] bg-blue transition hover:bg-blueHovered font-medium flex flex-row items-center rounded-lg gap-3 px-3 py-2 w-full`}
                    >
                        <h2
                            className={`text-xl  text-white text-center mx-auto`}
                        >
                            Submit
                        </h2>
                    </button>
                </div>
            </form>
        </>
    );
}

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
                console.log(prev);
                setValue("modules", [...prev, value]);
                return [...prev, value];
            } else {
                console.log(prev);
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
