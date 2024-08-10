import { Header } from "./header";

const SecondLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default SecondLayout;
