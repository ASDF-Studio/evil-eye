import React from "react";

import ModalFrame from "../modalFrame";
import { Typography } from "../../typography";
import { Flex, FlexBetween, FlexCenter, FlexColumn } from "../../layout";
import { Button } from "react-scroll";
import { DesignButton } from "../../button/designButton";
import { DesignButton3 } from "../../button/designButton3";
import { Input } from "@/components/input";
import { CheckBox } from "@/components/input/checkbox";
import { DesignButton2 } from "@/components/button/designButton2";


const ReciteModal4 = ({ 
  isvisible,
  onClose,
  openRecite5,

 }) => {
  if (!isvisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  const openReciteModal5 = () => {
    onClose();
    openRecite5();
  };
  

  return (
    <FlexCenter
      className="z-50 fixed top-[50%] left-[50%] bg-black bg-opacity-25 backdrop-blur-sm shadow-sm"
      id="wrapper"
      onClick={handleClose}
    >
      <ModalFrame onClose={onClose} title="Recite the prayer">
      <div className=" divide-[#FFCE70] divide-y-2">
        <div className="px-5">
        <div>
          <Typography
            variant="h11"
            classname="text-color-brand-yellow2 drop-shadow-3xl "
          >
            PAYMENT
          </Typography>
        </div>
        <FlexColumn className="mb-3.5 gap-2">
          

          

          <div className="pt-5 pb-5">
          <Typography
              variant="h12"
              classname="text-color-brand-yellow2 opacity-80"
            >
              Ready for the prayer? Please pay and continue.
            </Typography>
          </div>
          
          <hr className="w-auto border-color-brand-op" />

          <FlexBetween className="pb-3.5 pt-2 w-auto ">
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
                  <hr className="w-auto border-color-brand-op" />

          <FlexBetween className="pt-2 w-auto ">
                    <Flex className="flex-col sm:flex-row gap-2">
                    <Typography
                      variant="h13"
                      classname=" text-color-brand-yellow2 opacity-80"
                    >
                      Coupon
                    </Typography>
                    <Typography
                      variant="h20"
                      classname=" text-color-brand-yellow2 opacity-60"
                    >
                      50% Discount Applied
                    </Typography>
                    </Flex>
                    <Flex className="justify-end h-full w-[190px]">
                    <Flex className="relative w-[170px] h-[40px]">
                <DesignButton3>GRKDAY</DesignButton3>
              </Flex>
                    </Flex>
                  </FlexBetween>
          

          
        </FlexColumn>
        </div>

        <div className="px-5">
            <div className="pt-3.5">
          <FlexBetween className="pt-2 w-auto">
                    <Typography
                      variant="h13"
                      classname=" text-color-brand-yellow2 opacity-80"
                    >
                      Total
                    </Typography>
                    <Typography
                      variant="h14"
                      classname=" text-color-brand-yellow2"
                    >
                      $3.3
                    </Typography>
                  </FlexBetween>
          </div>

          <Flex className=" justify-center pt-5 pb-5 w-[100%]">
            <DesignButton
              className=" w-full"
              typoVariant="buttonLabel2"
               onClick={openReciteModal5}
            >
              CONTINUE WITH PAYMENT
            </DesignButton>
          </Flex>
                    <FlexCenter className="pb-5"><Typography
                      variant="h13"
                      classname=" text-color-brand-yellow2 opacity-80"
                    >
                      Secured by
                    </Typography>
                    
                    
                    </FlexCenter>
          </div>
          </div>
      </ModalFrame>
    </FlexCenter>
  );
};

export default ReciteModal4;
