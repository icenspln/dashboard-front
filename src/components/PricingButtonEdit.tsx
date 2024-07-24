import { useState, useEffect } from "react";
import PencilSvg from "../assets/icons/PencilSvg";

//Edit cell button
export function PricingButton({ getValue, row, column, table }) {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const confirmEdit = () => {
    setIsEditing(false);
    table.options.meta?.updateData(row.index, column.id, value);
  };
  return (
    <div className="flex items-center gap-6 space-x-2 w-full ">
      {!isEditing && (
        <div className="">
          <button
            onClick={() => setIsEditing(true)}
            className=""
          >
            <PencilSvg />
          </button>
        </div>
      )}
      {isEditing ? (
        <>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={confirmEdit}
            autoFocus
            className="border rounded  w-10 h-5"
          />
          <button
            className="w-1/2 bg-blue rounded 
            hover:bg-blue Hovered hover:bg-blue transition-all duration-300 text-white"
            onClick={confirmEdit}
          >
            تسجيل
          </button>
        </> //<ButtonPrimary   text='Confirm' />
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
}