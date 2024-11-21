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
import validationSchema from "@/validation-schemas/RegisterSchema";

import {
  ApartmentOutlined,
  InfoOutlined,
  MapOutlined,
} from "@mui/icons-material";

import FileField from "@/components/fields/FileField";
import FormField from "@/components/fields/FormField";
import SubmitButton from "@/components/SubmitButton";

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
      <FormField
        name="company_name"
        label="Name"
        required
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        endIcon={<ApartmentOutlined />}
        id={""}
        type={"text"}
      />
      <FormField
        name="company_address"
        label="Address"
        required
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        endIcon={<MapOutlined />}
        id={""}
        type={"text"}
      />
      <FormField
        name="description"
        label="Description"
        required
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        endIcon={<InfoOutlined />}
        id={""}
        type={"text"}
      />

      <FileField />

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

      <SubmitButton label="Submit" loading={loading} />
    </Box>
  );
};

export default CompanyInfoClientPage;
