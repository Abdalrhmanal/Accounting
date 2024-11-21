"use client";

import { Email } from "@mui/icons-material";
import IFormField from "@/interfaces/IFormField";
import FormField from "./FormField";

export default function EmailField({
  name,
  id,
  label = "Email",
  required,
  value,
  onChange,
  onBlur,
  helperText,
  error,
  sx,
}: IFormField) {
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
      endIcon={<Email />}
      sx={sx}
    />
  );
}
