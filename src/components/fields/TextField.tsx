"use client";

import React from "react";
import {
  InputAdornment,
  SxProps,
  TextField as MuiTextField,
  Theme,
} from "@mui/material";

type Props = {
  name: string;
  label?: string;
  required?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  helperText?: string | undefined;
  error?: boolean;
  endIcon?: React.ReactNode;
  sx?: SxProps<Theme>;
};

export default function TextField({
  name,
  label = "Text",
  required,
  value,
  onChange,
  helperText,
  error,
  endIcon,
  sx,
}: Props) {
  return (
    <MuiTextField
      sx={sx}
      fullWidth
      id={name}
      name={name}
      label={label}
      variant="outlined"
      type="text"
      value={value}
      onChange={onChange}
      helperText={helperText}
      error={error}
      required={required}
      InputProps={{
        endAdornment: endIcon ? (
          <InputAdornment position="end">{endIcon}</InputAdornment>
        ) : undefined,
      }}
    />
  );
}
