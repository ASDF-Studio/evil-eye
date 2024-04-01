import React, { useState } from "react";
import { Flex, FlexBetween, FlexCenter } from "../layout";
import ModalFrame from "./modalFrame";
import { Typography } from "../typography";
import { Input } from "../input";
import { DesignButton } from "../button/designButton";
import { Email } from "../logo";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { contactConstants } from "@/action/contact.constants";
import { sendContactUsData } from "@/action/contact.action";

const Contact = ({ isvisible, onClose }) => {
  const contactUsEmail = "info@evileyeremedy.com";
  const contactValues = useAppSelector((state) => state.contact);
  const dispatch = useAppDispatch();

  const [userData, setUserData] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    userMsg: "",
  });

  if (!isvisible) return null;

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (e.target.id === "userName") {
      setUserData((prev) => {
        return {
          ...prev,
          userName: value,
        };
      });
    } else if (e.target.id === "userEmail") {
      setUserData((prev) => {
        return {
          ...prev,
          userEmail: value,
        };
      });
    } else if (e.target.id === "userPhone") {
      setUserData((prev) => {
        return {
          ...prev,
          userPhone: value,
        };
      });
    } else if (e.target.id === "userMsg") {
      setUserData((prev) => {
        return {
          ...prev,
          userMsg: value,
        };
      });
    }
  };

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!contactValues?.user) return;
    try {
      dispatch(sendContactUsData({ ...userData, contactUsEmail }));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <FlexCenter
      className="z-50 fixed top-[50%] left-[50%] bg-black bg-opacity-25 backdrop-blur-sm shadow-sm 2xl:mt-10 4xl:mt-0"
      id="wrapper"
      onClick={handleClose}
    >
      <ModalFrame onClose={onClose} title="Contact Us">
        <div className="px-5 mb-3.5">
          <Typography
            variant="h18"
            classname="text-color-brand-yellow2 flex items-center "
          >
            We’ll Get back to you as soon as we can
          </Typography>
          <hr className="w-full border-color-brand-yellow2 my-4" />
          <Flex className="gap-2">
            <Email />
            <Typography variant="h12" classname="text-color-brand-yellow2 ">
              {contactValues.contactUsEmail}
            </Typography>
          </Flex>
          <hr className="w-full border-color-brand-yellow2 my-4" />
        </div>
        <div className="px-5 text-left">
          <div className="space-y-5 h-[370px] 4xl:h-auto w-full overflow-y-auto overflow-hidden scrollbar scrollbar-thumb-[#FFCE70] scrollbar-track-transparent scrollbar-corner-transparent py-3.5 px-5 text-left">
            <div>
              <label htmlFor="email" className="block mb-1.5">
                <Typography
                  variant="h12"
                  classname="text-color-brand-yellow2  "
                >
                  Name
                </Typography>
              </label>
              <Flex className="relative h-[40px]">
                <Input
                  id="userName"
                  type="text"
                  placeholder="Your Name"
                  value={userData.userName}
                  onChange={handleInputChange}
                />
              </Flex>
            </div>

            <div>
              <label htmlFor="password" className="block mb-1.5">
                <Typography variant="h12" classname="text-color-brand-yellow2 ">
                  Email
                </Typography>
              </label>
              <Flex className="relative h-[40px]">
                <Input
                  id="userEmail"
                  type="email"
                  placeholder="example@domain.com"
                  onChange={handleInputChange}
                  value={userData.userEmail}
                />
              </Flex>
            </div>
            <div>
              <label htmlFor="password" className="block mb-1.5">
                <Typography variant="h12" classname="text-color-brand-yellow2 ">
                  Phone (Optional)
                </Typography>
              </label>
              <Flex className="relative h-[40px]">
                <Input
                  id="userPhone"
                  type="text"
                  placeholder="123-345-6789"
                  onChange={handleInputChange}
                  value={userData.userPhone}
                />
              </Flex>
            </div>
            <div>
              <label htmlFor="password" className="block mb-1.5">
                <Typography
                  variant="h12"
                  classname="text-color-brand-yellow2  "
                >
                  Message
                </Typography>
              </label>
              <Flex className="relative h-[140px] border-2 border-color-brand-gold2">
                <textarea
                  onChange={handleInputChange}
                  id="userMsg"
                  name="message"
                  className="text-[16px] font-normal font-rosarivo tracking-[-0.8px] outline-none bg-transparent items-center placeholder:text-textColor-placeholder p-2 text-textColor-brand-gold2 resize-none"
                  placeholder={"Type here..."}
                  value={userData.userMsg}
                  required
                />
              </Flex>
            </div>
            <Flex className="justify-center pb-2.5 w-[100%]">
              <DesignButton
                className="w-full"
                typoVariant="buttonLabel2"
                onClick={handleSubmit}
              >
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
