import ButtonPrimary from "../../../../components/ButtonPrimary";
import { SubmitHandler, useForm } from "react-hook-form";
import { GroupRegisterFormType, TypeRegisterSchema } from "../core/_models";
import { useContext, useEffect, useState } from "react";
import { RegistrationContext } from "../core/RegistrationContext";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getFilteredTeachers, groupRegister } from "../core/_requests";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import AsyncSelect from "react-select/async";
import { Teacher } from "../../../teacher-management/teacher-table/core/_models";
import {
    dayOfWeekFilterOptions,
    INSTITUTIONS,
    LEVELS,
    modules,
} from "../../../../handlers/appGlobalVARS";

export default function GroupRegisterForm() {
    const [teacherModules, setTeacherModules] = useState(modules);
    const [filter, setFilter] = useState("");
    const [selectedTeacher, setSelectedTeacher] = useState<{
        value: string;
        label: string;
    }>();
    const { setScreen } = useContext(RegistrationContext);
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm<GroupRegisterFormType>({
        resolver: yupResolver(TypeRegisterSchema),
    });

    const [reactSelectOptions, setReactSelectOptions] = useState();

    const onSubmit: SubmitHandler<GroupRegisterFormType> = (data) => {
        const [hour, minute] = data.timing.split(":");
        const responsibleTeacher = data.responsibleTeacher.value;

        const finalData = {
            ...data,
            timing: {
                hour: hour.padStart(2, "0"),
                minute: minute.padStart(2, "0"),
            },
            responsibleTeacher,
        };
        mutation.mutateAsync(finalData);
    };

    const mutation = useMutation({
        mutationFn: (data: any) => groupRegister(data),
        onSuccess: () => {
            setScreen(true);
        },
        onError: () => {
            toast.error("something went wrong");
        },
    });

    const { data, error, isLoading } = useQuery({
        queryKey: ["getTeachersForGroups", filter],
        queryFn: () => getFilteredTeachers(filter),
    });

    useEffect(() => {
        if (data && !isLoading && !error) {
            const teachersSelectArr = data.data.map((teacher: Teacher) => {
                return {
                    label: teacher.firstName + " " + teacher.lastName,
                    value: teacher._id,
                };
            });
            setReactSelectOptions(teachersSelectArr);
        }
        if (error) {
            toast.error("error fetching teachers");
        }
    }, [data, isLoading, error]);

    useEffect(() => {
        if (selectedTeacher) setValue("responsibleTeacher", selectedTeacher);
    }, [selectedTeacher]);

    const filterTeachers = (inputValue: string) => {
        setFilter(inputValue);

        if (data && !isLoading && !error) {
            return data.data.map((teacher: Teacher) => {
                return {
                    label: teacher.firstName + " " + teacher.lastName,
                    value: teacher._id,
                };
            });
        } else {
            return [];
        }
    };

    const loadOptions = (inputValue: string) =>
        new Promise<any>((resolve) => {
            resolve(filterTeachers(inputValue));
        });

    const returnFilteredModules = (
        modules: { id: string; label: string }[],
        selectedTeacherId: string,
        teachers: Teacher[]
    ) => {
        const teacher = teachers.find(
            (teacher: Teacher) => teacher._id == selectedTeacherId
        );
        if (teacher) {
            const teacherModules = modules.filter((module) => {
                return teacher.modules.includes(module.id);
            });
            setTeacherModules(teacherModules);
        }
    };

    useEffect(() => {
        if (selectedTeacher && data.data) {
            returnFilteredModules(modules, selectedTeacher.value, data.data);
        }
    }, [selectedTeacher, data]);

    return (
        <>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex items-center gap-7 mb-7">
                    <article className="flex flex-col gap-2 w-full">
                        <label htmlFor="dayOfWeek" className="text-blueDark">
                            Day - repeated each week
                            <span
                                className="text-red-300 font-bold"
                                title="Item Required"
                            >
                                *
                            </span>
                        </label>
                        <select
                            {...register("dayOfWeek")}
                            className="bg-white border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4"
                        >
                            {dayOfWeekFilterOptions.map((opt) => (
                                <option value={opt.id}>{opt.label}</option>
                            ))}
                        </select>
                        {errors.dayOfWeek && (
                            <span className="text-red-500">
                                {errors.dayOfWeek.message}
                            </span>
                        )}
                    </article>
                    <article className="flex flex-col gap-2 w-full">
                        <label htmlFor="timing" className="text-blueDark">
                            Time
                            <span
                                className="text-red-300 font-bold"
                                title="Item Required"
                            >
                                *
                            </span>
                        </label>
                        <input
                            {...register("timing")}
                            type="time"
                            className="border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4"
                            placeholder="08:00"
                        />
                        {errors.timing && (
                            <span className="text-red-500">
                                {errors.timing.message}
                            </span>
                        )}
                    </article>
                </div>

                <div className="flex items-center gap-7 mb-7">
                    <article className="flex flex-col gap-2 w-full">
                        <label htmlFor="teacher" className="text-blueDark">
                            Teacher
                            <span
                                className="text-red-300 font-bold"
                                title="Item Required"
                            >
                                *
                            </span>
                        </label>
                        <AsyncSelect
                            defaultOptions={reactSelectOptions}
                            cacheOptions
                            loadOptions={loadOptions}
                            onInputChange={loadOptions}
                            onChange={setSelectedTeacher as any}
                        />
                        {errors.responsibleTeacher?.value && (
                            <span className="text-red-500">
                                {errors.responsibleTeacher.value.message}
                            </span>
                        )}
                    </article>
                    <article className="flex flex-col gap-2 w-full">
                        <label htmlFor="module" className="text-blueDark">
                            Subject
                            <span
                                className="text-red-300 font-bold"
                                title="Item Required"
                            >
                                *
                            </span>
                        </label>
                        <select
                            {...register("module")}
                            className="border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4"
                        >
                            {teacherModules.map((m) => (
                                <option key={m.id} value={m.id}>
                                    {m.label}
                                </option>
                            ))}
                        </select>
                        {errors.module && (
                            <span className="text-red-500">
                                {errors.module.message}
                            </span>
                        )}
                    </article>
                </div>

                <div className="flex items-center gap-7 mb-7">
                    <article className="flex flex-col gap-2 w-full">
                        <label className="text-blueDark" htmlFor="level">
                            Level
                            <span
                                className="text-red-300 font-bold"
                                title="Item Required"
                            >
                                *
                            </span>
                        </label>
                        <select
                            {...register("level")}
                            className="bg-white border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4"
                        >
                            {LEVELS.map((l, i) => (
                                <option value={i + 1}>{l}</option>
                            ))}
                        </select>
                        {errors.level && (
                            <span className="text-red-500">
                                {errors.level.message}
                            </span>
                        )}
                    </article>
                    <article className="flex flex-col gap-2 w-full">
                        <label htmlFor="institution" className="text-blueDark">
                            Institution
                            <span
                                className="text-red-300 font-bold"
                                title="Item Required"
                            >
                                *
                            </span>
                        </label>
                        <select
                            {...register("institution")}
                            className="bg-white border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4"
                        >
                            {INSTITUTIONS.map((i) => (
                                <option value={i}>{i}</option>
                            ))}
                        </select>
                        {errors.institution && (
                            <span className="text-red-500">
                                {errors.institution.message}
                            </span>
                        )}
                    </article>
                </div>

                <div className="flex items-center gap-7 mb-7 ">
                    <article className="flex flex-col gap-2 w-full">
                        <label className="text-blueDark" htmlFor="pricing">
                            Price
                            <span
                                className="text-red-300 font-bold"
                                title="Item Required"
                            >
                                *
                            </span>
                        </label>
                        <input
                            {...register("pricing")}
                            type="number"
                            className="border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4"
                            placeholder="2000"
                        />
                        {errors.pricing && (
                            <span className="text-red-500">
                                {errors.pricing.message}
                            </span>
                        )}
                    </article>
                    <article className="flex flex-col gap-2 w-full">
                        <label className="text-blueDark" htmlFor="roomNumber">
                            Room
                            <span
                                className="text-red-300 font-bold"
                                title="Item Required"
                            >
                                *
                            </span>
                        </label>
                        <input
                            {...register("roomNumber")}
                            type="text"
                            className="border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4"
                            placeholder="1"
                        />
                        {errors.roomNumber && (
                            <span className="text-red-500">
                                {errors.roomNumber.message}
                            </span>
                        )}
                    </article>
                </div>

                <div className="flex items-center gap-7 mb-7 ">
                    <article className="flex flex-col gap-2 w-full">
                        <label
                            className="text-blueDark"
                            htmlFor="maxNumberOfStudents"
                        >
                            Max number of students
                            <span
                                className="text-red-300 font-bold"
                                title="Item Required"
                            >
                                *
                            </span>
                        </label>
                        <input
                            {...register("maxNumberOfStudents")}
                            type="text"
                            className="border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4"
                            placeholder="20"
                        />
                        {errors.maxNumberOfStudents && (
                            <span className="text-red-500">
                                {errors.maxNumberOfStudents.message}
                            </span>
                        )}
                    </article>
                </div>
                <div className="flex items-center justify-start gap-7 mb-7 w-[140px] ">
                    <ButtonPrimary
                        text="Submit"
                        active
                        disabled={isSubmitting}
                        type="submit"
                    />
                </div>
            </form>
        </>
    );
}
