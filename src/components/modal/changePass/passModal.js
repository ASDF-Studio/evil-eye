import React, { useEffect, useState } from "react";
import { Flex, FlexCenter } from "../../layout";
import ModalFrame from "../modalFrame";
import { Typography } from "../../typography";
import { DesignButton } from "../../button/designButton";
import { Input } from "@/components/input";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { updatePassword } from "@/action";
import { InlineError } from "@/validity";

const PassModal = ({ isvisible, onClose }) => {
  const dispatch = useAppDispatch();

  const auth = useAppSelector((state) => state.auth);
  const user = useAppSelector((state) => state.auth.user);

  const { error: error } = useAppSelector((state) => state.auth);
  const [passwordError, setPasswordError] = useState("Boom");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [invalidInputs, setInvalidInputs] = useState({
    isPasswordInvalid: false,
    isConfirmPasswordInvalid: false,
  });

  React.useEffect(() => {
    setPasswordError(error);
  }, [error]);

  useEffect(() => {
    if (auth.passwordUpdated) {
      onClose();
    }
  }, [auth.passwordUpdated]);

  if (!isvisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setInvalidInputs({
      isPasswordInvalid: newPassword ? false : true,
      isConfirmPasswordInvalid: confirmPassword ? false : true,
    });

    if (!newPassword || !confirmPassword) return;

    const data = {
      email: user.email,
      newPassword: newPassword,
      confirmPassword: confirmPassword,
    };

    try {
      await dispatch(updatePassword(data));
    } catch (error) {
      console.error("Error during update password:", error);
    }
  };

  return (
    <FlexCenter
      className="z-50 fixed top-[50%] left-[50%] bg-black bg-opacity-25 backdrop-blur-sm shadow-sm pt-[300px] sm:pt-[0px]"
      id="wrapper"
      onClick={handleClose}
    >
      <ModalFrame onClose={onClose} title="USER ACCOUNT">
        <div className="px-5 mb-3.5">
          <Typography
            variant="h11"
            classname=" text-color-brand-yellow2 drop-shadow-3xl "
          >
            Change Password
          </Typography>
          <div className="pt-5">
            <div className="block mb-1.5">
              <Typography variant="h12" classname=" text-color-brand-yellow2  ">
                New Password
              </Typography>
            </div>
            <Flex className=" relative w-full h-[40px] ">
              <Input
                type="password"
                placeholder="xxx"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </Flex>
            {invalidInputs.isPasswordInvalid && (
              <InlineError message={"password"} />
            )}
          </div>
          <div className="pt-5">
            <div className="block mb-1.5">
              <Typography variant="h12" classname=" text-color-brand-yellow2  ">
                Confirm Password
              </Typography>
            </div>
            <Flex className="relative w-full h-[40px] ">
              <Input
                type="password"
                placeholder="xxx"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Flex>
            {invalidInputs.isConfirmPasswordInvalid && (
              <InlineError message={"password"} />
            )}
            {passwordError && (
              <div className="pt-2">
                <Typography variant="h12" classname="text-red-600">
                  {passwordError}
                </Typography>
              </div>
            )}
          </div>
          <Flex className=" justify-center pt-5 pb-2.5 w-[100%]">
            <DesignButton
              className=" w-full"
              typoVariant="buttonLabel2"
              onClick={handleSubmit}
            >
              {auth.loading == false ? "ENTER" : "Loading..."}
            </DesignButton>
          </Flex>
        </div>
      </ModalFrame>
    </FlexCenter>
  );
};

export default PassModal;
