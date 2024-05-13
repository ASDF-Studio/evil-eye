import React from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Flex, FlexCenter } from "@/components/layout";
import { Typography } from "@/components/typography";
import ModalFrame from "../modalFrame";
import ModalScroll from "../modalScroll";

const Privacy = ({ isvisible, onClose }) => {
  // http://localhost:3000/?modal=privacy
  if (!isvisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <FlexCenter
      className="z-50 fixed left-[50%] bg-black bg-opacity-25 backdrop-blur-sm shadow-sm top-[50%]"
      id="wrapper"
      onClick={handleClose}
    >
      <ModalFrame onClose={onClose} title="PRIVACY POLICY">
        <ModalScroll className="px-5">
          <Typography
            variant="h11"
            classname=" text-color-brand-yellow2 drop-shadow-3xl "
          >
            privacy policy
          </Typography>
          <div className="pt-3">
            <Typography
              variant="h15"
              classname=" text-color-brand-yellow2 text-opacity-80"
            >
              Effective Date: May 6, 2024
            </Typography>
          </div>

          <div className="pt-6">
            <Typography
              variant="h15"
              classname=" text-color-brand-yellow2 text-opacity-80"
            >
              Welcome to Evil Remedy, your dedicated platform for finding relief
              from the evil eye through an authentic and ancient prayer service.
              This privacy policy outlines how we collect, use, and protect your
              information when you use our website.
            </Typography>
          </div>

          {/* 2nd */}

          <div>
            <div className="pt-[30px]">
              <Typography variant="h23" classname=" text-color-brand-yellow2">
                Information We Collect
              </Typography>
            </div>

            <div className="pt-[10px]">
              <Typography
                variant="h15"
                classname=" text-color-brand-yellow2 text-opacity-80"
              >
                When you use Evil Remedy, we may collect the following types of
                information:
              </Typography>
            </div>

            <div className="pt-[10px]">
              <Typography
                variant="h15"
                classname=" text-color-brand-yellow2 text-opacity-80 text-start"
              >
                <ul className="list-disc pl-6">
                  <li>
                    <span className="italic text-color-brand-yellow2 text-opacity-100">
                      Contact Information:{" "}
                    </span>
                    Your email address and phone number if you choose to provide
                    them.{" "}
                  </li>
                  <li>
                    <span className="italic text-color-brand-yellow2 text-opacity-100">
                      Personal Details:{" "}
                    </span>
                    Your name, and if applicable, the names of your loved ones
                    or pets for whom you seek the prayer service.
                  </li>
                </ul>
              </Typography>
            </div>
          </div>

          {/* end 2nd  */}

          <div>
            <div className="pt-[30px]">
              <Typography variant="h23" classname=" text-color-brand-yellow2">
                How We Use Your Information
              </Typography>
            </div>

            <div className="pt-[10px]">
              <Typography
                variant="h15"
                classname=" text-color-brand-yellow2 text-opacity-80"
              >
                The information we collect from you is used to:
              </Typography>
            </div>

            <div className="pt-[10px]">
              <Typography
                variant="h15"
                classname=" text-color-brand-yellow2 text-opacity-80 text-start"
              >
                <ul className="list-disc pl-6">
                  <li>
                    Provide personalized services for you, your loved ones, or
                    your pets.
                  </li>
                  <li>
                    Communicate with you about your service requests or
                    inquiries. Improve our services and website based on user
                    feedback and interactions.
                  </li>
                  <li>
                    Communicate with you about your service requests or
                    inquiries. Improve our services and website based on user
                    feedback and interactions.
                  </li>
                </ul>
              </Typography>
            </div>
          </div>

          <div>
            <div className="pt-[30px]">
              <Typography variant="h23" classname=" text-color-brand-yellow2">
                Sharing of Information
              </Typography>
            </div>

            <div className="pt-[10px]">
              <Typography
                variant="h15"
                classname=" text-color-brand-yellow2 text-opacity-80"
              >
                Evil Remedy respects your privacy:
              </Typography>
            </div>

            <div className="pt-[10px]">
              <Typography
                variant="h15"
                classname=" text-color-brand-yellow2 text-opacity-80 text-start"
              >
                <ul className="list-disc pl-6">
                  <li>
                    We{" "}
                    <span className="italic text-color-brand-yellow2 text-opacity-100">
                      do not{" "}
                    </span>
                    sell, trade, or otherwise transfer your personally
                    identifiable information to outside parties for their
                    marketing or promotional uses.
                  </li>
                  <li>
                    Your information will only be shared with third parties when
                    necessary to fulfill a specific service request, comply with
                    legal processes, or protect our rights and safety.
                  </li>
                </ul>
              </Typography>
            </div>
          </div>

          <div>
            <div className="pt-[30px]">
              <Typography variant="h23" classname=" text-color-brand-yellow2">
                Data Security
              </Typography>
            </div>

            <div className="pt-[10px]">
              <Typography
                variant="h15"
                classname=" text-color-brand-yellow2 text-opacity-80"
              >
                We implement a variety of security measures to maintain the
                safety of your personal information when you submit or access
                your personal information.
              </Typography>
            </div>
          </div>

          <div>
            <div className="pt-[30px]">
              <Typography variant="h23" classname=" text-color-brand-yellow2">
                Consent and Changes to our Privacy Policy
              </Typography>
            </div>

            <div className="pt-[10px]">
              <Typography
                variant="h15"
                classname=" text-color-brand-yellow2 text-opacity-80"
              >
                By using our site, you consent to our privacy policy. If we
                decide to change our privacy policy, we will post those changes
                on this page and update the effective date.
              </Typography>
            </div>
          </div>

          <div>
            <div className="pt-[30px]">
              <Typography variant="h23" classname=" text-color-brand-yellow2">
                Contact Us
              </Typography>
            </div>

            <div className="pt-[10px]">
              <Typography
                variant="h15"
                classname=" text-color-brand-yellow2 text-opacity-80"
              >
                If you have questions regarding this privacy policy, you may
                contact us using the information below:
              </Typography>
            </div>

            <div className="pt-[10px]">
              <Typography
                variant="h15"
                classname=" text-color-brand-yellow2 text-opacity-100 text-start"
              >
                info@evileyeremedy.com
              </Typography>
            </div>
          </div>
        </ModalScroll>
      </ModalFrame>
    </FlexCenter>
  );
};

export default Privacy;
