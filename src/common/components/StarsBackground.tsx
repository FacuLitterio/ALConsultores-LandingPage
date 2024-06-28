import { Box } from "@mui/material";
import { keyframes, styled, useTheme } from "@mui/material/styles";
import { DEFAULT_BORDER_RADIUS } from "common/constants";
import React, { PropsWithChildren } from "react";

const generateBoxShadow = (numStars: number): string => {
  let boxShadowValue = `${Math.random() * 2000}px ${
    Math.random() * 2000
  }px #2B5F60`;
  for (let i = 1; i < numStars; i++) {
    boxShadowValue += `, ${Math.random() * 2000}px ${
      Math.random() * 2000
    }px #2B5F60`;
  }
  return boxShadowValue;
};

const shadowsSmall = generateBoxShadow(700);
const shadowsMedium = generateBoxShadow(200);
const shadowsBig = generateBoxShadow(100);

const Background = styled(Box)({
  height: "100%",
  width: "100%",
  backgroundColor: "transparent",
  overflow: "hidden",
  position: "relative",
});

const animStar = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
`;

interface StarLayerProps {
  size: number;
  boxShadow: string;
  animationDuration: number;
}

const StarLayer = styled("div")<StarLayerProps>(
  ({ size, boxShadow, animationDuration }) => ({
    width: `${size}px`,
    height: `${size}px`,
    background: "transparent",
    boxShadow: boxShadow,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: DEFAULT_BORDER_RADIUS,
    zIndex: -1,
    animation: `${animStar} ${animationDuration}s linear infinite`,
    "&:after": {
      content: '""',
      position: "absolute",
      top: "2000px",
      width: `${size}px`,
      height: `${size}px`,
      background: "transparent",
      boxShadow: boxShadow,
    },
  })
);

const StarBackground: React.FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme();
  return (
    <Background>
      <StarLayer size={2} boxShadow={shadowsSmall} animationDuration={50} />
      <StarLayer size={6} boxShadow={shadowsMedium} animationDuration={100} />
      <StarLayer size={12} boxShadow={shadowsBig} animationDuration={150} />
      {children}
      <Box
        sx={{
          position: "absolute",
          bottom: -8,
          left: 0,
          right: 0,
          zIndex: -1,
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={theme.palette.primary.main}
            fill-opacity="1"
            d="M0,320L48,304C96,288,192,256,288,240C384,224,480,224,576,229.3C672,235,768,245,864,218.7C960,192,1056,128,1152,90.7C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </Box>
    </Background>
  );
};

export default StarBackground;
