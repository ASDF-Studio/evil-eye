import Image from 'next/image';
import user from '../../../public/logos/user.svg';
import logo from '../../../public/logo.svg';
import mobileBars from '../../../public/logos/mobileBars.svg';
import xmark from '../../../public/logos/xmark.svg';
import play from '../../../public/logos/play.svg';
import leftPlay from '../../../public/logos/leftPlay.svg';
import borderline from '../../../public/logos/borderLine.png';
import design1 from '../../../public/logos/design1.png';
import design2 from '../../../public/logos/design2.png';

import eye from '../../../public/logos/eye.svg';
import chevronRight from '../../../public/logos/chevronRight.svg';
import diamondExclamation from '../../../public/logos/diamondExclamation.svg';
import uploadCloud from '../../../public/logos/uploadCloud.svg';
import calender from '../../../public/logos/calender.svg';


export const Logo = () => {
  return (
    <Image
      rel="preload"
      src={logo}
      width={147}
      height="auto"
      priority={true}
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
      priority={true}
      alt="user"
      className='relative rounded-xl shadow'
    />
  );
};

export const MobileBars = () => {
  return (
    <Image
      src={mobileBars}
      width={37}
      height="auto"
      alt="mobile bars"
      className="mr-3"
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
      width={0}
      height={"40"}
      alt="design1"
      className=""
    />
  );
};

export const Design2 = () => {
  return (
    <Image
      src={design2}
      width={0}
      height={"40"}
      alt="design1"
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
