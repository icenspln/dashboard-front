
import { Overlay } from "../../../../../../components/Overlay";
import SuccessSignSvg from "../../../../../../assets/icons/SuccessSignSvg";
import ConfirmButton from "../../../../../../components/confirmButton";

interface ChangeStudentCardOverlayProps {
    onClose : () => void
}
export default function ChangeStudentCardOverlay({onClose}:ChangeStudentCardOverlayProps){
    return(
        <Overlay onClose={onClose}>
            <>
            <div className="flex flex-col text-center ">
                <span >
                    <h1 className="font-bold">تم تسجيل الطالب بنجاح</h1>
                    <p className="text-gray-400 mt-3">يمكن اللآن الطالب الدخول للمؤسسة</p>
                </span>
                <SuccessSignSvg/>
                <ConfirmButton text="العودة إلى قائمة المسجلين" className="text-white"/>
            </div>
            </>
        </Overlay>
    )
}