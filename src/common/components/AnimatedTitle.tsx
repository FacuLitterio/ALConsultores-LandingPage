import { Typography, TypographyProps, styled, useTheme } from "@mui/material";
import splitString from "common/helpers/splitString";
import { motion } from "framer-motion";
import React from "react";

type AnimatedTitleProps = {
  text: string;
  primaryWord?: string;
  showDecorationBar?: boolean;
} & TypographyProps;

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

const AnimatedTypography = motion(Typography);

const DecorationBar = styled("span")(({ theme }) => ({
  height: 4,
  width: 40,
  backgroundColor: theme.palette.primary.main,
  position: "absolute",
  left: -60,
  top: "50%",
}));

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
  text,
  primaryWord,
  showDecorationBar = false,
  ...rest
}) => {
  const { variant = "h4", color = "text.primary", fontWeight = 600 } = rest;
  const textChars = splitString(text);
  const theme = useTheme();

  const primaryWordIndices: boolean[] = Array(textChars.length).fill(false);
  if (primaryWord) {
    const primaryWordLower = primaryWord.toLowerCase();
    const textLower = text.toLowerCase();

    let startIndex = 0;
    while (
      (startIndex = textLower.indexOf(primaryWordLower, startIndex)) !== -1
    ) {
      for (let i = 0; i < primaryWord.length; i++) {
        primaryWordIndices[startIndex + i] = true;
      }
      startIndex += primaryWord.length;
    }
  }

  return (
    <AnimatedTypography
      initial="hidden"
      whileInView="reveal"
      transition={{ staggerChildren: 0.02 }}
      variant={variant}
      color={color}
      fontWeight={fontWeight}
      sx={{ position: "relative" }}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...(rest as any)}
    >
      {showDecorationBar && <DecorationBar />}
      {textChars.map((char, i) => {
        return (
          <motion.span
            key={i}
            transition={{ duration: 0.5 }}
            variants={charVariants}
            style={{
              color: primaryWordIndices[i]
                ? theme.palette.primary.main
                : undefined,
            }}
          >
            {char}
          </motion.span>
        );
      })}
    </AnimatedTypography>
  );
};

export default AnimatedTitle;
