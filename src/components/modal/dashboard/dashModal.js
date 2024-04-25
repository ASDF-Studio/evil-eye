// DashModal.js
import React, { useEffect, useState } from "react";
import { Flex, FlexBetween, FlexCenter, FlexColumn } from "../../layout";
import { Pen } from "../../logo";
import { DesignButton2 } from "../../button/designButton2";
import { Typography } from "../../typography";
import PassModal from "../changePass/passModal";
import EmailModal from "../changeEmail/emailModal";
import OtpModal from "../changeEmail/otpModal";
import { Input } from "../../input";
import DashboardModalFrame from "../dashboardModalFrame";
import PrayerHistory from "../../dashboard/prayerHistory";
import { DesignButton3 } from "@/components/button/designButton3";
import { getHistoryData, logout, updateUser } from "@/action";
import { useAppDispatch, useAppSelector } from "@/hooks";

const DashModal = ({ isvisible, onClose, children }) => {
  const dispatch = useAppDispatch();

  const auth = useAppSelector((state) => state.auth);
  const user = useAppSelector((state) => state.auth.user);
  const history = useAppSelector((state) => state.history);

  const [name, setName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [showPassModal, setShowPassModal] = useState(false);

  useEffect(() => {
    if (auth.authenticate) {
      if (user) {
        setName(user.name || "");
        const data = {
          id: user._id,
        };
        dispatch(getHistoryData(data));
      }
    }
  }, [user, dispatch]);

  if (!isvisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const handleSave = async () => {
    const updatedUser = { ...user, name: name };
    try {
      await dispatch(updateUser(updatedUser));
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await dispatch(logout());
      onClose();
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const handleEmailSubmit = async (newEmail) => {
    setNewEmail(newEmail);
    try {
      setShowEmailModal(false);
      setShowOtpModal(true);
    } catch (error) {
      console.error("Error during email submission:", error);
    }
  };

  const histories = history.history;

  return (
    <FlexCenter
      className="z-50 fixed top-[50%] left-[50%] bg-black bg-opacity-25 backdrop-blur-sm shadow-sm"
      id="wrapper"
      onClick={handleClose}
    >
      <DashboardModalFrame onClose={onClose} title="DASHBOARD">
        <Flex className=" gap-0 w-auto divide-[#FFCE70] divide-y-2 1xl:divide-x-2 flex-col 1xl:flex-row">
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
              <Flex className="relative mt-2 ">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
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
                  onEmailSubmit={handleEmailSubmit}
                />
                <OtpModal
                  isvisible={showOtpModal}
                  newEmail={newEmail}
                  onClose={() => setShowOtpModal(false)}
                />
              </FlexBetween>
              <Flex className="relative h-[40px] pt-2">
                <Input
                  type="email"
                  placeholder="example@domain.com"
                  value={user.email}
                  readOnly
                />
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
              <Flex className=" relative pt-2 outline-none h-[40px] ">
                <Input type="password" readOnly value={user.name} />
              </Flex>
            </div>
            <Flex className="w-full relative text-brand-gold bg-brand-yellow2  focus:none focus:border-none mt-2 h-[40px] ">
              <DesignButton2
                className=""
                typoVariant="buttonLabel3"
                onClick={handleSave}
              >
                {auth.loading == false ? "Save" : "Loading..."}
              </DesignButton2>
            </Flex>
            <div>
              <Flex className="relative focus:none focus:border-none w-full h-[40px] mt-2">
                <DesignButton3
                  className="w-full"
                  typoVariant="buttonLabel2"
                  onClick={handleLogout}
                >
                  LOGOUT
                </DesignButton3>
              </Flex>
            </div>
          </FlexColumn>
          <div className="pt-5 pl-5 w-auto ">
            <Typography
              variant="h11"
              classname=" text-color-brand-yellow2 drop-shadow-3xl px-4 pt-5"
            >
              PRAYER HISTORY
            </Typography>
            <div className="w-auto sm:w-[450px]">
              <div className="space-y-6 w-auto sm:w-[450px] h-[500px] overflow-y-auto overflow-hidden scrollbar scrollbar-thumb-[#FFCE70] scrollbar-track-transparent scrollbar-corner-transparent py-3.5 px-4 text-left">
                {histories.map((item) => (
                  <PrayerHistory
                    key={item._id}
                    date={item.createdAt}
                    recepientName={item.name}
                    payment={item.price}
                  />
                ))}
              </div>
            </div>
          </div>
        </Flex>
      </DashboardModalFrame>
    </FlexCenter>
  );
};
export default DashModal;
