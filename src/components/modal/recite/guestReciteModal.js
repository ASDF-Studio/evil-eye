import React, { useState } from "react";

import ModalFrame from "../modalFrame";
import { Typography } from "../../typography";
import { Flex, FlexCenter, FlexColumn } from "../../layout";
import { Button } from "react-scroll";
import { DesignButton } from "../../button/designButton";
import { Input } from "@/components/input";
import { CheckBox } from "@/components/input/checkbox";
import { InlineError } from "@/validity";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { privacyModal } from "@/action/modal.action";
import ModalScroll from "../modalScroll";
import { CheckBoxInline } from "@/components/input/checkboxInline";
import { useRouter } from "next/router";

const GuestReciteModal = ({ isvisible, onClose, openPaymentReciteModal }) => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [guestName, setGuestName] = useState(""); //Rony
  const [guestGiftName, setGuestGiftName] = useState(""); //Shams
  const [guestEmail, setGuestEmail] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [guestPrice] = useState(parseInt(10));

  const [countryCode] = useState("+1");

  const [gift, setGift] = useState(false);
  const [recipientType, setRecipientType] = useState("myself");
  const [contactMethod, setContactMethod] = useState("phone");

  const [invalidInputs, setInvalidInputs] = useState({
    isNewNameInvalid: false,
    isGiftNameInvalid: false,
    isPhoneInvalid: false,
    isEmailInvalid: false,
  });

  if (!isvisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^\+1\d{10}(?:x.+)?$/;
    const lastTenDigits = phone.replace(/\D/g, "").slice(-10);

    return phoneRegex.test(phone) && lastTenDigits.length === 10;
  };

  const handlePrayerModal = async (e) => {
    e.preventDefault();

    let name = "";
    let email = "";
    let number = "";
    let price = "";
    let userID = "";
    let guest = false;
    let giftName = "";
    let recipient = recipientType;

    if (user?._id) {
      userID = user?._id;
    } else {
      guest = true;
    }

    name = guestName ? guestName : "Anonymous"; //Rony
    email = guestEmail;
    price = guestPrice;
    number = guestPhone ? countryCode + guestPhone : "";

    if (gift === false) {
      setInvalidInputs({
        isGiftNameInvalid: guestGiftName ? false : true,
      });
      if (!guestGiftName) return;
    }

    if (contactMethod === "phone") {
      const isValidPhone = validatePhoneNumber(countryCode + guestPhone);
      setInvalidInputs({
        isNewNameInvalid: guestName ? false : true,
        isPhoneInvalid: !isValidPhone,
      });
      // if (!guestName || !isValidPhone) return;
      if (!isValidPhone) return;
    } else if (contactMethod === "email") {
      setInvalidInputs({
        isNewNameInvalid: guestName ? false : true,
        isEmailInvalid: guestEmail ? false : true,
      });
      // if (!guestName || !guestEmail) return;
      if (!guestEmail) return;
    }

    const data = {
      name: name,
      giftName: guestGiftName, //shams
      email: email,
      phone: number,
      price: price,
      createdBy: userID,
      guest: guest,
      gift: gift,
      recipient: recipient,
    };

    try {
      onClose();
      openPaymentReciteModal(data);
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  const handlePrivacyModal = async (e) => {
    e.preventDefault();
    router.push(
      {
        pathname: router.pathname,
        query: { modal: "privacy" },
      },
      undefined,
      { shallow: true }
    );
    await dispatch(privacyModal(true));
  };

  const handlePhoneNumberChange = (event) => {
    const value = event.target.value.replace(countryCode, "");
    setGuestPhone(value);
  };

  return (
    <FlexCenter
      className="z-50 fixed top-[50%] left-[50%] bg-black bg-opacity-25 backdrop-blur-sm shadow-sm 2xl:mt-10 4xl:mt-0"
      id="wrapper"
      onClick={handleClose}
    >
      <ModalFrame onClose={onClose} title="Recite the prayer">
        <ModalScroll>
          <div className="px-5 mb-3.5">
            <Typography
              variant="h11"
              classname="text-color-brand-yellow2 drop-shadow-3xl "
            >
              PRAYER
            </Typography>
          </div>
          <FlexColumn className="px-5 mb-3.5 gap-2">
            <div className="pb-2">
              <Typography
                variant="h12"
                classname=" text-color-brand-yellow2 opacity-80 "
              >
                Whenever a person gets affected with an evil eye curse, it
                affects them physically, mentally, emotionally, and financially.
              </Typography>
            </div>
            <hr className="w-auto border-color-brand-op" />

            <div className="pt-3">
              <Typography variant="h12" classname="text-color-brand-yellow2">
                Who’s the recipient of this prayer?
              </Typography>
            </div>

            <Flex className="flex flex-col sm:flex-row gap-4 mb-4">
              <div
                className="h-full w-full"
                onClick={() => {
                  setRecipientType("myself");
                  // setContactMethod(null);
                }}
              >
                <Flex className="relative h-[40px]">
                  <CheckBox
                    checked={recipientType === "myself"}
                    onChange={() => {
                      setRecipientType("myself");
                      // setContactMethod(null);
                    }}
                  >
                    Myself
                  </CheckBox>
                </Flex>
              </div>

              <div
                className="h-full w-full"
                onClick={() => {
                  setRecipientType("someone_else");
                  // setContactMethod("email");
                  setGift(false);
                }}
              >
                <Flex className="relative h-[40px]">
                  <CheckBox
                    checked={recipientType === "someone_else"}
                    onChange={() => {
                      setRecipientType("someone_else");
                      // setContactMethod("email");
                      setGift(false);
                    }}
                  >
                    Someone Else
                  </CheckBox>
                </Flex>
              </div>
            </Flex>
            <hr className="w-auto border-color-brand-op" />

            {/* {recipientType === "myself" && (
              <div className="py-3">
                <Typography
                  variant="h12"
                  classname="text-color-brand-yellow2  "
                >
                  Your Name
                </Typography>
                <Flex className="relative h-[40px] pt-1">
                  <Input
                    type="text"
                    placeholder="Name"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                  />
                </Flex>

                {invalidInputs.isNewNameInvalid && (
                  <InlineError message={"name"} />
                )}
              </div>
            )} */}

            {recipientType === "someone_else" && (
              <div>
                <Flex className="flex flex-col sm:flex-row gap-4">
                  <div className="h-full w-full" onClick={() => setGift(!gift)}>
                    <Flex className="relative h-[40px]">
                      <CheckBoxInline
                        checked={gift === true}
                        onChange={() => setGift(!gift)}
                      >
                        Don’t notify recipient of your gift
                      </CheckBoxInline>
                    </Flex>

                    <Typography
                      variant="h17"
                      classname="text-color-brand-yellow2 "
                    >
                      If you don't notify the recipient then the receipt text
                      will be sent to you
                    </Typography>
                  </div>
                </Flex>
                {!gift && (
                  <div className="py-1 pt-3">
                    <Typography
                      variant="h12"
                      classname="text-color-brand-yellow2  "
                    >
                      Name of recipient
                    </Typography>
                    <Flex className="relative h-[40px] pt-1">
                      <Input
                        type="text"
                        placeholder="Name"
                        value={guestGiftName}
                        onChange={(e) => setGuestGiftName(e.target.value)}
                      />
                    </Flex>
                    {invalidInputs.isGiftNameInvalid && (
                      <InlineError message={"giftName"} />
                    )}
                  </div>
                )}
              </div>
            )}

            {/* <hr className="w-auto border-color-brand-op" /> */}

            <div className="pt-3.5">
              <Typography variant="h12" classname="text-color-brand-yellow2  ">
                {recipientType === "myself"
                  ? "Your phone or email"
                  : "Recipient’s phone or email"}
              </Typography>
              <div>
                <Typography variant="h17" classname="text-color-brand-yellow2 ">
                  We’ll use this to let them know a prayer is being recited for
                  you
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
                    type="text"
                    placeholder="+1 123-345-6789"
                    value={countryCode + guestPhone}
                    onChange={handlePhoneNumberChange}
                  />
                </Flex>

                {invalidInputs.isPhoneInvalid && (
                  <InlineError message={"validPhone"} />
                )}
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

                {invalidInputs.isEmailInvalid && (
                  <InlineError message={"email"} />
                )}
              </div>
            )}

            <div>
              <Typography
                variant="h22"
                classname=" text-color-brand-yellow2 opacity-80 "
              >
                By entering the details, I acknowledge and agree to the{" "}
                <a
                  className="cursor-pointer underline"
                  onClick={handlePrivacyModal}
                >
                  Privacy Policy
                </a>
                .
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
        </ModalScroll>
      </ModalFrame>
    </FlexCenter>
  );
};

export default GuestReciteModal;
