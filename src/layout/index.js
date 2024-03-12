import Head from 'next/head';
import { Header } from './header';

const MainLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Evil Eye</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header />
      <div className="relative h-screen overflow-hidden">
        <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0">
          <source src="/background/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <img
          src="/background/background.png"
          alt="Overlay Image"
          className="absolute top-0 left-0 w-full h-full object-cover z-1 opacity-90"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-black opacity-50"></div>

        <div className="z-10 relative h-full">
          {children}
        </div>
      </div>
    </>
  );
};

export default MainLayout;
