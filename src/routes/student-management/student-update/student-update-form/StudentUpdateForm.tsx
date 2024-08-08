import { SubmitHandler, useForm } from "react-hook-form";
import {
  speciality,
  StudentUpdateFormType,
  StudentUpdateSchema,
} from "../core/_models";
import { useMutation } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { studentUpdate } from "../core/_requests";
import { useLocation, useParams } from "react-router-dom";
import queryString from "query-string";
import { UpdateContext } from "../core/UpdateContext";
import { useContext } from "react";

export default function StudentUpdateForm() {
  const { setSuccessModal } = useContext(UpdateContext);
  const params = useParams();
  const location = useLocation();
  const id = params.id!;
  const parsedParams = queryString.parse(location.search);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<StudentUpdateFormType>({
    resolver: yupResolver(StudentUpdateSchema),
    defaultValues: {
      ...parsedParams,
      // birthDate: new Date(parsedParams.birthDate as any).toLocaleDateString(),
    },
  });

  const onSubmit: SubmitHandler<StudentUpdateFormType> = (data) => {
    mutation.mutateAsync({ id, data });
  };

  const mutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: StudentUpdateFormType }) => {
      return studentUpdate(id, data);
    },
    onSuccess: () => {
      setSuccessModal(true);
    },
    onError: () => {
      toast.error("هناك خطأ ما");
    },
  });

  const displaySpeciality = () => {
    if (watch("institution") == "highSchool" && watch("level") == 1) {
      return (
        <>
          <option value={``}>اختر الشعبة</option>
          <option value={speciality.level1[0]}>{speciality.level1[0]}</option>
          <option value={speciality.level1[1]}>{speciality.level1[1]}</option>
        </>
      );
    }
    if (watch("institution") == "highSchool" && watch("level") != 1) {
      return (
        <>
          <option value={``}>اختر الشعبة</option>
          <option value={speciality.level2[0]}>{speciality.level2[0]}</option>
          <option value={speciality.level2[1]}>{speciality.level2[1]}</option>
          <option value={speciality.level2[2]}>{speciality.level2[2]}</option>
          <option value={speciality.level2[3]}>{speciality.level2[3]}</option>
          <option value={speciality.level2[4]}>{speciality.level2[4]}</option>
          <option value={speciality.level2[5]}>{speciality.level2[5]}</option>
        </>
      );
    }
  };

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
            <label htmlFor="guardianPhoneNumber" className="text-blueDark">
              رقم هاتف ولي الأمر
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
              تاريخ الميلاد
            </label>
            <input
              {...register("birthDate")}
              id="bithDate"
              type="date"
              className="border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray "
            />
            {errors.birthDate && (
              <span className="text-red-500">{errors.birthDate.message}</span>
            )}
          </article>
          <article className="flex flex-col gap-2 w-full min-h-[96px]">
            <label htmlFor="institution" className="text-blueDark">
              المؤسسة
            </label>
            <select
              {...register("institution")}
              className="bg-white border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4"
            >
              <option value={``}>اختر المؤسسة</option>
              <option value="primarySchool">الإبتدائي</option>
              <option value="middleSchool">المتوسط</option>
              <option value="highSchool">الثانوي</option>
            </select>
            {errors.institution && (
              <span className="text-red-500">{errors.institution.message}</span>
            )}
          </article>
        </div>

        <div className="flex items-center gap-7 mb-3 ">
          <article className="flex flex-col gap-2 w-full min-h-[96px]">
            <label className="text-blueDark" htmlFor="level">
              السنة
            </label>
            <select
              {...register("level")}
              className="bg-white border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4"
            >
              <option value={-1}>اختر السنة</option>
              <option value={1}>الأولى</option>
              <option value={2}>الثانية</option>
              <option value={3}>الثالثة</option>
              {watch("institution") != "highSchool" && (
                <option value={4}>الرابعة</option>
              )}
              {watch("institution") == "primarySchool" && (
                <option value={5}>الخامسة</option>
              )}
            </select>
            {errors.level && (
              <span className="text-red-500">{errors.level.message}</span>
            )}
          </article>

          {watch("institution") == "highSchool" && watch("level") != -1 && (
            <>
              <article className="flex flex-col gap-2 w-full min-h-[96px]">
                <label className="text-blueDark" htmlFor="speciality">
                  الشعبة
                </label>
                <select
                  {...register("speciality")}
                  className="bg-white border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4"
                >
                  {/* {watch("level") == 1 ? <></> : <></>} */}
                  {displaySpeciality()}
                </select>
                {errors.speciality && (
                  <span className="text-red-500">
                    {errors.speciality.message}
                  </span>
                )}
              </article>
            </>
          )}
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