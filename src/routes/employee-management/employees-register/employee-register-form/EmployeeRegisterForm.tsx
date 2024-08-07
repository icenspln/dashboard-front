import ButtonPrimary from "../../../../components/ButtonPrimary";
import { SubmitHandler, useForm } from "react-hook-form";
import { EmployeeRegisterFormType } from "../core/_models";
import { EmployeeRegister } from "../core/_requests";
import { useMutation } from "@tanstack/react-query";
import { Card } from "../../../../components/Card";

export default function EmployeeRegisterForm() {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<EmployeeRegisterFormType>();

  const onSubmit: SubmitHandler<EmployeeRegisterFormType> = (data) => {
    mutation.mutate({ ...data, scanningCardId: "1234" });
  };

  const mutation = useMutation({
    mutationFn: EmployeeRegister,
    onSuccess: () => {
      // Invalidate and refetch
      // queryClient.invalidateQueries({ queryKey: ["todos"] });
      alert("success");
    },
    onError: () => {
      alert("error");
    },
  });

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
              تاريخ الميلاد
            </label>
            <input
              {...register("phoneNumber")}
              type="date"
              className="border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4"
              placeholder="JJ/MM/AAAA"
            />
          </article>
          <article className="flex flex-col gap-2 w-full">
            <label htmlFor="gardianPhoneNumber" className="text-blueDark">
              رقم هاتف  
            </label>
            <input
              {...register("phoneNumber")}
              type="text"
              className="border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 pe-4 outline-none  text-blueDark caret-disabledGray leading-4"
              placeholder=" 00 01 02 0550"
            />
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
              <option value="primarySchool">الإبتدائي</option>
              <option value="middleSchool">المتوسط</option>
              <option value="highSchool">الثانوي</option>
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
