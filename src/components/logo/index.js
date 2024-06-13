import Image from 'next/image';
import user from '../../../public/logos/user.svg';
// import logo from '../../../public/logo.svg';
import logo from '../../../public/logo.png';
import mobileBars from '../../../public/logos/mobileBars.svg';
import xmark from '../../../public/logos/xmark.svg';
import x from '../../../public/logos/x.svg';
import play from '../../../public/logos/play.svg';
import leftPlay from '../../../public/logos/leftPlay.svg';
import borderline from '../../../public/logos/borderline.svg';
import design1 from '../../../public/logos/design1.svg';
import design2 from '../../../public/logos/design2.svg';
import loadingDesign1 from '../../../public/logos/loadingDesign1.svg';
import loadingDesign2 from '../../../public/logos/loadingDesign2.svg';
import pen from '../../../public/logos/pen.svg';
import email from '../../../public/logos/email.svg';

import eye from '../../../public/logos/eye.svg';
import chevronRight from '../../../public/logos/chevronRight.svg';
import diamondExclamation from '../../../public/logos/diamondExclamation.svg';
import uploadCloud from '../../../public/logos/uploadCloud.svg';
import stripe from '../../../public/logos/stripe.svg'


export const LogoWithBackground = () => {
  const containerStyle = {
    backgroundImage: 'url("/background/shadow.png")',
    backgroundSize: 'cover',
    width: 'auto',
    height: 'auto',
    display: 'flex',
  };

  return (
    <div style={containerStyle} className='p-8'>
      <Logo />
    </div>
  );
};

export const LogoWithBackgroundMobile = () => {
  return (
    <div className="relative w-[147px] h-auto p-3">
      <div className="absolute top-[-20px] left-0 w-full h-[calc(100%+20px)]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'url("/background/shadow.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>
      <Logo />
    </div>
  );
};

export const Logo = () => {
  return (
    <Image
      rel="preload"
      src={logo}
      width={147}
      height={147}
       priority="true"
      alt="logo"
      className=""
    />
  );
};

export const User = () => {
  return (
    <Image
      rel="preload"
      src={user}
      width={18}
      height="auto"
       priority="true"
      alt="user"
      className='relative rounded-xl shadow'
    />
  );
};

export const MobileBars = () => {
  return (
    <Image
      src={mobileBars}
      width={18}
      height="auto"
      alt="mobile bars"
      className=""
    />
  );
};

export const Xmark = () => {
  return (
    <Image
      src={xmark}
      width={37}
      height="auto"
      alt="xmark"
      className="mr-3"
    />
  );
};
export const Stripe = () => {
  return (
    <Image
      src={stripe}
      width={0}
      height="auto"
      alt="stripe"
      className="mr-3"
    />
  );
};

export const X = () => {
  return (
    <Image
      src={x}
      width={18}
      height="auto"
      alt="x"
      className=""
    />
  );
};

export const Play = () => {
  return (
    <Image
      src={play}
      width={0}
      height={"24"}
      alt="eye"
      className=""
    />
  );
};

export const LeftPlay = () => {
  return (
    <Image
      src={leftPlay}
      width={0}
      height={"24"}
      alt="leftPlay"
      className=""
    />
  );
};

export const Borderline = () => {
  return (
    <Image
      src={borderline}
      width={0}
      height={"24"}
      alt="borderline"
      className=""
    />
  );
};

export const Design1 = () => {
  return (
    <Image
      src={design1}
      width={18}
      height={0}
      alt="design1"
      className=""
    />
  );
};

export const Design2 = () => {
  return (
    <Image
      src={design2}
      width={18}
      height={0}
      alt="design2"
      className=""
    />
  );
};

export const LoadingDesign1 = () => {
  return (
    <Image
      src={loadingDesign1}
      width={18}
      height={0}
      alt="loadingDesign1"
      className=""
    />
  );
};

export const LoadingDesign2 = () => {
  return (
    <Image
      src={loadingDesign2}
      width={18}
      height={0}
      alt="loadingDesign2"
      className=""
    />
  );
};


export const Pen = () => {
  return (
    <Image
      src={pen}
      width={"18"}
      height={0}
      alt="pen"
      className="cursor-pointer"
    />
  );
};

export const Email = () => {
  return (
    <Image
      src={email}
      width={"18"}
      height={0}
      alt="email"
      className=""
    />
  );
};


//

export const Eye = () => {
  return (
    <Image
      src={eye}
      width={0}
      height={"24"}
      alt="eye"
      className="text-white text-lg"
    />
  );
};

export const ChevronRight = () => {
  return (
    <Image
      src={chevronRight}
      width={0}
      height={"12"}
      alt="chevronRight"
      className="text-center text-black text-sm"
    />
  );
};

export const DiamondExclamation = () => {
  return (
    <Image
      src={diamondExclamation}
      width={0}
      height={"24"}
      alt="diamondExclamation"
      className="text-center"
    />
  );
};

export const UploadCloud = () => {
  return (
    <Image
      src={uploadCloud}
      width={0}
      height={"100"}
      alt="uploadCloud"
      className="text-center"
    />
  );
};

export const Calender = () => {
  return (
    <Image
      src={calender}
      width={0}
      height={"100"}
      alt="calender"
      className="text-center"
    />
  );
};
