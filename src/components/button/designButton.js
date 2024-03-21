import { FlexBetween, FlexCenter } from "../layout";
import { Design1, Design2 } from "../logo";
import { Typography } from "../typography";

export const DesignButton = ({
  variant = "primary",
  children,
  className = "",
  typoVariant = "buttonLabel2",
  ...rest
}) => {
  return (
    <FlexCenter
      className={[
        "h-[40px] bg-backgroundColor-brand-yellow hover:bg-backgroundColor-brand-hover shadow-buttonShadow2 border-2 border-border-button",
        className,
      ].join(" ")}
    >
      <Design1 />
      <button
        className="w-full h-[40px] p-2 px-[15px] flex items-center justify-center text-textColor-brand-gold border-none"
        {...rest}
      >
        <Typography classname="" variant={typoVariant}>
          {children}
        </Typography>
      </button>
      <Design2 />
    </FlexCenter>
  );
};
