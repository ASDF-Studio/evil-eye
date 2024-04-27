import { Typography } from "@/components/typography";

const variantMapping = {
  name: "Please enter your name.",
  email: "Please enter a valid email address.",
  phone: "Phone numbder is invalid.",
  message: "Please enter your message to us",
};

export const InlineError = ({ message }) => {
  return (
    <div className="pt-2">
      <Typography variant="h12" classname="text-red-600">
        {variantMapping[message]}
      </Typography>
    </div>
  );
};
