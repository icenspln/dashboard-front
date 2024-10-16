import { ReactElement } from "react";

type ButtonPrimary = {
    active?: boolean; // active is primary and false is clear (white)
    text: string;
    children?: ReactElement<any, any>;
    onClick?: any;
    props?: any;
    type?: string;
    disabled?: boolean;
};

export default function ButtonPrimary({
    children,
    active,
    text,
    props,
    onClick,
    type = "button",
    disabled,
}: ButtonPrimary) {
    if (active) {
        return (
            <button
                disabled={disabled}
                {...props}
                className={`min-w-auto md:min-w-[140px] bg-blue transition hover:bg-blueHovered font-medium flex flex-row items-center rounded-lg gap-3 px-3 py-2 w-full`}
                onClick={onClick}
                type={type}
            >
                {children && (
                    <div className="flex items-center justify-center min-w-3 ">
                        {children}
                    </div>
                )}
                <h2
                    className={`${children ? "hidden md:block" : ""} text-xl  text-white  ${!children ? "w-full text-center" : "text-center"}`}
                >
                    {text}
                </h2>
            </button>
        );
    }

    return (
        <button
            {...props}
            disabled={disabled}
            onClick={onClick}
            className={
                "w-full min-w-[140px] bg-white transition hover:bg-light border border-solid border-light text-blueDark font-medium flex flex-row items-center rounded-lg gap-3 px-3 py-2"
            }
        >
            {children && (
                <div className="flex items-center justify-center min-w-3 ">
                    {children}
                </div>
            )}
            <h2
                className={`text-xl  text-darkGray ${!children ? "w-full text-center" : "text-center"}`}
            >
                {text}
            </h2>
        </button>
    );
}
