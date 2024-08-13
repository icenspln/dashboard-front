import React, { useState } from "react";
import UploadIconSvg from "../../assets/icons/UploadIconSvg";

export default function LogoUpload({
  onLogoSelect,
}: {
  onLogoSelect: (file: File | null) => void;
}) {
  const [selectedLogo, setSelectedLogo] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      setSelectedLogo(selectedFile); // Store the selected file locally
      onLogoSelect(selectedFile); // Pass the selected file to parent component
    }
  };

  return (
    <div className="flex items-center gap-[15px] w-[300px] h-[140px] border-2 border-dashed rounded mt-3 p-3">
      <input
        type="file"
        accept="image/png, image/jpeg"
        className="hidden"
        id="logo-upload"
        onChange={handleFileChange}
      />
      {selectedLogo ? (
        <label htmlFor="logo-upload" className="cursor-pointer">
          <img
            src={URL.createObjectURL(selectedLogo)}
            alt="Selected Logo"
            className="ml-3 w-20 h-20 object-cover rounded"
          />
        </label>
      ) : (
        <label
          htmlFor="logo-upload"
          className="cursor-pointer flex items-center gap-2"
        >
          <span className="mr-3">
            <UploadIconSvg />
          </span>
          <p className="text-xl text-gray-400">
            ضع الايقونة هنا أو اضغط لاختيارها
          </p>
        </label>
      )}
    </div>
  );
}