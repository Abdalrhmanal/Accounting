"use client";

import React, { useState } from "react";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import IFormField from "@/interfaces/IFormField";
import FormField from "./FormField";

export default function PasswordField({
  name,
  id,
  label = "Password",
  required,
  value,
  onChange,
  onBlur,
  helperText,
  error,
  sx,
}: IFormField) {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <FormField
      name={name}
      id={id}
      label={label}
      type="email"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      helperText={helperText}
      error={error}
      required={required}
      endIcon={
        <InputAdornment position="end">
          <IconButton
            aria-label={showPassword ? "Hide password" : "Show password"}
            onClick={handleTogglePasswordVisibility}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      }
      sx={sx}
    />
  );
}
