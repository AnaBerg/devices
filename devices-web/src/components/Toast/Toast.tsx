import { Snackbar, Alert } from "@mui/material";

interface ToastProps {
  type: "error" | "success";
  onClose: (event?: React.SyntheticEvent | Event, reason?: string) => void;
  message: string;
  open?: boolean;
}

const Toast: React.FC<ToastProps> = ({
  type,
  onClose,
  message,
  open = false,
}) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <Alert severity={type} sx={{ width: "100%" }} onClose={onClose}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
