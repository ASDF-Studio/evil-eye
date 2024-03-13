import Head from 'next/head';
import { Header } from './header';
import { BG1920, BGvideo } from '@/components/background';

const MainLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Evil Eye</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header />
      <div className="h-screen overflow-hidden">

        <BG1920 />
        <BGvideo />

        <div className="z-10 relative h-full">
          {children}
        </div>
      </div>
    </>
  );
};

export default MainLayout;
