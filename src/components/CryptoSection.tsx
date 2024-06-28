import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Bitcoin from "common/assets/Crypto/Ellipse 21.png";
import Ethereum from "common/assets/Crypto/Ellipse 22.png";
import Solana from "common/assets/Crypto/Ellipse 23.png";
import Cardano from "common/assets/Crypto/Ellipse 24.png";
import Render from "common/assets/Crypto/Ellipse 25.png";
import Dogecoin from "common/assets/Crypto/Ellipse 26.png";
import AnimatedSubtitle from "common/components/AnimatedSubtitle";
import AnimatedTitle from "common/components/AnimatedTitle";
import AnimateWhileView from "common/components/AnimateWhileView";
import CustomChip from "common/components/Chip";
import Section from "common/components/Section";
import { DEFAULT_SPACING } from "common/constants";

const CRYPTOS_INFO = [
  {
    id: 1,
    title: "Bitcoin",
    description:
      "La criptomoneda líder a nivel mundial, conocida por su papel pionero en el mercado digital de activos. Su sólida infraestructura y alta liquidez la convierten en un activo de referencia para inversores y traders.",
    imageUrl: Bitcoin,
  },
  {
    id: 2,
    title: "Ethereum",
    description:
      "Ethereum (ETH) es líder en contratos inteligentes y aplicaciones descentralizadas (DApps), brindando innovación en la economía digital. Analizamos su rendimiento, capitalización y tendencias para ayudarte en decisiones de inversión criptográfica.",
    imageUrl: Ethereum,
  },
  {
    id: 3,
    title: "Solana",
    description:
      "Solana (SOL) destaca por su escalabilidad y rapidez blockchain, ideal para DApps y DeFi. Proporcionamos análisis actualizados de Solana, su crecimiento, capitalización y oportunidades de inversión en criptomonedas.",
    imageUrl: Solana,
  },
  {
    id: 4,
    title: "Cardano",
    description:
      "Cardano (ADA) es una blockchain de tercera generación con enfoque en la sostenibilidad, seguridad y escalabilidad. Su plataforma busca facilitar contratos inteligentes y aplicaciones descentralizadas (DApps) de alta fiabilidad.",
    imageUrl: Cardano,
  },
  {
    id: 5,
    title: "Render",
    description:
      "Render (RNDR) es una criptomoneda que alimenta la plataforma Render Network, enfocada en la computación distribuida y el rendimiento de gráficos. Proporciona servicios de renderizado de alta calidad para proyectos de diseño, animación y visualización 3D.",
    imageUrl: Render,
  },
  {
    id: 6,
    title: "Dogecoin",
    description:
      "Dogecoin (DOGE) es una criptomoneda popular basada en un meme de Internet. Aunque nació como una broma, ha ganado atención y uso en diversas comunidades, destacando por su diseño amigable y su activa comunidad de seguidores.",
    imageUrl: Dogecoin,
  },
];

const CryptoSection = () => {
  return (
    <Section id="Crypto">
      <Grid container spacing={DEFAULT_SPACING} justifyContent="center">
        <Grid item xs={12} md={8} lg={6}>
          <Stack spacing={2} alignItems="center" width={1} maxWidth={500}>
            <CustomChip label="Criptomonedas" sx={{ maxWidth: 180 }} />
            <AnimatedTitle
              text="Inversiones en Criptomonedas"
              primaryWord="Criptomonedas"
              textAlign="center"
            />
            <AnimatedSubtitle
              color="text.disabled"
              textAlign="center"
              text="Descubre el potencial de crecimiento y diversificación que ofrecen las criptomonedas. Nuestros expertos te ayudarán a navegar este emocionante mercado y a tomar decisiones informadas para maximizar tus inversiones en crypto."
            />
          </Stack>
        </Grid>
        <Grid
          container
          item
          justifyContent="center"
          alignItems="center"
          spacing={3}
          rowSpacing={5}
        >
          {CRYPTOS_INFO.map((info) => (
            <Grid item key={info.id} xs={12} md={6} lg={4}>
              <AnimateWhileView>
                <Card sx={{ maxWidth: 345, height: 250 }} elevation={5}>
                  <CardHeader
                    avatar={
                      <Avatar
                        src={info.imageUrl}
                        sx={{ height: 50, width: 50 }}
                        aria-label="recipe"
                      />
                    }
                    title={info.title}
                    titleTypographyProps={{
                      fontWeight: "bold",
                      fontSize: ".9rem",
                    }}
                  />

                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {info.description}
                    </Typography>
                  </CardContent>
                </Card>
              </AnimateWhileView>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Section>
  );
};

export default CryptoSection;
