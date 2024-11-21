"use client";

import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import { Email } from "@mui/icons-material";

type Props = {
  name: string;
  label?: string;
  required?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function EmailField({
  name,
  label = "Email",
  required,
  value,
  onChange,
}: Props) {
  const isValidEmail =
    Boolean(value) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value || "");

  return (
    <Box sx={{ width: "100%", my: 2 }}>
      <TextField
        fullWidth
        id="email"
        name={name}
        label={label}
        variant="outlined"
        type="email"
        value={value}
        onChange={onChange}
        helperText={isValidEmail ? "Valid email" : "Please enter a valid email"}
        error={Boolean(value) && !isValidEmail}
        required={required}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <Email />
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
  );
}
