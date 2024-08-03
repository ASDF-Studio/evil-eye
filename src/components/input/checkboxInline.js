import { Flex, FlexBetween, FlexCenter } from "../layout";
import { Design1, Design2 } from "../logo";
import { Typography } from "../typography";

export const CheckBoxInline = ({
  type = "checkbox",
  checked = false,
  onChange,
  placeholder = "",
  className = "",
  typoVariant = "h13",
  children,
  ...rest
}) => {
  return (
    <FlexBetween
      className={[
        "w-full pt-[20px] text-brand-gold bg-brand-blue absolute",
        className,
      ].join(" ")}
    >
      <Flex className="absolute justify-start items-center w-full z-50">
        <input
          type={type}
          checked={checked}
          onChange={onChange}
          className={`mr-2 h-[22px] w-[22px] border-2 border-border-checkBox appearance-none checked:bg-[url('/logos/check.svg')] bg-auto bg-no-repeat bg-center cursor-pointer`}
        />
        <Typography classname="text-border-checkBox" variant={typoVariant}>
          {children}
        </Typography>
      </Flex>
    </FlexBetween>
  );
};
