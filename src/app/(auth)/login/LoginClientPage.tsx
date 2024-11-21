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
import PasswordField from "@/components/fields/PasswordField";
import SubmitButton from "@/components/SubmitButton";

const LoginClientPage: React.FC = () => {
  const { login, loading, error } = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await login({ email, password });
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h5" component="h1" align="center" gutterBottom>
        Login
      </Typography>

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
        sx={{ my: 2 }}
      />
      <PasswordField
        name="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id={""}
      />

      {/* Submit button  */}
      <SubmitButton label="Login" loading={loading} />
    </Box>
  );
};

export default LoginClientPage;
