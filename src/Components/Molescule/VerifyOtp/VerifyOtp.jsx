import React, { useState } from "react";
import OTPInput from "react-otp-input";
import axios from "axios";
import { Button } from "Components/ui/button";
import { verifyApi } from "lib/api/user-api";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(values) {
    setLoading(true);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-4">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span className="mx-2">-</span>}
          renderInput={(props) => <input {...props} />}
          inputStyle={{
            width: "2rem",
            height: "2.5rem",
            border: "1px solid #d1d5db",
            borderRadius: "0.375rem",
            textAlign: "center",
            fontSize: "1.125rem",
            outline: "none",
            focus: {
              outline: "none",
              ring: "2px solid #3b82f6",
            },
          }}
        />
        <Button type="submit" disabled={loading} className="mt-6 px-6 py-2">
          {loading ? "Verifying..." : "Verify OTP"}
        </Button>
      </form>
      {error && <p className="text-red-500 mt-8">{error}</p>}
    </div>
  );
};

export default VerifyOtp;
