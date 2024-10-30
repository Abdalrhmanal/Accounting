
import { Typography } from "@mui/material";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Accounting  | Create NewPassword",
};

const CreateNewPasswordPage = () => {
    return (
        <>
          <Typography component="h1" variant="h4">Create NewPassword</Typography>
        </>
    );
}

export default CreateNewPasswordPage;