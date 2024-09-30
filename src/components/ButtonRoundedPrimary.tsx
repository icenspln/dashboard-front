import { ReactElement } from "react";

type ButtonRoundedPrimary = {
    // active?: boolean; // active is primary and false is clear (white)
    text: string;
    children?: ReactElement<any, any>;
    // color?: "warning" | "blue" | "danger" | "dead";
    onClick?: any;
    disable?: boolean;
};

export default function ButtonRoundedPrimary({
    disable,
    children,
    text,
    onClick,
}: ButtonRoundedPrimary) {
    // const returnColor = (color: string) => {
    //   let bgColor;
    //   let textColor;
    //   let hoverBgColor;

    //   if (color == "blue") {
    //     bgColor = "blue";
    //     textColor = "white";
    //     hoverBgColor = "blueHovered";
    //   } else if (color == "dead") {
    //     bgColor = "grayBlue";
    //     textColor = "blue";
    //     hoverBgColor = "";
    //   } else if (color == "danger") {
    //     bgColor = "redish";
    //     textColor = "white";
    //     hoverBgColor = "";
    //   } else if (color == "warning") {
    //     bgColor = "warning";
    //     textColor = "white";
    //     hoverBgColor = "";
    //   }

    //   // switch (color) {
    //   //   case "blue":
    //   //     bgColor = "blue";
    //   //     textColor = "white";
    //   //     hoverBgColor = "blueHovered";
    //   //     break;
    //   //   case "dead":
    //   //     bgColor = "grayBlue";
    //   //     textColor = "blue";
    //   //     hoverBgColor = "";
    //   //     break;
    //   //   case "danger":
    //   //     bgColor = "redish";
    //   //     textColor = "white";
    //   //     hoverBgColor = "";
    //   //     break;
    //   // }
    //   return { bgColor, textColor, hoverBgColor };
    // };

    // const { bgColor, textColor, hoverBgColor } = returnColor(color);

    // switch (color) {
    //   case "blue":
    //     return (
    //       <>
    //         <button
    //           onClick={onClick}
    //           className={`min-w-[140px] rounded-full   bg-blue  transition  hover:bg-blueHovered font-medium flex flex-row items-center   gap-3 px-4 py-2 `}
    //         >
    //           {children && (
    //             <div className="flex items-center justify-center min-w-3 ">
    //               {children}
    //             </div>
    //           )}
    //           <h2
    //             className={`font-medium  py-1 text-white mx-auto w-full  ${!children ? "w-full text-center " : "text-center"}`}
    //           >
    //             {text}
    //           </h2>
    //         </button>
    //       </>
    //     );
    //     break;
    //   case "danger":
    //     return (
    //       <>
    //         <button
    //           onClick={onClick}
    //           className={`min-w-[140px] rounded-full   bg-redish  transition   font-medium flex flex-row items-center   gap-3 px-4 py-2 `}
    //         >
    //           {children && (
    //             <div className="flex items-center justify-center min-w-3 ">
    //               {children}
    //             </div>
    //           )}
    //           <h2
    //             className={`font-medium  py-1 text-white mx-auto w-full  ${!children ? "w-full text-center " : "text-center"}`}
    //           >
    //             {text}
    //           </h2>
    //         </button>
    //       </>
    //     );
    //     break;
    //   case "dead":
    //     return (
    //       <>
    //         <button
    //           onClick={onClick}
    //           className={`min-w-[140px] rounded-full   bg-white  transition   font-medium flex flex-row items-center   gap-3 px-4 py-2 `}
    //         >
    //           {children && (
    //             <div className="flex items-center justify-center min-w-3 ">
    //               {children}
    //             </div>
    //           )}
    //           <h2
    //             className={`font-medium  py-1 text-blue mx-auto w-full  ${!children ? "w-full text-center " : "text-center"}`}
    //           >
    //             {text}
    //           </h2>
    //         </button>
    //       </>
    //     );
    //     break;
    //   case "warning":
    //     return (
    //       <>
    //         <button
    //           onClick={onClick}
    //           className={`min-w-[140px] rounded-full   bg-warning  transition  font-medium flex flex-row items-center   gap-3 px-4 py-2 `}
    //         >
    //           {children && (
    //             <div className="flex items-center justify-center min-w-3 ">
    //               {children}
    //             </div>
    //           )}
    //           <h2
    //             className={`font-medium  py-1 text-white mx-auto w-full  ${!children ? "w-full text-center " : "text-center"}`}
    //           >
    //             {text}
    //           </h2>
    //         </button>
    //       </>
    //     );
    // break;
    // default:
    return (
        <>
            <button
                disabled={disable}
                onClick={onClick}
                className={`w-full min-w-[150px] rounded-full   bg-blue  transition  hover:bg-blueHovered font-medium flex flex-row items-center   gap-3 px-4 py-2 `}
            >
                {children && (
                    <div className="flex items-center justify-center min-w-3 ">
                        {children}
                    </div>
                )}
                <h2
                    className={`font-medium  py-1 text-white mx-auto w-full  ${!children ? "w-full text-center " : "text-center"}`}
                >
                    {text}
                </h2>
            </button>
        </>
    );
    // break;
}
