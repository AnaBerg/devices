import { useState } from "react";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import { Typography } from "..";

interface AccordianProps {
  title: string;
  children: React.ReactNode;
}

const Accordian: React.FC<AccordianProps> = ({ children, title }) => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          paddingLeft: "15px",
          paddingRight: "15px",
          boxShadow: "0px 0px 10px 2px rgba(43,43,43,0.3)",
          borderRadius: "5px",
        }}
      >
        <div
          data-testid="accordian-header"
          onClick={() => setOpen((p) => !p)}
          style={{
            paddingTop: "10px",
            paddingBottom: "10px",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            borderBottom: open ? "1px solid #B2B2B2" : "",
          }}
        >
          <div style={{ flex: 1 }}>
            <Typography variant="title">{title}</Typography>
          </div>
          {open ? <ExpandLess /> : <ExpandMore />}
        </div>
        {open ? (
          <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
            {children}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Accordian;
