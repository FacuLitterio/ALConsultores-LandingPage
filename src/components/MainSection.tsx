import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Hidden,
  Stack,
  Typography,
} from "@mui/material";
import GradientBg from "common/assets/Main/GradientBg.svg";
import MainImage from "common/assets/Main/MainImage.jpeg";
import PandaLogo from "common/assets/Main/PandaPay_Logo 1.png";
import AnimateWhileView from "common/components/AnimateWhileView";
import AnimatedSubtitle from "common/components/AnimatedSubtitle";
import AnimatedTitle from "common/components/AnimatedTitle";
import CustomChip from "common/components/Chip";
import ImageContainer from "common/components/ImageContainer";
import onClickWhatsApp from "common/helpers/onClickWhatsApp";

const APPBAR_OFFSET = "60px";

const MainSection = () => {
  return (
    <Box
      id="Inicio"
      component="section"
      sx={{
        minHeight: "100vh",
        mt: APPBAR_OFFSET,
        px: { xs: 4, sm: 12, md: 18, xl: 25 },
        py: { xs: 5, xl: 15 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          minHeight: "120vh",
          objectFit: "cover",
          zIndex: 1,
          backgroundImage: `url(${GradientBg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={5}
        sx={{ position: "relative", zIndex: 3 }}
      >
        <Grid item xs={12} md={7}>
          <Stack spacing={2} p={2}>
            <AnimateWhileView>
              <CustomChip label="Asesoría Financiera" />
            </AnimateWhileView>
            <AnimatedTitle
              sx={{
                color: "white",
                xs: { fontSize: ".6rem", color: "#FFFFF" },
                md: { fontSize: "2rem" },
                lg: { fontSize: "3rem" },
              }}
              variant="h3"
              text="Transformando Sueños Financieros en Realidad"
            />
            <AnimatedSubtitle
              variant="subtitle2"
              color="#FFFFFF"
              sx={{ fontSize: ".9rem" }}
              text={`Ofrecemos asesoramiento financiero experto y personalizado para guiar tu trayectoria con confianza. Combinamos análisis de mercado avanzados con nuestra vasta experiencia en inversiones para brindarte una dirección clara y segura. Nuestro compromiso es maximizar tu potencial de crecimiento y asegurar tu éxito financiero a largo plazo.`}
            />
            <AnimateWhileView>
              <Stack spacing={1} direction="row">
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    maxWidth: 200,
                    textTransform: "none",
                    borderRadius: 20,
                  }}
                  endIcon={<ArrowForwardIcon />}
                  onClick={onClickWhatsApp}
                >
                  Comenzá Ahora
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    maxWidth: 200,
                    borderRadius: 20,
                    color: "background.paper",
                    borderColor: "background.paper",
                  }}
                  endIcon={<ArrowForwardIcon />}
                  onClick={onClickWhatsApp}
                >
                  Aprendé Más
                </Button>
              </Stack>
            </AnimateWhileView>
            <Stack spacing={1} sx={{ pt: 2 }}>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                fontWeight="bolder"
              >
                Respaldados por Numerosas Empresas
              </Typography>
              <Stack direction="row">
                <Avatar src={PandaLogo} sx={{ height: 50, width: 50 }} />
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Hidden mdDown>
          <Grid item md={5}>
            <ImageContainer
              src={MainImage}
              sx={{
                maxHeight: 400,
                maxWidth: 350,
              }}
            />
          </Grid>
        </Hidden>
      </Grid>
    </Box>
  );
};

export default MainSection;
