/* eslint-disable no-irregular-whitespace */
import { Avatar, Grid, Link, Stack, Typography } from "@mui/material";
import { DEFAULT_BORDER_RADIUS } from "common/constants";
import RedesSociales from "./RedesSociales";

const FooterSection = () => {
  const PandaPayLogo = (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Avatar sx={{ height: 45, width: 45 }} />
      <Typography
        variant="h6"
        fontWeight="bold"
        component="span"
        color="background.paper"
      >
        PandaPay
      </Typography>
    </Stack>
  );

  const Texto = (
    <Typography variant="body2" color="background.paper">
      Descubre nuestras soluciones de cobro personalizadas y eficientes para tu
      negocio.
    </Typography>
  );

  const CompaniaInfo = (
    <Stack spacing={1}>
      <Typography variant="h6" color="background.paper">
        Sobre PandaPay
      </Typography>
      <Link variant="body2" color="background.paper">
        Métodos de Pago
      </Link>
      <Link variant="body2" sx={{ color: "background.paper" }}>
        Servicios
      </Link>
      <Link variant="body2" sx={{ color: "background.paper" }}>
        Testimonios
      </Link>
    </Stack>
  );

  const ContactanosInfo = (
    <Stack spacing={1}>
      <Typography variant="h6" color="background.paper">
        Contactanos
      </Typography>
      <Link variant="body2" color="background.paper">
        11-2544-2829
      </Link>
      <Link variant="body2" color="background.paper">
        hola@pandapay.com.ar
      </Link>
    </Stack>
  );

  const LegalesInfo = (
    <Stack spacing={1}>
      <Typography variant="h6" color="background.paper">
        Legales
      </Typography>
      <Link
        href="/pandapay-landingpage/files/TerminosYCondiciones-PandaPay.pdf"
        variant="body2"
        color="background.paper"
        target="_blank"
      >
        Términos y Condiciones
      </Link>
    </Stack>
  );

  return (
    <Grid
      container
      sx={{
        px: { xs: 5, md: 8, lg: 13, xl: 15 },
        pt: { xs: 5 },
        pb: 3,
        mt: 5,
        bgcolor: "primary.main",
        borderRadius: `0px ${DEFAULT_BORDER_RADIUS}px 0px 0px`,
      }}
      component="footer"
      columnSpacing={4}
    >
      <Grid item xs={12} md={6} lg={3} p={2}>
        <Stack spacing={1}>
          {PandaPayLogo}
          {Texto}
          <RedesSociales color="background.paper" />
        </Stack>
      </Grid>
      <Grid item xs={12} md={2} lg={3} p={2}>
        {CompaniaInfo}
      </Grid>
      <Grid item xs={12} md={2} lg={3} p={2}>
        {ContactanosInfo}
      </Grid>
      <Grid item xs={12} md={2} lg={3} p={2}>
        {LegalesInfo}
      </Grid>
      <Grid container item xs={12} md={9} lg={8} p={2} spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body2" color="background.paper">
            GRUPO PANDA SRL. (Pandapay) ofrece servicios de pago y no está
            autorizado por el Banco Central a operar como entidad financiera.
            Los fondos acreditados en cuentas de pago no constituyen depósitos
            en una entidad financiera ni están garantizados conforme legislación
            aplicable a depósitos en entidades financieras. Grupo Panda SRL es
            Proveedor de Servicios de Pago inscripto bajo el numero 34565 por
            Banco Central de la República Argentina. Pandapay es una marca
            registrada. Copyright 2024
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <a
            href="http://qr.afip.gob.ar/?qr=d2YUzYtCdAjiB7J-BeY8sQ,,"
            target="_F960AFIPInfo"
          >
            <img
              src="http://www.afip.gob.ar/images/f960/DATAWEB.jpg"
              height="150px"
              width="100px"
            />
          </a>
        </Grid>
      </Grid>
      <Grid item xs={12} mt={2}>
        <Typography
          variant="body2"
          color="background.paper"
          sx={{
            mt: 1,
            pt: 1,
            borderTop: (theme) => `2px solid ${theme.palette.background.paper}`,
            textAlign: "center",
          }}
        >
          Copyright @ 2024 PandaPay. Todos los Derechos Reservados.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FooterSection;
