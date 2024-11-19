import { Metadata } from "next";
import React from "react";
import ChangePasswordClientPage from "./ChangePasswordClientPage";

export const metadata: Metadata = {
  title: "Accounting  | Change Password",
};
function ChangePassword() {
  return <ChangePasswordClientPage />;
}

export default ChangePassword;
