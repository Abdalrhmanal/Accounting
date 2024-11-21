"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Alert,
  CircularProgress,
} from "@mui/material";
import EmailField from "@/components/fields/EmailField";
import SubmitButton from "@/components/SubmitButton";

const ForgotPasswordPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // Simulate API call for password reset request
      console.log("Forgot password form submitted");

      // Example: simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Assuming password reset request is successful
      setSuccess("A password reset link has been sent to your email.");
    } catch (err) {
      setError(
        "An error occurred while processing your request. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h5" component="h1" align="center" gutterBottom>
        Forgot Password
      </Typography>

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

      {/* استدعاء حقل البريد الإلكتروني */}
      <EmailField name="email" required id={""} />

      <SubmitButton label="Send Reset Link" loading={loading} />
    </Box>
  );
};

export default ForgotPasswordPage;
