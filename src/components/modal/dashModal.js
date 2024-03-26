import React, { useState } from "react";
import { Flex, FlexBetween, FlexCenter, FlexColumn } from "../layout";
import ModalFrame2 from "./modalFrame2";
import { Design1, Design2, Pen, Xmark } from "../logo";
import { DesignButton2 } from "../button/designButton2";
import { Typography } from "../typography";
import PassModal from "./changePass/passModal";
import EmailModal from "./changeEmail/emailModal";
import { Input } from "../input";

const DashModal = ({ isvisible, onClose, children }) => {
  const [showPassModal, setShowPassModal] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
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
      <ModalFrame2 onClose={onClose} title="DASHBOARD">
        <Flex className=" gap-0 w-auto divide-[#FFCE70] divide-x-2 flex-col sm:flex-row">
          <FlexColumn className="gap-6 p-5 text-left">
            <Flex className="items-start flex-col">
              <Typography
                variant="h11"
                classname=" text-color-brand-yellow2 drop-shadow-3xl "
              >
                YOUR INFO
              </Typography>

              <Typography
                variant="h12"
                classname=" text-color-brand-yellow2  pt-5"
              >
                Update your settings here.
              </Typography>
            </Flex>
            <div className="pt-5 mb-3.5">
              <Typography
                variant="h12"
                classname=" text-color-brand-yellow2 pt-5"
              >
                Your Name
              </Typography>
              <Flex className="relative mt-2 w-[437px] ] ">
                <Input type="text" placeholder="elias" />
              </Flex>
            </div>

            <div className="mt-5">
              <FlexBetween>
                <Typography variant="h12" classname=" text-color-brand-yellow2">
                  Email
                </Typography>
                <div onClick={() => setShowEmailModal(true)}>
                  <Pen />
                </div>
                <EmailModal
                  isvisible={showEmailModal}
                  onClose={() => setShowEmailModal(false)}
                />
              </FlexBetween>
              <Flex className="relative h-[40px] pt-2">
                <Input type="email" placeholder="example@domain.com" />
              </Flex>
            </div>
            <div>
              <FlexBetween>
                <Typography variant="h12" classname=" text-color-brand-yellow2">
                  Password
                </Typography>
                <div onClick={() => setShowPassModal(true)}>
                  <Pen />
                </div>
                <PassModal
                  isvisible={showPassModal}
                  onClose={() => setShowPassModal(false)}
                />
              </FlexBetween>
              <Flex className=" relative pt-2 outline-none w-[437px] h-[40px] ">
                <Input type="password" />
              </Flex>
            </div>
            <Flex className=" relative text-brand-gold bg-brand-yellow2  focus:none focus:border-none mt-2 w-[437px] h-[40px] ">
              <DesignButton2 className="" typoVariant="buttonLabel3">
                SAVE
              </DesignButton2>
            </Flex>
            <div>
              <Flex className=" relative bg-transparent  focus:none focus:border-none w-[437px]] h-[40px] ">
                <FlexBetween className="w-[437px] h-[40px] border-[#D2A42B] border-2 text-brand-gold bg-brand-blue absolute">
                  <Design1 />
                  <FlexCenter className="border-none w-[437px] h-[40px] p-2 hover:cursor-pointer">
                    <Typography
                      variant="h16"
                      classname=" text-color-brand-yellow2 "
                    >
                      LOGOUT
                    </Typography>
                  </FlexCenter>
                  <Design2 />
                </FlexBetween>
              </Flex>
            </div>
          </FlexColumn>
          <div className="pt-5 pl-5 w-[480px] ">
            <Typography
              variant="h11"
              classname=" text-color-brand-yellow2 drop-shadow-3xl px-4 pt-5"
            >
              PRAYER HISTORY
            </Typography>
            <div className="w-[450px]">
              <div className="space-y-6 h-[500px] w-[450px] overflow-y-auto overflow-hidden scrollbar scrollbar-thumb-[#FFCE70] scrollbar-track-transparent scrollbar-corner-transparent py-3.5 px-4 text-left">
                <div className="w-[400px] h-[75px] ">
                  <div className="w-[118px] h-[28px] text-center  bg-color-brand-yellow">
                    <Typography
                      variant="h15"
                      classname=" text-color-brand-txt  "
                    >
                      12 January, 2025
                    </Typography>
                  </div>
                  <FlexBetween className="pt-2 w-[400px]">
                    <Typography
                      variant="h13"
                      classname=" text-color-brand-yellow2 opacity-80"
                    >
                      1 Evil Eye Remedy for Adam Voigt
                    </Typography>
                    <Typography
                      variant="h14"
                      classname=" text-color-brand-yellow2"
                    >
                      $3.3
                    </Typography>
                  </FlexBetween>
                  <Typography
                    variant="h13"
                    classname="hover:underline text-color-brand-yellow2"
                  >
                    View Invoice
                  </Typography>
                </div>
                <hr className="w-[400px] -mt-5 border-color-brand-op"></hr>
                <div className="w-[400px] h-[75px] ">
                  <div className="w-[118px] h-[28px] text-center  bg-color-brand-yellow">
                    <Typography
                      variant="h15"
                      classname=" text-color-brand-txt  "
                    >
                      12 January, 2025
                    </Typography>
                  </div>
                  <FlexBetween className="pt-2 w-[400px]">
                    <Typography
                      variant="h13"
                      classname=" text-color-brand-yellow2 opacity-80"
                    >
                      1 Evil Eye Remedy for Adam Voigt
                    </Typography>
                    <Typography
                      variant="h14"
                      classname=" text-color-brand-yellow2 "
                    >
                      $2.5
                    </Typography>
                  </FlexBetween>
                  <Typography
                    variant="h13"
                    classname="hover:underline text-color-brand-yellow2"
                  >
                    View Invoice
                  </Typography>
                </div>
                <hr className="w-[400px] border-color-brand-op"></hr>
                <div className="w-[400px] h-[75px] ">
                  <div className="w-[118px] h-[28px] text-center  bg-color-brand-yellow">
                    <Typography
                      variant="h15"
                      classname=" text-color-brand-txt  "
                    >
                      12 January, 2025
                    </Typography>
                  </div>
                  <FlexBetween className="pt-2 w-[400px]">
                    <Typography
                      variant="h13"
                      classname=" text-color-brand-yellow2 opacity-80"
                    >
                      1 Evil Eye Remedy for Adam Voigt
                    </Typography>
                    <Typography
                      variant="h14"
                      classname=" text-color-brand-yellow2 "
                    >
                      $5
                    </Typography>
                  </FlexBetween>
                  <Typography
                    variant="h13"
                    classname="hover:underline text-color-brand-yellow2"
                  >
                    View Invoice
                  </Typography>
                </div>
                <hr className="w-[400px] border-color-brand-op"></hr>
                <div className="w-[400px] h-[75px] ">
                  <div className="w-[118px] h-[28px] text-center  bg-color-brand-yellow">
                    <Typography
                      variant="h15"
                      classname=" text-color-brand-txt  "
                    >
                      12 January, 2025
                    </Typography>
                  </div>
                  <FlexBetween className="pt-2 w-[400px]">
                    <Typography
                      variant="h13"
                      classname=" text-color-brand-yellow2 opacity-80"
                    >
                      1 Evil Eye Remedy for Adam Voigt
                    </Typography>
                    <Typography
                      variant="h14"
                      classname=" text-color-brand-yellow2 "
                    >
                      $5
                    </Typography>
                  </FlexBetween>
                  <Typography
                    variant="h13"
                    classname="hover:underline text-color-brand-yellow2"
                  >
                    View Invoice
                  </Typography>
                </div>
                <hr className="w-[400px] border-color-brand-op"></hr>
                <div className="w-[400px] h-[75px] ">
                  <div className="w-[118px] h-[28px] text-center  bg-color-brand-yellow">
                    <Typography
                      variant="h15"
                      classname=" text-color-brand-txt  "
                    >
                      12 January, 2025
                    </Typography>
                  </div>
                  <FlexBetween className="pt-2 w-[400px]">
                    <Typography
                      variant="h13"
                      classname=" text-color-brand-yellow2 opacity-80"
                    >
                      1 Evil Eye Remedy for Adam Voigt
                    </Typography>
                    <Typography
                      variant="h14"
                      classname=" text-color-brand-yellow2 "
                    >
                      $2.3
                    </Typography>
                  </FlexBetween>
                  <Typography
                    variant="h13"
                    classname="hover:underline text-color-brand-yellow2"
                  >
                    View Invoice
                  </Typography>
                </div>
                <hr className="w-[400px] border-color-brand-op"></hr>
                <div className="w-[400px] h-[75px] ">
                  <div className="w-[118px] h-[28px] text-center  bg-color-brand-yellow">
                    <Typography
                      variant="h15"
                      classname=" text-color-brand-txt  "
                    >
                      12 January, 2025
                    </Typography>
                  </div>
                  <FlexBetween className="pt-2 w-[400px]">
                    <Typography
                      variant="h13"
                      classname=" text-color-brand-yellow2 opacity-80"
                    >
                      1 Evil Eye Remedy for Adam Voigt
                    </Typography>
                    <Typography
                      variant="h14"
                      classname=" text-color-brand-yellow2 "
                    >
                      $2.3
                    </Typography>
                  </FlexBetween>
                  <Typography
                    variant="h13"
                    classname="hover:underline text-color-brand-yellow2"
                  >
                    View Invoice
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </Flex>
      </ModalFrame2>
    </FlexCenter>
  );
};
export default DashModal;
