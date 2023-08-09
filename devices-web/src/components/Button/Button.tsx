interface ButtonProps {
  children: React.ReactNode;
  variant?: "contained" | "outline" | "text";
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "contained",
  onClick,
  type,
}) => {
  const style = () => {
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
    <button type={type} style={style()} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
