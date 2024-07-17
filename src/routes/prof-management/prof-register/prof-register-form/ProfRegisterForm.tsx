import ButtonPrimary from "../../../../components/ButtonPrimary";
import { SubmitHandler, useForm } from "react-hook-form";
import { ProfRegisterFormType } from "../core/_models";

export default function ProfRegisterForm() {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<ProfRegisterFormType>();

  const onSubmit: SubmitHandler<ProfRegisterFormType> = (data) =>
    console.log("submintingg..", data);

  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center gap-7 mb-7">
          <article className="flex flex-col gap-2 w-full">
            <label htmlFor="firstName" className="text-blueDark">
              الإسم
            </label>
            <input
              type="text"
              {...register("firstName")}
              className="border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4 "
              placeholder="يرجى ادخال الاسم"
            />
          </article>
          <article className="flex flex-col gap-2 w-full">
            <label htmlFor="lastName" className="text-blueDark">
              اللقب
            </label>
            <input
              {...register("lastName")}
              type="text"
              className="border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4"
              placeholder="يرجى ادخال اللقب"
            />
          </article>
        </div>

        <div className="flex items-center gap-7 mb-7">
          <article className="flex flex-col gap-2 w-full">
            <label htmlFor="phoneNumber" className="text-blueDark">
              رقم الهاتف
            </label>
            <input
              {...register("phoneNumber")}
              type="text"
              className="border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4"
              placeholder="0555 55 55 55"
            />
          </article>
          <article className="flex flex-col gap-2 w-full">
            <label htmlFor="phoneNumber" className="text-blueDark">
              المادة
            </label>
            <select
              {...register("domain")}
              className="bg-white border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4"
              name=""
              id=""
            >
              <option value="">الرياضيات</option>
              <option value="الرياضيات">الرياضيات</option>
              <option value="الرياضيات">الرياضيات</option>
            </select>
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
              name=""
              id=""
            >
              <option value="الإبتدائي">الإبتدائي</option>
              <option value="المتوسط">المتوسط</option>
              <option value="الثانوي">الثانوي</option>
            </select>
          </article>

          <article className="flex flex-col gap-2 w-full">
            <label className="text-blueDark" htmlFor="level">
              السنة
            </label>
            <select
              {...register("level")}
              className="bg-white border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4"
              name=""
              id=""
            >
              <option value="1">الأولى</option>
              <option value="2">الثانية</option>
              <option value="3">الثالثة</option>
            </select>
          </article>
        </div>

        <div className="flex items-center justify-start gap-7 mb-7 w-[140px] ">
          <ButtonPrimary text="تسجيل" active />
        </div>
      </form>
    </>
  );
}
