
import { Typography } from "@mui/material";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Accounting  | Forgot Password",
};

const ConfirmResetPasswordPage = () => {
    return (
        <>
            <Typography component="h1" variant="h4">Forgot Your Password?</Typography>
            
        </>
    );
}

export default ConfirmResetPasswordPage;