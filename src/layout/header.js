import React, { useState } from 'react';
import Link from "next/link";
import { Logo, LogoWithBackground, MobileBars, ProfilePerson, User, Xmark } from '../components/logo';

import { Button } from '@/components/button';
import { Typography } from '@/components/typography';
import { Flex, FlexCenter, FlexColumn } from '@/components/layout';
import LoginModal from '@/components/modal/loginModal';
import DashModal from '@/components/modal/dashModal';

const NAV__LINK = [
  {
    path: 'price',
    display: 'Price',
    icon: '',
  },
  {
    path: 'contact',
    display: 'Contact Us',
    icon: '',
  },
  {
    path: 'login',
    display: 'login',
    icon: 'user',
  },
];


export const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showDashModal, setShowDashModal] = useState(false);

  const closeHighlightModal = () => {
    setShowLoginModal(false);
    setShowDashModal(false);
};

  const handlePath = (path) => {
    {
      path == 'login' && setShowLoginModal(!showLoginModal)
      
    }
    {
      
      path == 'price' && setShowDashModal(!showDashModal)
    }
  }
  

  return (
  <>
      <div className="w-full mt-[10px] fixed z-50">
        <FlexCenter
          className={[
            'justify-between h-[60px]',
          ].join(' ')}
        >
          <Link href={"/"} className=''>
            <LogoWithBackground />
          </Link> 

          <FlexCenter className="gap-2 pr-8">

          {NAV__LINK.map((item, index) => (
              <React.Fragment key={index}>
                <Button variant="text2" onClick={() => {
                  closeHighlightModal();
                  handlePath(item.path)}}>
                  <FlexCenter className="gap-2">
                    {
                      item.icon && <User />
                    }
                    <Typography variant="buttonPrimary" classname=" text-color-brand-yellow2 font-roman">
                      {item.display}
                    </Typography>
                  </FlexCenter>
                </Button>
                {index < NAV__LINK.length - 1 && (
                  <Flex className="text-center justify-center">
                    <i className="w-[1px] h-[40px] border-r-2 border-color-brand-yellow2 opacity-20" />
                  </Flex>
                )}
              </React.Fragment>
            ))}

            <Flex className="text-center justify-center 1xl:hidden">
              <i className="w-[1px] h-[40px] border-r-2 border-lightBlue mr-3" />
            </Flex>

            <Flex
              className="text-center 1xl:hidden"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? <Xmark /> : <MobileBars />}
            </Flex>
          </FlexCenter>
        </FlexCenter>

        <FlexColumn
            className={`w-auto h-auto v-screen items-start justify-center gap-5 shadow-headerShadow 
            ${navbar ? 'p-5 md:p-0 block' : 'hidden'}`}
        >
            {NAV__LINK.map((item, index) => (
                <Button key={index} variant="text" onClick={() => {
                  handlePath(item.path);
                  closeHighlightModal();
                  setShowDashModal(!showDashModal);
                  scrollToPage(item.path)}}>
                    {item.display}
                </Button>
            ))}
        </FlexColumn>

      </div>

      <LoginModal isvisible={showLoginModal} onClose={() => setShowLoginModal(false)}/>
      <DashModal isvisible={showDashModal} onClose={() => setShowDashModal(false)}/>
    </>
  );
};
