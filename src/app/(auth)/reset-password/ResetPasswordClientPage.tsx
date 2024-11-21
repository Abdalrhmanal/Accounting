"use client";
import React, { useState } from "react";
import { Box, Alert } from "@mui/material";

import useLogin from "../hooks/login";
import ResetPasswordStepper from "@/components/ResetPasswordStepper";
import AuthFormCaption from "@/components/AuthFormCaption";
import EmailField from "@/components/fields/EmailField";
import SubmitButton from "@/components/SubmitButton";

const ResetPasswordClientPage: React.FC = () => {
  //TODO: send mail to user with link to reset password
  const { login, loading, error } = useLogin();

  const [email, setEmail] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //TODO
    try {
      // await login({ email, password });
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <>
      {/* Stepper  */}
      <ResetPasswordStepper step={0} />

      {/* Form caption  */}
      <AuthFormCaption
        caption="Reset Password"
        image={{
          src: "/images/imgAuth/reset-password/reset-password-1.svg",
          alt: "",
        }}
      />

      <Box component="form" onSubmit={handleSubmit}>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <EmailField
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id={""}
        />

        <SubmitButton label="Submit" loading={loading} />
      </Box>
    </>
  );
};

export default ResetPasswordClientPage;
