export const Typography = ({
  children,
  variant = "label",
  classname = "",
}) => {
  const variantMapping = {
    buttonLabel: "text-center text-[20px] font-normal uppercase font-roman",
    buttonLabel2: "text-center text-[18px] font-normal uppercase font-roman",
    h1: "text-center font-roman text-[35px] font-normal tracking-[-3.5px] leading-[24px] uppercase drop-shadow-3xl hover:tracking-[-4px]",
    h2: "text-center 1xl:text-[65px] text-[35px] font-normal 1xl:tracking-[-6.5px] tracking-[-3.5px] drop-shadow-3xl leading-normal uppercase font-roman",
    h11: "text-center font-roman text-[35px] leading-[33.25px] font-normal tracking-[-3.5px] drop-shadow-3xl uppercase ",
    h12: "text-center font-rosarivo text-[18px] font-normal leading-[25.25px] tracking-[-0.9px]",
    h13: "text-center font-rosarivo text-[16px] font-normal leading-[22.4px] ",
    h14: "text-center font-roman text-[22px] font-normal leading-[20.88px] tracking-[-2.2px] drop-shadow-3xl",
    h17: "text-center font-rosarivo w-[329px] h-[20px] text-[14px] italic font-normal opacity-[50%] leading-[-0.7px] ",
    h15: "text-center font-rosarivo text-[14px] font-normal leading-[19.6px] ",
    h16: "text-center font-roman text-[18px] font-normal leading-[25.25px] tracking-[-0.9px]",
    h18: "text-center font-roman text-[35px] leading-[33.25px] font-normal tracking-[-3.5px] drop-shadow-3xl uppercase ",
    h19: "text-center h-[50px] font-rosarivo text-[18px] font-normal leading-[24.25px] tracking-[-0.9px]",
    h20: "font-rosarivo text-[12px] font-normal leading-[16.8px]",
    h21: "text-center font-rosarivo text-[18px] font-normal leading-[24px]  ",
    h22: "text-center font-rosarivo text-[12px] font-normal leading-normal tracking-[-0.6px]",
    h23: "text-center text-[18px] font-normal font-rosarivo tracking-[-0.9px]",
    body: "text-center text-base font-normal font-rosarivo opacity-[63%] leading-[22.4px] tracking-[-0.8px]",
    title: "text-center text-[18px] font-normal font-roman tracking-[-0.9px]",
    placeholder: "text-center text-[16px] font-normal font-rosarivo tracking-[-0.8px]",
    mobileNav: "text-color-brand-yellow2 text-center text-[20px] font-normal uppercase font-roman tracking-[-2px] whitespace-nowrap",
  };

  return (
    <span className={[variantMapping[variant], classname].join(" ")}>
      {children}
    </span>
  );
};
