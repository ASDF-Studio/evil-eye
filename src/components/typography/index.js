export const Typography = ({
  children,
  variant = "label",
  classname = "",
}) => {
  const variantMapping = {
    buttonLabel: "text-center text-[20px] font-normal uppercase font-roman",
    buttonLabel2: "text-center text-[18px] font-normal uppercase font-roman",
    h1: "text-center font-roman text-[35px] font-normal tracking-[-3.5px] uppercase text-shadow-sm hover:tracking-[-4px]",
    h2: "text-center text-[65px] font-normal tracking-[-6.5px] uppercase font-roman",
    body: "text-center text-base font-normal font-rosarivo leading-[22.4px] tracking-[-0.8px]",
    title: "text-center text-[18px] font-normal font-roman tracking-[-0.9px]",
  };

  return (
    <span className={[variantMapping[variant], classname].join(" ")}>
      {children}
    </span>
  );
};
