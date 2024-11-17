import { Metadata } from 'next';
import React from 'react'
import CreateNewPasswordPage from './CreateNewPassword';

export const metadata: Metadata = {
    title: "Accounting  | Create New Password",
};
function CreateNewPassword() {
    return <CreateNewPasswordPage />
}

export default CreateNewPassword