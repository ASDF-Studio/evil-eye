import { Flex, FlexBetween, FlexCenter, FlexColumn } from "../layout";
import { Typography } from "../typography";

export const StatsText = ({
  number = 0,
  title = "",
  className = "",
  ...rest
}) => {
  return (
    <FlexColumn className="w-full p-2">
      <Typography variant="title3" classname="text-main-sky2">
        {number}
      </Typography>
      <Typography variant="heading3" classname="text-main-white">
        {title}
      </Typography>
    </FlexColumn>
  );
};
