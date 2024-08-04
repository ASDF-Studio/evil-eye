import Head from "next/head";
import { Header } from "./header";
import { BG1920, BG2880, BG420, BG960, BGvideo } from "@/components/background";

const SecondLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default SecondLayout;
