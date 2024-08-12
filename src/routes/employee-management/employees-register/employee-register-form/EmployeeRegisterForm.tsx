import { SubmitHandler, useForm } from "react-hook-form";
import {
  EmployeeRegisterFormType,
  EmployeeRegisterFormTypeSchema,
} from "../core/_models";
import { employeeRegister } from "../core/_requests";
import { useMutation } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { useContext, useEffect, useState } from "react";
import { RegistrationContext } from "../core/RegistrationContext";

interface EmployeeRegisterFormProps {
  setEmployeeId: (id: string) => void;
}

export default function EmployeeRegisterForm({
  setEmployeeId,
}: EmployeeRegisterFormProps) {
  const { setScreen } = useContext(RegistrationContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EmployeeRegisterFormType>({
    resolver: yupResolver(EmployeeRegisterFormTypeSchema),
  });

  const onSubmit: SubmitHandler<EmployeeRegisterFormType> = (data) => {
    mutation.mutate({ ...data });
  };

  const mutation = useMutation({
    mutationFn: employeeRegister,
    onSuccess: (data) => {
      setEmployeeId(data._id);
      setScreen(true);
    },
    onError: () => {
      toast.error("هناك خطأ ما");
    },
  });

  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center gap-7 mb-3">
          <article className="flex flex-col gap-2 w-full min-h-[96px]">
            <label htmlFor="firstName" className="text-blueDark">
              الإسم
            </label>
            <input
              type="text"
              {...register("firstName")}
              className="border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4 "
              placeholder="يرجى ادخال الاسم"
            />
            {errors.firstName && (
              <span className="text-red-500">{errors.firstName.message}</span>
            )}
          </article>
          <article className="flex flex-col gap-2 w-full min-h-[96px] ">
            <label htmlFor="lastName" className="text-blueDark">
              اللقب
            </label>
            <input
              {...register("lastName")}
              type="text"
              className="border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4"
              placeholder="يرجى ادخال اللقب"
            />
            {errors.lastName && (
              <span className="text-red-500">{errors.lastName.message}</span>
            )}
          </article>
        </div>

        <div className="flex items-center gap-7 mb-3">
          <article className="flex flex-col gap-2 w-full min-h-[96px]">
            <label htmlFor="phoneNumber" className="text-blueDark">
              رقم الهاتف
            </label>
            <input
              {...register("phoneNumber")}
              type="text"
              className="border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4"
              placeholder="0555555555"
            />
            {errors.phoneNumber && (
              <span className="text-red-500">{errors.phoneNumber.message}</span>
            )}
          </article>
          <article className="flex flex-col gap-2 w-full min-h-[96px]">
            <label htmlFor="job" className="text-blueDark">
              الوظيفة
            </label>
            <input
              {...register("job")}
              type="text"
              className="border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4"
              placeholder="يرجى ادخال الوظيفة"
            />
            {errors.job && (
              <span className="text-red-500">{errors.job.message}</span>
            )}
          </article>
        </div>

        <div className="flex items-center justify-start gap-7 w-[140px] ">
          <button
            disabled={isSubmitting}
            type="submit"
            className={`min-w-[140px] bg-blue transition hover:bg-blueHovered font-medium flex flex-row items-center rounded-lg gap-3 px-3 py-2 w-full`}
          >
            <h2 className={`text-xl  text-white text-center mx-auto`}>تسجيل</h2>
          </button>
        </div>
      </form>
    </>
  );
}
