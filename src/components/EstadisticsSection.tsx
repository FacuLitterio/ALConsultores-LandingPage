import { Box, Grid, Stack, Typography } from "@mui/material";

const EstadisticsSection = () => {
  return (
    <Box sx={{ width: 1, p: 5, mt: { xs: 5, md: 10 } }}>
      <Box
        sx={{
          minHeight: 300,
          width: 1,
          borderRadius: 6,
          bgcolor: "primary.main",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid container justifyContent="center" alignItems="center" p={3}>
          <Grid item xs={12} sm={6} md={3.5}>
            <Stack spacing={0.5} alignItems="center">
              <Typography variant="h1" color="background.paper">
                +150
              </Typography>
              <Typography variant="subtitle1" color="background.paper">
                Usuarios Satisfechos
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={3.5}>
            <Stack spacing={0.5} alignItems="center">
              <Typography variant="h1" color="background.paper">
                11%
              </Typography>
              <Typography variant="subtitle1" color="background.paper">
                Reembolso Beneficioso
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={3.5}>
            <Stack spacing={0.5} alignItems="center">
              <Typography variant="h1" color="background.paper">
                +500
              </Typography>
              <Typography variant="subtitle1" color="background.paper">
                Carteras Activas
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default EstadisticsSection;
