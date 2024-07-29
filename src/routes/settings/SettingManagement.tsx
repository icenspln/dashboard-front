import PasswordInput from "./passwordInputField";
import ConfirmButton from "./confirmButton";

export default function SeetingManagement(){
    return(
        <div className="w-full min-h-screen p-4 bg-mainBg">
            <div>
                <h1 className="text-l font-bold">تغيير كلمة المرور الأساسية</h1>
                <div className="flex w-full gap-[12px] justify-between pt-3">
                    <div className="flex flex-col w-full gap-[12px] ">
                        <h1>كلمة المرور القديمة</h1>
                        <PasswordInput placeHolder="أدخل كلمة المرور القدية"/>
                        <ConfirmButton text="حفظ التغييرات" color="bg-blue" textColor="text-white"/>
                    </div>
                    <div className="flex flex-col w-full gap-[12px]">
                        <h1>كلمة المرور الجديدة</h1>
                        <PasswordInput placeHolder="ادخل كلمة المرور الجديدة"/>
                    </div>
                </div>
            </div>

            <div>
                <h1 className="text-l font-bold mt-10">تحميل ورفع قاعدة البيانات</h1>
                <div className="flex justify-between gap-[12px] mt-3">
                    <div className="flex flex-col justify-center text-sm items-center w-full min-h-[182px] gap-[8px] border-2 rounded-md shadow-sm ">
                        <h1 className="font-bold">تحميل قاعدة البيانات</h1>
                        <p className="text-gray-500">قم بحفظ جميع بياناتك بأمان عن طريق تحميل كل قاعدة البيانات بضغطة زر</p>
                        <ConfirmButton text="تحميل" color="bg-blue" textColor="text-white"/>
                    </div>
                    <div className="flex flex-col justify-center text-sm items-center w-full min-h-[152px] gap-[8px] border-2 rounded-md shadow-sm ">
                        <h1 className="font-bold">رفع قاعدة البيانات</h1>
                        <p className="text-gray-500">قم برفع قاعدة البيانات التي قمت بحفظها لاستعادة بياناتك بضغطة زر</p>
                        <ConfirmButton text="رفع الملف" color="bg-blue" textColor="text-white"/>
                    </div>
                </div>
            </div>
            

        </div>
    )
}