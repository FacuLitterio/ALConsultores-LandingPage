import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Rating,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Subject1 from "common/assets/Testimonios/Subject1.png";
import Subject2 from "common/assets/Testimonios/Subject2.png";
import Subject3 from "common/assets/Testimonios/Subject3.jpeg";
import AnimatedSubtitle from "common/components/AnimatedSubtitle";
import AnimatedTitle from "common/components/AnimatedTitle";
import { DEFAULT_BORDER_RADIUS } from "common/constants";
import Carousel from "react-material-ui-carousel";

const TESTIMONIOS = [
  {
    id: 1,
    name: "Matias Sebastian",
    subtitle: "Automata Minds",
    rating: 4,
    url: Subject3,
    description:
      "❝Desde que comenzamos a trabajar con la empresa de asesoría financiera, hemos visto un crecimiento notable en nuestras inversiones. Su enfoque personalizado y soluciones a medida realmente han marcado la diferencia para nuestro portafolio.❞",
  },
  {
    id: 2,
    name: "Manuela Castillo",
    subtitle: "SushiClub",
    url: Subject2,
    rating: 5,
    description:
      "❝La empresa de asesoría financiera ha simplificado enormemente nuestro proceso de inversión. La facilidad de uso de su plataforma y la seguridad que ofrecen en cada transacción nos han brindado tranquilidad y confianza en nuestras decisiones financieras diarias.❞",
  },
  {
    id: 3,
    name: "Inés Prada",
    subtitle: "TributeNess Capital",
    rating: 5,
    url: Subject1,
    description:
      "❝¡Increíble servicio! Siempre que hemos tenido alguna consulta o requerimiento, el equipo de la empresa de asesoría financiera ha estado disponible y ha resuelto nuestras inquietudes de manera rápida y eficiente. Definitivamente los recomiendo.❞",
  },
];
const TestimoniosSection = () => {
  const rotateArray = (array: typeof TESTIMONIOS, step: number) => {
    const rotated = [...array];
    for (let i = 0; i < step; i++) {
      rotated.unshift(rotated.pop()!);
    }
    return rotated;
  };

  const theme = useTheme();
  const isXsDevice = useMediaQuery(theme.breakpoints.only("xs"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.only("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.only("md"));

  return (
    <Box
      id="Testimonios"
      sx={{
        width: 0.9,
        bgcolor: "primary.main",
        py: 5,
        mx: "auto",
        my: { xs: 5, lg: 10 },
        borderRadius: DEFAULT_BORDER_RADIUS,
      }}
    >
      <Stack alignItems="center" spacing={8}>
        <Stack spacing={2} alignItems="center" sx={{ maxWidth: 500, p: 2 }}>
          <AnimatedTitle
            variant="h4"
            fontSize="1.1rem"
            color="background.paper"
            text="Testimonios de Clientes"
            primaryWord=""
          />
          <AnimatedSubtitle
            paragraph
            fontSize=".9rem"
            textAlign="center"
            color="background.paper"
            text="Explora las experiencias y opiniones de nuestros clientes, quienes
            comparten cómo AL Consultores ha transformado y mejorado sus finanzas diarias."
          />
        </Stack>
        <Box sx={{ width: 1 }}>
          <Carousel animation="fade" autoPlay={true}>
            {TESTIMONIOS.map((_, i) => {
              const rotatedTestimonials = rotateArray(TESTIMONIOS, i);
              return (
                <Grid
                  container
                  sx={{
                    width: 1,
                    px: 6,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {rotatedTestimonials
                    .slice(
                      0,
                      isXsDevice || isSmallScreen ? 1 : isMediumScreen ? 2 : 3
                    )
                    .map((x) => (
                      <Grid
                        item
                        xs={12}
                        md={6}
                        lg={4}
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <Card
                          key={x.id}
                          sx={{ minHeight: 260, maxWidth: 350 }}
                          elevation={3}
                        >
                          <CardHeader
                            avatar={
                              <Avatar
                                src={x.url}
                                sx={{
                                  height: 60,
                                  width: 60,
                                  bgcolor: "primary.main",
                                }}
                                aria-label="recipe"
                              />
                            }
                            title={
                              <Typography
                                variant="subtitle1"
                                color="text.primary"
                                fontWeight={600}
                              >
                                {x.name}
                              </Typography>
                            }
                            subheader={
                              <Stack>
                                <Typography
                                  variant="subtitle2"
                                  color="text.disabled"
                                >
                                  {x.subtitle}
                                </Typography>
                                <Rating size="small" value={x.rating} />
                              </Stack>
                            }
                          />
                          <CardContent>
                            <Typography variant="body2" color="text.secondary">
                              {x.description}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                </Grid>
              );
            })}
          </Carousel>
        </Box>
      </Stack>
    </Box>
  );
};

export default TestimoniosSection;
