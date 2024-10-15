import React, { useState, useRef, useEffect } from "react";
import PasswordInput from "./passwordInputField";
import ConfirmButton from "../../components/confirmButton";
import LogoUpload from "./handleLogoUpload";
import { Overlay } from "../../components/Overlay";
import { useSettings, SettingsProvider } from "./core/SettingsContext";
import CustomOverlay from "../../components/CustomOverlay";
import { useNavigate } from "react-router-dom";
import WrongCardSvg from "../../assets/icons/WrongCardSvg";

export default function SettingManagment() {
    return (
        <SettingsProvider>
            <SettingScreen />
        </SettingsProvider>
    );
}

function SettingScreen() {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [overlayVisible, setOverlayVisible] = useState(true);
    const [passwordOverlayVisible, setPasswordOverlayVisible] = useState(false);
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [appNameVar, setAppName] = useState("");
    const [selectedLogo, setSelectedLogo] = useState<File | null>(null);

    // const handleLogoSelect = (file: File | null) => {
    //   setSelectedLogo(file);
    // };
    //overlays
    const [isAppNameOverlayVisible, setIsAppNameOverlayVisible] =
        useState(false);
    const [isLogoOverlayVisible, setIsLogoOverlayVisible] = useState(false);
    const [isBackupOverlayVisible, setIsBackupOverlayVisible] = useState(false);
    const [isRestoreOverlayVisible, setIsRestoreOverlayVisible] =
        useState(false);
    const [isConfirmOverlayVisible, setIsConfirmOverlayVisible] =
        useState(false);

    const [fileErrorOverlay, setfileErrorOverlay] = useState(false);

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const {
        appName,
        updateAppName,
        updateLogo,
        backupDatabase,
        restoreDatabase,
        updatePassword,
        checkPassword,
    } = useSettings();

    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        const handleEscapeKeyPress = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                navigate("/studentmanagement");
            }
        };

        window.addEventListener("keydown", handleEscapeKeyPress);
        return () =>
            window.removeEventListener("keydown", handleEscapeKeyPress);
    }, [navigate]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedFile(event.target.files[0]);
            setIsConfirmOverlayVisible(true);
        }
    };

    const handleConfirmRestore = async () => {
        if (selectedFile) {
            try {
                await restoreDatabase(selectedFile);
                setIsConfirmOverlayVisible(false);
                setIsRestoreOverlayVisible(true);
            } catch (error) {
                setIsConfirmOverlayVisible(false);
                setfileErrorOverlay(true);
                console.log(fileErrorOverlay);

                console.error("Error restoring database:", error);
                // Optionally, you can set an error state to show an error message to the user
            }
        }
    };
    const handleOverlayClose = async () => {
        try {
            const isValid = await checkPassword(password);
            if (isValid) {
                setError("");

                setOverlayVisible(false);
            } else {
                setError("wrong password");
            }
        } catch {
            setError("something went wrong, try again.");
        }
    };

    const handleChangePassword = async () => {
        if (newPassword !== confirmPassword) {
            setError("new password is not compatible");
            return;
        }

        try {
            await updatePassword(oldPassword, newPassword);
            setError("");
            setPasswordOverlayVisible(true);
            // You can add a success message or redirect logic here
        } catch {
            setError("current password is wrong");
        }
    };

    const handleCloseOverlay = () => {
        setPasswordOverlayVisible(false);
    };

    const updateAppNameFunc = async (newAppName: string) => {
        if (newAppName.trim() == "") return;
        try {
            await updateAppName(newAppName);
            setIsAppNameOverlayVisible(true);
        } catch (error) {
            console.error("Failed to update app name:", error);
        }
    };

    const handleBackup = async () => {
        try {
            await backupDatabase();
            setIsBackupOverlayVisible(true);
        } catch (error) {
            console.error("Failed to update app name:", error);
        }
    };

    const handleConfirmLogoChange = async () => {
        if (selectedLogo) {
            try {
                await updateLogo(selectedLogo);
                setIsLogoOverlayVisible(true);
            } catch (error) {
                console.error("Failed to update logo:", error);
            }
        }
    };

    const updateLogoFunc = (file: File | null) => {
        setSelectedLogo(file);
        // Additional logic to handle the logo update can be added here
    };

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className="w-full min-h-screen p-4 bg-mainBg">
            {overlayVisible && (
                <Overlay onClose={handleOverlayClose}>
                    <div className="flex flex-col items-center w-[511px]">
                        <span className="text-center">
                            <h1 className="text-lg font-bold">
                                Enter Password
                            </h1>
                            <p className="text-gray-400 mt-3">
                                please enter password to reach settings, default
                                password is 0000
                            </p>
                            {error && (
                                <p className="text-red-500 mt-2">{error}</p>
                            )}{" "}
                            {/* Display error message */}
                        </span>
                        <span className="flex items-center w-[525px] gap-[12px] mt-3">
                            <PasswordInput
                                placeHolder="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} // Update password state
                            />
                            <ConfirmButton
                                text="Next"
                                className="text-white rounded-full w-[140px]"
                                onClick={handleOverlayClose}
                            />
                            {/* <div className="flex justify-between items-center gap-3">
                                <span>Submit</span>
                                {isSubmitting ? <SpinnerWhite /> : null}
                            </div> */}
                        </span>
                    </div>
                </Overlay>
            )}
            {passwordOverlayVisible && (
                <CustomOverlay
                    title="Password has been successfully updated"
                    message="you can use the new password now"
                    buttonText="close"
                    onButtonClick={handleCloseOverlay}
                />
            )}
            {isAppNameOverlayVisible && (
                <CustomOverlay
                    title="App name has been successfully updated"
                    message=""
                    buttonText="close"
                    onButtonClick={() => {
                        setIsAppNameOverlayVisible(false);
                    }}
                />
            )}

            {isLogoOverlayVisible && (
                <CustomOverlay
                    title="Logo has been successfully updated"
                    message=""
                    buttonText="close"
                    onButtonClick={() => {
                        setIsLogoOverlayVisible(false);
                    }}
                />
            )}

            {isBackupOverlayVisible && (
                <CustomOverlay
                    title="database has been cloned"
                    message=""
                    buttonText="close"
                    onButtonClick={() => {
                        setIsBackupOverlayVisible(false);
                    }}
                />
            )}

            {isRestoreOverlayVisible && (
                <CustomOverlay
                    title="database has been restored"
                    message=""
                    buttonText="close"
                    onButtonClick={() => {
                        setIsRestoreOverlayVisible(false);
                    }}
                />
            )}

            {fileErrorOverlay && (
                <Overlay>
                    <div className="flex flex-col items-center">
                        <h2 className="text-lg text-center mb-3 font-bold text-blueDark">
                            wrong file
                        </h2>

                        <p className="w-full text- text-textGray2 text-center ">
                            please choose a suitable file
                        </p>
                        <div className="my-auto basis-1">
                            <WrongCardSvg />
                        </div>
                        <div className="my-3">
                            <button
                                onClick={() => setfileErrorOverlay(false)}
                                className="text-blue underline"
                            >
                                cancel
                            </button>
                        </div>
                    </div>
                </Overlay>

                // <motion.div
                //   transition={{ duration: 0.2, type: "just" }}
                //   initial={{ x: 400 }}
                //   animate={{ x: 0 }}
                //   key={2}
                //   className="flex flex-col gap-1 items-center h-full"
                // >
                //   <h2 className="text-lg text-center mb-3 font-bold text-blueDark">
                //     بطاقة خاطئة
                //   </h2>

                //   <p className="w-full text- text-textGray2 text-center ">
                //     البطاقة التي قمت بتمريرها ملك للطالب أخر
                //   </p>
                //   <div className="my-auto basis-1">
                //     <WrongCardSvg />
                //   </div>
                // </motion.div>
            )}

            {isConfirmOverlayVisible && (
                <Overlay onClose={() => setIsConfirmOverlayVisible(false)}>
                    <div className="bg-white w-[460px] h-[188px] rounded gap-[10px] flex flex-col items-center justify-evenly">
                        <h1 className="text-2xl">
                            Are you sure you want to restore the backup?
                        </h1>
                        <p>data will be restored from the backup version</p>
                        <span className="flex justify-center">
                            <ConfirmButton
                                text="confirm"
                                // color="bg-red-400"
                                // textColor="text-white"
                                onClick={handleConfirmRestore}
                            />
                        </span>
                    </div>
                </Overlay>
            )}
            {!overlayVisible && (
                <>
                    <div>
                        <h1 className="text-xl font-bold">
                            change primary password
                        </h1>
                        <div className="flex flex-col w-full gap-[12px] justify-between pt-3">
                            <div className="flex flex-col w-[525px] gap-[12px]">
                                <h1>old password</h1>
                                <PasswordInput
                                    placeHolder="Enter old password"
                                    value={oldPassword}
                                    onChange={(e) =>
                                        setOldPassword(e.target.value)
                                    }
                                />
                            </div>
                            <div className="flex flex-col w-[525px] gap-[12px]">
                                <h1>New password</h1>
                                <PasswordInput
                                    placeHolder="Enter new password"
                                    value={newPassword}
                                    onChange={(e) =>
                                        setNewPassword(e.target.value)
                                    }
                                />
                            </div>
                            <div className="flex flex-col w-[525px] gap-[12px]">
                                <h1>Confirm new password</h1>
                                <PasswordInput
                                    placeHolder="confirm new password"
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                />
                            </div>
                            <ConfirmButton
                                text="Save changes"
                                className="text-white rounded-md w-[140px]"
                                onClick={handleChangePassword} // Attach the change password handler
                            />
                            {error && (
                                <p className="text-red-500 mt-2">{error}</p>
                            )}

                            <div className="flex flex-col w-[525px] gap-[12px]">
                                <h1>App Name</h1>
                                <PasswordInput
                                    placeHolder={appName}
                                    value={appNameVar}
                                    isTextInput={true}
                                    onChange={(e) => setAppName(e.target.value)}
                                />
                            </div>
                            <ConfirmButton
                                text="Save changes"
                                className="text-white rounded-md w-[140px]"
                                onClick={() => updateAppNameFunc(appNameVar)}
                            />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold mt-10">
                            Choose app logo
                        </h1>
                        <LogoUpload onLogoSelect={updateLogoFunc} />
                        <ConfirmButton
                            text="Save Changes"
                            className="text-white rounded-md w-[140px] mt-3"
                            onClick={handleConfirmLogoChange}
                        />
                    </div>

                    <div>
                        <h1 className="text-xl font-bold mt-10">
                            Backup and Restore database versions
                        </h1>
                        <div className="flex justify-between gap-[12px] mt-3">
                            <div className="flex flex-col justify-center text-sm items-center w-full min-h-[182px] gap-[12px] border-2 rounded-md shadow-sm ">
                                <h1 className="text-xl font-bold">
                                    Backup Database
                                </h1>
                                <p className="text-gray-500">
                                    Save your database locally
                                </p>
                                <ConfirmButton
                                    text="Backup"
                                    className="text-white rounded-md w-[140px]"
                                    onClick={handleBackup}
                                />
                            </div>
                            <div className="flex flex-col justify-center text-sm items-center w-full min-h-[152px] gap-[12px] border-2 rounded-md shadow-sm ">
                                <h1 className="text-xl font-bold">
                                    Restore Database
                                </h1>
                                <p className="text-gray-500">
                                    Restore a previous database version
                                </p>
                                <ConfirmButton
                                    text="Restore"
                                    className="text-white rounded-md w-[140px]"
                                    onClick={handleButtonClick}
                                />
                                <input
                                    type="file"
                                    accept=".zip"
                                    className="hidden"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
