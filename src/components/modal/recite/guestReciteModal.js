import React, { useState } from "react";

import ModalFrame from "../modalFrame";
import { Typography } from "../../typography";
import { Flex, FlexBetween, FlexCenter, FlexColumn } from "../../layout";
import { Button } from "react-scroll";
import { DesignButton } from "../../button/designButton";
import { DesignButton3 } from "../../button/designButton3";
import { Input } from "@/components/input";
import { CheckBox } from "@/components/input/checkbox";
import { InlineError } from "@/validity";
import { useAppSelector } from "@/hooks";

const GuestReciteModal = ({ isvisible, onClose, openPaymentReciteModal }) => {
  const user = useAppSelector((state) => state.auth.user);
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [guestPrice] = useState(parseInt(5));

  const [contactMethod, setContactMethod] = useState("email");

  const [invalidInputs, setInvalidInputs] = useState({
    isNewNameInvalid: false,
  });

  if (!isvisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  const handlePrayerModal = async (e) => {
    e.preventDefault();

    let name = "";
    let email = "";
    let number = "";
    let userID = "";
    let guest = false;

    if (user?._id) {
      userID = user?._id;
    } else {
      guest = true;
    }

    name = guestName;
    email = guestEmail;
    number = guestPhone;

    setInvalidInputs({
      isNewNameInvalid: guestName ? false : true,
    });

    if (!guestName) return;

    const data = {
      name: guestName,
      email: guestEmail,
      phone: guestPhone,
      price: guestPrice,
      createdBy: userID,
      guest: guest,
    };

    try {
      onClose();
      openPaymentReciteModal(data);
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <FlexCenter
      className="z-50 fixed top-[50%] left-[50%] bg-black bg-opacity-25 backdrop-blur-sm shadow-sm 2xl:mt-10 4xl:mt-0"
      id="wrapper"
      onClick={handleClose}
    >
      <ModalFrame onClose={onClose} title="Recite the prayer">
        <div className="px-5 mb-3.5">
          <Typography
            variant="h11"
            classname="text-color-brand-yellow2 drop-shadow-3xl "
          >
            PRAYER
          </Typography>
        </div>
        <FlexColumn className="px-5 mb-3.5 gap-2">
          <div className="pb-3">
            <Typography
              variant="h12"
              classname=" text-color-brand-yellow2 opacity-80 "
            >
              Whenever a person gets affected with an evil eye curse, it affects
              them physically, mentally, emotionally, and financially.
            </Typography>
          </div>
          <hr className="w-auto border-color-brand-op" />

          <div className="pt-3">
            <Typography variant="h12" classname="text-color-brand-yellow2  ">
              Name of recipient
            </Typography>
            <Flex className="relative h-[40px] pt-1">
              <Input
                type="text"
                placeholder="Name"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
              />
            </Flex>

            {invalidInputs.isNewNameInvalid && <InlineError message={"name"} />}
          </div>

          <div className="pt-3.5">
            <Typography variant="h12" classname="text-color-brand-yellow2  ">
              Recipient’s phone or email
            </Typography>
            <div>
              <Typography variant="h17" classname="text-color-brand-yellow2 ">
                We’ll use this to let them know a prayer is being recited for
                them
              </Typography>
            </div>
          </div>

          <Flex className="flex flex-col sm:flex-row gap-4">
            <div
              className="h-full w-full"
              onClick={() => setContactMethod("phone")}
            >
              <Flex className="relative h-[40px]">
                <CheckBox
                  checked={contactMethod === "phone"}
                  onChange={() => setContactMethod("phone")}
                >
                  Phone
                </CheckBox>
              </Flex>
            </div>

            <div
              className="h-full w-full"
              onClick={() => setContactMethod("email")}
            >
              <Flex className="relative h-[40px]">
                <CheckBox
                  checked={contactMethod === "email"}
                  onChange={() => setContactMethod("email")}
                >
                  Email
                </CheckBox>
              </Flex>
            </div>
          </Flex>

          {contactMethod === "phone" && (
            <div className="pt-3">
              <Flex className="relative h-[40px]">
                <Input
                  type="number"
                  placeholder="123-345-6789"
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                />
              </Flex>
            </div>
          )}

          {contactMethod === "email" && (
            <div className="pt-3">
              <Flex className="relative h-[40px]">
                <Input
                  type="email"
                  placeholder="example@domain.com"
                  value={guestEmail}
                  onChange={(e) => setGuestEmail(e.target.value)}
                />
              </Flex>
            </div>
          )}

          <div>
            <Typography
              variant="h22"
              classname=" text-color-brand-yellow2 opacity-80 "
            >
              By entering the details, I acknowledge and agree to the {" "}
              <a className="cursor-pointer underline">Privacy Policy</a>.
            </Typography>
          </div>

          <Flex className=" justify-center pt-3.5 pb-2.5 w-[100%]">
            <DesignButton
              className=" w-full"
              typoVariant="buttonLabel2"
              onClick={handlePrayerModal}
            >
              Next
            </DesignButton>
          </Flex>
        </FlexColumn>
      </ModalFrame>
    </FlexCenter>
  );
};

export default GuestReciteModal;
