import { Flex } from "../layout";
import { Typography } from "../typography";

export const StatusTag = ({
  variant = "unverified",
  children,
  className = "",
  endIcon,
  typoVariant = "h1",
  ...rest
}) => {
  const buttonMapping = {
    unverified:
      "text-main-red4 text-[25px] font-bold font-['Halvar Breitschrift']",
    verified:
      "text-main-teal4 text-[25px] font-bold font-['Halvar Breitschrift']",
  };

  return (
    <Flex className="gap-2">
        {endIcon && endIcon}
        <Typography classname={[buttonMapping[variant]].join(" ")} variant={typoVariant}>
          {children}
        </Typography>
    </Flex>
  );
};
