import { ReactElement } from "react";

type ButtonRoundedPrimary = {
  active?: boolean; // active is primary and false is clear (white)
  text: string;
  children?: ReactElement<any, any>;
};

export default function ButtonRoundedPrimary({
  children,
  active,
  text,
}: ButtonRoundedPrimary) {
  if (active) {
    return (
      <button
        className={`min-w-[140px] rounded-full bg-blue transition hover:bg-blueHovered font-medium flex flex-row items-center gap-3 px-4 py-2 w-full`}
      >
        {children && (
          <div className="flex items-center justify-center min-w-3 ">
            {children}
          </div>
        )}
        <h2
          className={`font-medium text-sm  text-white  ${!children ? "w-full text-center" : "text-center"}`}
        >
          {text}
        </h2>
      </button>
    );
  }

  return (
    <button
      className={
        "min-w-[140px] bg-white transition hover:bg-light border border-solid border-light text-blueDark font-medium flex flex-row items-center rounded-lg gap-3 px-3 py-2"
      }
    >
      {children && (
        <div className="flex items-center justify-center min-w-3 ">
          {children}
        </div>
      )}
      <h2 className="text-blueDark">{text}</h2>
    </button>
  );
}
