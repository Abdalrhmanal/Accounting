"use client";
import React, { useState } from "react";
import { Box, Button, Alert, CircularProgress } from "@mui/material";

import ResetPasswordStepper from "@/components/ResetPasswordStepper";
import AuthFormCaption from "@/components/AuthFormCaption";
import PasswordField from "@/components/fields/PasswordField";
import SubmitButton from "@/components/SubmitButton";

const CreateNewPasswordClientPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatched, setPasswordMatched] = useState(true);

  const handleMatchingPassword = (value: string) => {
    if (password !== value) {
      setError("Passwords do not match. Please try again.");
      setSuccess("");
      setPasswordMatched(false);
      return;
    }

    setError("");
    setPasswordMatched(true);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // Simulate API call for creating a new password
      console.log("New password submitted");

      // Example: simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Assuming password creation is successful
      setSuccess("Your password has been successfully created.");
    } catch (err) {
      setError(
        "An error occurred while creating your password. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Stepper  */}
      <ResetPasswordStepper step={2} />

      {/* Form caption  */}
      <AuthFormCaption
        caption="New Password"
        image={{
          src: "/images/imgAuth/reset-password/reset-password-3.svg",
          alt: "reset-password-icons",
        }}
      />

      <Box component="form" onSubmit={handleSubmit}>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {success}
          </Alert>
        )}

        <PasswordField
          name="new-password"
          label="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
          id={""}
        />

        <PasswordField
          name="confirm-password"
          label="Confirm Password"
          required
          onChange={(e) => handleMatchingPassword(e.target.value)}
          id={""}
        />

        <SubmitButton
          label="Resend code"
          loading={loading}
          disabled={loading || !passwordMatched}
        />
      </Box>
    </>
  );
};

export default CreateNewPasswordClientPage;
