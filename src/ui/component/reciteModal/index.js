import { Flex } from "@/components/layout";
import { DesignButton } from "@/components/button/designButton";
import { useAppDispatch, useAppSelector } from "@/hooks";
import ReciteModal from "@/components/modal/recite/reciteModal";
import { guest, guestFromLogin, userRecite } from "@/action/modal.action";
import { useEffect, useState } from "react";
import Privacy from "@/components/modal/privacy/privacyModal";
import DashModal from "@/components/modal/dashboard/dashModal";
import PrayerReciteModalDone from "@/components/modal/recite/prayerReciteModalDone";
import PrayerReciteModal from "@/components/modal/recite/prayerReciteModal";
import PaymentCancelReciteModal from "@/components/modal/recite/paymentCancelReciteModal";
import PaymentSuccessReciteModal from "@/components/modal/recite/paymentSuccessReciteModal";
import PaymentReciteModal from "@/components/modal/recite/paymentReciteModal";
import GuestReciteModal from "@/components/modal/recite/guestReciteModal";
import { useRouter } from "next/router";

const ReciteProcess = () => {
  const auth = useAppSelector((state) => state.auth);
  const modal = useAppSelector((state) => state.modal);
  const user = useAppSelector((state) => state.auth.user);
  const prayer = useAppSelector((state) => state.prayer);
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
  const [showPaymentCancelReciteModal, setPaymentCancelReciteModal] =
    useState(false);
  const [showPrayerReciteModal, setPrayerReciteModal] = useState(false);
  const [showPrayerReciteModalDone, setPrayerReciteModalDone] = useState(false);
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
    setPaymentCancelReciteModal(false);
    setPrayerReciteModal(false);
    setPrayerReciteModalDone(false);
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
  const openPaymentSuccessReciteModal = (paymentStatus) => {
    closeAllModals;
    setPaymentSuccessReciteModal(paymentStatus);
  };
  const openPaymentCancelReciteModal = () => {
    closeAllModals;
    setPaymentCancelReciteModal(true);
  };

  const handleSuccessModalClose = () => {
    setPaymentSuccessReciteModal(false);

    // router.replace(router.pathname, undefined, { shallow: true });
  };
  const handlePrayerReciteModalClose = () => {
    setPrayerReciteModal(false);
  };

  const handleCancelModalClose = () => {
    setPaymentCancelReciteModal(false);

    router.replace(router.pathname, undefined, { shallow: true });
  };
  const openPrayerReciteModal = () => {
    closeAllModals;
    setPrayerReciteModal(true);
  };
  const openPrayerReciteModalDone = (paymentDone) => {
    closeAllModals;
    setPrayerReciteModalDone(paymentDone);
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

  // payment

  const router = useRouter();

  useEffect(() => {
    const modal = router.query.modal;
    if (modal === "privacy") {
      setShowPrivacyModal(true);
    }
  }, [router.query.modal]);

  useEffect(() => {
    const payment = router.query.payment;
    const session_id = router.query.session_id;
    const prayer_id = router.query.prayer_id;

    if (payment === "success" && session_id) {
      const prayerData =
        JSON.parse(localStorage.getItem("evileye-prayer")) || {};
      let prayerCountLocal = prayerData.progress
        ? parseFloat(prayerData.progress)
        : 0;

      const data = {
        sessionId: session_id,
        prayerId: prayer_id,
        prayerCount: prayerCountLocal,
      };

      dispatch(verifyCheckoutSession(data));
    } else if (payment === "canceled") {
      openPaymentCancelReciteModal();
    }
  }, [router.query.payment, prayerData.progress]);

  useEffect(() => {
    if (prayer.prayerDone) {
      openPrayerReciteModalDone(prayer.prayerDone);
    }
  }, [prayer.prayerDone]);

  useEffect(() => {
    if (prayer.paymentStatus) {
      openPaymentSuccessReciteModal(prayer.paymentStatus);
    }
  }, [prayer.paymentStatus]);
  return (
    <>
      <Flex className="p-[60px] items-center justify-center">
        <DesignButton
          variant="text"
          className=""
          audioClassName=""
          typoVariant="buttonLabel2"
          onClick={handlePrayerModal}
        >
          Recite the prayer
        </DesignButton>
      </Flex>
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
        prayerData={prayerData}
      />
      <PaymentSuccessReciteModal
        isvisible={showPaymentSuccessReciteModal}
        onClose={handleSuccessModalClose}
        openPrayerReciteModal={openPrayerReciteModal}
      />
      <PaymentCancelReciteModal
        isvisible={showPaymentCancelReciteModal}
        onClose={handleCancelModalClose}
      />
      <PrayerReciteModal
        isvisible={showPrayerReciteModal}
        onClose={handlePrayerReciteModalClose}
        openDashboard={openDashboard}
        openReciteModal={openReciteModal}
      />
      <PrayerReciteModalDone
        isvisible={showPrayerReciteModalDone}
        onClose={() => setPrayerReciteModalDone(false)}
        openDashboard={openDashboard}
        openReciteModal={openReciteModal}
        modalDoneCLose={handlePrayerReciteModalClose}
      />
      <DashModal
        isvisible={showDashModal}
        onClose={() => setShowDashModal(false)}
      />
      <Privacy isvisible={showPrivacyModal} onClose={handlePrivacyModalClose} />
    </>
  );
};

export default ReciteProcess;
