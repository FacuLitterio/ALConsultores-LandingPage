import { Chip, ChipProps } from "@mui/material";
import React from "react";

const CustomChip: React.FC<ChipProps> = ({ label, sx }) => {
  return (
    <Chip
      label={label}
      sx={{
        border: "none",
        backgroundColor: "primary.light",
        color: "primary.main",
        fontWeight: "bolder",
        ...sx,
      }}
    />
  );
};

export default CustomChip;
