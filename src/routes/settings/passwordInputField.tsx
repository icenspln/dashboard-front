import { useState } from "react";
import ShowPasswordSvg from "../../assets/icons/ShowPasswordSvg";

type PasswordInputType = {
    placeHolder: string;
    value?: string; // Make value prop optional
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Make onChange prop optional
    isTextInput?: boolean;
};

export default function PasswordInput({
    placeHolder,
    value,
    onChange,
    isTextInput = false,
}: PasswordInputType) {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="relative max-w-full">
            <input
                type={isTextInput ? "text" : showPassword ? "text" : "password"}
                value={value}
                onChange={onChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={placeHolder}
            />
            {!isTextInput && (
                <button
                    type="button"
                    onClick={toggleShowPassword}
                    className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600 focus:outline-none"
                >
                    <ShowPasswordSvg />
                </button>
            )}
        </div>
    );
}
