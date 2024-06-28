import { Container, ContainerProps } from "@mui/material";
import React, { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<ContainerProps>;

const Section: React.FC<SectionProps> = ({ children, ...rest }) => {
  return (
    <Container
      component="section"
      sx={{
        width: 1,
        p: 3,
        my: { xs: 5, xl: 8 },
      }}
      {...rest}
    >
      {children}
    </Container>
  );
};

export default Section;
