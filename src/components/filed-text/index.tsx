"use client";
import React from "react";
import { Box, InputAdornment, SxProps, TextField, Theme } from "@mui/material";

interface FiledTextProps {
  name: string;
  label: string;
  required?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  helperText?: string | false | undefined;
  error?: boolean;
  endIcon?: React.ReactNode;
  sx?: SxProps<Theme> | undefined;
}

const FiledText: React.FC<FiledTextProps> = ({
  name,
  label,
  required,
  value,
  onChange,
  onBlur,
  helperText,
  error,
  endIcon,
  sx,
}) => {
  return (
    <Box sx={{ width: "100%", my: 2 }}>
      <TextField
        fullWidth
        id={name}
        name={name}
        label={label}
        variant="outlined"
        type={"text"}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        //temp message for design purpose
        helperText={helperText}
        error={error}
        slotProps={{
          input: {
            endAdornment: endIcon ? (
              <InputAdornment position="end">{endIcon}</InputAdornment>
            ) : undefined,
          },
        }}
        required={required}
        sx={sx}
      />
    </Box>
  );
};

export default FiledText;
