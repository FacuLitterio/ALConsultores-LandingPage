import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton, Stack } from "@mui/material";
import React from "react";

const LINKEDIN_URL = "";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=100069109435089";
const INSTAGRAM_URL = "https://www.instagram.com/alconsultores_economicos/";

const RedesSociales: React.FC<{ color?: string }> = (props) => {
  const { color = "text.primary" } = props;
  return (
    <Stack direction="row" spacing={1}>
      <IconButton
        onClick={() => window.open(FACEBOOK_URL, "_blank")}
        size="small"
        sx={{
          color,
        }}
      >
        <FacebookIcon sx={{ fontSize: "1.5rem" }} />
      </IconButton>
      <IconButton
        onClick={() => window.open(INSTAGRAM_URL, "_blank")}
        size="small"
        sx={{
          color,
        }}
      >
        <InstagramIcon sx={{ fontSize: "1.5rem" }} />
      </IconButton>
      <IconButton
        size="small"
        onClick={() => window.open(LINKEDIN_URL, "_blank")}
        sx={{
          color,
        }}
      >
        <LinkedInIcon sx={{ fontSize: "1.5rem" }} />
      </IconButton>
    </Stack>
  );
};

export default RedesSociales;
