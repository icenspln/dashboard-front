import PasswordInput from "./passwordInputField";
import ConfirmButton from "../../components/confirmButton";
import LogoUpload from "./handleLogoUpload";
import { useState } from "react";
import { Overlay } from "../../components/Overlay";

export default function SeetingManagement(){
    const [overlayVisible, setOverlayVisible] = useState(true)
    const [logoUrl, setLogoUrl] = useState<string | null>(null);

    const handleOverlayClose = () => {
        setOverlayVisible(false);
    };

    return(
        
        <div className="w-full min-h-screen p-4 bg-mainBg">
              {overlayVisible && (
                <Overlay onClose={handleOverlayClose}>
                    <div className="flex flex-col items-center w-[511px]">
                        <span className="text-center">
                            <h1 className="text-lg font-bold ">ادخل كلمة المرور</h1>
                            <p className="text-gray-400 mt-3">يرجى ادخال كلمة المرور للوصول إلى الإعدادات</p>
                        </span>
                        <span className="flex items-center w-[525px]  gap-[12px] mt-3">
                            <PasswordInput placeHolder="أدخل كلمة المرور" />
                            <ConfirmButton
                                text="التالي"
                                className=" text-white rounded-full w-[140px]"
                                onClick={handleOverlayClose}
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
                    <div className="flex flex-col w-[525px] gap-[12px] ">
                        <h1>كلمة المرور القديمة</h1>
                        <PasswordInput placeHolder="أدخل كلمة المرور القدية"/>
                        
                           
                        
                    </div>
                    <div className="flex flex-col w-[525px]  gap-[12px]">
                        <h1>كلمة المرور الجديدة</h1>
                        <PasswordInput placeHolder="ادخل كلمة المرور الجديدة"/>
                    </div>
                    <div className="flex flex-col w-[525px]  gap-[12px]">
                        <h1>تأكيد كلمة المرور الجديدة</h1>
                        <PasswordInput placeHolder="ادخل كلمة المرور الجديدة"/>
                    </div>
                    <ConfirmButton text="حفظ التغييرات"  className="text-white rounded-md w-[140px]"/>
                    <div className="flex flex-col w-[525px]  gap-[12px]">
                        <h1>إسم التطبيق</h1>
                        <PasswordInput placeHolder="ادخل اسم التطبيق"/>
                    </div>
                    <ConfirmButton text="حفظ التغييرات"  className="text-white rounded-md w-[140px]"/>
                </div>
            </div>
            <div>
                <h1 className="text-xl font-bold mt-10">اختيار ايقونة الموقع</h1>
                <LogoUpload  />
                <ConfirmButton text="حفظ التغييرات"  className="text-white rounded-md w-[140px] mt-3"/>
            </div>

            <div>
                <h1 className="text-xl font-bold mt-10">تحميل ورفع قاعدة البيانات</h1>
                <div className="flex justify-between gap-[12px] mt-3">
                    <div className="flex flex-col justify-center text-sm items-center w-full min-h-[182px] gap-[12px] border-2 rounded-md shadow-sm ">
                        <h1 className="text-xl font-bold">تحميل قاعدة البيانات</h1>
                        <p className="text-gray-500">قم بحفظ جميع بياناتك بأمان عن طريق تحميل كل قاعدة البيانات بضغطة زر</p>
                        <ConfirmButton text="تحميل"  className="text-white rounded-md w-[140px]"/>
                    </div>
                    <div className="flex flex-col justify-center text-sm items-center w-full min-h-[152px] gap-[12px] border-2 rounded-md shadow-sm ">
                        <h1 className="text-xl font-bold">رفع قاعدة البيانات</h1>
                        <p className="text-gray-500">قم برفع قاعدة البيانات التي قمت بحفظها لاستعادة بياناتك بضغطة زر</p>
                        <ConfirmButton text="رفع الملف" className="text-white rounded-md w-[140px]"/>
                    </div>
                </div>
            </div>
        
            </>
        )}
        </div>
    )
}