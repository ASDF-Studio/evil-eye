import { Flex, FlexCenter, FlexColumn } from "../layout";
import { Typography } from "../typography";

export const StatsCircle = ({
  variant = "primary",
  number = 0,
  title = "",
  className = "",
  typoVariant = "title3",
  ...rest
}) => {
  const circleMapping = {
    primary:
      "absolute text-main-sky2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
  };

  return (
    <FlexCenter className="w-full gap-4">
      <div className="w-[91px] h-[91px] relative">
          <div className="w-[91px] h-[91px] bg-sky-500 bg-opacity-20 absolute left-0 top-0 rounded-full"/>
          <Typography classname={[circleMapping[variant]].join("text-center")} variant={typoVariant}>
            {number}
         </Typography>
      </div>
      
      <FlexColumn className="justify-center">
          <Typography variant="heading3" classname="text-main-white">
              {title}
          </Typography>
      </FlexColumn>
  </FlexCenter>
  );
};
