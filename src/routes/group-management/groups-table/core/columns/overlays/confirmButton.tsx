// This componenet for the buttons that are inside the overlay windows


type ConfirmButtonType = {
  text: string;
  color?: string;
  onClick?:() =>void;
  
}
export default function ConfirmButton ({ 
  text,
   color,
    onClick,
   }:ConfirmButtonType)  {
  return (
    <button
      className={`text-white font-bold py-2 px-4 rounded-full ${color} hover:bg-opacity-80 transition-colors duration-300`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};


