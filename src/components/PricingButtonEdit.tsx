import { useState, useEffect } from "react";
import PencilSvg from "../assets/icons/PencilSvg";

type PricingButtonProps = {
  initValue: any;
  submit?: (a: number) => void;
};
//Edit cell button
export function PricingButton({ initValue, submit }: PricingButtonProps) {
  const [value, setValue] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (initValue > 0) {
      setValue(initValue);
    }
  }, [initValue]);

  const confirmEdit = () => {
    setIsEditing(false);
    if (submit) {
      submit(value);
    }
  };

  return (
    <div className="flex items-center gap-[10px] space-x-2  h-[24px] ">
      {!isEditing && (
        <div className="">
          <button onClick={() => setIsEditing(true)} className="">
            <PencilSvg />
          </button>
        </div>
      )}
      {isEditing ? (
        <>
          <input
            value={value}
            onChange={(e) => setValue(+e.target.value)}
            // onBlur={confirmEdit}
            autoFocus
            className="border border-gray rounded outline-gray-300  w-[57px] h-[20px]"
          />
          <button
            className="w-[57px] h-[20px] bg-blue rounded text-sm
            hover:bg-blue Hovered transition-all duration-300 text-white"
            onClick={confirmEdit}
          >
            تسجيل
          </button>
        </>
      ) : (
        <span>{initValue}</span>
      )}
    </div>
  );
}
