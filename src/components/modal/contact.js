import React, { useState } from "react";
import { Flex, FlexBetween, FlexCenter } from "../layout";
import ModalFrame from "./modalFrame";
import { Typography } from "../typography";
import { Input } from "../input";
import { DesignButton } from "../button/designButton";
import { Email } from "../logo";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { sendContactUsData } from "@/action/contact.action";
import { InlineError } from "@/validity";
import SuccessModal from "./submitMessage/success";

const Contact = ({ isvisible, onClose, contatcSubmit }) => {
  const contactUsEmail = "info@evileyeremedy.com";
  const contact = useAppSelector((state) => state.contact);

  const dispatch = useAppDispatch();

  const [userData, setUserData] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    userMsg: "",
  });
  const [invalidInputs, setInvalidInputs] = useState({
    isUserNameInvalid: false,
    isEmailInvalid: false,
    isPhoneInvalid: false,
    isMsgInvalid: false,
  });

  if (!isvisible) return null;

  const handleInputChange = (e, identifier) => {
    setUserData((prev) => {
      return { ...prev, [identifier]: e.target.value };
    });
  };

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setInvalidInputs({
      isUserNameInvalid: userData.userName ? false : true,
      isEmailInvalid: userData.userEmail ? false : true,
      isMsgInvalid: userData.userMsg ? false : true,
    });

    if (!userData.userEmail || !userData.userName || !userData.userMsg) return;

    const data = {
      name: userData.userName,
      email: userData.userEmail,
      phone: userData.userPhone,
      message: userData.userMsg,
    };
    try {
      dispatch(sendContactUsData(data));
      setUserData({
        userName: "",
        userEmail: "",
        userPhone: "",
        userMsg: "",
      });

      onClose();
      contatcSubmit();
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
              {contactUsEmail}
            </Typography>
          </Flex>
          <hr className="w-full border-color-brand-yellow2 my-4" />
        </div>
        <div className="px-5 text-left">
          <div className="space-y-5 h-[370px] 4xl:h-auto w-full overflow-y-auto overflow-hidden scrollbar scrollbar-thumb-[#FFCE70] scrollbar-track-transparent scrollbar-corner-transparent py-3.5 px-5 text-left">
            <div>
              <label htmlFor="email" className="block">
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
                  onChange={(e) => {
                    handleInputChange(e, "userName");
                  }}
                />
              </Flex>

              {invalidInputs.isUserNameInvalid && (
                <InlineError message={"name"} />
              )}
            </div>

            <div>
              <label htmlFor="password" className="block">
                <Typography variant="h12" classname="text-color-brand-yellow2 ">
                  Email
                </Typography>
              </label>
              <Flex className="relative h-[40px]">
                <Input
                  id="userEmail"
                  type="email"
                  placeholder="example@domain.com"
                  onChange={(e) => {
                    handleInputChange(e, "userEmail");
                  }}
                  value={userData.userEmail}
                />
              </Flex>

              {invalidInputs.isEmailInvalid && (
                <InlineError message={"email"} />
              )}
            </div>
            <div>
              <label htmlFor="password" className="block">
                <Typography variant="h12" classname="text-color-brand-yellow2 ">
                  Phone (Optional)
                </Typography>
              </label>
              <Flex className="relative h-[40px]">
                <Input
                  id="userPhone"
                  type="text"
                  placeholder="123-345-6789"
                  onChange={(e) => {
                    handleInputChange(e, "userPhone");
                  }}
                  value={userData.userPhone}
                />
              </Flex>
              {invalidInputs.isPhoneInvalid && (
                <InlineError message={"phone"} />
              )}
            </div>
            <div>
              <label htmlFor="password" className="block">
                <Typography
                  variant="h12"
                  classname="text-color-brand-yellow2  "
                >
                  Message
                </Typography>
              </label>
              <Flex className="relative h-[140px] border-2 border-color-brand-gold2">
                <textarea
                  onChange={(e) => {
                    handleInputChange(e, "userMsg");
                  }}
                  id="userMsg"
                  name="message"
                  className="text-[16px] font-normal font-rosarivo tracking-[-0.8px] outline-none bg-transparent items-center placeholder:text-textColor-placeholder p-2 text-textColor-brand-gold2 resize-none"
                  placeholder={"Type here..."}
                  value={userData.userMsg}
                  required
                />
              </Flex>

              {invalidInputs.isMsgInvalid && (
                <InlineError message={"message"} />
              )}
            </div>

            <Flex className="justify-center pb-2.5 w-[100%]">
              <DesignButton
                className="w-full"
                typoVariant="buttonLabel2"
                onClick={handleSubmit}
              >
                {contact.loading == false ? "ENTER" : "Loading..."}
              </DesignButton>

              {contact.contactSend && (
                <p>
                  <Typography classname="text-green-600">
                    sent successfully
                  </Typography>
                </p>
              )}
            </Flex>
          </div>
        </div>
      </ModalFrame>
    </FlexCenter>
  );
};

export default Contact;
