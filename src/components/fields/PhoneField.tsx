"use client";

import React from "react";
import { Box, InputAdornment, TextField } from "@mui/material";
import { Phone } from "@mui/icons-material";

type Props = {
  name: string;
  label?: string;
  required?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function PhoneField({
  name,
  label = "Phone",
  required,
  value,
  onChange,
}: Props) {
  const isValidPhone = Boolean(value) && /^[+]?[\d\s()-]+$/.test(value || "");

  return (
    <Box sx={{ width: "100%", my: 2 }}>
      <TextField
        fullWidth
        id="phone"
        name={name}
        label={label}
        variant="outlined"
        type="tel"
        value={value}
        onChange={onChange}
        helperText={
          isValidPhone
            ? "Valid phone number"
            : "Please enter a valid phone number"
        }
        error={Boolean(value) && !isValidPhone}
        required={required}
        slotProps={{
          input: {
            startAdornment: <InputAdornment position="start">+</InputAdornment>,
            endAdornment: (
              <InputAdornment position="end">
                <Phone />
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
  );
}
