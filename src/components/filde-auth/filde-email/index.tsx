"use client";
import React from 'react';
import { Box, TextField } from '@mui/material';

interface FildeAuthEmailProps {
    name: string;
    required?: boolean;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FildeAuthEmail: React.FC<FildeAuthEmailProps> = ({ name, required, value, onChange }) => {
    const isValidEmail = Boolean(value) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value || '');

    return (
        <Box sx={{ width: '100%', my: 2 }}>
            <TextField
                fullWidth
                id="email"
                name={name}
                label="Email"
                variant="outlined"
                type="email"
                value={value}
                onChange={onChange}
                helperText={isValidEmail ? 'Valid email' : 'Please enter a valid email'}
                error={Boolean(value) && !isValidEmail}
                required={required}
            />
        </Box>
    );
};

export default FildeAuthEmail;
