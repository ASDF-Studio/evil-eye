import { responsiveScreen } from "@/context";
import { FC } from "react";

export const Canvas = ({
  children,
  classname = "",
  containerClassName = "",
  bottomComp,
}) => {
  return (
    <div className={[classname, ""].join(" ")}>
      <div className={["", responsiveScreen, containerClassName].join(" ")}>
        {children}
      </div>
      {bottomComp && bottomComp}
    </div>
  );
};
