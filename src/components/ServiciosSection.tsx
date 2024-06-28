import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import {
  Avatar,
  Grid,
  Hidden,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ServiciosImage from "common/assets/Servicios/ServiciosImage.png";
import AnimatedSubtitle from "common/components/AnimatedSubtitle";
import AnimatedTitle from "common/components/AnimatedTitle";
import CustomChip from "common/components/Chip";
import ImageContainer from "common/components/ImageContainer";
import Section from "common/components/Section";
import { DEFAULT_SPACING } from "common/constants";
import { motion } from "framer-motion";

const SERVICIOS = [
  {
    id: 1,
    title: "Meta Financiera",
    description:
      "Identificamos tus metas financieras para ofrecerte una estrategia de inversión alineada a tus propósitos a corto y largo plazo.",
    icon: <SpaOutlinedIcon sx={{ fontSize: 30 }} />,
  },
  {
    id: 2,
    title: "Tiempo de Inversión",
    description:
      "Definimos el horizonte temporal de tus inversiones, ajustando el portafolio para maximizar tus rendimientos en el tiempo deseado.",
    icon: <HistoryOutlinedIcon sx={{ fontSize: 30 }} />,
  },
  {
    id: 3,
    title: "Tolerancia al Riesgo",
    description:
      "Evaluamos tu tolerancia al riesgo y diseñamos un plan que balancee seguridad y rentabilidad según tus preferencias.",
    icon: <LocalFireDepartmentOutlinedIcon sx={{ fontSize: 30 }} />,
  },
  {
    id: 4,
    title: "Asesoría Personalizada",
    description:
      "Te ofrecemos una guía financiera adaptada a tus necesidades específicas, ayudándote a alcanzar tus metas con estrategias de inversión personalizadas y seguimiento continuo.",
    icon: <AutoAwesomeOutlinedIcon sx={{ fontSize: 30 }} />,
  },
];

const AnimatedListItem = motion(ListItem);

const ServiciosSection = () => {
  const theme = useTheme();
  const isSmDevice = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Section id="Servicios">
      <Grid container spacing={DEFAULT_SPACING} justifyContent="center" p={2}>
        <Hidden mdDown>
          <Grid item md={6}>
            <ImageContainer
              src={ServiciosImage}
              sx={{
                borderRadius: "50px 50px 50% 50%",
                maxHeight: 530,
                minWidth: 480,
              }}
            />
          </Grid>
        </Hidden>

        <Grid item xs={12} sm={8} md={6}>
          <Stack spacing={2}>
            <CustomChip label="Potenciá tu Patrimonio" sx={{ maxWidth: 180 }} />
            <AnimatedTitle
              text="Carteras de Inversión con Seguimiento Personalizado"
              primaryWord="Seguimiento Personalizado"
            />
            <List
              disablePadding
              sx={{ width: "100%", maxWidth: 460, bgcolor: "background.paper" }}
            >
              {SERVICIOS.map((servicio, i) => (
                <AnimatedListItem
                  key={servicio.id}
                  sx={{ px: 0 }}
                  initial={{ opacity: 0, left: 10 }}
                  whileInView={{ opacity: 1, left: 0 }}
                  transition={{ delay: 0.15 * i }}
                >
                  <Stack
                    spacing={2}
                    direction={isSmDevice ? "row" : "column"}
                    sx={{
                      textAlign: { xs: "center", md: "initial" },
                      alignItems: { xs: "center", md: "flex-start" },
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar
                        sx={{
                          width: 60,
                          height: 60,
                          bgcolor: "background.paper",
                          color: "primary.main",
                          border: (theme) =>
                            `1px solid ${theme.palette.primary.main}`,
                        }}
                      >
                        {servicio.icon}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <AnimatedSubtitle
                          marginBottom={0}
                          text={servicio.title}
                          color="text.primary"
                          fontWeight="bolder"
                        />
                      }
                      secondary={
                        <AnimatedSubtitle
                          text={servicio.description}
                          color="text.disabled"
                        />
                      }
                    />
                  </Stack>
                </AnimatedListItem>
              ))}
            </List>
          </Stack>
        </Grid>
      </Grid>
    </Section>
  );
};

export default ServiciosSection;
