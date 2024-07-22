import {
  Avatar,
  Box,
  Button,
  Hidden,
  LinearProgress,
  AppBar as MuiAppBar,
  Stack,
  Toolbar,
} from "@mui/material";
import LogoBlack from "common/assets/LogoBlack.svg";
import LogoWhite from "common/assets/LogoWhite.svg";
import { DEFAULT_ELEVATION } from "common/constants";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import CotizacionesToolbar from "./CotizacionesToolbar";

const pages = [
  { id: 1, label: "Inicio" },
  { id: 2, label: "Inversiones" },
  { id: 3, label: "Testimonios" },
  { id: 4, label: "Crypto" },
  { id: 5, label: "Contacto" },
];

const AnimatedBox = motion(Box);

const AppBar = () => {
  const [activeSection, setActiveSection] = useState("");
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

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
      // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const isInitialPosition = window.scrollY === 0;

  return (
    <>
      <MuiAppBar
        position="fixed"
        elevation={DEFAULT_ELEVATION}
        sx={{ bgcolor: isInitialPosition ? "transparent" : "background.paper" }}
      >
        <Toolbar>
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{ cursor: "pointer" }}
            onClick={() => handleScrollToSection("Inicio")}
          >
            <Avatar
              src={isInitialPosition ? LogoWhite : LogoBlack}
              sx={{ width: 150 }}
            />
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
                      color: isInitialPosition
                        ? "white"
                        : activeSection === page.label
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
                      backgroundColor: (theme) =>
                        isInitialPosition
                          ? "white"
                          : theme.palette.primary.main,
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
        <Hidden mdDown>
          <Stack>
            <CotizacionesToolbar />
          </Stack>
        </Hidden>
        {!isInitialPosition && (
          <LinearProgress variant="determinate" value={hookedYPostion * 100} />
        )}
      </MuiAppBar>
    </>
  );
};

export default AppBar;
