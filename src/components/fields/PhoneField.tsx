"use client";

import React from "react";
import { InputAdornment } from "@mui/material";
import { Phone } from "@mui/icons-material";
import IFormField from "@/interfaces/IFormField";
import FormField from "./FormField";

export default function PhoneField({
  name,
  id,
  label = "Phone",
  required,
  value,
  onChange,
  onBlur,
  error,
  helperText,
  sx,
}: IFormField) {
  return (
    <FormField
      id={id}
      name={name}
      label={label}
      type="tel"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      helperText={helperText}
      required={required}
      startIcon={<InputAdornment position="start">+</InputAdornment>}
      endIcon={
        <InputAdornment position="end">
          <Phone />
        </InputAdornment>
      }
      sx={sx}
    />
  );
}
