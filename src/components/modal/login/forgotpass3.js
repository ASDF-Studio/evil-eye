import React, { useEffect, useState } from "react";
import { Flex, FlexBetween, FlexCenter, FlexColumn } from "../../layout";
import ModalFrame from "../modalFrame";
import { Design1, Design2, Xmark } from "../../logo";
import { Typography } from "../../typography";
import { DesignButton } from "../../button/designButton";
import EmailModal from "../changeEmail/emailModal";
import { Input } from "@/components/input";
import { useRouter } from "next/router";
import { InlineError } from "@/validity";
import { resetPassword } from "@/action";
import { useAppDispatch, useAppSelector } from "@/hooks";

const ForgotPass3 = ({ isvisible, onClose }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const auth = useAppSelector((state) => state.auth);

  const { error: error } = useAppSelector((state) => state.auth);
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    setPasswordError(error);

    console.log(error)
  }, [error]);

  useEffect(() => {
    if (auth.passwordReseted) {
      onClose();
      router.replace(router.pathname, undefined, { shallow: true });
    }
  }, [auth.passwordReseted]);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [invalidInputs, setInvalidInputs] = useState({
    isPasswordInvalid: false,
    isConfirmPasswordInvalid: false,
  });

  const handleResetPassword = async (e) => {
    e.preventDefault();

    setInvalidInputs({
      isPasswordInvalid: newPassword ? false : true,
      isConfirmPasswordInvalid: confirmPassword ? false : true,
    });

    if (!newPassword || !confirmPassword) return;

    const token = router.query.pass_series_token;
    const mail = router.query.identity;

    const data = {
      email: mail,
      resetToken: token,
      newPassword: newPassword,
      confirmPassword: confirmPassword,
    };

    try {
      await dispatch(resetPassword(data));
    } catch (error) {
      console.error("Error during reset password:", error);
    }
  };

  if (!isvisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  return (
    <FlexCenter
      className="z-50 fixed left-[50%] bg-black bg-opacity-25 backdrop-blur-sm shadow-sm top-[50%]"
      id="wrapper"
      onClick={handleClose}
    >
      <ModalFrame onClose={onClose} title="USER ACCOUNT">
        <div className="px-5 mb-3.5">
          <Typography
            variant="h11"
            classname=" text-color-brand-yellow2 drop-shadow-3xl "
          >
            Reset Password
          </Typography>
          <div className="pt-5">
            <div className="block mb-1.5">
              <Typography variant="h12" classname=" text-color-brand-yellow2 ">
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
            <Flex className=" relative w-full h-[40px] ">
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
          <Flex className=" justify-center pt-5 pb-2.5">
            <DesignButton
              className=" w-full"
              typoVariant="buttonLabel2"
              onClick={handleResetPassword}
            >
              {auth.loading == false ? "ENTER" : "Loading..."}
            </DesignButton>
          </Flex>
        </div>
      </ModalFrame>
    </FlexCenter>
  );
};

export default ForgotPass3;
