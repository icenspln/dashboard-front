import ButtonRoundedPrimary from "../../../../components/ButtonRoundedPrimary";
import { Overlay } from "../../../../components/Overlay";

export function StudentPhoneCheck() {
  return (
    <>
      <Overlay>
        <>
          <div className="p-3  bg-white  rounded-xl   text-center">
            <h1 className="text-xl p-2 font-bold text-blueDark">
              هذا الهاتف مستعمل مسبقا
            </h1>
            {/* <p className="text-textGray2 my-2">
              لا يمكنك استعادة حساب هذا المستخدم بعد الحذف
            </p> */}
            <div className="flex justify-between gap-4 mt-4 p-2">
              <ButtonRoundedPrimary color="warning" text="متابعة" />
              <ButtonRoundedPrimary color="blue" text="الغاء" />
            </div>
          </div>
        </>
      </Overlay>
    </>
  );
}
