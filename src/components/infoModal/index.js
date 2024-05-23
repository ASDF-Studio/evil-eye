import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FlexCenter, FlexColumn } from "../layout";
import { Xmark } from "../logo";

const modalVariants = {
  hidden: {
    opacity: 0,
    x: "100%",
  },
  visible: {
    opacity: 1,
    x: "0%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.5,
    },
  },
};

const InfoModal = ({ isvisible, onClose, children }) => {
  const [modalVisible, setModalVisible] = useState(isvisible);

  useEffect(() => {
    setModalVisible(isvisible);
  }, [isvisible]);

  const handleClose = (e) => {
    if (e.target.id === "wrapper") {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {modalVisible && (
        <motion.div
          className="z-50 ml-5 sm:ml-0 fixed right-10 top-24 bg-black bg-opacity-25 backdrop-blur-sm shadow-sm"
          id="wrapper"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
          onClick={handleClose}
        >
          <FlexColumn className="bg-backgroundColor-brand-blue-80 border border-color-brand-yellow2 shadow-buttonShadow3 justify-between">
            <button
              className="text-textColor-brand-yellow text-xl place-self-end pr-4 pt-3"
              onClick={onClose}
            >
              <Xmark />
            </button>
            <div className="text-textColor-brand-yellow w-auto pl-5 rounded overflow-y-auto max-h-[70vh] scrollbar scrollbar-thumb-[#FFCE70] scrollbar-track-transparent scrollbar-corner-transparent sm:w-[450px] sm:h-auto">
              {children}
            </div>
          </FlexColumn>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InfoModal;
