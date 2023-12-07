import * as React from "react";
import Container from "@mui/material/Container";

export default function doubleContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <Container
        maxWidth="xl"
        sx={{
          color: "black",
        }}
      >
        {children}
      </Container>
    </Container>
  );
}
