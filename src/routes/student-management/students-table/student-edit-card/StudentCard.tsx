import { useContext, useEffect, useState } from "react";
import { Overlay } from "../../../../components/Overlay";
import { Check } from "../../../../assets/icons/Check";
import { Link } from "react-router-dom";
import ButtonRoundedPrimary from "../../../../components/ButtonRoundedPrimary";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import CardAnimationSvg from "../../../../assets/icons/CardAnimationSvg";
import WrongCardSvg from "../../../../assets/icons/WrongCardSvg";
import { StudentsTableContext } from "../core/StudentsTableContext";
import { UpdateCard } from "./_requests"; // Import the updateCard function

export default function StudentCardEdit() {
  const [modal, setModal] = useState(1);
  const { editCardModal, setEditCardModal, selectedStudent } =
    useContext(StudentsTableContext);
  const [rfid, setRfid] = useState<string>(""); // State to store RFID scan value
  const [isPending, setIsPending] = useState(true);

  const handleRfidScan = async (scannedRfid: string) => {
    try {
      console.log(selectedStudent);
      setRfid(scannedRfid);
      await UpdateCard(selectedStudent!._id, scannedRfid);
      console.log("Card updated successfully");
      setModal(2); // Move to the success modal on success
    } catch (error) {
      console.error("Error updating card:", error);
      setIsPending(false); // Show the error modal if update fails
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

    if (editCardModal) {
      window.addEventListener("keydown", handleKeyPress);
    }

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [editCardModal, rfid]);

  if (editCardModal)
    return (
      <Overlay>
        <article className="overflow-hidden h-[435px] w-[391px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white px-[20px] py-[27px] rounded-3xl">
          <AnimatePresence mode="wait">
            {modal === 1 && (
              <CardModal
                setModal={setModal}
                isPending={isPending}
                setIsPending={setIsPending}
                setEditCardModal={setEditCardModal}
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
                  تم تغيير البطاقة بنجاح
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
                    onClick={() => setEditCardModal(false)}
                  />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </article>
      </Overlay>
    );
}

const CardModal = ({
  // setModal,
  isPending,
  setIsPending,
  setEditCardModal,
}: {
  setModal: any;
  isPending: boolean;
  setIsPending: any;
  setEditCardModal: any;
}) => {
  return (
    <AnimatePresence>
      {isPending ? (
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
            يرجى تمرير البطاقة الذكية على الآلة
          </p>
          <div className="my-auto basis-1">
            <CardAnimationSvg height="250" />
          </div>
          <div className="my-3">
            <button
              onClick={() => setEditCardModal(false)}
              className="text-blue underline"
            >
              الغاء
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
              onClick={() => setIsPending(true)}
              className="text-blue underline"
            >
              اعادة
            </button>
          </div>
          <div className="my-3">
            <button
              onClick={() => setEditCardModal(false)}
              className="text-blue underline"
            >
              الغاء
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
