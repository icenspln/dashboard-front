import ButtonPrimary from "../../../../components/ButtonPrimary";
import { SubmitHandler, useForm } from "react-hook-form";
// import data from "../../../prof-management/prof-table/core/data.json";
import {
    ParticularGroupRegisterFormType,
    TypeRegisterSchema,
} from "../core/_models";
import { useContext, useEffect, useState } from "react";
import { RegistrationContext } from "../core/RegistrationContext";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getFilteredTeachers, groupRegister } from "../core/_requests";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import AsyncSelect from "react-select/async";
import { Teacher } from "../../../teacher-management/teacher-table/core/_models";
import { modules } from "../../../../handlers/appGlobalVARS";

export default function StudentRegisterForm() {
    const [filter, setFilter] = useState("");
    const [reactSelectOptions, setReactSelectOptions] = useState();
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
    } = useForm<ParticularGroupRegisterFormType>({
        resolver: yupResolver(TypeRegisterSchema as any),
    });

    const onSubmit: SubmitHandler<ParticularGroupRegisterFormType> = (data) => {
        const [hour, minute] = data.timing.split(":");
        const teacher = data.teacher.value;

        const finalData = {
            ...data,
            timing: {
                hour: hour.padStart(2, "0"),
                minute: minute.padStart(2, "0"),
            },
            teacher,
        };
        mutation.mutateAsync(finalData);
    };

    const mutation = useMutation({
        mutationFn: (data: any) => groupRegister(data),
        onSuccess: () => {
            setScreen(true);
        },
        onError: () => {
            toast.error("هناك خطأ ما");
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
        if (selectedTeacher) setValue("teacher", selectedTeacher);
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
        new Promise<Teacher[]>((resolve) => {
            // setTimeout(() => {
            resolve(filterTeachers(inputValue));
            // }, 1000);
        });

    return (
        <>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex items-center gap-7 mb-7">
                    <article className="flex flex-col gap-2 w-full">
                        <label htmlFor="name" className="text-blueDark">
                            اسم الحصة
                        </label>
                        <input
                            {...register("name")}
                            className="bg-white border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4"
                            placeholder="ادخل اسم الحصة"
                            type="text"
                            // id=""
                        />
                        {errors.name && (
                            <span className="text-red-500">
                                {errors.name.message}
                            </span>
                        )}
                    </article>
                    <article className="flex flex-col gap-2 w-full">
                        <label htmlFor="" className="text-blueDark">
                            القاعة
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
                <div className="flex items-center gap-7 mb-7">
                    <article className="flex flex-col gap-2 w-full">
                        <label htmlFor="date">التاريخ</label>
                        <input
                            {...register("date")}
                            type="date"
                            className="border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4"
                            placeholder="08:00"
                        />
                        {errors.timing && (
                            <span className="text-red-500">
                                {errors.timing.message}
                            </span>
                        )}
                        {/* <select
              {...register("day")}
              className="bg-white border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4"
              name=""
              id=""
            >
              <option value="1">السبت</option>
              <option value="2">الأحد</option>
              <option value="3">الإثنين</option>
              <option value="4">الثلاثاء</option>
              <option value="5">الأربعاء</option>
              <option value="6">الخميس</option>
              <option value="7">الجمعة</option>
            </select> */}
                    </article>

                    <article className="flex flex-col gap-2 w-full">
                        <label htmlFor="timing" className="text-blueDark">
                            الوقت
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
                            الأستاذ
                        </label>
                        <AsyncSelect
                            defaultOptions={reactSelectOptions}
                            cacheOptions
                            loadOptions={loadOptions}
                            onChange={setSelectedTeacher as any}
                        />
                        {errors.teacher?.value && (
                            <span className="text-red-500">
                                {errors.teacher.value.message}
                            </span>
                        )}
                    </article>
                    <article className="flex flex-col gap-2 w-full">
                        <label htmlFor="module" className="text-blueDark">
                            المادة
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

                <div className="flex items-center gap-7 mb-7">
                    <article className="flex flex-col gap-2 w-full">
                        <label htmlFor="institution" className="text-blueDark">
                            المستوى
                        </label>
                        <select
                            {...register("institution")}
                            className="bg-white border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4"
                        >
                            <option value="primarySchool">الإبتدائي</option>
                            <option value="middleSchool">المتوسط</option>
                            <option value="highSchool">الثانوي</option>
                        </select>
                        {errors.institution && (
                            <span className="text-red-500">
                                {errors.institution.message}
                            </span>
                        )}
                    </article>
                    <article className="flex flex-col gap-2 w-full">
                        <label className="text-blueDark" htmlFor="level">
                            السنة
                        </label>
                        <select
                            {...register("level")}
                            className="bg-white border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4"
                        >
                            <option value="1">الأولى</option>
                            <option value="2">الثانية</option>
                            <option value="3">الثالثة</option>
                            <option value="4">الرابعة</option>
                        </select>
                        {errors.level && (
                            <span className="text-red-500">
                                {errors.level.message}
                            </span>
                        )}
                    </article>
                </div>

                <div className="flex items-center gap-7 mb-7 ">
                    {/* <article className="flex flex-col gap-2 w-full">
            <label className="text-blueDark" htmlFor="level">
              عدد الحصص
            </label>
            <input
              {...register("pricing")}
              type="text"
              className="border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4"
              placeholder="1"
            />
          </article> */}
                    <article className="flex flex-col gap-2 w-full">
                        <label className="text-blueDark" htmlFor="pricing">
                            الثمن
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
                </div>

                <div className="flex items-center justify-start gap-7 mb-7 w-[140px] ">
                    <ButtonPrimary
                        text="تسجيل"
                        active
                        disabled={isSubmitting}
                        type="submit"
                    />
                </div>
            </form>
        </>
    );
}
