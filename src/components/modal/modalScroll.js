import React from "react";

const ModalScroll = ({ children, className = "" }) => {
  return (
<div
className={`${className} h-auto max-h-[70vh] overflow-y-auto mb-3.5 scrollbar scrollbar-thumb-[#FFCE70] scrollbar-track-transparent scrollbar-corner-transparent sm:max-h-[75vh]`}
>
      {children}
    </div>
  );
};
export default ModalScroll;