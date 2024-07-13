import { ReactElement } from "react";

type ButtonSecondaryType = {
  text: string;
  svg?: Element;
  state: "active" | "dark" | "clear";
  children?: ReactElement<any, any>;
};

export function ButtonSecondary({
  text,
  children,
  state,
}: ButtonSecondaryType) {
  switch (state) {
    case "active":
      return (
        <button
          className={
            "bg-grayBlue min-w-[183px] w-full  font-medium flex flex-row items-center rounded-lg gap-3 px-3 py-2"
          }
        >
          {children}
          <h2 className="text-lg text-blue">{text}</h2>
        </button>
      );
      break;
    case "clear":
      return (
        <button
          id="nav--button"
          className={
            "bg-white hover:bg-light  transition text-disabledGray hover:text-darkGray min-w-[183px] w-full  font-medium flex flex-row items-center rounded-lg gap-3 px-3 py-2"
          }
        >
          {children}
          <h2 className="text-lg transition text-inherit hover:text-inherit">
            {text}
          </h2>
        </button>
      );
      break;
  }
}
