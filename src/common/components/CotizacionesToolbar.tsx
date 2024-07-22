import { Box, Divider, Grid, Stack, styled, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Cotizacion = {
  moneda: string;
  casa: string;
  nombre: string;
  compra: number;
  venta: number;
  fechaActualizacion: string;
};

const RippleBox = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 8,
  height: 8,
  backgroundColor: "#44b700",
  borderRadius: "50%",
  boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    border: "1px solid currentColor",
    animation: "ripple 1.2s infinite ease-in-out",
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const AnimatedGrid = motion(Grid);

const CotizacionesToolbar = () => {
  const [cotizaciones, setCotizaciones] = useState<Cotizacion[]>([]);

  useEffect(() => {
    const getCotizaciones = async () => {
      try {
        const response = await fetch("/api", {
          mode: "no-cors",
        });
        const data = await response.json();
        const filteredCotizaciones = data.filter(
          (item: Cotizacion) => item.casa !== "contadoconliqui"
        );
        setCotizaciones(filteredCotizaciones);
      } catch (error) {
        console.error("ERROR: ", error);
      }
    };

    getCotizaciones();
  }, []);

  const isInitialPosition = window.scrollY === 0;

  return (
    <AnimatedGrid
      container
      animate={{
        x: ["0%", "-100%"],
        transition: {
          ease: "linear",
          duration: 25,
          repeat: Infinity,
        },
      }}
    >
      {cotizaciones.map((item, idx) => (
        <>
          <Grid item xs key={idx}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <RippleBox />
              <Typography
                variant="body2"
                sx={{ color: isInitialPosition ? "white" : "text.primary" }}
                fontWeight={600}
                fontSize={12}
              >
                {item.nombre}:
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: isInitialPosition ? "white" : "text.primary" }}
                color="text.secondary"
                fontSize={13}
                fontWeight={500}
              >
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(item.compra)}{" "}
                |{" "}
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(item.venta)}
              </Typography>
            </Stack>
          </Grid>
          {idx !== cotizaciones.length - 1 && (
            <Divider orientation="vertical" flexItem variant="middle" />
          )}
        </>
      ))}
    </AnimatedGrid>
  );
};

export default CotizacionesToolbar;
