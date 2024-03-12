import { FlexCenter } from "../layout";
import { Typography } from "../typography";

export const Tag = ({
  children,
  className = "",
  typoVariant = "buttonPrimary",
  typoClass = "text-main-sky2",
  ...rest
}) => {
  return (
    <button className={["flex"].join(" ")} {...rest}>
      <FlexCenter
        className={[
          "p-2 border border-main-sky2 border-opacity-20 gap-2", className
        ].join(" ")}
      >
        <Typography classname={typoClass} variant={typoVariant}>
          {children}
        </Typography>
      </FlexCenter>
    </button>
  );
};