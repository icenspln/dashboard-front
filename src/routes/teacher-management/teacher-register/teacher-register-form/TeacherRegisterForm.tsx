import { SubmitHandler, useForm } from "react-hook-form";
import { TeacherRegisterFormType, TypeRegisterSchema } from "../core/_models";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { teacherRegister } from "../core/_requests";
import { yupResolver } from "@hookform/resolvers/yup";
import MultiSelect from "../../../../components/MultiSelect";
import { useContext } from "react";
import { RegistrationContext } from "../core/RegistrationContext";

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
            <label htmlFor="birthDate" className="text-blueDark">
              تاريخ الميلاد
            </label>
            <input
              {...register("birthDate")}
              type="date"
              className="border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray "
            />
            {errors.birthDate && (
              <span className="text-red-500">{errors.birthDate.message}</span>
            )}
          </article>
        </div>

        <div className="flex items-center gap-7 mb-3">
          <article className="flex flex-col gap-2 w-full min-h-[96px]">
            <label htmlFor="modules" className="text-blueDark">
              المادة
            </label>
            <MultiSelect setValue={setValue} initValue={[]} />
            {errors.modules && (
              <span className="text-red-500">{errors.modules.message}</span>
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
