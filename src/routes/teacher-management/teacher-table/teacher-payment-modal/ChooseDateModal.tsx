import { useState } from "react";
import { Overlay } from "../../../../components/Overlay";
import ConfirmButton from "../../../../components/confirmButton";
import Checklist from "../../../../components/CheckList";
import { useNavigate } from "react-router-dom";
import GetMonthYear from "../../../../components/GetMonths";
import { useSettings } from "../../../settings/core/SettingsContext";
import PasswordInput from "../../../settings/passwordInputField";

const chooseMonthOption = GetMonthYear(2024);

export const ChooseDateModal = ({
    onClose,
    teacherId,
}: {
    onClose: () => void;
    teacherId: string;
}) => {
    const { checkPassword } = useSettings();
    const [timeQuery, setTimeQuery] = useState<{
        month: number;
        year: number;
    }>();
    const [currentView, setCurrentView] = useState<"checklist" | "password">(
        "checklist"
    );
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleConfirmClick = async () => {
        if (currentView === "checklist") {
            setCurrentView("password");
        } else if (currentView === "password") {
            try {
                const isValid = await checkPassword(password);
                if (isValid) {
                    setError("");
                    if (timeQuery) {
                        navigate(
                            `/teachers-management/teacher-payment/${teacherId}?month=${timeQuery?.month}&year=${timeQuery?.year}`
                        );
                    } else {
                        navigate(
                            `/teachers-management/teacher-payment/${teacherId}`
                        );
                    }
                } else {
                    setError("Wrong Password");
                }
            } catch {
                setError("something went wrong");
            }
        }
    };

    return (
        <Overlay onClose={onClose} isVisible>
            <>
                <div className="md:w-[511px] flex flex-col items-center gap-[15px]">
                    {currentView === "checklist" ? (
                        <>
                            <h1 className="text-2xl">
                                Monthly Payment Receipt
                            </h1>
                            <p className="text-textGray">
                                Please choose the month and year
                            </p>
                            <div className="flex flex-col md:flex-row w-full justify-between items-center gap-[12px]">
                                <div className="flex-1">
                                    <Checklist
                                        items={chooseMonthOption}
                                        setState={setTimeQuery}
                                    />
                                </div>
                                <ConfirmButton
                                    text="Next"
                                    className="text-white w-[91px]"
                                    onClick={handleConfirmClick}
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <h1 className="text-2xl">Enter Admin Password</h1>
                            <div className="flex w-full justify-between items-center gap-[12px]">
                                <div className="flex-1">
                                    <PasswordInput
                                        placeHolder="password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </div>
                                <ConfirmButton
                                    text="Next"
                                    className="text-white w-[90px]"
                                    onClick={handleConfirmClick}
                                />
                            </div>
                            {error && (
                                <p className="text-red-500 mt-2">{error}</p>
                            )}
                        </>
                    )}
                </div>
            </>
        </Overlay>
    );
};
