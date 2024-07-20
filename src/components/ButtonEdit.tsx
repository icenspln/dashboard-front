import { useState, useEffect } from "react";

//Edit cell button
export function TableCell({ getValue, row, column, table, }){
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
  <div className="flex items-center justify-between space-x-2 w-full ">

    {!isEditing &&(
    <div className="">
        <button onClick={()=>setIsEditing(true)} className=" flex p-1.5 bg-blue rounded-xl hover:rounded-3xl hover:bg-blue transition-all duration-300 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
</svg>

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
        className="border rounded p-1 w-10 h-5"
      />
      <button className=" flex-grow-0 flex-shrink-0 p-1.5 bg-blue rounded-xl hover:bg-blueHovered hover:bg-blue transition-all duration-300 text-white" onClick={confirmEdit}>تسجيل</button>
      </>//<ButtonPrimary   text='Confirm' />
    ) : (
      <span>{value}</span>
    )}
    

  </div>

);
}

