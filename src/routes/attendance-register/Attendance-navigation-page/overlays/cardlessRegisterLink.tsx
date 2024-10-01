import React, { useState } from "react";
import SelectStudent from "./selectStudent";

const CardlessRegister: React.FC = () => {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const handleOpenOverlay = () => {
        setIsOverlayOpen(true);
    };

    const handleCloseOverlay = () => {
        setIsOverlayOpen(false);
    };

    return (
        <div>
            <p
                onClick={handleOpenOverlay}
                className="cursor-pointer text-blue underline  hover:text-blue-700"
            >
                Mark presence without a card?
            </p>

            {isOverlayOpen && <SelectStudent onClose={handleCloseOverlay} />}
        </div>
    );
};

export default CardlessRegister;
