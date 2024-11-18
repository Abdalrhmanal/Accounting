import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'


type Props = {
    step?: number;
}
export default function ResetPasswordStepper({ step = 0 }: Props) {

    const steps = [
        'Email verification',
        'Security authentication',
        'Change password',
    ];

    return <Stepper activeStep={step} alternativeLabel>
        {steps.map((label) => (
            <Step key={label} >
                <StepLabel sx={{
                    fontSize: '3px'
                }} >{label}</StepLabel>
            </Step>
        ))}
    </Stepper>
}
