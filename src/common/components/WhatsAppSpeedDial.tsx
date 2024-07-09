import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { SpeedDial, styled } from "@mui/material";
import onClickWhatsApp from "common/helpers/onClickWhatsApp";

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: "fixed",
  "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
    bottom: theme.spacing(5),
    right: theme.spacing(5),
  },
  "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

const WhatsAppSpeedDial = () => {
  return (
    <StyledSpeedDial
      ariaLabel="SpeedDial WhatsApp"
      icon={
        <WhatsAppIcon
          sx={{ color: (theme) => theme.palette.background.paper }}
        />
      }
      onClick={onClickWhatsApp}
      direction="up"
    />
  );
};

export default WhatsAppSpeedDial;
