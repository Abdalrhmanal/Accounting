"use client";
import React, { useState } from "react";
import { Box, Button, Alert, CircularProgress } from "@mui/material";

import useLogin from "../hooks/login";
import ResetPasswordStepper from "@/components/stepper";
import AuthFormCaption from "@/components/AuthFormCaption";
import EmailField from "@/components/fields/EmailField";

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
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Submit"}
        </Button>
      </Box>
    </>
  );
};

export default ResetPasswordClientPage;
