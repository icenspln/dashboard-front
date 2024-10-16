import { SubmitHandler, useForm } from "react-hook-form";
import { TeacherRegisterFormType, TypeRegisterSchema } from "../core/_models";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { teacherRegister } from "../core/_requests";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { RegistrationContext } from "../core/RegistrationContext";
import { SubjectMultiSelect } from "../../../../components/SubjectMultiSelect";
import FormSubmitButton from "../../../../components/FormSubmitButton";

export default function TeacherRegisterForm() {
    const { setScreen } = useContext(RegistrationContext);
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
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
                <div className="flex flex-col md:flex-row  items-center gap-7 mb-3">
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
                                *
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

                <div className="flex flex-col md:flex-row items-center gap-7 mb-3">
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

                <div className="flex flex-col md:flex-row items-center gap-7 mb-3">
                    <article className="flex flex-col gap-2 w-full min-h-[96px]">
                        <label htmlFor="modules" className="text-blueDark">
                            Subject
                            <span
                                className="text-red-300 font-bold"
                                title="Item Required"
                            >
                                *
                            </span>
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
                    <FormSubmitButton disabled={mutation.isPending} />
                </div>
            </form>
        </>
    );
}
