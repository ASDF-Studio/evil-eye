import { FlexBetween } from "@/components/layout";
import { Typography } from "@/components/typography";

export default function PrayerHistory({ date, recepientName, payment }) {
  // Function to format the date string
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <>
      <div className="w-auto sm:w-[400px] h-[75px] ">
        <div className="w-[118px] h-[28px] text-center  bg-color-brand-yellow">
          <Typography variant="h15" classname=" text-color-brand-txt  ">
            {formatDate(date)}
          </Typography>
        </div>
        <FlexBetween className="pt-2 w-auto sm:w-[400px]">
          <Typography
            variant="h13"
            classname=" text-color-brand-yellow2 opacity-80"
          >
            1 Evil Eye Remedy for {recepientName}
          </Typography>
          <Typography variant="h14" classname=" text-color-brand-yellow2 ">
            ${payment}
          </Typography>
        </FlexBetween>
        <Typography
          variant="h13"
          classname="hover:underline text-color-brand-yellow2"
        >
          View Invoice
        </Typography>
      </div>
      <hr className="w-auto sm:w-[400px] -mt-5 border-color-brand-op"></hr>
    </>
  );
}
