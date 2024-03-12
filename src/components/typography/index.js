export const Typography = ({
  children,
  variant = "label",
  classname = "",
}) => {
  const variantMapping = {
    buttonLabel: "text-center text-[20px] font-normal uppercase font-roman",
    buttonLabel2: "text-center text-[18px] font-normal uppercase font-roman",
    h1: "text-center text-[35px] font-normal uppercase font-roman",
    h2: "text-center text-[65px] font-normal uppercase font-roman",
    body: "text-center text-base font-normal rosarivo",
  };

  return (
    <span className={[variantMapping[variant], classname].join(" ")}>
      {children}
    </span>
  );
};
