"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Alert,
  CircularProgress,
} from "@mui/material";
import useLogin from "../hooks/login";
import EmailField from "@/components/fields/EmailField";
import PhoneField from "@/components/fields/PhoneField";
import validationSchema from "@/validation-schemas/RegisterSchema";
import SubmitButton from "@/components/SubmitButton";
const RegisterClientPage: React.FC = () => {
  const { login, loading, error } = useLogin();

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      //   await login({ email, password });
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h5" component="h1" align="center" gutterBottom>
        Register
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <PhoneField
        name="phone"
        required
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        id={""}
      />

      <EmailField
        name="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id={""}
      />

      <SubmitButton label="register" loading={loading} />
    </Box>
  );
};

export default RegisterClientPage;
