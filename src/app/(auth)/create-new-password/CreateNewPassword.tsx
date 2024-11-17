"use client";
import React, { useState } from 'react';
import { Box, Button, Typography, Alert, CircularProgress } from '@mui/material';
import FildeAuthPassword from '@/components/filde-auth/filed-password';

const CreateNewPasswordPage: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        // التحقق من تطابق كلمتي المرور
        if (password !== confirmPassword) {
            setError("Passwords do not match. Please try again.");
            setLoading(false);
            return;
        }

        try {
            // Simulate API call for creating a new password
            console.log("New password submitted");

            // Example: simulate API call delay
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // Assuming password creation is successful
            setSuccess("Your password has been successfully created.");
        } catch (err) {
            setError("An error occurred while creating your password. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box 
            component="form" 
            onSubmit={handleSubmit} 
        >
            <Typography variant="h5" component="h1" align="center" gutterBottom>
                Create New Password
            </Typography>

            {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    {error}
                </Alert>
            )}
            
            {success && (
                <Alert severity="success" sx={{ mb: 2 }}>
                    {success}
                </Alert>
            )}

            <FildeAuthPassword
                name="new-password" 
                required 
                onChange={(e) => setPassword(e.target.value)} 
            />

            <FildeAuthPassword 
                name="confirm-password" 
                required 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                helperText="Confirm your password"
            />

            <Button 
                type="submit" 
                variant="contained" 
                color="primary" 
                fullWidth 
                sx={{ mt: 2 }}
                disabled={loading}
            >
                {loading ? <CircularProgress size={24} /> : "Set New Password"}
            </Button>
        </Box>
    );
}

export default CreateNewPasswordPage;
