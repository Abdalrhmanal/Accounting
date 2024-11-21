"use client";

import { TextField, InputAdornment } from "@mui/material";

import IFormField from "@/interfaces/IFormField";

export default function FormField({
  name,
  id,
  type,
  label,
  required,
  value,
  onChange,
  onBlur,
  helperText,
  error,
  startIcon,
  endIcon,
  sx,
}: IFormField) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      //dynamic
      id={id}
      name={name}
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      helperText={helperText}
      error={error}
      required={required}
      //default vertical margin
      sx={sx?.my ? sx : { ...sx, my: 2 }}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">{endIcon}</InputAdornment>
          ),
        },
      }}
    />
  );
}
