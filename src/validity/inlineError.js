import { Typography } from "@/components/typography";

const variantMapping = {
  name: "Please enter your name.",
  email: "Please enter a valid email address.",
  password: "Please enter a password.",
  phone: "Phone numbder is invalid.",
  message: "Please enter your message to us",
  otp: "Please enter a OTP.",
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
