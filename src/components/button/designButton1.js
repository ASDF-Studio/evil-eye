import { FlexBetween, FlexCenter } from "../layout";
import { Design1, Design2 } from "../logo";
import { Typography } from "../typography";

export const DesignButton1 = ({
  variant = "h13",
  children,
  className = "",
  typoVariant = "buttonLabel2",
  ...rest
}) => {
  return (
    <FlexCenter
      className={[
        "h-[60px] lsm:h-[40px] bg-backgroundColor-brand-yellow2 hover:bg-backgroundColor-brand-hover shadow-buttonShadow2 border-2 border-border-button",
        className,
      ].join(" ")}
    >
      <Design1 />
      <button
        className="w-full h-[40px] p-2 px-0 sm:px-[15px] flex items-center justify-center text-textColor-brand-gold border-none"
        {...rest}
      >
        <Typography variant="h21" classname="" >
          {children}
        </Typography>
      </button>
      <Design2 />
    </FlexCenter>
  );
};