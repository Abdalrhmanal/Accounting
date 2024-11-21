import { Step, StepLabel, Stepper, Typography } from "@mui/material";
import React from "react";

type Props = {
  step: number;
};
export default function ResetPasswordStepper({ step = 0 }: Props) {
  const steps = [
    "Email verification",
    "Security authentication",
    "Change password",
  ];

  return (
    <Stepper activeStep={step} alternativeLabel>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>
            <Typography variant="body1"> {label}</Typography>
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
