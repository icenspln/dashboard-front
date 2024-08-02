import ButtonRoundedPrimary from "../../../../components/ButtonRoundedPrimary";
import { Overlay } from "../../../../components/Overlay";

export function StudentDeleteModal() {
  return (
    <>
      <Overlay>
        <>
          <div className="p-3  bg-white  rounded-xl   text-center">
            <h1 className="text-xl p-2 font-bold text-blueDark">
              هل أنت متأكد من أنك تريد حذف هذا المستخدم
            </h1>
            <p className="text-textGray2 my-2">
              لا يمكنك استعادة حساب هذا المستخدم بعد الحذف
            </p>
            <div className="flex justify-center mt-4 p-2">
              <ButtonRoundedPrimary color="danger" text="تأكيد الحذف" />
            </div>
          </div>
        </>
      </Overlay>
    </>
  );
}
