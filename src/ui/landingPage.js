import { Button } from "@/components/button";
import { Flex, FlexColumn } from "@/components/layout";
import { Borderline, LeftPlay, Play } from "../components/logo";
import { Typography } from "@/components/typography";
import InfoModal from "@/components/infoModal";
import { useState } from "react";
import { DesignButton } from "@/components/button/designButton";

export const LandingPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  const closeAllModals = () => {
    setShowModal(false);
    setShowModal2(false);
    setShowModal3(false);
  };

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Flex className="w-full h-full justify-center 1xl:mt-[50px]">
        <Flex className="w-[1440px] h-auto flex-col sm:flex-row  ">
          <FlexColumn className="h-full gap-10 sm:gap-0 sm:justify-between">
            <Flex className="relative w-full  pl-[18px] h-auto sm:ml-[18px] sm:mt-[18px] 1xl:ml-[275px] 1xl:mt-[-10px] 2xl:ml-[300px] 2xl:mt-[-20px] 5xl:mt-[-80px] 5xl:ml-[300px] 10xl:mr-[150px]">
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
                <div>
                  <h1 className="font-roman drop-shadow-3xl text-[35px] font-normal pb-5">
                    WHAT IS EVIL EYE
                  </h1>
                  <p className="text-justify font-rosarivo text-base font-normal w-auto pr-5 text-textColor-brand-yellow opacity-80">
                    The Greek traditional belief of the evil eye dates <br></br>{" "}
                    back to at least the 6th century BC, the Classical <br></br>{" "}
                    Antiquity, or the time period that encompassed the <br></br>{" "}
                    Classical Era in Ancient Greece, when it commonly <br></br>{" "}
                    appeared on drinking vessels. During this time, the{" "}
                    <br></br> Greek civilization was at its intellectual peak. A{" "}
                    <br></br> common theme in literature at the time was that
                    the <br></br> eyes were a source of deadly rays that could
                    bring <br></br> harm to others. Plutarch, the Ancient Greek
                    writer, is <br></br> one of those who wrote about this
                    concept. The <br></br> belief in the evil eye tended to
                    spread as Alexander <br></br> the Great brought the Greek
                    culture to the East.
                  </p>
                  <br />
                  <p className=" mb-6 font-rosarivo text-base font-normal w-auto pr-5 text-textColor-brand-yellow opacity-80">
                    The evil eye curse is a powerful malicious glance cast{" "}
                    <br></br> by a human on another human being, pet or thing{" "}
                    <br></br> out of anger, envy, greed, or any other negative{" "}
                    <br></br> emotion. The glare is so powerful that it can
                    cause <br></br> harm, injury, misfortune, physical, and
                    mental illness <br></br> to the afflicted person. There is
                    no particular reason <br></br> for getting an evil eye
                    curse. A person can <br></br> intentionally or
                    unintentionally cast it on someone/ <br></br> something they
                    praise or envy.
                  </p>
                </div>
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
                <div>
                  <h1 className="font-roman drop-shadow-3xl text-[35px] font-normal pb-5">
                    CURE
                  </h1>
                  <p className="font-rosarivo font-normal w-auto pr-5">
                    Evil Eye Remedy is the original and authentic cure of{" "}
                    <br></br> its kind. Relief from your symptoms is close at
                    hand. <br></br> The ancient and special Evil Eye prayer will
                    be said <br></br> for you, your loved one, your pet, or
                    household item. <br></br> The act of curing the Evil Eye or
                    ‘mati’ is called <br></br> ‘xematiasma’ in Greece, roughly
                    translating to “an <br></br> undoing of the eye”.
                  </p>
                  <br></br>
                  <p className="font-rosarivo font-normal w-auto pr-5 mb-6">
                    It is believed that there are several ways to perform a{" "}
                    <br></br> ‘xematiasma’, with the most powerful being with{" "}
                    <br></br> ‘vaskania’ or ancient ‘xematiasma’ prayers.
                  </p>
                </div>
              </InfoModal>
            </Flex>
          </FlexColumn>

          <Flex className="relative mx-auto w-full h-auto justify-end pb-[20px] pt-[27px] pr-[20px] items-end flex-col sm:flex-row  sm:pb-[5px] sm:mr-[36px] 1xl:mr-[225px] 1xl:items-start 1xl:pt-[55px] 2xl:mr-[290px] 2xl:flex-row 5xl:mr-[280px] 5xl:pt-[5px]">
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
              <div>
                <h1 className="font-roman drop-shadow-3xl text-[35px] font-normal pb-5">
                  SYMPTOMS
                </h1>
                <p className=" font-rosarivo font-normal w-auto pr-5">
                  Whenever a person gets affected with an evil eye <br></br>{" "}
                  curse, it affects them physically, mentally, <br></br>{" "}
                  emotionally, and financially. Here are some common <br></br>{" "}
                  signs and symptoms you can find in an afflicted <br></br>{" "}
                  person:
                </p>
                <ul className=" leading-normal font-display list-disc pl-7">
                  <li>Fever, Headache, Nausea</li>
                  <li>Heavy Eyelids and Yawning</li>
                  <li>Mood Swings</li>
                  <li>Anger & Frustration</li>
                  <li>Financial Loss</li>
                  <li>Physical Illness</li>
                  <li>Arguments with loved ones</li>
                  <li>Feeling discomfort in social gatherings</li>
                </ul>
                <p className="font-rosarivo font-normal w-auto mb-6 pr-5">
                  Pregnant ladies, newborn babies, kids, young and <br></br>{" "}
                  successful people are more vulnerable to the evil eye{" "}
                  <br></br> curse as they consciously or unconsciously drive{" "}
                  <br></br> more attention and praise from other people.
                </p>
              </div>
            </InfoModal>
          </Flex>
        </Flex>
      </Flex>

      {/* bottom part */}
      <FlexColumn className="items-center pb-[120px] sm:pb-[190px] 1xl:pb-[170px] 2xl:pb-[400px]">
        <Borderline />
        <Typography
          variant="h2"
          classname="w-[300px] pt-[10px] text-color-brand-yellow2 1xl:w-[852px] 2xl:w-[852px]"
        >
          Relief from the Evil Eye
        </Typography>
        <Typography
          variant="body"
          classname=" pt-[10px] w-[300px] 1xl:w-[805px] 2xl:w-[805px] text-textColor-brand-yellow text-opacity-63"
        >
          Evil Eye Remedy is the original and authentic cure of its kind. Relief
          from your symptoms is close at hand. The ancient and special Evil Eye
          prayer will be said for you, your loved one, or your pet.
        </Typography>

        <Flex className="pt-5">
          <DesignButton
            variant="text"
            className=""
            typoVariant="buttonLabel2"
            onClick={() => {
              closeAllModals();
            }}
          >
            Recite the prayer
          </DesignButton>
        </Flex>
      </FlexColumn>
    </div>
  );
};
