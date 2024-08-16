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
        className="cursor-pointer text-blue  hover:text-blue-700"
      >
        التسجيل بدون بطاقة
      </p>

      {isOverlayOpen && <SelectStudent onClose={handleCloseOverlay} />}
    </div>
  );
};

export default CardlessRegister;
