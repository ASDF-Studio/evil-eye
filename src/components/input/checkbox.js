import { Flex, FlexBetween, FlexCenter } from "../layout";
import { Design1, Design2 } from "../logo";
import { Typography } from "../typography";

export const CheckBox = ({
  type = "checkbox",
  placeholder = "",
  className = "",
  typoVariant = "placeholder",
  children,
  ...rest
}) => {
  return (
    <FlexBetween
      className={[
        "w-full h-[40px] border-[#D2A42B] border-2 text-brand-gold bg-brand-blue absolute",
        className,
      ].join(" ")}
    >
      <Design1 />
      <Flex className="absolute justify-start items-center w-full h-[40px] z-50">
        <input
          type={type}
          className="mr-2 ml-6 h-[22px] w-[22px] border-2 border-border-checkBox appearance-none checked:bg-[url('/logos/check.svg')] bg-cover bg-center cursor-pointer"
        />
        <Typography classname="text-border-checkBox" variant={typoVariant}>
          {children}
        </Typography>
      </Flex>
      <Design2 />
    </FlexBetween>
  );
};
