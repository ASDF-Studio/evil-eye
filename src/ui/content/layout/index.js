import { Typography } from "@/components/typography";

export const H2title = ({ children, className = "" }) => {
  return (
    <div className="pt-[30px]">
      <h2
        className={[
          "text-color-brand-yellow2 font-roman text-[22px] font-normal tracking-[-2.2px] uppercase drop-shadow-3xl",
          className,
        ].join(" ")}
      >
        {children}
      </h2>
    </div>
  );
};

export const DesciptionTexth13 = ({ children, className = "" }) => {
  return (
    <div className="pt-6">
      <Typography
        variant="h13"
        classname={["text-color-brand-yellow2 text-opacity-80", className].join(
          " "
        )}
      >
        {children}
      </Typography>
    </div>
  );
};

export const DesciptionList = ({ children, className = "" }) => {
  return (
    <div className="pt-6">
      <Typography
        variant="h13"
        classname={[
          "text-color-brand-yellow2 text-opacity-80 text-start",
          className,
        ].join(" ")}
      >
        <ul className="list-disc pl-6">{children}</ul>
      </Typography>
    </div>
  );
};
