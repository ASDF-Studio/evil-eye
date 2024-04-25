import { Button } from "@/components/button";
import { Flex, FlexColumn } from "@/components/layout";
import { Borderline, LeftPlay, Play } from "../components/logo";
import { Typography } from "@/components/typography";
import InfoModal from "@/components/infoModal";
import ReciteModal from "@/components/modal/recite/reciteModal";
import { useEffect, useState } from "react";
import { DesignButton } from "@/components/button/designButton";
import ReciteModal2 from "@/components/modal/recite/reciteModal2";
import ReciteModal3 from "@/components/modal/recite/reciteModal3";
import ReciteModal4 from "@/components/modal/recite/reciteModal4";
import ReciteModal5 from "@/components/modal/recite/reciteModal5";
import ReciteModal6 from "@/components/modal/recite/reciteModal6";
import Symtoms from "@/components/infoModal/symtoms";
import Cure from "@/components/infoModal/cure";
import EvilEye from "@/components/infoModal/evileye";
import DashModal from "@/components/modal/dashboard/dashModal";

export const LandingPage = () => {

  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showReciteModal, setShowReciteModal] = useState(false);
  const [showReciteModal2, setShowReciteModal2] = useState(false);
  const [showReciteModal3, setShowReciteModal3] = useState(false);
  const [showReciteModal4, setShowReciteModal4] = useState(false);
  const [showReciteModal5, setShowReciteModal5] = useState(false);
  const [showReciteModal6, setShowReciteModal6] = useState(false);
  const [showDashModal, setShowDashModal] = useState(false);

  const closeAllModals = () => {
    setShowModal(false);
    setShowModal2(false);
    setShowModal3(false);
    setShowReciteModal(false);
    setShowReciteModal2(false);
    setShowReciteModal3(false);
    setShowReciteModal4(false);
    setShowReciteModal5(false);
    setShowReciteModal6(false);
  };
  const openRecite2 = () => {
    closeAllModals;
    setShowReciteModal2(true);
  };

  const openRecite3 = () => {
    closeAllModals;
    setShowReciteModal3(true);
  };
  const openRecite4 = () => {
    closeAllModals;
    setShowReciteModal4(true);
  };
  const openRecite5 = () => {
    closeAllModals;
    setShowReciteModal5(true);
  };
  const openRecite6 = () => {
    closeAllModals;
    setShowReciteModal6(true);
  };
  const openDashboard = () => {
    closeAllModals;
    setShowDashModal(true);
  };

  return (
    <div className="flex flex-col h-screen justify-between">
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
            onClick={() => {
              closeAllModals();
              setShowReciteModal(!showReciteModal);
            }}
          >
            Recite the prayer
          </DesignButton>
          <ReciteModal
            isvisible={showReciteModal}
            onClose={() => setShowReciteModal(false)}
            openRecite2={openRecite2}
            openRecite3={openRecite3}
          />
          <ReciteModal2
            isvisible={showReciteModal2}
            onClose={() => setShowReciteModal2(false)}
            openRecite3={openRecite3}
          />
          <ReciteModal3
            isvisible={showReciteModal3}
            onClose={() => setShowReciteModal3(false)}
            openRecite4={openRecite4}
          />
          <ReciteModal4
            isvisible={showReciteModal4}
            onClose={() => setShowReciteModal4(false)}
            openRecite5={openRecite5}
          />
          <ReciteModal5
            isvisible={showReciteModal5}
            onClose={() => setShowReciteModal5(false)}
            openRecite6={openRecite6}
          />
          <ReciteModal6
            isvisible={showReciteModal6}
            onClose={() => setShowReciteModal6(false)}
            openDashboard={openDashboard}
            openRecite3={openRecite3}
          />
          <DashModal
            isvisible={showDashModal}
            onClose={() => setShowDashModal(false)}
          />
        </Flex>
      </FlexColumn>
    </div>
  );
};
