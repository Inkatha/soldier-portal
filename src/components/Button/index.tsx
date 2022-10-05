import { Button } from "@mui/material";
import { ReactNode } from "react";

type Variant = "text" | "outlined" | "contained" | undefined;
type ButtonStyle = "neutral" | "danger" | "info";
type Size = "small" | "medium" | "large" | undefined;

interface CustomButtonProps {
  variant: Variant;
  children: ReactNode;
  type: ButtonStyle;
  startIcon?: JSX.Element;
  size: Size;
}

const neutral = {
  backgroundColor: "#ECE7E7",
  color: "#4B4B4B",
  border: "1px solid #4B4B4B",
  fontFamily: "Roboto",
  width: "135px",
  "&:hover": { backgroundColor: "#F4F1F1", border: "1px solid #4B4B4B" },
};

const danger = {
  backgroundColor: "#F5E8E8",
  color: "#E44D4D",
  border: "1px solid #E44D4D",
  fontFamily: "Roboto",
  width: "135px",
  "&:hover": { backgroundColor: "#F4F1F1", border: "1px solid #E44D4D" },
};

const info = {
  backgroundColor: "#C2DEF9",
  color: "#002175",
  border: "1px solid #002175",
  fontFamily: "Roboto",
  width: "135px",
  "&:hover": { backgroundColor: "#EDF6FF", border: "1px solid #002175" },
};

const getButtonType = (type: ButtonStyle) => {
  switch (type) {
    case "neutral":
      return neutral;
    case "danger":
      return danger;
    case "info":
      return info;
    default:
      return neutral;
  }
};

const CustomButton: React.FC<CustomButtonProps> = ({
  variant,
  children,
  type,
  startIcon,
  size,
}) => {
  return (
    <Button
      sx={getButtonType(type)}
      variant={variant}
      startIcon={startIcon}
      size={size}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
