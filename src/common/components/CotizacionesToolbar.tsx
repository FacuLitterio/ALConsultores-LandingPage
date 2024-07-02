import { Divider, Grid, Stack, Typography } from "@mui/material";
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

  return (
    <AnimatedGrid
      container
      animate={{
        x: ["0%", "-100%"],
        transition: {
          ease: "linear",
          duration: 15,
          repeat: Infinity,
        },
      }}
    >
      {cotizaciones.map((item, idx) => (
        <>
          <Grid item xs key={idx}>
            <Stack spacing={0.5}>
              <Stack alignItems="center" spacing={0.5}>
                <Typography
                  variant="body2"
                  color="primary.main"
                  fontWeight={500}
                >
                  USD {item.nombre.toUpperCase()}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
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
