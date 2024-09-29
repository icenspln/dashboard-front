import React, { useState, useRef ,useEffect } from "react";
import PasswordInput from "./passwordInputField";
import ConfirmButton from "../../components/confirmButton";
import LogoUpload from "./handleLogoUpload";
import { Overlay } from "../../components/Overlay";
import { useSettings, SettingsProvider } from "./core/SettingsContext";
import CustomOverlay from "../../components/CustomOverlay";
import { useNavigate } from "react-router-dom";

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
  const [isAppNameOverlayVisible, setIsAppNameOverlayVisible] = useState(false);
  const [isLogoOverlayVisible, setIsLogoOverlayVisible] = useState(false);
  const [isBackupOverlayVisible, setIsBackupOverlayVisible] = useState(false);
  const [isRestoreOverlayVisible, setIsRestoreOverlayVisible] = useState(false);
  const [isConfirmOverlayVisible, setIsConfirmOverlayVisible] = useState(false);

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
    return () => window.removeEventListener("keydown", handleEscapeKeyPress);
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
        setError("كلمة المرور غير صحيحة");
      }
    } catch {
      setError("حدث خطأ ما. حاول مرة أخرى.");
    }
  };

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      setError("كلمة المرور الجديدة غير متطابقة");
      return;
    }

    try {
      await updatePassword(oldPassword, newPassword);
      setError("");
      setPasswordOverlayVisible(true);
      // You can add a success message or redirect logic here
    } catch {
      setError("كلمة السر القديمة خاطئة");
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
              <h1 className="text-lg font-bold">ادخل كلمة المرور</h1>
              <p className="text-gray-400 mt-3">
                يرجى ادخال كلمة المرور للوصول إلى الإعدادات
              </p>
              {error && <p className="text-red-500 mt-2">{error}</p>}{" "}
              {/* Display error message */}
            </span>
            <span className="flex items-center w-[525px] gap-[12px] mt-3">
              <PasswordInput
                placeHolder="أدخل كلمة المرور"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password state
              />
              <ConfirmButton
                text="التالي"
                className="text-white rounded-full w-[140px]"
                onClick={handleOverlayClose}
              />
            </span>
          </div>
        </Overlay>
      )}
      {passwordOverlayVisible && (
        <CustomOverlay
          title="تم تغيير كلمة المرور بنجاح"
          message="يمكنك الآن استخدام كلمة المرور الجديدة"
          buttonText="غلق"
          onButtonClick={handleCloseOverlay}
        />
      )}
      {isAppNameOverlayVisible && (
        <CustomOverlay
          title="تم تغيير اسم التطبيق بنجاح"
          message="يمكنك الآن استخدام اسم التطبيق الجديد"
          buttonText="غلق"
          onButtonClick={() => {
            setIsAppNameOverlayVisible(false);
          }}
        />
      )}

      {isLogoOverlayVisible && (
        <CustomOverlay
          title="تم تحديث الشعار بنجاح"
          message="يمكنك الآن رؤية الشعار الجديد"
          buttonText="غلق"
          onButtonClick={() => {
            setIsLogoOverlayVisible(false);
          }}
        />
      )}

      {isBackupOverlayVisible && (
        <CustomOverlay
          title="تم نسخ قاعدة البيانات احتياطياً بنجاح"
          message="تم حفظ النسخة الاحتياطية بنجاح"
          buttonText="غلق"
          onButtonClick={() => {
            setIsBackupOverlayVisible(false);
          }}
        />
      )}

      {isRestoreOverlayVisible && (
        <CustomOverlay
          title="تم استعادة قاعدة البيانات بنجاح"
          message="تم استعادة البيانات من النسخة الاحتياطية بنجاح"
          buttonText="غلق"
          onButtonClick={() => {
            setIsRestoreOverlayVisible(false);
          }}
        />
      )}

      {isConfirmOverlayVisible && (
        <Overlay onClose={() => setIsConfirmOverlayVisible(false)}>
          <div className="bg-white w-[460px] h-[188px] rounded gap-[10px] flex flex-col items-center justify-evenly">
            <h1 className="text-2xl">
              هل أنت متأكد من أنك تريد استعادة النسخة الاحتياطية؟
            </h1>
            <p>سيتم استعادة البيانات من النسخة الاحتياطية المحددة.</p>
            <span className="flex justify-center">
              <ConfirmButton
                text="تأكيد الاستعادة"
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
            <h1 className="text-xl font-bold">تغيير كلمة المرور الأساسية</h1>
            <div className="flex flex-col w-full gap-[12px] justify-between pt-3">
              <div className="flex flex-col w-[525px] gap-[12px]">
                <h1>كلمة المرور القديمة</h1>
                <PasswordInput
                  placeHolder="أدخل كلمة المرور القدية"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-[525px] gap-[12px]">
                <h1>كلمة المرور الجديدة</h1>
                <PasswordInput
                  placeHolder="ادخل كلمة المرور الجديدة"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-[525px] gap-[12px]">
                <h1>تأكيد كلمة المرور الجديدة</h1>
                <PasswordInput
                  placeHolder="ادخل كلمة المرور الجديدة"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <ConfirmButton
                text="حفظ التغييرات"
                className="text-white rounded-md w-[140px]"
                onClick={handleChangePassword} // Attach the change password handler
              />
              {error && <p className="text-red-500 mt-2">{error}</p>}

              <div className="flex flex-col w-[525px] gap-[12px]">
                <h1>إسم التطبيق</h1>
                <PasswordInput
                  placeHolder={appName}
                  value={appNameVar}
                  isTextInput={true}
                  onChange={(e) => setAppName(e.target.value)}
                />
              </div>
              <ConfirmButton
                text="حفظ التغييرات"
                className="text-white rounded-md w-[140px]"
                onClick={() => updateAppNameFunc(appNameVar)}
              />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold mt-10">اختيار ايقونة الموقع</h1>
            <LogoUpload onLogoSelect={updateLogoFunc} />
            <ConfirmButton
              text="حفظ التغييرات"
              className="text-white rounded-md w-[140px] mt-3"
              onClick={handleConfirmLogoChange}
            />
          </div>

          <div>
            <h1 className="text-xl font-bold mt-10">
              تحميل ورفع قاعدة البيانات
            </h1>
            <div className="flex justify-between gap-[12px] mt-3">
              <div className="flex flex-col justify-center text-sm items-center w-full min-h-[182px] gap-[12px] border-2 rounded-md shadow-sm ">
                <h1 className="text-xl font-bold">تحميل قاعدة البيانات</h1>
                <p className="text-gray-500">
                  قم بحفظ جميع بياناتك بأمان عن طريق تحميل كل قاعدة البيانات
                  بضغطة زر
                </p>
                <ConfirmButton
                  text="تحميل"
                  className="text-white rounded-md w-[140px]"
                  onClick={handleBackup}
                />
              </div>
              <div className="flex flex-col justify-center text-sm items-center w-full min-h-[152px] gap-[12px] border-2 rounded-md shadow-sm ">
                <h1 className="text-xl font-bold">رفع قاعدة البيانات</h1>
                <p className="text-gray-500">
                  قم برفع قاعدة البيانات التي قمت بحفظها لاستعادة بياناتك بضغطة
                  زر
                </p>
                <ConfirmButton
                  text="رفع الملف"
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
