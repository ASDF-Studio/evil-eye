import { FlexBetween, FlexCenter } from "../layout";
import { Design1, Design2 } from "../logo";
import { Typography } from "../typography";

export const DesignButton3 = ({
  variant = "secondary",
  children,
  className = "",
  typoVariant = "buttonLabel3",
  ...rest
}) => {
  return (
    <FlexCenter className="justify-between w-full h-[40px] border-[#D2A42B] border-2 text-brand-gold bg-transparent absolute">
        <Design1 />
        <button
          className="border-none w-auto h-[40px] hover:cursor-pointer"
          {...rest}
        >
          <Typography variant="h16" classname="text-color-brand-yellow2">
            {children}
          </Typography>
        </button>
        <Design2 />
    </FlexCenter>
  );
};
