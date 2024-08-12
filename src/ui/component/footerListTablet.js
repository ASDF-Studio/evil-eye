import { Button } from "@/components/button";
import InfoModal from "@/components/infoModal";
import Cure from "@/components/infoModal/cure";
import EvilEye from "@/components/infoModal/evileye";
import Symtoms from "@/components/infoModal/symtoms";
import { Flex, FlexBetween, FlexCenter, FlexColumn } from "@/components/layout";
import { Design1, Design2 } from "@/components/logo";
import Contact from "@/components/modal/contact";
import Pricing from "@/components/modal/pricing";
import SuccessModal from "@/components/modal/submitMessage/success";
import { Typography } from "@/components/typography";
import { useRouter } from "next/router";
import React, { useState } from "react";

const FooterListTablet = ({ children, title }) => {
  const NAV__LINK = [
    {
      path: "home",
      display: "Home",
      icon: "",
    },
    {
      path: "evileye",
      display: "What is Evil Eye",
      icon: "",
    },
    {
      path: "symtoms",
      display: "Symptoms",
      icon: "",
    },
  ];
  const NAV__LINK_2 = [
    {
      path: "cure",
      display: "Cure",
      icon: "",
    },
    {
      path: "price",
      display: "Pricing",
      icon: "",
    },
    {
      path: "contact",
      display: "Contact us",
      icon: "",
    },
  ];

  const router = useRouter();

  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  const [showContactModal, setShowContactModal] = useState(false);
  const [showPricingModal, setShowPricingModal] = useState(false);

  const [showSuccessModal, setSuccessModal] = useState(false);

  const closeAllModal = () => {
    setShowContactModal(false);
    setShowPricingModal(false);
  };

  const contatcSubmit = () => {
    closeAllModal;
    setSuccessModal(true);
  };

  const handlePath = (path) => {
    closeAllModal();

    if (path === "home") {
      router.push("/");
    }

    if (path === "contact") {
      setShowContactModal(!showContactModal);
    }

    if (path === "price") {
      setShowPricingModal(!showPricingModal);
    }

    if (path === "evileye") {
      // setShowModal(!showModal);
      router.push("/description");
    }

    if (path === "symtoms") {
      // setShowModal3(!showModal3);
      router.push("/description");
    }

    if (path === "cure") {
      // setShowModal2(!showModal2);
      router.push("/description");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-[30px]">
      <FlexCenter className="gap-2 flex flex-col items-center justify-center sm:flex-row">
        {NAV__LINK.map((item, index) => (
          <React.Fragment key={index}>
            <Button variant="text2" onClick={() => handlePath(item.path)}>
              <FlexCenter className="gap-2 w-[220px]">
                <Typography
                  variant="buttonPrimary"
                  classname="text-color-brand-yellow2 font-roman whitespace-nowrap"
                >
                  {item.display}
                </Typography>
              </FlexCenter>
            </Button>
            {index < NAV__LINK.length - 1 && (
              <Flex className="text-center justify-center hidden sm:block">
                <i className="w-[1px] h-[40px] border-r-2 border-color-brand-yellow2 opacity-20" />
              </Flex>
            )}
          </React.Fragment>
        ))}
      </FlexCenter>
      <FlexCenter className="gap-2 flex flex-col items-center justify-center sm:flex-row">
        {NAV__LINK_2.map((item, index) => (
          <React.Fragment key={index}>
            <Button variant="text2" onClick={() => handlePath(item.path)}>
              <FlexCenter className="gap-2 w-[220px]">
                <Typography
                  variant="buttonPrimary"
                  classname="text-color-brand-yellow2 font-roman whitespace-nowrap"
                >
                  {item.display}
                </Typography>
              </FlexCenter>
            </Button>
            {index < NAV__LINK_2.length - 1 && (
              <Flex className="text-center justify-center hidden sm:block">
                <i className="w-[1px] h-[40px] border-r-2 border-color-brand-yellow2 opacity-20" />
              </Flex>
            )}
          </React.Fragment>
        ))}
      </FlexCenter>

      <InfoModal isvisible={showModal} onClose={() => setShowModal(false)}>
        <EvilEye />
      </InfoModal>

      <InfoModal isvisible={showModal2} onClose={() => setShowModal2(false)}>
        <Cure />
      </InfoModal>

      <InfoModal isvisible={showModal3} onClose={() => setShowModal3(false)}>
        <Symtoms />
      </InfoModal>

      <Pricing
        isvisible={showPricingModal}
        onClose={() => setShowPricingModal(false)}
      />

      <Contact
        isvisible={showContactModal}
        onClose={() => setShowContactModal(false)}
        contatcSubmit={contatcSubmit}
      />

      <SuccessModal
        isvisible={showSuccessModal}
        onClose={() => setSuccessModal(false)}
        type={"contact"}
      />
    </div>
  );
};
export default FooterListTablet;
