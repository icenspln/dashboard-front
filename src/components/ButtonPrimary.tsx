import { ReactElement } from "react";

type ButtonPrimary = {
  active?: boolean; // active is primary and false is clear (white)
  text: string;
  children?: ReactElement<any, any>;
};

export default function ButtonPrimary({
  children,
  active,
  text,
}: ButtonPrimary) {
  if (active) {
    return (
      <button
        className={
          "bg-blue transition hover:bg-blueHovered font-medium flex flex-row items-center rounded-lg gap-3 px-3 py-2"
        }
      >
        {children}
        <h2 className="text-xl  text-white">{text}</h2>
      </button>
    );
  }

  return (
    <button
      className={
        "bg-white transition hover:bg-light border border-solid border-light text-blueDark font-medium flex flex-row items-center rounded-lg gap-3 px-3 py-2"
      }
    >
      <div className="flex items-center justify-center min-w-3 ">
        {children}
      </div>
      <h2 className="text-blueDark">{text}</h2>
    </button>
  );
}
