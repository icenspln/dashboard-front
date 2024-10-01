import CardAnimationSvg from "../../../assets/icons/CardAnimationSvg";
import CardlessRegister from "./overlays/cardlessRegisterLink";

export function NavigateToRegister() {
    return (
        <div className="h-screen flex flex-col justify-center items-center text-center text-2xl gap-[12px]">
            <span>
                <h1 className="">Scan RFID Card</h1>
            </span>
            <span>
                <p className="text-gray-500">
                    please scan the RFID card to mark presence
                </p>
            </span>

            <CardAnimationSvg />
            <CardlessRegister />
        </div>
    );
}
