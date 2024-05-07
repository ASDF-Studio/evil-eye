import React, { useState } from "react";
import ModalFrame from "../modalFrame";
import { Typography } from "../../typography";
import { Flex, FlexCenter, FlexColumn } from "../../layout";
import { DesignButton } from "../../button/designButton";
import { Input } from "@/components/input";
import { CheckBox } from "@/components/input/checkbox";
import { useAppSelector } from "@/hooks";
import { InlineError } from "@/validity";

const ReciteModal = ({ isvisible, onClose, openPaymentReciteModal }) => {
  const auth = useAppSelector((state) => state.auth);
  const user = useAppSelector((state) => state.auth.user);

  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [price] = useState(parseInt(5));

  const [recipientType, setRecipientType] = useState("myself");
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

    if (recipientType === "myself") {
      name = user?.name;
      email = user?.email;
      number = phone;
    } else {
      name = newName;
      email = newEmail;
      number = newPhone;

      setInvalidInputs({
        isNewNameInvalid: newName ? false : true,
      });

      if (!newName) return;
    }

    const data = {
      name: name,
      email: email,
      phone: number,
      price: price,
      createdBy: userID,
      guest: guest
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
        <FlexColumn className="px-5 gap-2 h-[450px] sm:h-auto 1xl:h-auto 2xl:h-[550px] 4xl:h-auto overflow-y-auto overflow-hidden scrollbar">
          <div className="pb-3">
            <Typography
              variant="h12"
              classname=" text-color-brand-yellow2 opacity-80"
            >
              Whenever a person gets affected with an evil eye curse, it affects
              them physically, mentally, emotionally and financially.
            </Typography>
          </div>
          <hr className="w-auto border-color-brand-op" />
          <div className="pt-3">
            <Typography variant="h12" classname="text-color-brand-yellow2">
              Who’s the recipient of this prayer?
            </Typography>
          </div>

          <Flex className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="h-full w-full">
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

            <div className="h-full w-full">
              <Flex className="relative h-[40px]">
                <CheckBox
                  checked={recipientType === "someone_else"}
                  onChange={() => {
                    setRecipientType("someone_else");
                    setContactMethod("email");
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
              <div className="pt-3">
                <Typography variant="h12" classname="text-color-brand-yellow2">
                  Notify me via text (optional)
                </Typography>
              </div>
              <div>
                <Flex className="relative h-[40px]">
                  <Input
                    type="number"
                    placeholder="123-345-6789"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Flex>
              </div>
            </div>
          )}

          {recipientType === "someone_else" && (
            <div>
              <div className="pt-3">
                <Typography variant="h12" classname="text-color-brand-yellow2">
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
                <Typography variant="h12" classname="text-color-brand-yellow2">
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
                <div className="h-full w-full">
                  <Flex className="relative h-[40px]">
                    <CheckBox
                      checked={contactMethod === "phone"}
                      onChange={() => setContactMethod("phone")}
                    >
                      Phone
                    </CheckBox>
                  </Flex>
                </div>

                <div className="h-full w-full">
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
                      value={newPhone}
                      onChange={(e) => setNewPhone(e.target.value)}
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
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                    />
                  </Flex>
                </div>
              )}
            </div>
          )}

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
      </ModalFrame>
    </FlexCenter>
  );
};

export default ReciteModal;
