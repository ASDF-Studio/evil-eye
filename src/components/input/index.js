import { Flex, FlexBetween, FlexCenter } from "../layout";
import { Design1, Design2 } from "../logo";
import { Typography } from "../typography";

export const Input = ({
  value = "",
  type = "text",
  placeholder = "",
  className = "",
  ...rest
}) => {
  return (
    <FlexBetween
      className={[
        "w-full h-[40px] border-[#D2A42B] border-2 text-brand-gold bg-brand-blue relative",
        className,
      ].join(" ")}
    >
      <Design1 />
      <Flex className="relative justify-start items-center w-full h-[40px] z-50">
        <input
          value={value}
          type={type}
          name={type}
          className="text-[16px] font-normal font-rosarivo tracking-[-0.8px] outline-none bg-transparent items-center placeholder:text-textColor-placeholder absolute flex w-full px-2 text-textColor-brand-gold2 h-[40px] "
          placeholder={placeholder}
          required
          {...rest}
        />
      </Flex>
      <Design2 />
    </FlexBetween>
  );
};
