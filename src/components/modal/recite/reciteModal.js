import React, { useState } from "react";
import ModalFrame from "../modalFrame";
import { Typography } from "../../typography";
import { Flex, FlexCenter, FlexColumn } from "../../layout";
import { DesignButton } from "../../button/designButton";
import { Input } from "@/components/input";
import { CheckBox } from "@/components/input/checkbox";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { InlineError } from "@/validity";
import { privacyModal } from "@/action/modal.action";
import ModalScroll from "../modalScroll";
import { CheckBoxInline } from "@/components/input/checkboxInline";
import { useRouter } from "next/router";

const ReciteModal = ({ isvisible, onClose, openPaymentReciteModal }) => {
  const auth = useAppSelector((state) => state.auth);
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [price] = useState(parseInt(10));

  const [recipientType, setRecipientType] = useState("myself");
  const [contactMethod, setContactMethod] = useState("phone");
  const [gift, setGift] = useState(false);

  const [countryCode] = useState("+1");

  const [invalidInputs, setInvalidInputs] = useState({
    isNewNameInvalid: false,
    isPhoneInvalid: false,
    isEmailInvalid: false,
    isSelfPhoneInvalid: false,
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
    let userID = "";
    let giftName = "";
    let guest = false;

    if (user?._id) {
      userID = user?._id;
    } else {
      guest = true;
    }

    if (recipientType === "myself") {
      name = user?.name;
      email = user?.email;
      number = phone ? countryCode + phone : "";

      if (phone) {
        const isValidPhoneSelf = validatePhoneNumber(countryCode + phone);
        setInvalidInputs({
          isSelfPhoneInvalid: !isValidPhoneSelf,
        });
        if (!isValidPhoneSelf) return;
      }
    } else {
      name = user?.name;
      giftName = newName;
      email = newEmail;
      number = newPhone ? countryCode + newPhone : "";

      if (contactMethod === "phone") {
        const isValidPhone = validatePhoneNumber(countryCode + newPhone);
        setInvalidInputs({
          isNewNameInvalid: newName ? false : true,
          isPhoneInvalid: !isValidPhone,
        });
        if (!newName || !isValidPhone) return;
      } else if (contactMethod === "email") {
        setInvalidInputs({
          isNewNameInvalid: newName ? false : true,
          isEmailInvalid: newEmail ? false : true,
        });
        if (!newName || !newEmail) return;
      }
    }

    const data = {
      name: name,
      giftName: giftName,
      email: email,
      phone: number,
      price: price,
      createdBy: userID,
      guest: guest,
      gift: gift,
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
    // onClose();
    await dispatch(privacyModal(true));
  };

  const handlePhoneNumberChangeSelf = (event) => {
    const value = event.target.value.replace(countryCode, "");
    setPhone(value);
  };
  const handlePhoneNumberChangeGuest = (event) => {
    const value = event.target.value.replace(countryCode, "");
    setNewPhone(value);
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
          <FlexColumn className="px-5 gap-2 h-auto sm:h-auto 1xl:h-auto 2xl:h-auto 4xl:h-auto overflow-y-auto overflow-hidden scrollbar">
            <div className="pb-3">
              <Typography
                variant="h12"
                classname=" text-color-brand-yellow2 opacity-80"
              >
                Whenever a person gets affected with an evil eye curse, it
                affects them physically, mentally, emotionally and financially.
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
                  setContactMethod(null);
                }}
              >
                <Flex className="relative h-[40px]">
                  <CheckBox
                    checked={recipientType === "myself"}
                    onChange={() => {
                      setRecipientType("myself");
                      setContactMethod(null);
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
                }}
              >
                <Flex className="relative h-[40px]">
                  <CheckBox
                    checked={recipientType === "someone_else"}
                    onChange={() => {
                      setRecipientType("someone_else");
                      // setContactMethod("email");
                    }}
                  >
                    Someone Else
                  </CheckBox>
                </Flex>
              </div>
            </Flex>
            <hr className="w-auto border-color-brand-op" />

            {recipientType === "myself" && (
              <div>
                <div className="py-2">
                  <Typography
                    variant="h12"
                    classname="text-color-brand-yellow2"
                  >
                    Notify me via text (optional)
                  </Typography>
                </div>
                <div>
                  <Flex className="relative h-[40px]">
                    <Input
                      type="text"
                      placeholder="+1 123-345-6789"
                      value={countryCode + phone}
                      onChange={handlePhoneNumberChangeSelf}
                    />
                  </Flex>

                  {invalidInputs.isSelfPhoneInvalid && (
                    <InlineError message={"validPhone"} />
                  )}
                </div>
              </div>
            )}

            {recipientType === "someone_else" && (
              <div>
                <div className="pt-3">
                  <Typography
                    variant="h12"
                    classname="text-color-brand-yellow2"
                  >
                    Name of recipient
                  </Typography>
                  <Flex className="relative h-[40px] pt-1">
                    <Input
                      type="text"
                      placeholder="Name"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                    />
                  </Flex>

                  {invalidInputs.isNewNameInvalid && (
                    <InlineError message={"name"} />
                  )}
                </div>

                <div className="pt-3">
                  <Typography
                    variant="h12"
                    classname="text-color-brand-yellow2"
                  >
                    Recipient’s phone or email
                  </Typography>
                  <div>
                    <Typography
                      variant="h17"
                      classname="text-color-brand-yellow2"
                    >
                      We’ll use this to let them know a prayer is being recited
                      for them
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
                        value={countryCode + newPhone}
                        onChange={handlePhoneNumberChangeGuest}
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
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                      />
                    </Flex>

                    {invalidInputs.isEmailInvalid && (
                      <InlineError message={"email"} />
                    )}
                  </div>
                )}

                <Flex className="flex flex-col sm:flex-row gap-4">
                  <div className="h-full w-full" onClick={() => setGift(!gift)}>
                    <Flex className="relative h-[40px]">
                      <CheckBoxInline
                        checked={gift === true}
                        onChange={() => setGift(!gift)}
                      >
                        Notify recipient of your gift
                      </CheckBoxInline>
                    </Flex>
                  </div>
                </Flex>
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

            <Flex className=" justify-center pt-3 pb-5 w-[100%]">
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

export default ReciteModal;
