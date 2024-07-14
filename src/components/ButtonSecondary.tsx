import { ReactElement } from "react";

type ButtonSecondaryType = {
  text: string;
  svg?: Element;
  isActive: boolean;
  children?: ReactElement<any, any>;
};

export default function ButtonSecondary({
  text,
  children,
  isActive,
}: ButtonSecondaryType) {
  function returnStyles(isActive: boolean) {
    return `nav--button min-w-[183px] w-full ${isActive ? "bg-grayBlue text-blue" : "bg-white hover:bg-light   text-disabledGray hover:text-darkGray"} font-medium flex flex-row items-center rounded-lg gap-3 px-3 py-2`;
  }

  // switch (state) {
  //   case "active":
  return (
    <button
      className={returnStyles(isActive)}
      // className={
      //   "bg-grayBlue min-w-[183px]  w-full  font-medium flex flex-row items-center rounded-lg gap-3 px-3 py-2"
      // }
    >
      {children}
      <h2 className="text-lg text-inherit">{text}</h2>
    </button>
  );
  //     break;
  //   case "clear":
  //     return (
  //       <button
  //         id="nav--button"
  //         className={
  //           "bg-white hover:bg-light  transition text-disabledGray hover:text-darkGray min-w-[183px] w-full  font-medium flex flex-row items-center rounded-lg gap-3 px-3 py-2"
  //         }
  //       >
  //         {children}
  //         <h2 className="text-lg transition text-inherit hover:text-inherit">
  //           {text}
  //         </h2>
  //       </button>
  //     );
  //     break;
  // }
}
