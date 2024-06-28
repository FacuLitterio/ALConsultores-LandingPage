import { PaletteMode, ThemeOptions } from "@mui/material";
import { grey } from "@mui/material/colors";

const commonTokens = () => ({
  primary: {
    main: "#2B5F60",
    light: "#E0ECEC",
  },
});

const getTheme = (mode: PaletteMode): ThemeOptions => {
  return {
    components: {
      MuiButton: {
        defaultProps: {
          sx: {
            textTransform: "none",
            borderRadius: 20,
          },
          disableElevation: true,
        },
      },
    },
    palette: {
      mode,
      ...commonTokens(),
      ...(mode === "light"
        ? {
            // palette values for light mode
            text: {
              primary: "#444444",
              secondary: grey[800],
            },
          }
        : {
            // palette values for dark mode
            text: {
              primary: "#fff",
              secondary: grey[500],
            },
          }),
    },
  };
};

export default getTheme;
