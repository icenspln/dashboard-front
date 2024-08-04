import { ReactElement } from "react";

type ButtonRoundedPrimary = {
  // active?: boolean; // active is primary and false is clear (white)
  text: string;
  children?: ReactElement<any, any>;
  color: "blue" | "danger" | "dead";
};

export default function ButtonRoundedPrimary({
  children,
  text,
  color,
}: ButtonRoundedPrimary) {
  const returnColor = (color: string) => {
    let bgColor;
    let textColor;
    let hoverBgColor;

    switch (color) {
      case "blue":
        bgColor = "blue";
        textColor = "white";
        hoverBgColor = "blueHovered";
        break;
      case "dead":
        bgColor = "grayBlue";
        textColor = "blue";
        hoverBgColor = "";
        break;
      case "danger":
        bgColor = "redish";
        textColor = "white";
        hoverBgColor = "";
        break;
    }
    return { bgColor, textColor, hoverBgColor };
  };

  const { bgColor, textColor, hoverBgColor } = returnColor(color);
  return (
    <button
      className={`min-w-[140px] rounded-full  bg-${bgColor}  transition  hover:bg-${hoverBgColor} font-medium flex flex-row items-center   gap-3 px-4 py-2 `}
    >
      {children && (
        <div className="flex items-center justify-center min-w-3 ">
          {children}
        </div>
      )}
      <h2
        className={`font-medium  py-1 text-${textColor} mx-auto w-full  ${!children ? "w-full text-center " : "text-center"}`}
      >
        {text}
      </h2>
    </button>
  );
}

// return (
//   <button
//     className={
//       "min-w-[140px] bg-white transition hover:bg-light border border-solid border-light text-blueDark font-medium flex flex-row items-center rounded-lg gap-3 px-3 py-2"
//     }
//   >
//     {children && (
//       <div className="flex items-center justify-center min-w-3 ">
//         {children}
//       </div>
//     )}
//     <h2 className="text-blueDark">{text}</h2>
//   </button>
// );
