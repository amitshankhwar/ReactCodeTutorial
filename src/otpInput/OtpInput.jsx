import React, { useRef, useState } from "react";
import "./OtpInput.css";

const OtpInput = ({ length = 6, onChange }) => {
  const inputsRef = useRef([]);
  const [otp, setOtp] = useState(Array(length).fill(""));

  const handleInputChange = (e, index) => {
    const value = e.target.value;

    // Allow only single digit numbers (0-9)
    if (value && (value < "0" || value > "9")) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    onChange && onChange(newOtp.join(""));

    if (value && index < length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = ""; // Clear the current field
      setOtp(newOtp);

      if (index > 0) {
        inputsRef.current[index - 1].focus();
      }
    }
  };

  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData("text").slice(0, length);
    const newOtp = [...otp];

    for (let i = 0; i < pasteData.length; i++) {
      if (i < length && pasteData[i] >= "0" && pasteData[i] <= "9") {
        newOtp[i] = pasteData[i];
      }
    }

    setOtp(newOtp);
    onChange && onChange(newOtp.join(""));

    if (inputsRef.current[length - 1]) {
      inputsRef.current[length - 1].focus();
    }
  };

  console.log(inputsRef);

  return (
    <div className="otp-container" onPaste={handlePaste}>
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          value={digit}
          ref={(el) => (inputsRef.current[index] = el)}
          onChange={(e) => handleInputChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="otp-input"
        />
      ))}
    </div>
  );
};

export default OtpInput;
