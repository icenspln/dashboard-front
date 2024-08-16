import { useContext, useEffect, useState } from "react";
import { Overlay } from "../../../../components/Overlay";
import { RegistrationContext } from "../core/RegistrationContext";
import { Check } from "../../../../assets/icons/Check";
import { Link } from "react-router-dom";
import ButtonRoundedPrimary from "../../../../components/ButtonRoundedPrimary";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import CardAnimationSvg from "../../../../assets/icons/CardAnimationSvg";
import WrongCardSvg from "../../../../assets/icons/WrongCardSvg";
import { updateCard } from "../core/_requests"; // Import the updateCard function

interface StudentCardProps {
  studentId: string;
}

export default function StudentCard({ studentId }: StudentCardProps) {
  const { screen } = useContext(RegistrationContext);

  const [modal, setModal] = useState<number>(1);
  const [rfid, setRfid] = useState<string>(""); // State to store RFID scan value
  const [isError, setIsError] = useState<boolean>(false); // State to track errors

  const handleRfidScan = async (scannedRfid: string) => {
    try {
      setRfid(scannedRfid);
      const response = await updateCard(studentId, scannedRfid);
      console.log("Card updated successfully:", response);
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
        handleRfidScan(rfid);
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
                    تم تسجيل الطالب بنجاح
                  </h2>
                  <p className="w-full text- text-textGray2 text-center ">
                    يمكن الآن للطالب الدخول للمؤسسة
                  </p>
                  <div className="my-auto">
                    <Check />
                  </div>

                  <Link
                    to={`/studentmanagement`}
                    className="w-[70%] flex justify-center items-center"
                  >
                    <ButtonRoundedPrimary
                      color="blue"
                      text={`العودة إلى قائمة المسجلين`}
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
            تسجيل البطاقة الذكية
          </h2>

          <p className="w-full text- text-textGray2 text-center ">
            يرجى تمرير البطاقة الذكية على الآلة لإنهاء تسجيل التلميذ
          </p>
          <div className="my-auto basis-1">
            <CardAnimationSvg height="250" />
          </div>
          <div className="my-3">
            <button onClick={() => setModal(2)} className="text-blue underline">
              تخطي هذه المرحلة و التسجيل بدون بطاقة
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
            بطاقة خاطئة
          </h2>

          <p className="w-full text- text-textGray2 text-center ">
            البطاقة التي قمت بتمريرها ملك للطالب أخر
          </p>
          <div className="my-auto basis-1">
            <WrongCardSvg />
          </div>
          <div className="my-3">
            <button
              onClick={() => setIsError(false)} // Reset the error state
              className="text-blue underline"
            >
              اعادة
            </button>
          </div>
          <div className="my-3">
            <button
              onClick={() => setModal(2)}
              className="text-blue underline"
            >
              تخطي هذه المرحلة و التسجيل بدون بطاقة
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
