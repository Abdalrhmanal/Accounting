import { Button, CircularProgress } from "@mui/material";

type Props = {
  label: string;
  loading?: boolean;
  disabled?: boolean;
};
/**
 * A SubmitButton is a customized Button for submitting forms.
 * It provides a spinner when the component is in a loading state.
 * The component is disabled when it is in a loading or disabled state.
 * @prop {boolean} label Whether to display the label of the button
 * @prop {boolean} loading Whether the button is in a loading state
 * @prop {boolean} disabled Whether the button is disabled
 * @returns {ReactElement} The SubmitButton component
 */
export default function SubmitButton({
  label,
  loading = false,
  disabled = false,
}: Props) {
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      fullWidth
      sx={{ mt: 2 }}
      disabled={loading || disabled}
    >
      {loading ? <CircularProgress size={24} /> : label}
    </Button>
  );
}
