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
import PasswordField from "@/components/fields/PasswordField";
import SubmitButton from "@/components/SubmitButton";

const CreatePasswordPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // Simulate API call or handle password creation logic here
      console.log("Password creation submitted");

      // Example: simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Assuming password creation is successful
      setSuccess("Your password has been created successfully!");
    } catch (err) {
      setError(
        "An error occurred while creating the password. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h5" component="h1" align="center" gutterBottom>
        Create New Password
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

      <EmailField name="email" required id={""} />

      <PasswordField name="password" required id={""} />

      <SubmitButton label="Create Password" loading={loading} />
    </Box>
  );
};

export default CreatePasswordPage;
