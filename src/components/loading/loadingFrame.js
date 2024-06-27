import React, { useState, useEffect } from "react";
import { FlexCenter } from "../layout";
import { LoadingDesign1, LoadingDesign2 } from "../logo";
import { useAppDispatch } from "@/hooks";
import { useRouter } from "next/router";

const TOTAL_DURATION = 90;

export const LoadingFrame = ({ className = "", prayerProgress, ...rest }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("evileye-prayer")) || {};
    let startTime = storedData.startTime || Date.now();
    if (!storedData.startTime) {
      storedData.startTime = startTime;
      localStorage.setItem("evileye-prayer", JSON.stringify(storedData));
    }

    let interval;

    const updateProgress = () => {
      const currentTime = Date.now();
      const elapsedTime = (currentTime - startTime) / 1000;
      const newProgress = (elapsedTime / TOTAL_DURATION) * 100;

      if (newProgress >= 100) {
        setProgress(100);
        prayerProgress();
        clearInterval(interval);
        router.replace(router.pathname, undefined, { shallow: true });
      } else {
        setProgress(newProgress);
      }
    };

    updateProgress();

    interval = setInterval(updateProgress, 1000);

    return () => clearInterval(interval);
  }, [prayerProgress]);

  return (
    <FlexCenter
      className={[
        "w-[100%] max-w-[336px] h-[20px] bg-backgroundColor-brand-yellow shadow-buttonShadow2 border-[2px] border-border-loading",
        className,
      ].join(" ")}
      {...rest}
    >
      <LoadingDesign1 />
      <div className="relative w-full h-full border border-border-loading">
        <div
          className="h-full bg-backgroundColor-dark-yellow transition-all duration-1000"
          style={{ width: `${progress}%` }}
        />
      </div>
      <LoadingDesign2 />
    </FlexCenter>
  );
};

export default LoadingFrame;
