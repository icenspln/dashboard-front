import { SubmitHandler, useForm } from "react-hook-form";
import {
    // speciality,
    StudentRegisterFormType,
    StudentRegisterSchema,
} from "../core/_models";
import { studentPhoneNumberCheck, studentRegister } from "../core/_requests";
import { useMutation } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { useContext, useEffect, useState } from "react";
import { RegistrationContext } from "../core/RegistrationContext";
import {
    INSTITUTIONS,
    LEVELS,
    SPECIALITIES,
} from "../../../../handlers/appGlobalVARS";

interface StudentRegisterFormProps {
    setStudentId: (id: string) => void;
}
export default function StudentRegisterForm({
    setStudentId,
}: StudentRegisterFormProps) {
    const [phoneNumberWarning, setPhoneNumberWarning] = useState(false);

    const { setScreen } = useContext(RegistrationContext);
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<StudentRegisterFormType>({
        resolver: yupResolver(StudentRegisterSchema),
    });

    // submit mutation for the form
    const onSubmit: SubmitHandler<StudentRegisterFormType> = (data) => {
        mutation.mutate({ ...data });
    };

    // mutation function for checking re-used phone number
    const phoneNumberCheckMutation = useMutation({
        mutationFn: (phone: string) => studentPhoneNumberCheck(phone),
        onSuccess: (res) => {
            if (res.exists) {
                setPhoneNumberWarning(true);
                toast("Phone number already used! ⚠️", { duration: 5000 });
            }
            if (!res.exists) {
                setPhoneNumberWarning(false);
            }
        },
    });

    // registration function
    const mutation = useMutation({
        mutationFn: studentRegister,
        onSuccess: (res) => {
            setStudentId(res._id);
            setScreen(true);
        },
        onError: () => {
            toast.error("Something went wrong");
        },
    });

    useEffect(() => {
        if (watch("phoneNumber").length >= 10) {
            phoneNumberCheckMutation.mutateAsync(watch("phoneNumber"));
        }
    }, [watch("phoneNumber")]);

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
                            placeholder="Student's First Name"
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
                            placeholder="Student's Last Name"
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
                            {phoneNumberWarning && (
                                <span className="mx-2 text-warning">
                                    Phone Already Used!⚠
                                </span>
                            )}
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
                        <label
                            htmlFor="guardianPhoneNumber"
                            className="text-blueDark"
                        >
                            Parent's Phone Number
                            <span
                                className="text-red-300 font-bold"
                                title="Item Required"
                            >
                                🞰
                            </span>
                        </label>
                        <input
                            {...register("guardianPhoneNumber")}
                            type="text"
                            className="border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4"
                            placeholder="0555555555"
                        />
                        {errors.guardianPhoneNumber && (
                            <span className="text-red-500">
                                {errors.guardianPhoneNumber.message}
                            </span>
                        )}
                    </article>
                </div>

                <div className="flex items-center gap-7 mb-3">
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
                    <article className="flex flex-col gap-2 w-full min-h-[96px]">
                        <label htmlFor="institution" className="text-blueDark">
                            Institution
                            <span
                                className="text-red-300 font-bold"
                                title="Item Required"
                            >
                                🞰
                            </span>
                        </label>
                        <select
                            {...register("institution")}
                            className="bg-white border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4"
                        >
                            <option value={``}>
                                Choose Student's the Institution
                            </option>
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

                <div className="flex items-center gap-7 mb-3 ">
                    <article className="flex flex-col gap-2 w-full min-h-[96px]">
                        <label className="text-blueDark" htmlFor="level">
                            Level
                        </label>
                        <select
                            {...register("level")}
                            className="bg-white border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4"
                        >
                            <option value={0}>Choose Student's Level</option>
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
                    <article className="flex flex-col gap-2 w-full min-h-[96px]">
                        <label className="text-blueDark" htmlFor="speciality">
                            Speciality
                        </label>
                        <select
                            {...register("speciality")}
                            className="bg-white border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4"
                        >
                            <option value={``}>Choose Speciality</option>
                            {SPECIALITIES.map((s) => (
                                <option key={s} value={s}>
                                    {s}
                                </option>
                            ))}
                        </select>
                        {errors.speciality && (
                            <span className="text-red-500">
                                {errors.speciality.message}
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
