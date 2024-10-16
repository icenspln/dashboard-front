import { useEffect, useState } from "react";
import { Overlay } from "../../../../components/Overlay";
import ButtonRoundedPrimary from "../../../../components/ButtonRoundedPrimary";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import CardAnimationSvg from "../../../../assets/icons/CardAnimationSvg";
import WrongCardSvg from "../../../../assets/icons/WrongCardSvg";
import { Check } from "../../../../assets/icons/Check";

import { UpdateCard } from "./_requests"; // Import the updateCard function
import { useEmployeeContext } from "../core/EmployeeContext";
import { Link } from "react-router-dom";

interface EmployeeCardProps {
    employeeId: string;
}

export default function EmployeeEditCard({ employeeId }: EmployeeCardProps) {
    const { editEmployeeCard, setEditEmployeeCard } = useEmployeeContext();

    const [modal, setModal] = useState<number>(1);
    const [rfid, setRfid] = useState<string>(""); // State to store RFID scan value
    const [isError, setIsError] = useState<boolean>(false); // State to track errors

    const handleRfidScan = async (scannedRfid: string) => {
        try {
            setRfid(scannedRfid);
            const response = await UpdateCard(employeeId, scannedRfid);

            if (!response.ok) {
                throw new Error("Failed to update card");
            }
            setModal(2); // Move to the next modal on success
        } catch (error) {
            console.error("Error updating card:", error);
            setIsError(true); // Set error state to true
        }
    };

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key === "Enter") {
                // When Enter is pressed, use the scanned RFID value
                if (rfid.length === 10) {
                    handleRfidScan(rfid);
                }
                setRfid(""); // Clear the input after processing
            } else {
                // Accumulate RFID characters as they are typed
                setRfid((prevRfid) => prevRfid + event.key);
            }
        };

        if (editEmployeeCard) {
            window.addEventListener("keydown", handleKeyPress);
        }

        // Cleanup on component unmount
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [editEmployeeCard, rfid]);

    const close = () => {
        setModal(1);
        setEditEmployeeCard(false);
    };
    if (editEmployeeCard)
        return (
            <>
                <Overlay>
                    <article className="overflow-hidden h-[435px] w-[391px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white px-[20px] py-[27px] rounded-3xl">
                        <AnimatePresence mode="wait">
                            {modal === 1 && (
                                <CardModal
                                    close={close}
                                    setModal={setModal}
                                    isError={isError}
                                    setIsError={setIsError}
                                />
                            )}
                            {modal === 2 && (
                                // <motion.div
                                //   transition={{ duration: 0.2, type: "just" }}
                                //   initial={{ x: 400 }}
                                //   animate={{ x: 0 }}
                                //   key={2}
                                //   className="flex flex-col gap-1 items-center h-full"
                                // >
                                //   <h2 className="text-lg text-center mb-3 font-bold text-blueDark">
                                //     لم يتم تسجيل البطاقة
                                //   </h2>
                                //   {/* <p className="w-full text- text-textGray2 text-center ">
                                //     يمكن الآن للطالب الدخول للمؤسسة
                                //   </p> */}
                                //   <div className="my-auto">
                                //     <WrongCardSvg />
                                //   </div>

                                //   <ButtonRoundedPrimary
                                //     onClick={close}
                                //     color="blue"
                                //     text={`العودة`}
                                //   />
                                // </motion.div>
                                <motion.div
                                    transition={{ duration: 0.2, type: "just" }}
                                    initial={{ x: 400 }}
                                    animate={{ x: 0 }}
                                    key={2}
                                    className="flex flex-col gap-1 items-center h-full"
                                >
                                    <h2 className="text-lg text-center mb-3 font-bold text-blueDark">
                                        Employee has been successfully updated
                                    </h2>
                                    {/* <p className="w-full text- text-textGray2 text-center ">
                                        يمكن الآن للموظف الدخول للمؤسسة
                                    </p> */}
                                    <div className="my-auto">
                                        <Check />
                                    </div>

                                    <Link
                                        to={`/employees-management`}
                                        className="w-[70%] flex justify-center items-center"
                                    >
                                        <ButtonRoundedPrimary
                                            onClick={close}
                                            text={`Return`}
                                        />
                                    </Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </article>
                </Overlay>
            </>
        );
}

const CardModal = ({
    setModal,
    isError,
    setIsError,
    close,
}: {
    close: any;
    setModal: any;
    isError: boolean;
    setIsError: any;
}) => {
    return (
        <AnimatePresence>
            {!isError ? (
                <motion.div
                    key={1}
                    transition={{ duration: 0.2 }}
                    initial={{ x: 0, opacity: 1 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -200, opacity: 0 }}
                    className="flex flex-col gap-1 items-center h-full"
                >
                    <h2 className="text-lg text-center mb-3 font-bold text-blueDark">
                        Update Employee's Card
                    </h2>

                    <p className="w-full text- text-textGray2 text-center ">
                        please scan the RFID card to finish registration
                    </p>
                    <div className="my-auto basis-1">
                        <CardAnimationSvg height="250" />
                    </div>
                    <div className="my-3">
                        <button
                            onClick={() => close()}
                            className="text-blue underline"
                        >
                            Cancel
                        </button>
                    </div>
                </motion.div>
            ) : (
                <motion.div
                    transition={{ duration: 0.2, type: "just" }}
                    initial={{ x: 400 }}
                    animate={{ x: 0 }}
                    key={2}
                    className="flex flex-col gap-1 items-center h-full"
                >
                    <h2 className="text-lg text-center mb-3 font-bold text-blueDark">
                        Wrong Card
                    </h2>

                    <p className="w-full text- text-textGray2 text-center ">
                        The scanned card belongs to someone else
                    </p>
                    <div className="my-auto basis-1">
                        <WrongCardSvg />
                    </div>
                    <div className="my-3">
                        <button
                            onClick={() => setIsError(false)} // Reset the error state
                            className="text-blue underline"
                        >
                            try again
                        </button>
                    </div>
                    <div className="my-3">
                        <button
                            onClick={() => setModal(2)}
                            className="text-blue underline"
                        >
                            Skip
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
