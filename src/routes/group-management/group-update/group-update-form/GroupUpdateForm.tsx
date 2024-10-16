import { SubmitHandler, useForm } from "react-hook-form";
import { GroupUpdateFormType, GroupUpdateSchema } from "../core/_models";
import { useMutation, useQuery } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { getTeachers, groupUpdate } from "../core/_requests";
import { useLocation, useParams } from "react-router-dom";
import queryString from "query-string";
import { UpdateContext } from "../core/UpdateContext";
import { useContext, useEffect, useState } from "react";
import Select from "react-select";
import { Teacher } from "../../../teacher-management/teacher-table/core/_models";
import {
    dayOfWeekFilterOptions,
    INSTITUTIONS,
    LEVELS,
    modules,
} from "../../../../handlers/appGlobalVARS";
import FormSubmitButton from "../../../../components/FormSubmitButton";

export default function GroupUpdateForm() {
    const [reactSelectOptions, setReactSelectOptions] = useState();

    const { setSuccessModal } = useContext(UpdateContext);
    const params = useParams();
    const location = useLocation();
    const id = params.id!;
    const parsedParams: any = queryString.parse(location.search);
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<GroupUpdateFormType>({
        resolver: yupResolver(GroupUpdateSchema),
        defaultValues: {
            ...parsedParams,
        },
    });
    const [selectedTeacher, setSelectedTeacher] = useState<{
        value: string;
        label: string;
    }>({
        label: parsedParams.responsibleTeacherLabel,
        value: parsedParams.responsibleTeacherValue,
    });

    // useEffect(() => {
    //   setSelectedTeacher({
    //     label: parsedParams.responsibleTeacherLabel,
    //     value: parsedParams.responsibleTeacherValue,
    //   });
    // }, []);
    const onSubmit: SubmitHandler<GroupUpdateFormType> = (data) => {
        const [hour, minute] = data.timing.split(":");
        const responsibleTeacher = data.responsibleTeacher.value;

        const finalData = {
            dayOfWeek: data.dayOfWeek,
            timing: {
                hour: hour.padStart(2, "0"),
                minute: minute.padStart(2, "0"),
            },
            responsibleTeacher,
            module: data.module,
            institution: data.institution,
            level: data.level,
            pricing: data.pricing,
            roomNumber: data.roomNumber,
            maxNumberOfStudents: data.maxNumberOfStudents,
        };
        mutation.mutateAsync({ id, finalData });
    };

    const mutation = useMutation({
        mutationFn: ({ id, finalData }: { id: string; finalData: any }) => {
            return groupUpdate(id, finalData);
        },
        onSuccess: () => {
            setSuccessModal(true);
        },
        onError: () => {
            toast.error("هناك خطأ ما");
        },
    });

    const { data, isLoading, error } = useQuery({
        queryKey: ["getTeachersForGroups"],
        queryFn: () => getTeachers(),
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
    return (
        <>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex items-center flex-col md:flex-row gap-7 mb-7">
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

                <div className="flex items-center flex-col md:flex-row gap-7 mb-7">
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
                        <Select
                            options={reactSelectOptions}
                            defaultValue={selectedTeacher}
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
                            {modules.map((m) => (
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

                <div className="flex items-center flex-col md:flex-row gap-7 mb-7">
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

                <div className="flex items-center flex-col md:flex-row gap-7 mb-7 ">
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

                <div className="flex items-center flex-col md:flex-row gap-7 mb-7 ">
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
                    <FormSubmitButton disabled={mutation.isPending} />
                </div>
            </form>
        </>
    );
}
