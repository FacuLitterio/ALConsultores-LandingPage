/* eslint-disable no-irregular-whitespace */
import { Avatar, Grid, Link, Stack, Typography } from "@mui/material";
import Logo from "common/assets/LogoWhite.svg";
import { DEFAULT_BORDER_RADIUS } from "common/constants";
import RedesSociales from "./RedesSociales";

const FooterSection = () => {
  const LogoAvatar = <Avatar src={Logo} sx={{ width: 150 }} />;

  const Texto = (
    <Typography variant="body2" color="background.paper">
      Descubre nuestros servicios financieros
    </Typography>
  );

  const CompaniaInfo = (
    <Stack spacing={1}>
      <Typography variant="h6" color="background.paper">
        Sobre Nosotros
      </Typography>
      <Link variant="body2" sx={{ color: "background.paper" }}>
        Servicios
      </Link>
      <Link variant="body2" color="background.paper">
        Invierte
      </Link>
      <Link variant="body2" sx={{ color: "background.paper" }}>
        Crypto
      </Link>
      <Link variant="body2" sx={{ color: "background.paper" }}>
        Contacto
      </Link>
    </Stack>
  );

  const ContactanosInfo = (
    <Stack spacing={1}>
      <Typography variant="h6" color="background.paper">
        Contactanos
      </Typography>
      <Link variant="body2" color="background.paper">
        11-5525-6272
      </Link>
      <Link variant="body2" color="background.paper">
        info@alconsultores.com.ar
      </Link>
    </Stack>
  );

  return (
    <Grid
      id="Contacto"
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
          {LogoAvatar}
          {Texto}
          <RedesSociales color="white" />
        </Stack>
      </Grid>
      <Grid item xs={12} md={2} lg={3} p={2}>
        {CompaniaInfo}
      </Grid>
      <Grid item xs={12} md={2} lg={3} p={2}>
        {ContactanosInfo}
      </Grid>

      <Grid container item xs={12} md={9} lg={8} p={2} spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body2" color="background.paper">
            El contenido de este sitio es solo para información y no debe
            considerarse como asesoramiento legal, fiscal, de inversión,
            financiero o de otro tipo. Nada aquí constituye una solicitud,
            recomendación, oferta o respaldo por parte de AL Consultores o
            cualquier proveedor de servicios terceros para la compra o venta de
            valores u otros instrumentos financieros en cualquier jurisdicción.
            Toda la información en este sitio es de carácter general y no
            considera las circunstancias individuales de ninguna persona o
            entidad. AL Consultores no actúa como fiduciario respecto al uso del
            sitio web o su contenido. Es responsabilidad del usuario evaluar los
            méritos y riesgos antes de tomar decisiones basadas en la
            información proporcionada. Al acceder al sitio web, usted acepta
            liberar de responsabilidad a AL Consultores, sus afiliados y
            cualquier proveedor de servicios terceros por cualquier reclamación
            de daños que pudiera surgir de decisiones basadas en la información
            o contenido del sitio.
          </Typography>
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
          Copyright @ 2024 AL Consultores. Todos los Derechos Reservados.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FooterSection;
