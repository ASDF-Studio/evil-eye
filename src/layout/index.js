import Head from "next/head";
import { Header } from "./header";
import { BG1920, BG2880, BG420, BG960, BGvideo } from "@/components/background";

const MainLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Evil Eye</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header />

      <div className="relative overflow-hidden">
        {/* Background images with fixed position */}
        <div className="absolute inset-0 overflow-hidden fixed-bg z-0">
          <div className="block lsm:hidden">
            <BG420 />
          </div>
          <div className="hidden lsm:block">
            <BG960 />
          </div>
          <div className="hidden x:block">
            <BG1920 />
          </div>
          <div className="hidden 5xl:block">
            <BG2880 />
          </div>
        </div>
        {/* Background video */}
        <BGvideo />

        {/* Content container */}
        <div className="z-10 relative overflow-y-auto max-h-screen scrollbar scrollbar-thumb-[#FFCE70] scrollbar-track-transparent scrollbar-corner-transparent">
          {children}
        </div>
      </div>
    </>
  );
};

export default MainLayout;
