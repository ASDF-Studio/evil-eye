import React from "react";
import { Flex, FlexBetween, FlexCenter } from "../layout";
import ModalFrame from "./modalFrame";
import { Typography } from "../typography";
import { Input } from "../input";
import { Button } from "../button";
import { DesignButton3 } from "../button/designButton3";
import { DesignButton } from "../button/designButton";
import { Email } from "../logo";

const Contact = ({ isvisible, onClose }) => {
  if (!isvisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <FlexCenter
      className="z-50 fixed top-[50%] left-[50%] bg-black bg-opacity-25 backdrop-blur-sm shadow-sm"
      id="wrapper"
      onClick={handleClose}
    >
      <ModalFrame onClose={onClose} title="Contact Us">
        <div className="px-5 mb-3.5">
          <Typography
            variant="h18"
            classname="text-color-brand-yellow2 drop-shadow-3xl flex items-center "
          >
            We’ll Get back to  you as soon as we can
          </Typography>
          <hr className="w-full border-color-brand-yellow2 my-4" />
          <Flex className="gap-2">
            <Email />
            <Typography
              variant="h12"
              classname="text-color-brand-yellow2 drop-shadow-3xl"
            >
              info@evileyeremedy.com
            </Typography>
          </Flex>
          <hr className="w-full border-color-brand-yellow2 my-4" />
        </div>
        <div className="px-5 text-left pb-5">
          <div className="space-y-5 h-[300px] w-full overflow-y-auto overflow-hidden scrollbar scrollbar-thumb-[#FFCE70] scrollbar-track-transparent scrollbar-corner-transparent py-3.5 px-5 text-left">
            <div>
              <label htmlFor="email" className="block mb-1.5">
                <Typography
                  variant="h12"
                  classname="text-color-brand-yellow2 drop-shadow-3xl "
                >
                  Name
                </Typography>
              </label>
              <Flex className="relative h-[40px]">
                <Input type="text" placeholder="Your Name" />
              </Flex>
            </div>

            <div>
              <label htmlFor="password" className="block mb-1.5">
                <Typography
                  variant="h12"
                  classname="text-color-brand-yellow2 drop-shadow-3xl "
                >
                  Email
                </Typography>
              </label>
              <Flex className="relative h-[40px]">
                <Input type="email" placeholder="example@domain.com" />
              </Flex>
            </div>
            <div>
              <label htmlFor="password" className="block mb-1.5">
                <Typography
                  variant="h12"
                  classname="text-color-brand-yellow2 drop-shadow-3xl "
                >
                  Phone (Optional)
                </Typography>
              </label>
              <Flex className="relative h-[40px]">
                <Input type="text" placeholder="123-345-6789" />
              </Flex>
            </div>
            <div>
              <label htmlFor="password" className="block mb-1.5">
                <Typography
                  variant="h12"
                  classname="text-color-brand-yellow2 drop-shadow-3xl "
                >
                  Message
                </Typography>
              </label>
              <Flex className="relative h-[140px] border-2 border-color-brand-gold2">
                <textarea
                  name='message'
                  className="text-[16px] font-normal font-rosarivo tracking-[-0.8px] outline-none bg-transparent items-center placeholder:text-textColor-placeholder p-2 text-textColor-brand-gold2 resize-none"
                  placeholder={'Type here...'}
                  required
                />
              </Flex>
            </div>
            <Flex className="justify-center pb-2.5 w-[100%]">
              <DesignButton className="w-full" typoVariant="buttonLabel2">
                ENTER
              </DesignButton>
            </Flex>
          </div>
        </div>
      </ModalFrame>
    </FlexCenter>
  );
};

export default Contact;
