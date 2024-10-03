import SuccessSignSvg from "../../../../../../assets/icons/SuccessSignSvg";
import { Overlay } from "../../../../../../components/Overlay";
import ConfirmButton from "./Popup-menu-component/confirmButton";

interface ChangeStudentCardOverlayProps {
    onClose: () => void;
}
export default function ChangeStudentCardOverlay({
    onClose,
}: ChangeStudentCardOverlayProps) {
    return (
        <Overlay onClose={onClose}>
            <>
                <div className="flex flex-col text-center ">
                    <span>
                        <h1 className="font-bold">
                            Student has been registered successfully
                        </h1>
                        {/* <p className="text-gray-400 mt-3">
                            يمكن اللآن الطالب الدخول للمؤسسة
                        </p> */}
                    </span>
                    <SuccessSignSvg />
                    <ConfirmButton
                    // text="العودة الى قائمة المسجلين"
                    // color="bg-blue"
                    // textColor="text-white"
                    />
                </div>
            </>
        </Overlay>
    );
}
