// This componenet for the buttons that are inside the overlay windows


type ConfirmButtonType = {
  text: string;
  textColor:string;
  color?: string;
  onClick?:() =>void;
  
}
export default function ConfirmButton ({ 
  text,
  textColor ='text-white',
   color,
    onClick,
   }:ConfirmButtonType)  {
  return (
    <button
      className={`${textColor} w-[140px] h-[32px]  rounded ${color} hover:bg-opacity-80 transition-colors duration-300`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};


