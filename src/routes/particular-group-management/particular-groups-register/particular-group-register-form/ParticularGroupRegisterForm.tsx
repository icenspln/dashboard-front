import ButtonPrimary from "../../../../components/ButtonPrimary";
import { SubmitHandler, useForm } from "react-hook-form";
import { ParticularGroupRegisterFormType } from "../core/_models";
// import data from "../../../prof-management/prof-table/core/data.json";

export default function StudentRegisterForm() {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<ParticularGroupRegisterFormType>();

  const onSubmit: SubmitHandler<ParticularGroupRegisterFormType> = (data) =>
    console.log("submintingg..", data);

  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center gap-7 mb-7">
          <article className="flex flex-col gap-2 w-full">
            <label htmlFor="" className="text-blueDark">
              اسم الحصة
            </label>
            <input
              {...register("moduleName")}
              className="bg-white border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4"
              placeholder="ادخل اسم الحصة"
              name=""
              id=""
            />
          </article>
          <article className="flex flex-col gap-2 w-full">
            <label htmlFor="" className="text-blueDark">
              القاعة
            </label>
            <input
              {...register("classRoom")}
              type="text"
              className="border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4"
              placeholder="1"
            />
          </article>
        </div>
        <div className="flex items-center gap-7 mb-7">
          <article className="flex flex-col gap-2 w-full">
            <label htmlFor="">اليوم</label>
            <select
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
            </select>
          </article>

          <article className="flex flex-col gap-2 w-full">
            <label htmlFor="">الوقت</label>
            <input
              {...register("time")}
              type="time"
              className="border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4"
              placeholder="08:00"
            />
          </article>
        </div>

        <div className="flex items-center gap-7 mb-7">
          <article className="flex flex-col gap-2 w-full">
            <label htmlFor="" className="text-blueDark">
              الأستاذ
            </label>
            <select
              {...register("professor")}
              className="bg-white border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4"
              name=""
              id=""
            >
              {/* {data.map((professor) => (
                <option key={professor.profId} value={professor.profId}>
                  {professor.firstName} {professor.lastName}
                </option>
              ))} */}
            </select>
          </article>
          <article className="flex flex-col gap-2 w-full">
            <label htmlFor="moduleName" className="text-blueDark">
              المادة
            </label>
            <select
              {...register("moduleName")}
              className="bg-white border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4"
              name=""
              id=""
            >
              <option value="1">الرياضيات</option>
              <option value="2">اللغة العربية</option>
              <option value="3">اللغة الفرنسية</option>
              <option value="4">اللغة الإنجليزية</option>
              <option value="5">التربية المدنية</option>
              <option value="6">التربية الإسلامية</option>
              <option value="7">التربية العلمية</option>
              <option value="8">التاريخ و الجغرافيا</option>
            </select>
          </article>
        </div>

        <div className="flex items-center gap-7 mb-7">
          <article className="flex flex-col gap-2 w-full">
            <label className="text-blueDark" htmlFor="level">
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
            <label htmlFor="institution" className="text-blueDark">
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
              <option value="4">الرابعة</option>
            </select>
          </article>
        </div>

        <div className="flex items-center gap-7 mb-7 ">
          <article className="flex flex-col gap-2 w-full">
            <label className="text-blueDark" htmlFor="level">
              عدد الحصص
            </label>
            <input
              {...register("price")}
              type="text"
              className="border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4"
              placeholder="1"
            />
          </article>
          <article className="flex flex-col gap-2 w-full">
            <label className="text-blueDark" htmlFor="level">
              الثمن
            </label>
            <input
              {...register("price")}
              type="text"
              className="border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4"
              placeholder="2000 دج"
            />
          </article>
        </div>

        <div className="flex items-center justify-start gap-7 mb-7 w-[140px] ">
          <ButtonPrimary text="تسجيل" active />
        </div>
      </form>
    </>
  );
}
