import { Typography } from "@mui/material";
import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
    title: "Accounting | Register",
};

const RegisterPage = () => {
    return (
        <>
            <Typography component="h1" variant="h4">Register</Typography>
        </>
    );
}

export default RegisterPage;