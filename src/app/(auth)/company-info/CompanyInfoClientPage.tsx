"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Alert,
  CircularProgress,
  FilledInput,
} from "@mui/material";
import useLogin from "../hooks/login";
import validationSchema from "@/validation-schemas/RegisterSchema";
import FiledText from "@/components/filed-text";

import {
  ApartmentOutlined,
  FileUpload,
  InfoOutlined,
  MapOutlined,
} from "@mui/icons-material";
import InputFileUpload from "@/components/field-file";

const CompanyInfoClientPage: React.FC = () => {
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
        Information about company
      </Typography>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      <FiledText
        name="company_name"
        label="Name"
        required
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        endIcon={<ApartmentOutlined />}
      />
      <FiledText
        name="company_address"
        label="Address"
        required
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        endIcon={<MapOutlined />}
      />
      <FiledText
        name="description"
        label="Description"
        required
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        endIcon={<InfoOutlined />}
      />

      <InputFileUpload />

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
  );
};

export default CompanyInfoClientPage;
