// This componenet for the buttons that are inside the overlay windows

type ConfirmButtonType = {
  text: string;
  className?: string;
  onClick?: () => void;
};
export default function ConfirmButton({
  text,
  onClick,
  className = "",
}: ConfirmButtonType) {
  return (
    <button
      className={`  py-2 px-4 rounded-full  bg-blue hover:bg-opacity-80 transition-colors duration-300 w-[157px] h-[38px] ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
