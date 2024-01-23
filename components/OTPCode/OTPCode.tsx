import React, {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  KeyboardEvent,
} from "react";

interface OTPCodeProps {
  length?: number;
  onOtpSubmit?: (otp: string) => void;
}

const OTPCode: React.FC<OTPCodeProps> = ({
  length = 4,
  onOtpSubmit = () => {},
}) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    // allow only one input
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // submit trigger
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) onOtpSubmit(combinedOtp);

    // Move to next input if current field is filled
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleClick = (index: number) => {
    inputRefs.current[index].setSelectionRange(1, 1);

    // optional
    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      // Move focus to the previous input field on backspace
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className=" flex items-center justify-center gap-2">
      {otp.map((value, index) => (
        <input
          key={index}
          type="text"
          ref={(input) =>
            (inputRefs.current[index] = input as HTMLInputElement)
          }
          value={value}
          onChange={(e) => handleChange(index, e)}
          onClick={() => handleClick(index)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          className=" w-[40px] h-[40px] m-[5px] text-center font-bold md:text-base text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-activeColor text-primaryColor"
        />
      ))}
    </div>
  );
};

export default OTPCode;
