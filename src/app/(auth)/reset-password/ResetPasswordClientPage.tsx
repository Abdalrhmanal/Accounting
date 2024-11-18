"use client";
import React, { useState } from 'react';
import { Box, Button, Typography, Alert, CircularProgress, Stepper } from '@mui/material';
import FildeAuthPassword from '@/components/filde-auth/filed-password';
import FildeAuthEmail from '@/components/filde-auth/filde-email';
import useLogin from '../hooks/login';
import ResetPasswordStepper from '@/components/stepper';
import Image from 'next/image';
const ResetPasswordClientPage: React.FC = () => {

    const { login, loading, error } = useLogin();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            await login({ email, password });
        } catch (err) {
            console.error("Login error:", err);
        }
    };

    return (
        <>
            {/* Stepper  */}
            <ResetPasswordStepper />

            {/* section icon  */}
            <Box component={'div'}
                display={'flex'}
                justifyContent="center"
                alignItems="center"
                flexDirection={'column'}
                gap={2}
                mt={1}
                sx={{
                    // background: 'red'
                }}
            >
                <Image height={100} width={100}
                    src="/images/imgAuth/reset-password/reset-password-1.svg"
                    alt="reset-password-icon"
                />
                <Typography variant="h5" component="h1" align="center" gutterBottom>
                    Reset Password
                </Typography>
            </Box>

            <Box
                component="form"
                onSubmit={handleSubmit}
            >


                {error && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        {error}
                    </Alert>
                )}

                <FildeAuthEmail
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <FildeAuthPassword
                    name="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                    disabled={loading}
                >
                    {loading ? <CircularProgress size={24} /> : "Submit"}
                </Button>
            </Box>
        </>
    );
};

export default ResetPasswordClientPage;
