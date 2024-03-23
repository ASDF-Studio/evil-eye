import { Typography } from "../typography";

export const Button = ({
  variant = "primary",
  children,
  className = "",
  endIcon,
  leftIcon,
  typoVariant = "title",
  ...rest
}) => {
  const buttonMapping = {
    navButton:
      "shadow text-main-sky5 bg-main-sky9 bg-opacity-40 rounded-xl pl-5 pr-3",
    text: "text-color-brand-yellow hover:underline transition-all duration-200",
    text2: "text-color-brand-yellow",
    primary:
      "w-56 h-[45px] bg-main-sky5 rounded-xl shadow shadow-buttonShadow",
    secondary:
      "w-56 h-[45px] bg-main-sky5 bg-opacity-20 rounded-xl border border-sky-500",
      h12: "text-center font-rosarivo text-[18px] font-normal leading-[25.25px] tracking-[-0.9px]",
      
  };

  return (
    <button className={[buttonMapping[variant], "flex justify-center items-center gap-3"].join(" ")} {...rest}>
      <div>
        {
          leftIcon ? 
            <div className="">
              {leftIcon && leftIcon}
            </div> 
            : null
        }
      </div>
      <div
        className={[
          "", className
        ].join(" ")}
      >
        <Typography classname="" variant={typoVariant}>
          {children}
        </Typography>
      </div>
      <div>
        {
          endIcon ? 
            <div className="">
              {endIcon && endIcon}
            </div> 
            : null
        }
      </div>
    </button>
  );
};
