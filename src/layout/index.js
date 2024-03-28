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
      <div className="h-screen overflow-hidden">
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
        <BGvideo />

        <div className="z-10 relative mt-16 overflow-y-auto h-full sm:mt-0 sm:h-full  sm:overflow-hidden">{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
