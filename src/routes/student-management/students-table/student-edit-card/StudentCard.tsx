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
import { updateCard } from "../core/_requests"; // Import the updateCard function

export default function StudentCardEdit() {
  const [modal, setModal] = useState(1);
  const { editCardModal, setEditCardModal } = useContext(StudentsTableContext);
  if (editCardModal)
    return (
      <Overlay>
        <article className="overflow-hidden h-[435px] w-[391px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white px-[20px] py-[27px] rounded-3xl">
          <AnimatePresence mode="wait">
            {modal == 1 && (
              <CardModal
                setModal={setModal}
                editCardModal={editCardModal}
                setEditCardModal={setEditCardModal}
              />
            )}

            {modal == 2 && (
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
    );
}

const CardModal = ({
  setModal,
  editCardModal,
  setEditCardModal,
}: {
  setModal: any;
  editCardModal: any;
  setEditCardModal: any;
}) => {
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsPending(false);
    }, 2000);
  }, [isPending]);

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
        <>
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
        </>
      )}
    </AnimatePresence>
  );
};

// const SuccessModal = () => {
//   return (
//     <motion.div
//       transition={{ duration: 0.2, type: "just" }}
//       initial={{ x: 400 }}
//       animate={{ x: 0 }}
//       key={2}
//       className="flex flex-col gap-1 items-center h-full"
//     >
//       <h2 className="text-lg text-center mb-3 font-bold text-blueDark">
//         تم تسجيل الطالب بنجاح
//       </h2>
//       <p className="w-full text- text-textGray2 text-center ">
//         يمكن الآن للطالب الدخول للمؤسسة
//       </p>
//       <div className="my-auto">
//         <Check />
//       </div>

//       <Link
//         to={`/studentmanagement`}
//         className="w-[60%] flex justify-center items-center"
//       >
//         <ButtonRoundedPrimary active text={`العودة إلى قائمة المسجلين`} />
//       </Link>
//     </motion.div>
//   );
// };
