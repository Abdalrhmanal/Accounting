"use client";
import React, { useState } from 'react';
import { Box, TextField, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface FildeAuthPasswordProps {
    name: string;
    required?: boolean;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    helperText?: string;
}

const FildeAuthPassword: React.FC<FildeAuthPasswordProps> = ({ name, required, value, onChange, helperText }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <Box sx={{ width: '100%', my: 2 }}>
            <TextField
                fullWidth
                id={name}
                name={name}
                label="Password"
                variant="outlined"
                type={showPassword ? 'text' : 'password'}
                value={value}
                onChange={onChange}
                helperText={helperText}
                error={Boolean(value ?? '') && (value?.length ?? 0) < 8}
                InputProps={{
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
                }}
                required={required}
            />
        </Box>
    );
};

export default FildeAuthPassword;
