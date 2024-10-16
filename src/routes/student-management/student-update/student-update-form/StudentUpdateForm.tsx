import { SubmitHandler, useForm } from "react-hook-form";
import { StudentUpdateFormType, StudentUpdateSchema } from "../core/_models";
import { useMutation } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { studentUpdate } from "../core/_requests";
import { useLocation, useParams } from "react-router-dom";
import queryString from "query-string";
import { UpdateContext } from "../core/UpdateContext";
import { useContext } from "react";
import { INSTITUTIONS, LEVELS } from "../../../../handlers/appGlobalVARS";
import FormSubmitButton from "../../../../components/FormSubmitButton";

export default function StudentUpdateForm() {
    const { setSuccessModal } = useContext(UpdateContext);
    const params = useParams();
    const location = useLocation();
    const id = params.id!;
    const parsedParams = queryString.parse(location.search);
    const birthDate: any = parsedParams.birthDate;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<StudentUpdateFormType>({
        resolver: yupResolver(StudentUpdateSchema),
        defaultValues: {
            ...parsedParams,
            birthDate: birthDate?.split("T")[0],
        },
    });

    const onSubmit: SubmitHandler<StudentUpdateFormType> = (data) => {
        mutation.mutateAsync({ id, data });
    };

    const mutation = useMutation({
        mutationFn: ({
            id,
            data,
        }: {
            id: string;
            data: StudentUpdateFormType;
        }) => {
            return studentUpdate(id, data);
        },
        onSuccess: () => {
            setSuccessModal(true);
        },
        onError: () => {
            toast.error("something went wrong");
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
                                *
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
                                *
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
                                *
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
                        <label
                            htmlFor="guardianPhoneNumber"
                            className="text-blueDark"
                        >
                            Parent's Phone Number
                            <span
                                className="text-red-300 font-bold"
                                title="Item Required"
                            >
                                *
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
                                *
                            </span>
                        </label>
                        <input
                            {...register("birthDate")}
                            id="bithDate"
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
                                *
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
                </div>

                <div className="flex items-center justify-start gap-7 w-[140px] ">
                    <FormSubmitButton disabled={mutation.isPending} />
                </div>
            </form>
        </>
    );
}
