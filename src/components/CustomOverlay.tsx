import React from "react";
import { Overlay } from "./Overlay"; // Replace with actual import
import { Check } from "../assets/icons/Check"; // Replace with actual import
import ButtonRoundedPrimary from "./ButtonRoundedPrimary"; // Replace with actual import

interface CustomOverlayProps {
    title: string;
    message: string;
    buttonText: string;
    onButtonClick?: () => void;
}

const CustomOverlay: React.FC<CustomOverlayProps> = ({
    title,
    message,
    buttonText,
    onButtonClick,
}) => {
    return (
        <Overlay>
            <article
                className="overflow-hidden h-[435px] w-[391px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white px-[20px] py-[27px] rounded-3xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex flex-col gap-1 items-center h-full">
                    <h2 className="text-lg text-center mb-3 font-bold text-blueDark">
                        {title}
                    </h2>
                    <p className="w-full text- text-textGray2 text-center">
                        {message}
                    </p>
                    <div className="my-auto">
                        <Check />
                    </div>
                    <div className="w-[70%] flex justify-center items-center">
                        <ButtonRoundedPrimary
                            text={buttonText}
                            onClick={onButtonClick} // Pass onButtonClick to ButtonRoundedPrimary
                        />
                    </div>
                </div>
            </article>
        </Overlay>
    );
};

export default CustomOverlay;
