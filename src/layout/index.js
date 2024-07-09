import Head from "next/head";
import { Header } from "./header";
import { BG1920, BG2880, BG420, BG960, BGvideo } from "@/components/background";

const MainLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Evil Eye</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="relative">
        {/* <div className="block lsm:hidden">
          <BG420 />
        </div> */}
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
        <div className="relative overflow-auto mt-[px] sm:mt-0">
          <div className="absolute inset-0 -z-10">
            <BG420 />
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default MainLayout;
