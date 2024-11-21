"use client";

import React, { useState } from "react";
import { Box, TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

type Props = {
  name: string;
  label?: string;
  required?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  helperText?: string | false | undefined;
  error?: boolean;
};

export default function PasswordField({
  name,
  label = "Password",
  required,
  value,
  onChange,
  onBlur,
  helperText,
  error,
}: Props) {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box sx={{ width: "100%", my: 2 }}>
      <TextField
        fullWidth
        id="password"
        name={name}
        label={label}
        variant="outlined"
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        helperText={helperText}
        error={error}
        required={required}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={handleTogglePasswordVisibility}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
  );
}
