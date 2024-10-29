import { Typography } from "@mui/material";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Accounting  | Invite User",
};

const InviteUser = () => {
    return (
        <>
            <Typography component="h1" variant="h4">Invite User</Typography>
        </>
    );
}

export default InviteUser;