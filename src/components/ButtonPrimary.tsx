import { ReactElement } from "react";

type ButtonPrimary = {
  active?: boolean; // active is primary and false is clear (white)
  text: string;
  children?: ReactElement<any, any>;
  props?: any;
};

export default function ButtonPrimary({
  children,
  active,
  text,
  props,
}: ButtonPrimary) {
  if (active) {
    return (
      <button
        {...props}
        className={`min-w-[140px] bg-blue transition hover:bg-blueHovered font-medium flex flex-row items-center rounded-lg gap-3 px-3 py-2 w-full`}
      >
        {children && (
          <div className="flex items-center justify-center min-w-3 ">
            {children}
          </div>
        )}
        <h2
          className={`text-xl  text-white  ${!children ? "w-full text-center" : "text-center"}`}
        >
          {text}
        </h2>
      </button>
    );
  }

  return (
    <button
      {...props}
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
