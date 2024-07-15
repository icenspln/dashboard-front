import ButtonPrimary from "../../../components/ButtonPrimary";

export default function StudentRegister() {
  return (
    <section className="w-full min-h-screen p-4 bg-mainBg">
      <div className="  mb-6">
        <h1 className="text-2xl">تسجيل جديد | تعديل المعلومات</h1>
      </div>
      <div>
        {/* form */}
        <form action="">
          <div className="flex items-center gap-7 mb-7">
            <article className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="text-blueDark">
                الإسم
              </label>
              <input
                type="text"
                className="border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 outline-none  text-blueDark caret-disabledGray leading-4"
                placeholder="يرجى ادخال الاسم"
              />
            </article>
            <article className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="text-blueDark">
                اللقب
              </label>
              <input
                type="text"
                className="border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 outline-none  text-blueDark caret-disabledGray leading-4"
                placeholder="يرجى ادخال اللقب"
              />
            </article>
          </div>

          <div className="flex items-center gap-7 mb-7">
            <article className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="text-blueDark">
                تاريخ الميلاد
              </label>
              <input
                type="date"
                className="border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 outline-none  text-blueDark caret-disabledGray leading-4"
                placeholder="JJ / MM / AAAA"
              />
            </article>
            <article className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="text-blueDark">
                رقم الهاتف
              </label>
              <input
                type="text"
                className="border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 outline-none  text-blueDark caret-disabledGray leading-4"
                placeholder="0555 55 55 55"
              />
            </article>
          </div>
          <div className="flex items-center gap-7 mb-7">
            <article className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="text-blueDark">
                المستوى
              </label>
              <select
                className="bg-white border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 outline-none  text-blueDark caret-disabledGray leading-4"
                name=""
                id=""
              >
                <option value="1">الإبتدائي</option>
                <option value="1">المتوسط</option>
                <option value="1">الثانوي</option>
              </select>
            </article>
            <article className="flex flex-col gap-2 w-full">
              <label className="text-blueDark" htmlFor="">
                السنة
              </label>
              <select
                className="bg-white border border-disabledGray rounded-lg placeholder:text-textGray placeholder:font-medium px-3 outline-none  text-blueDark caret-disabledGray leading-4"
                name=""
                id=""
              >
                <option value="1">الأولى</option>
                <option value="1">الثانية</option>
                <option value="1">الثالثة</option>
              </select>
            </article>
          </div>
          <div className="flex items-center justify-start gap-7 mb-7 w-[140px] ">
            <ButtonPrimary text="تسجيل" active />
          </div>
        </form>
      </div>
    </section>
  );
}
