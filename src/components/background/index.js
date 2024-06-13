import Image from "next/image";
import bg420 from "../../../public/background/bg420.jpg";
import bg960 from "../../../public/background/bg960.jpg";
import bg1920 from "../../../public/background/bg1920.jpg";
import bg2880 from "../../../public/background/bg2880.jpg";
import prayerbg1920 from "../../../public/background/prayer_Background.png";
import eyeRotate from "../../../public/background/EyeRotate.svg";

export const BGvideo = () => {
  return (
    <video
      autoPlay
      loop
      muted
      preload="auto"
      playsInline
      priority="true"
      className="absolute top-0 left-0 w-full h-full object-cover mix-blend-lighten"
    >
      <source src="/background/background.mp4" type="video/mp4" />
    </video>
  );
};

export const PrayerBGvideo = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      priority="true"
      className="absolute top-0 left-0 w-full h-full object-cover mix-blend-soft-light"
    >
      <source src="/background/prayer_Background.mp4" type="video/mp4" />
    </video>
  );
};

export const PrayerBG = () => {
  return (
    <div className="w-full h-full">
      {/* PrayerBG image */}
      <Image
        rel="preload"
        src={bg960}
        width="auto"
        height="auto"
        priority="true"
        alt="prayerbg1920"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-[38.2%] left-[50.8%] transform -translate-x-1/2 -translate-y-1/2">
        <EyeRotate />
      </div>
    </div>
  );
};

export const PrayerBGDone = () => {
  return (
    <div className="w-full h-full">
      {/* PrayerBG image */}
      <Image
        rel="preload"
        src={bg960}
        width="auto"
        height="auto"
        priority="true"
        alt="prayerbg1920"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    </div>
  );
};

export const PrayerBGMobile = () => {
  return (
    <div className="w-full h-full">
      {/* PrayerBG image */}
      <Image
        rel="preload"
        src={bg1920}
        width="auto"
        height="auto"
        priority="true"
        alt="prayerbg1920"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-[38.3%] left-[49%] transform -translate-x-1/2 -translate-y-1/2">
        <EyeRotate />
      </div>
    </div>
  );
};

export const EyeRotate = () => {
  return (
    <Image
      src={eyeRotate}
      width={"auto"}
      height={"auto"}
      alt="eye"
      className="rotate-animation-step w-[60px] h-[60px] sm:w-[65px] sm:h-[65px] h-800:w-[50px] h-800:h-[50px] h-680:w-[45px] h-680:h-[45px]"
    />
  );
};

export const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-filter backdrop-blur z-50">
      <Image
        src={eyeRotate}
        width={"80"}
        height={"80"}
        alt="eye"
        className="animate-spin-slow"
      />
    </div>
  );
};

// export const BG420 = () => {
//   return (
//     <Image
//       rel="preload"
//       src={bg420}
//       layout="fill"
//       objectFit="cover"
//       priority="true"
//       alt="bg420"
//     />
//   );
// };

export const BG420 = () => {
  return (
    <div className=" absolute w-[100%] h-[100%]">
      <Image
        src={bg420}
        fill
        style={{ objectFit: "cover" }}
        priority
        alt="bg420"
        className="absolute w-full h-full"
      />
    </div>
  );
};

export const BG960 = () => {
  return (
    <Image
      rel="preload"
      src={bg960}
      width="auto"
      height="auto"
      priority="true"
      alt="bg960"
      className="absolute w-full h-full object-cover"
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
      priority="true"
      alt="bg1920"
      className="absolute w-full h-full object-cover"
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
      priority="true"
      alt="bg2880"
      className="absolute w-full h-full object-cover"
    />
  );
};
