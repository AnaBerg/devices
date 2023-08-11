import { CircularProgress } from "@mui/material";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "contained" | "outline" | "text";
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "contained",
  onClick,
  type,
  loading = false,
  disabled = false,
}) => {
  const style = (): React.CSSProperties => {
    switch (variant) {
      case "text":
        return {
          cursor: "pointer",
          border: "none",
          backgroundColor: "transparent",
          fontFamily: "futura-pt, sans-serif",
          fontWeight: 700,
          letterSpacing: 0.5,
          textTransform: "uppercase",
          color: "#1F3B87",
          padding: "10px",
        };
      case "outline":
        return {
          backgroundColor: "#FFFFFF",
          border: "1px solid #F9EA31",
          fontFamily: "futura-pt, sans-serif",
          fontWeight: 700,
          letterSpacing: 0.5,
          textTransform: "uppercase",
          padding: "10px",
          borderRadius: "5px",
          cursor: "pointer",
        };
      case "contained":
      default:
        return {
          backgroundColor: "#1F3B87",
          color: "#FFFFFF",
          border: "none",
          fontFamily: "futura-pt, sans-serif",
          fontWeight: 700,
          letterSpacing: 0.5,
          textTransform: "uppercase",
          padding: "10px",
          borderRadius: "5px",
          cursor: "pointer",
        };
    }
  };

  return (
    <button
      disabled={disabled || loading}
      type={type}
      style={style()}
      onClick={onClick}
    >
      {loading ? (
        <CircularProgress data-testid="loading-spinner" size={20} />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
