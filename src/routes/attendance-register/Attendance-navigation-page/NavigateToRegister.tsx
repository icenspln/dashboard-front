import CardAnimationSvg from "../../../assets/icons/CardAnimationSvg";
import CardlessRegister from "./overlays/cardlessRegisterLink";

export function NavigateToRegister() {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center text-center">
            <span>
                <h1 className="text-xl md:text-4xl">Scan RFID Card</h1>
            </span>
            <span>
                <p className="text-gray-500 max-w-full">
                    please scan the RFID card to mark presence
                </p>
            </span>

            <CardAnimationSvg />
            <CardlessRegister />
        </div>
    );
}
