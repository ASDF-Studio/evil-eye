import Image from 'next/image';
import bg420 from '../../../public/background/bg420.jpg';
import bg960 from '../../../public/background/bg960.jpg';
import bg1920 from '../../../public/background/bg1920.jpg';
import bg2880 from '../../../public/background/bg2880.jpg';

export const BGvideo = () => {
    return (
        <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover mix-blend-lighten">
          <source src="/background/background.mp4" type="video/mp4" />
        </video>
    );
  };

export const BG420 = () => {
    return (
      <Image
        rel="preload"
        src={bg420}
        width="auto"
        height="auto"
        priority={true}
        alt="bg420"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    );
  };

export const BG960 = () => {
  return (
    <Image
      rel="preload"
      src={bg960}
      width="auto"
      height="auto"
      priority={true}
      alt="bg960"
      className="absolute top-0 left-0 w-full h-full object-cover"
    />
  );
};

export const BG1920 = () => {
    return (
      <Image
        rel="preload"
        src={bg1920}
        width="auto"
        height="auto"
        priority={true}
        alt="bg1920"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    );
  };

  export const BG2880 = () => {
    return (
      <Image
        rel="preload"
        src={bg2880}
        width="auto"
        height="auto"
        priority={true}
        alt="bg2880"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    );
  };