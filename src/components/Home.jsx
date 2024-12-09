import React from "react";
import OtpInput from "../otpInput/OtpInput";

const Home = () => {
  const handleOtpChange = (otp) => {
    console.log("Entered OTP:", otp);
  };

  return (
    <div style={{ marginTop: "50px", textAlign: "center" }}>
      <h2>Enter OTP</h2>
      <OtpInput length={6} onChange={handleOtpChange} />
    </div>
  );
};

export default Home;
