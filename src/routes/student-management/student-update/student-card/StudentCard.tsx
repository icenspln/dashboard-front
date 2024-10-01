import { Overlay } from "../../../../components/Overlay";
import { Check } from "../../../../assets/icons/Check";
import { Link } from "react-router-dom";
import ButtonRoundedPrimary from "../../../../components/ButtonRoundedPrimary";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

export default function StudentCard() {
    return (
        <>
            <Overlay>
                <article className="overflow-hidden h-[435px] w-[391px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white px-[20px] py-[27px] rounded-3xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            transition={{ duration: 0.2, type: "just" }}
                            initial={{ opacity: 0, x: 400 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex flex-col gap-1 items-center h-full"
                        >
                            <h2 className="text-lg text-center mb-3 font-bold text-blueDark">
                                Student has been updated successfully
                            </h2>
                            <div className="my-auto">
                                <Check />
                            </div>

                            <Link
                                to={`/students-management`}
                                className="w-[70%] flex justify-center items-center"
                            >
                                <ButtonRoundedPrimary
                                    text={`Return to student's list`}
                                />
                            </Link>
                        </motion.div>
                    </AnimatePresence>
                </article>
            </Overlay>
        </>
    );
}
