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
    <FlexCenter className="bg-backgroundColor-brand-yellow shadow-buttonShadow2 border-2 border-border-button">
        <FlexBetween>
            <Design1/>
                <button className="w-full h-[40px] p-2 px-[15px] text-textColor-brand-gold border-none">
                    <Typography classname="" variant={typoVariant}>
                        {children}
                    </Typography>
                </button>
            <Design2 />
        </FlexBetween>
    </FlexCenter>
  );
};