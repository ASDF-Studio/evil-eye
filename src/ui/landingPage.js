import { Button } from "@/components/button";
import { Flex, FlexColumn } from "@/components/layout";
import { Borderline, LeftPlay, Play } from "../components/logo";
import { Typography } from "@/components/typography";
import InfoModal from "@/components/infoModal";
import { useEffect, useState } from "react";
import { DesignButton } from "@/components/button/designButton";
import Symtoms from "@/components/infoModal/symtoms";
import Cure from "@/components/infoModal/cure";
import EvilEye from "@/components/infoModal/evileye";
import DashModal from "@/components/modal/dashboard/dashModal";
import GuestReciteModal from "@/components/modal/recite/guestReciteModal";
import PaymentReciteModal from "@/components/modal/recite/paymentReciteModal";
import PaymentSuccessReciteModal from "@/components/modal/recite/paymentSuccessReciteModal";
import PrayerReciteModal from "@/components/modal/recite/prayerReciteModal";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useRouter } from "next/router";
import ReciteModal from "@/components/modal/recite/reciteModal";
import {
  guest,
  guestFromLogin,
  privacyModal,
  userRecite,
} from "@/action/modal.action";
import Privacy from "@/components/modal/privacy/privacyModal";

export const LandingPage = () => {
  const auth = useAppSelector((state) => state.auth);
  const modal = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showGuestReciteModal, setGuestShowReciteModal] = useState(false);
  const [showReciteModal, setReciteModal] = useState(false);

  const [showLoginModal, setShowLoginModal] = useState(false);

  const [showPaymentReciteModal, setPaymentReciteModal] = useState(false);
  const [showPaymentSuccessReciteModal, setPaymentSuccessReciteModal] =
    useState(false);
  const [showPrayerReciteModal, setPrayerReciteModal] = useState(false);
  const [showDashModal, setShowDashModal] = useState(false);

  const [prayerData, setPrayerData] = useState([]);

  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const closeAllModals = () => {
    setShowModal(false);
    setShowModal2(false);
    setShowModal3(false);
    setGuestShowReciteModal(false);
    setReciteModal(false);
    setPaymentReciteModal(false);
    setPaymentSuccessReciteModal(false);
    setPrayerReciteModal(false);
  };

  useEffect(() => {
    setGuestShowReciteModal(modal.guestModal);
  }, [modal.guestModal]);

  useEffect(() => {
    closeAllModals;
    setReciteModal(modal.userModal);
  }, [modal.userModal]);

  useEffect(() => {
    closeAllModals;
    setShowPrivacyModal(modal.privacyModal);
  }, [modal.privacyModal]);

  const openGuestReciteModal = () => {
    closeAllModals;
    setGuestShowReciteModal(true);
  };
  const openReciteModal = () => {
    closeAllModals;
    setReciteModal(true);
  };
  const openPaymentReciteModal = (data) => {
    setPrayerData(data);
    closeAllModals;
    setPaymentReciteModal(true);
  };
  const openPaymentSuccessReciteModal = () => {
    closeAllModals;
    setPaymentSuccessReciteModal(true);
  };
  const openPrayerReciteModal = () => {
    closeAllModals;
    setPrayerReciteModal(true);
  };
  const openDashboard = () => {
    closeAllModals;
    setShowDashModal(true);
  };

  const handlePrayerModal = async (e) => {
    e.preventDefault();

    if (auth.authenticate) {
      openReciteModal();
    } else {
      if (modal.guestModal) {
        setShowLoginModal(false);
      } else {
        setShowLoginModal(false);
        await dispatch(guest(true));
      }
    }
  };

  const handleGuestModalClose = () => {
    setGuestShowReciteModal(false);
    dispatch(guest(false));
    dispatch(guestFromLogin(false));
  };

  const handleReciteModalClose = () => {
    setReciteModal(false);
    dispatch(userRecite(false));
  };

  const handlePrivacyModalClose = () => {
    setShowPrivacyModal(false);
    dispatch(privacyModal(false));

    router.replace(router.pathname, undefined, { shallow: true });
  };

  const router = useRouter();

  useEffect(() => {
    const modal = router.query.modal;
    if (modal === "privacy") {
      setShowPrivacyModal(true);
    }
  }, [router.query.modal]);

  return (
    <div className="flex flex-col justify-between h-[100vh] overflow-y-auto">
      <Flex className="w-full h-full mt-[90px] justify-center 1xl:mt-[120px]">
        <Flex className="w-[1440px] h-auto flex-col sm:flex-row  ">
          <FlexColumn className="h-full max-h-[700px] gap-10 justify-between sm:gap-0">
            <Flex className="relative w-full h-auto pl-[18px] sm:ml-[18px] sm:mt-[18px] 1xl:ml-[275px] 1xl:mt-[-10px] 2xl:ml-[300px] 2xl:mt-[-20px] 5xl:mt-[-80px] 5xl:ml-[300px] 10xl:mr-[150px]">
              <Button
                variant="text"
                endIcon={<Play className="text-color-brand-yellow" />}
                className="w-[180px]"
                typoVariant="h1"
                onClick={() => {
                  closeAllModals();
                  setShowModal(!showModal);
                }}
              >
                What is evil eye
              </Button>

              <InfoModal
                isvisible={showModal}
                onClose={() => setShowModal(false)}
              >
                <EvilEye />
              </InfoModal>
            </Flex>

            <Flex className="relative w-[100%] h-auto  mt-[37px] pl-[18px] sm:ml-[58px] sm:mb-[38px] 1xl:ml-[315px] 1xl:mt-[90px] 1xl:mb-[50px] 2xl:ml-[360px] 2xl:mt-[100px] 2xl:mb-[70px] 5xl:ml-[390px] 5xl:mt-[120px] 5xl:mb-[70px] 10xl:mb-[100px]">
              <Button
                variant="text"
                endIcon={<Play className="text-color-brand-yellow" />}
                className="w-[100px]"
                typoVariant="h1"
                onClick={() => {
                  closeAllModals();
                  setShowModal2(!showModal2);
                }}
              >
                cure
              </Button>

              <InfoModal
                isvisible={showModal2}
                onClose={() => setShowModal2(false)}
              >
                <Cure />
              </InfoModal>
            </Flex>
          </FlexColumn>

          <Flex className="relative mx-auto w-full h-auto justify-end pb-[20px] pt-[27px] pr-[20px] items-end flex-col sm:flex-row  sm:pb-[5px] sm:mr-[36px] sm:items-start sm:pt-[130px] 1xl:mr-[225px] 2xl:mr-[290px] 2xl:flex-row 5xl:mr-[280px] 5xl:pt-[5px]">
            <Button
              variant="text"
              leftIcon={<LeftPlay className="text-color-brand-yellow" />}
              className=""
              typoVariant="h1"
              onClick={() => {
                closeAllModals();
                setShowModal3(!showModal3);
              }}
            >
              symptoms
            </Button>

            <InfoModal
              isvisible={showModal3}
              onClose={() => setShowModal3(false)}
            >
              <Symtoms />
            </InfoModal>
          </Flex>
        </Flex>
      </Flex>

      {/* bottom part */}
      <FlexColumn className="items-center h-full pb-[20px] max-h-[350px] sm:max-h-[380px] 2xl:max-h-[450px]">
        {/* <FlexColumn className="items-center h-full max-h-[450px] sm:pb-[80px]"> */}
        <Borderline />
        <Typography
          variant="h2"
          classname="w-[300px] sm:w-[648px] pt-[10px] text-color-brand-yellow2 1xl:w-[852px] 2xl:w-[852px]"
        >
          Relief from the Evil Eye
        </Typography>
        <Typography
          variant="body"
          classname=" pt-[10px] w-[300px] sm:w-[600px] 1xl:w-[805px] 2xl:w-[805px] text-textColor-brand-yellow text-opacity-63"
        >
          Evil Eye Remedy is the original and authentic cure of its kind. Relief
          from your symptoms is close at hand. The ancient and special Evil Eye
          prayer will be said for you or your loved one.
        </Typography>

        <Flex className="pt-5">
          <DesignButton
            variant="text"
            className=""
            typoVariant="buttonLabel2"
            onClick={handlePrayerModal}
          >
            Recite the prayer
          </DesignButton>
          <GuestReciteModal
            isvisible={showGuestReciteModal}
            onClose={handleGuestModalClose}
            openPaymentReciteModal={openPaymentReciteModal}
          />
          <ReciteModal
            isvisible={showReciteModal}
            onClose={handleReciteModalClose}
            openPaymentReciteModal={openPaymentReciteModal}
          />
          <PaymentReciteModal
            isvisible={showPaymentReciteModal}
            onClose={() => setPaymentReciteModal(false)}
            openPaymentSuccessReciteModal={openPaymentSuccessReciteModal}
            prayerData={prayerData}
          />
          <PaymentSuccessReciteModal
            isvisible={showPaymentSuccessReciteModal}
            onClose={() => setPaymentSuccessReciteModal(false)}
            openPrayerReciteModal={openPrayerReciteModal}
          />
          <PrayerReciteModal
            isvisible={showPrayerReciteModal}
            onClose={() => setPrayerReciteModal(false)}
            openDashboard={openDashboard}
            openReciteModal={openReciteModal}
          />
          <DashModal
            isvisible={showDashModal}
            onClose={() => setShowDashModal(false)}
          />
          <Privacy
            isvisible={showPrivacyModal}
            onClose={handlePrivacyModalClose}
          />
        </Flex>
      </FlexColumn>
    </div>
  );
};
