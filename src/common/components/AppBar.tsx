import {
  Box,
  Button,
  LinearProgress,
  AppBar as MuiAppBar,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { DEFAULT_ELEVATION } from "common/constants";
import { motion, useScroll, useSpring } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const pages = [
  { id: 1, label: "Inicio" },
  { id: 2, label: "Servicios" },
  { id: 3, label: "Invierte" },
  { id: 4, label: "Crypto" },
  { id: 5, label: "Contacto" },
];

const AnimatedBox = motion(Box);

const AppBar = () => {
  const [activeSection, setActiveSection] = useState("");
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const handleClickIniciarSesion = useCallback(() => {}, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [hookedYPostion, setHookedYPosition] = useState(0);
  useEffect(() => {
    scaleX.onChange((v) => setHookedYPosition(v));
  }, [scaleX, scrollYProgress]);

  useEffect(() => {
    pages.forEach((page, index) => {
      sectionsRef.current[index] = document.getElementById(page.label);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const yOffset = -75;
    const element = document.getElementById(sectionId)!;
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const variants = {
    active: {
      scaleX: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
        mass: 0.5,
        restSpeed: 0.5,
      },
    },
    inactive: {
      scaleX: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
        mass: 0.5,
        restSpeed: 0.5,
      },
    },
  };

  return (
    <>
      <MuiAppBar
        position="fixed"
        elevation={DEFAULT_ELEVATION}
        sx={{ bgcolor: "background.paper" }}
      >
        <Toolbar>
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{ cursor: "pointer" }}
            onClick={() => handleScrollToSection("Inicio")}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              component="span"
              color="text.primary"
            >
              AL Consultores
            </Typography>
          </Stack>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Stack direction="row" spacing={2}>
              {pages.map((page) => (
                <Box key={page.id} sx={{ position: "relative" }}>
                  <Button
                    sx={{
                      textTransform: "none",
                      color:
                        activeSection === page.label
                          ? "primary.main"
                          : "text.primary",
                    }}
                    onClick={() => {
                      handleScrollToSection(page.label);
                    }}
                  >
                    {page.label}
                  </Button>
                  <AnimatedBox
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "3px",
                      backgroundColor: (theme) => theme.palette.primary.main,
                      transformOrigin: "center",
                    }}
                    variants={variants}
                    animate={
                      activeSection === page.label ? "active" : "inactive"
                    }
                    initial={false}
                  />
                </Box>
              ))}
            </Stack>
          </Box>
        </Toolbar>
        <LinearProgress variant="determinate" value={hookedYPostion * 100} />
      </MuiAppBar>
    </>
  );
};

export default AppBar;
