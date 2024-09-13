import Head from "next/head";
import { Header } from "./header";
import { BG1920, BG2880, BG420, BG960, BGvideo } from "@/components/background";

const MainLayout = ({ children }) => {
  return (
    <>
      <Head>
      {/* Google Tag (gtag.js) */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-KZ9PG1ENGY"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KZ9PG1ENGY');
          `,
        }}
      />

        <title>Evil Eye Remedy - Powerful Protection Against the Evil Eye</title>
        <meta name="Evil Eye Remedy - Powerful Protection Against the Evil Eye" />
        <meta
          name="description"
          content="Unlock the power of the original Evil Eye Remedy. An ancient prayer will be performed to protect you or your loved one from negative energies."
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://evileyeremedy.com/"
          key="canonical"
        />
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
