"use client";
import React, { useState } from "react";
import { Box, TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface FildeAuthPasswordProps {
  name: string;
  label?: string;
  required?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  helperText?: string;
}

const FildeAuthPassword: React.FC<FildeAuthPasswordProps> = ({
  name,
  label = "Password",
  required,
  value,
  onChange,
  helperText,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const hasError = Boolean(value ?? "") && (value?.length ?? 0) < 8;

  return (
    <Box sx={{ width: "100%", my: 2 }}>
      <TextField
        fullWidth
        id={name}
        name={name}
        label={label}
        variant="outlined"
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        //temp message for design purpose
        helperText={
          hasError ? "the password must be at least 8 characters" : helperText
        }
        error={hasError}
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
        required={required}
      />
    </Box>
  );
};

export default FildeAuthPassword;
