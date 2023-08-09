interface TypographyProps {
  children: React.ReactNode;
  variant?: "title" | "subtitle" | "body" | "caption";
}

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = "body",
}) => {
  const render = () => {
    switch (variant) {
      case "caption":
        return (
          <p
            style={{
              fontFamily: "futura-pt, sans-serif",
              fontWeight: 400,
              fontStyle: "italic",
              userSelect: "none",
            }}
          >
            {children}
          </p>
        );
      case "subtitle":
        return (
          <h3
            style={{
              fontFamily: "adelle-condensed, serif",
              fontWeight: 300,
              userSelect: "none",
            }}
          >
            {children}
          </h3>
        );
      case "title":
        return (
          <h1
            style={{
              fontFamily: "adelle-condensed, serif",
              fontWeight: 700,
              userSelect: "none",
            }}
          >
            {children}
          </h1>
        );
      case "body":
      default:
        return (
          <p
            style={{
              fontFamily: "futura-pt, sans-serif",
              fontWeight: 400,
              userSelect: "none",
            }}
          >
            {children}
          </p>
        );
    }
  };
  return render();
};

export default Typography;
