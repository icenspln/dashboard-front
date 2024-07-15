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
    return `nav--button min-w-[183px] w-full ${isActive ? "bg-grayBlue text-blue" : "bg-white hover:bg-light   text-disabledGray hover:text-darkGray"} font-medium flex flex-row items-center justify-start rounded-lg gap-3 px-3 py-2`;
  }

  return (
    <button className={returnStyles(isActive)}>
      <div className="flex items-center justify-center min-w-3 basis-1/4">
        {children}
      </div>
      <h2 className="text-inherit basis-3/4 text-start">{text}</h2>
    </button>
  );
}
