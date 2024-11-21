"use client";
import React from "react";
import { Box, Button, Alert, CircularProgress } from "@mui/material";
import { useFormik } from "formik";

import AuthFormCaption from "@/components/AuthFormCaption";
import validationSchema from "@/validation-schemas/ChangePasswordSchema";
import PasswordField from "@/components/fields/PasswordField";

const ChangePasswordClientPage: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },

    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, setStatus }) => {
      setStatus(null); // Clear any previous status messages

      try {
        console.log("Submitted values:", values);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Success message
        setStatus({ success: "Your password has been successfully changed." });
        formik.resetForm();
      } catch (error) {
        // Error message
        setStatus({ error: "An error occurred. Please try again." });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <AuthFormCaption
        caption="Change Password"
        image={{
          src: "/images/imgAuth/reset-password/reset-password-3.svg",
          alt: "reset-password-icons",
        }}
      />

      <Box component="form" onSubmit={formik.handleSubmit}>
        {formik.status?.error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {formik.status.error}
          </Alert>
        )}

        {formik.status?.success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {formik.status.success}
          </Alert>
        )}

        <PasswordField
          name="currentPassword"
          label="Current Password"
          required
          value={formik.values.currentPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.currentPassword && !!formik.errors.currentPassword
          }
          helperText={
            formik.touched.currentPassword && formik.errors.currentPassword
          }
        />

        <PasswordField
          name="newPassword"
          label="New Password"
          required
          value={formik.values.newPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.newPassword && !!formik.errors.newPassword}
          helperText={formik.touched.newPassword && formik.errors.newPassword}
        />

        <PasswordField
          name="confirmNewPassword"
          label="New Password Confirmation"
          required
          value={formik.values.confirmNewPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.confirmNewPassword &&
            !!formik.errors.confirmNewPassword
          }
          helperText={
            formik.touched.confirmNewPassword &&
            formik.errors.confirmNewPassword
          }
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {formik.isSubmitting ? (
            <CircularProgress size={24} />
          ) : (
            "Change Password"
          )}
        </Button>
      </Box>
    </>
  );
};

export default ChangePasswordClientPage;
