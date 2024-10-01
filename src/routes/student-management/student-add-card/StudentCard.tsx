import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { RegistrationContext } from "../students-register/core/RegistrationContext";
import { updateCard } from "../students-register/core/_requests";
import { Overlay } from "../../../components/Overlay";
import { Check } from "../../../assets/icons/Check";
import ButtonRoundedPrimary from "../../../components/ButtonRoundedPrimary";
import CardAnimationSvg from "../../../assets/icons/CardAnimationSvg";
import WrongCardSvg from "../../../assets/icons/WrongCardSvg";

interface StudentCardProps {
    studentId: string;
}

export default function StudentCard({ studentId }: StudentCardProps) {
    const { screen, setGroupModal } = useContext(RegistrationContext);

    const [modal, setModal] = useState<number>(1);
    const [rfid, setRfid] = useState<string>(""); // State to store RFID scan value
    const [isError, setIsError] = useState<boolean>(false); // State to track errors

    const handleRfidScan = async (scannedRfid: string) => {
        try {
            setRfid(scannedRfid);
            await updateCard(studentId, scannedRfid);
            setModal(2); // Move to the next modal on success
        } catch (error) {
            console.error("Error updating card:", error);
            setIsError(true); // Set error state to true
        }
    };

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key === "Enter") {
                if (rfid.length === 10) {
                    handleRfidScan(rfid);
                }
                setRfid(""); // Clear the input after processing
            } else {
                // Accumulate RFID characters as they are typed
                setRfid((prevRfid) => prevRfid + event.key);
            }
        };

        if (screen) {
            window.addEventListener("keydown", handleKeyPress);
        }

        // Cleanup on component unmount
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [screen, rfid]);

    const addToGroup = () => {
        setGroupModal(true);
    };

    if (screen)
        return (
            <>
                <Overlay>
                    <article className="overflow-hidden h-[435px] w-[391px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white px-[20px] py-[27px] rounded-3xl">
                        <AnimatePresence mode="wait">
                            {modal === 1 && (
                                <CardModal
                                    setModal={setModal}
                                    isError={isError}
                                    setIsError={setIsError}
                                />
                            )}
                            {modal === 2 && (
                                <motion.div
                                    transition={{ duration: 0.2, type: "just" }}
                                    initial={{ x: 400 }}
                                    animate={{ x: 0 }}
                                    key={2}
                                    className="flex flex-col gap-1 items-center h-full"
                                >
                                    <h2 className="text-lg text-center mb-3 font-bold text-blueDark">
                                        Student has been successfully registered
                                    </h2>
                                    <p className="w-full text- text-textGray2 text-center ">
                                        the new student is now welcomed at this
                                        school
                                    </p>
                                    <div className="my-auto">
                                        <Check />
                                    </div>
                                    <div className="flex gap-2 justify-center">
                                        <Link
                                            to={`/students-management`}
                                            className="w-[70%] flex justify-center items-center"
                                        >
                                            <ButtonRoundedPrimary
                                                text={`Finish`}
                                            />
                                        </Link>
                                        <ButtonRoundedPrimary
                                            onClick={addToGroup}
                                            text={`Add student to a group`}
                                        />
                                    </div>
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
}: {
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
                        Assign RFID card to student
                    </h2>

                    <p className="w-full text- text-textGray2 text-center ">
                        please scan the RFID card to finish registration
                    </p>
                    <div className="my-auto basis-1">
                        <CardAnimationSvg height="250" />
                    </div>
                    <div className="my-3">
                        <button
                            onClick={() => setModal(2)}
                            className="text-blue underline"
                        >
                            skip this step and finish without a card
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
                        wrong card
                    </h2>

                    <p className="w-full text- text-textGray2 text-center ">
                        card already in use!
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
                            skip this step and finish without a card
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
