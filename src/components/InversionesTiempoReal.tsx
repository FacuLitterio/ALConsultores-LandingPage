import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import InversionesTiempoRealImage from "common/assets/InversionesTiempoReal/Image.png";

const InversionesTiempoRealSection = () => {
  return (
    <Box sx={{ width: 1, p: 5 }} id="Invierte">
      <Box
        sx={{
          width: 1,
          borderRadius: 6,
          bgcolor: "primary.main",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          spacing={5}
          alignItems="center"
          justifyContent="center"
          p={2}
        >
          <Grid item xs={12} md={5}>
            <img src={InversionesTiempoRealImage} width="100%" />
          </Grid>
          <Grid item xs={12} md={5}>
            <Stack spacing={2.5}>
              <Typography variant="h2" color="background.paper">
                Tus Inversiones en Tiempo Real
              </Typography>
              <Typography variant="body1" color="background.paper">
                Descubre la evolución detallada y actualizada al instante de tus
                inversiones mediante nuestros gráficos interactivos. Accede a
                datos en tiempo real que te permiten analizar el rendimiento de
                manera precisa y tomar decisiones informadas para maximizar tus
                inversiones.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  textTransform: "none",
                  borderRadius: 20,
                  maxWidth: 150,
                  bgcolor: "background.paper",
                  color: "primary.main",
                }}
              >
                Saber Más
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default InversionesTiempoRealSection;
