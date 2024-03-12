import { Flex, FlexBetween, FlexCenter, FlexColumn } from "../layout";
import { Typography } from "../typography";

export const StatsInfo = ({
  number = "-",
  title = "",
  className = "",
  ...rest
}) => {
  return (
    <Flex className="w-full p-2 items-center gap-2">
      <Typography variant="heading4" classname="text-main-sky2">
        {title}
      </Typography>
      <Typography variant="title4" classname="text-slate-400 pb-1">
        {number}
      </Typography>
    </Flex>
  );
};
