import React, { useState, useEffect } from "react";
import { FlexCenter } from "../layout";
import { LoadingDesign1, LoadingDesign2 } from "../logo";

export const LoadingFrame = ({ className = "", prayerProgress, ...rest }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 20;
        console.log("New Progress:", newProgress);
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      prayerProgress();
    }
  }, [progress]);

  return (
    <FlexCenter
      className={[
        "w-[100%] max-w-[336px] h-[20px] bg-backgroundColor-brand-yellow shadow-buttonShadow2 border-[2px] border-border-loading",
        className,
      ].join(" ")}
    >
      <LoadingDesign1 />
      <div className="relative w-full h-full border border-border-loading">
        <div
          className="h-full bg-backgroundColor-dark-yellow"
          style={{ width: `${progress}%` }}
        />
      </div>
      <LoadingDesign2 />
    </FlexCenter>
  );
};
