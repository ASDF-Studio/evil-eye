// EmailModal.js
import React, { useState } from "react";
import { Flex, FlexCenter, FlexColumn } from "../../layout";
import ModalFrame from "../modalFrame";
import { Typography } from "../../typography";
import { DesignButton } from "../../button/designButton";
import { Input } from "@/components/input";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { changeEmail } from "@/action";
import { InlineError } from "@/validity";

const EmailModal = ({ isvisible, onClose, onEmailSubmit }) => {
  const dispatch = useAppDispatch();

  const auth = useAppSelector((state) => state.auth);
  const user = useAppSelector((state) => state.auth.user);

  const [emailError, setEmailError] = useState("");
  const { error: error } = useAppSelector((state) => state.auth);

  const [newEmail, setNewEmail] = useState("");
  const [emailSubmit, setEmailSubmit] = useState(false);

  const [invalidInputs, setInvalidInputs] = useState({
    isEmailInvalid: false,
  });

  React.useEffect(() => {
    setEmailError(error);
  }, [error]);

  React.useEffect(() => {
    setEmailSubmit(auth.emailChangeError);
  }, [auth.emailChangeError]);

  if (!isvisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
  
    setInvalidInputs({
      isEmailInvalid: newEmail ? false : true,
    });
  
    if (!newEmail) return;
  
    const data = {
      email: user.email,
      newEmail: newEmail,
    };
  
    try {
      await dispatch(changeEmail(data));
  
      if (auth.emailChangeError) {
        onEmailSubmit(newEmail);
      }
  
    } catch (error) {
      console.error("Error during email change:", error);
    }
  };
  
  return (
    <FlexCenter
      className="z-[60] fixed top-[50%] left-[50%] bg-black bg-opacity-25 backdrop-blur-sm shadow-sm"
      id="wrapper"
      onClick={handleClose}
    >
      <ModalFrame onClose={onClose} title="USER ACCOUNT">
        <div className="px-5 mb-3.5">
          <Typography
            variant="h11"
            classname=" text-color-brand-yellow2 drop-shadow-3xl "
          >
            Change Email
          </Typography>

          <div className="mt-5">
            <div className="block mb-1.5">
              <Typography variant="h12" classname=" text-color-brand-yellow2 ">
                Email
              </Typography>
            </div>
            <Flex className=" relative w-full h-[40px] ">
              <Input
                type="email"
                placeholder="example@domain.com"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </Flex>

            {invalidInputs.isEmailInvalid && <InlineError message={"email"} />}
            {emailError && (
              <div className="pt-2">
                <Typography variant="h12" classname="text-red-600">
                  {emailError}
                </Typography>
              </div>
            )}
          </div>
          <Flex className=" justify-center pt-5 pb-2.5 w-[100%]">
            <DesignButton
              className=" w-full"
              typoVariant="buttonLabel2"
              onClick={handleEmailSubmit}
            >
              {auth.loading == false ? "ENTER" : "Loading..."}
            </DesignButton>
          </Flex>
        </div>
      </ModalFrame>
    </FlexCenter>
  );
};

export default EmailModal;
