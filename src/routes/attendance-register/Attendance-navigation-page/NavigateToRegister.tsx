import CardAnimationSvg from "../../../assets/icons/CardAnimationSvg";
import CardlessRegister from "./overlays/cardlessRegisterLink";

export function NavigateToRegister() {
  return (
    <div className="flex flex-col justify-center items-center text-center text-2xl pt-7 gap-[12px]">
      <span>
        <h1 className="">تسجيل البطاقة الذكية</h1>
      </span>
      <span>
        <p className="text-gray-500">
          يرجى تمرير البطاقة الذكية على الآلة لتسجيل الحضور
        </p>
      </span>

      <CardAnimationSvg />
      <CardlessRegister />
    </div>
  );
}
